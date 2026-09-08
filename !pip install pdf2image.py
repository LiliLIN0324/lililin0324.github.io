# from pdf2image import convert_from_path
# import os

# pdf_path = "D:\\D盘桌面\\22.pdf"
# output_dir = "D:\\D盘桌面\\22_output"

# os.makedirs(output_dir, exist_ok=True)

# # 转换 PDF
# pages = convert_from_path(
#     pdf_path,
#     dpi=200,
#     fmt="jpg"
# )

# # 保存每一页
# for i, page in enumerate(pages, start=1):
#     output_path = os.path.join(output_dir, f"{i:02d}.jpg")
#     page.save(output_path, "JPEG", quality=95)
#     print(f"已保存: {output_path}")

# print(f"转换完成，共 {len(pages)} 页")

from PIL import Image
from pathlib import Path

input_dir = Path("D:\\D盘桌面\\22_output")
output_dir = Path("D:\\D盘桌面\\22_jpg_rotated")

output_dir.mkdir(exist_ok=True)

for img_path in input_dir.glob("*.jpg"):
    img = Image.open(img_path)

    # 顺时针旋转 90°
    img = img.rotate(-90, expand=True)

    # 保存为 JPG，并压缩
    output_path = output_dir / img_path.name
    img.save(
        output_path,
        "JPEG",
        quality=75,
        optimize=True
    )

    print(f"{img_path.name} -> {output_path.name}")

print("全部处理完成！")