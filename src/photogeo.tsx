import React, { useState } from "react";
import * as exifr from "exifr";

type PhotoInfo = {
  file: File;
  time: Date | null;
  lat?: number;
  lon?: number;
};

// 组件主体
const SequentialEvents: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoInfo[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
// 处理文件上传
  const handleFiles = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = e.target.files;
    if (!fileList) return;
    // 转为数组并处理
    const files: File[] = Array.from(fileList);
    const result: PhotoInfo[] = [];
    // 逐个解析 EXIF 信息
    for (const file of files) {
      try {
        const exif = await exifr.parse(file as Blob, {
          gps: true,
          tiff: true,
        });
        // 提取时间和 GPS 信息
        result.push({
          file,
          time: exif?.DateTimeOriginal
            ? new Date(exif.DateTimeOriginal)
            : null,
          lat: exif?.latitude,
          lon: exif?.longitude,
        });
      } catch {
        result.push({ file, time: null });
      }
    }
    // 按时间排序
    result.sort((a, b) => {
      if (!a.time) return 1;
      if (!b.time) return -1;
      return a.time.getTime() - b.time.getTime();
    });
    // 更新状态
    setPhotos(result);
  };
  // 渲染部分
  return (
    <div style={{ padding: 24, maxWidth: 900 }}>
      <h3>📸 Photo Timeline</h3>
      {/* 文件上传 */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFiles}
      />
    
      {/* 时间序列 */}
      <div style={{ marginTop: 24 }}>
        {photos.map((p, i) => {
          const hasTime = !!p.time;
          const hasGPS = p.lat && p.lon;
          const thumb = URL.createObjectURL(p.file);
          // 渲染每张照片的信息卡片
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                padding: 12,
                marginBottom: 12,
                border: "1px solid #ddd",
                borderRadius: 8,
                background: hasTime ? "#fff" : "#f5f5f5",
                opacity: hasTime ? 1 : 0.6,
              }}
            >
              {/* 缩略图 */}
              <img
                src={thumb}
                onClick={() => setPreview(thumb)}
                style={{
                  width: 72,
                  height: 72,
                  objectFit: "cover",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              />

              {/* 信息 */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "#888" }}>
                  {p.file.name}
                </div>

                <div style={{ fontWeight: 600 }}>
                  {p.time
                    ? p.time.toLocaleString()
                    : "⛔ No timestamp"}
                </div>
                {/*GPS details */}
                <div style={{ fontSize: 13, color: "#555" }}>
                  {hasGPS
                    ? `📍 ${p.lat!.toFixed(5)}, ${p.lon!.toFixed(5)}`
                    : "No GPS info"}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 大图预览 */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <img
            src={preview}
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              borderRadius: 8,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SequentialEvents;
