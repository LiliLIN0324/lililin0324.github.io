import React, { useState, useEffect, useRef } from "react";
import * as exifr from "exifr"; // EXIF 解析库，用于获取图片拍摄时间和 GPS 信息
import L from "leaflet"; // Leaflet 地图库
import "leaflet/dist/leaflet.css"; // Leaflet 样式
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// 覆盖 Leaflet 默认图标
const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// ---------------- 定义照片信息类型 ----------------
type PhotoInfo = {
  file: File;           // 原始文件对象
  time: Date | null;    // 拍摄时间
  lat?: number;         // 纬度（可选）
  lon?: number;         // 经度（可选）
  marker?: L.Marker;    // 对应地图上的 Marker 引用（可选）
  id: string;           // 唯一 ID，用于高亮和 DOM 定位
};

// ---------------- 主组件 ----------------
const PhotoMapPage: React.FC = () => {
  // 照片列表状态
  const [photos, setPhotos] = useState<PhotoInfo[]>([]);

  // 当前大图预览状态
  const [preview, setPreview] = useState<string | null>(null);

  // 当前高亮的照片 ID（点击卡片或 Marker 时更新）
  const [highlightId, setHighlightId] = useState<string | null>(null);

  // 地图容器 DOM 引用
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  // Leaflet 地图实例引用
  const mapRef = useRef<L.Map | null>(null);

  /* ================= 初始化地图 ================= */
  useEffect(() => {
    // 如果地图已经初始化过，直接返回
    if (!mapContainerRef.current || mapRef.current) return;

    // ---------- 创建底图 TileLayer ----------
    const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
      maxZoom: 19,
    });

    // ---------- 初始化地图 ----------
    mapRef.current = L.map(mapContainerRef.current, {
      center: [20, 0], // 初始中心经纬度
      zoom: 2,         // 初始缩放等级
      layers: [osm],   // 初始图层
    });

    // ---------- 添加控件 ----------
    L.control.scale({ imperial: false }).addTo(mapRef.current); // 比例尺
    L.control.zoom({ position: "bottomright" }).addTo(mapRef.current); // 缩放控件

    // 清理函数，组件卸载时销毁地图
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  /* ================= 上传照片 ================= */
  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const files: File[] = Array.from(fileList);
    const result: PhotoInfo[] = [];

    // ---------- 解析每张照片的 EXIF 信息 ----------
    for (const file of files) {
      try {
        const exif = await exifr.parse(file as Blob, { gps: true, tiff: true });
        result.push({
          file,
          time: exif?.DateTimeOriginal ? new Date(exif.DateTimeOriginal) : null,
          lat: exif?.latitude,
          lon: exif?.longitude,
          id: crypto.randomUUID(), // 生成唯一 ID
        });
      } catch {
        // 如果 EXIF 解析失败，时间设为 null
        result.push({ file, time: null, id: crypto.randomUUID() });
      }
    }

    // ---------- 按拍摄时间排序 ----------
    result.sort((a, b) => {
      if (!a.time) return 1;
      if (!b.time) return -1;
      return a.time.getTime() - b.time.getTime();
    });

    // ---------- 给有 GPS 的照片添加 Marker ----------
    result.forEach(p => {
      if (p.lat && p.lon && mapRef.current) {
        const marker = L.marker([p.lat, p.lon]).addTo(mapRef.current);

        // Marker 弹窗内容
        marker.bindPopup(`
        <div style="
            width:120px; 
            height:120px; 
            border-radius:8px; 
            overflow:hidden; 
            margin:0 auto;
        ">
            <img src="${URL.createObjectURL(p.file)}"
            style="width:100%; height:100%; object-fit:cover;"
            />
        </div>
        `, { minWidth: 0, maxWidth: 120, maxHeight: 120, className: "custom-popup" });

        // 点击 Marker → 高亮上方卡片，不直接弹大图
        marker.on("click", () => {
          setHighlightId(p.id);

          // ---------- 滚动上方卡片到可见位置 ----------
          const card = document.getElementById(p.id);
          card?.scrollIntoView({ behavior: "smooth", inline: "center" });
        });

        // 保存 Marker 引用到照片对象
        p.marker = marker;
      }
    });

    // ---------- 更新照片列表状态 ----------
    setPhotos(prev => [...prev, ...result]);
  };

  /* ================= 点击卡片 ================= */
  const handleCardClick = (p: PhotoInfo) => {
    // 如果照片有 GPS 且对应 Marker 存在 → 飞到地图并打开 Marker 弹窗
    if (p.lat && p.lon && p.marker && mapRef.current) {
      mapRef.current.flyTo([p.lat, p.lon], 16, { duration: 1.2 });
      p.marker.openPopup();
    }

    // 设置大图预览
    setPreview(URL.createObjectURL(p.file));

    // 高亮当前卡片
    setHighlightId(p.id);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", padding: 16 }}>
      {/* ---------- 上传按钮 ---------- */}
      <div style={{ marginBottom: 12 }}>
        <input type="file" accept="image/*" multiple onChange={handleFiles} />
      </div>

      {/* ---------- 地图区域 ---------- */}
      <div ref={mapContainerRef} style={{ flex: 1, borderRadius: 12, marginBottom: 12 }} />

      {/* ---------- 图片卡片列表 ---------- */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: 8,
          gap: 8,
          borderTop: "1px solid #ddd",
          background: "#fafafa",
        }}
      >
        {photos.map(p => {
          const thumb = URL.createObjectURL(p.file); // 缩略图
          const hasGPS = p.lat && p.lon;              // 是否有 GPS
          const isHighlight = highlightId === p.id;  // 是否高亮

          return (
            <div
              key={p.id}
              id={p.id} // 用于 Marker 点击滚动
              onClick={() => handleCardClick(p)}
              style={{
                minWidth: 100,
                cursor: "pointer",
                border: isHighlight ? "2px solid #3b82f6" : "1px solid #ccc",
                borderRadius: 6,
                padding: 4,
                background: "#fff",
                boxShadow: isHighlight ? "0 0 8px rgba(59,130,246,0.5)" : "none",
              }}
            >
              {/* 缩略图 */}
              <img
                src={thumb}
                style={{
                  width: "100%",
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 4,
                  border: hasGPS ? "1px solid #3b82f6" : "1px solid #ccc",
                }}
              />

              {/* 文件名 */}
                <div
                style={{
                    fontSize: 11,
                    marginTop: 4,
                    textAlign: "center",
                    lineHeight: 1.2,
                }}
                >
                {/* 文件名（去掉后缀，单行溢出，加粗） */}
                <div
                    style={{
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    }}
                >
                    {p.file.name.replace(/\.[^/.]+$/, "")}
                </div>

                {/* 拍摄时间（多行显示） */}
                {p.time && <div>{p.time.toLocaleString()}</div>}

                {/* GPS 信息（多行显示，如果没有GPS显示提示） */}
                {!hasGPS && <div>⛔ No GPS</div>}
                </div>


            </div>
          );
        })}
      </div>

      {/* ---------- 大图预览 ---------- */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <img
            src={preview}
            style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: 8 }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoMapPage;
