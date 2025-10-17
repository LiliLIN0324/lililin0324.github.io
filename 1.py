# import os
# import re

# # 你项目的根目录
# root_dir = "E:\lili's website\lililin0324.github.io"

# # 收集所有图片文件
# image_extensions = (".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp")
# all_images = []
# for dirpath, _, filenames in os.walk(os.path.join(root_dir, "assets/img")):
#     for f in filenames:
#         if f.lower().endswith(image_extensions):
#             all_images.append(os.path.relpath(os.path.join(dirpath, f), root_dir))

# # 收集所有 Markdown 和 HTML 文件内容
# used_images = set()
# for dirpath, _, filenames in os.walk(root_dir):
#     for f in filenames:
#         if f.endswith((".md", ".html")):
#             with open(os.path.join(dirpath, f), encoding="utf-8") as file:
#                 content = file.read()
#                 for img in all_images:
#                     if img.replace("\\","/") in content:
#                         used_images.add(img)

# # 输出未使用的图片
# unused_images = set(all_images) - used_images
# print("未使用的图片：")
# for img in unused_images:
#     print(img)


import os
import re

root = "E:\lili's website\lililin0324.github.io"
layouts = [os.path.relpath(os.path.join(dp, f), root)
           for dp, _, files in os.walk(os.path.join(root, "_layouts"))
           for f in files if f.endswith(".html")]

includes = [os.path.relpath(os.path.join(dp, f), root)
            for dp, _, files in os.walk(os.path.join(root, "_includes"))
            for f in files if f.endswith(".html")]

# 扫描所有 HTML/MD 文件引用
used_files = set()
for dp, _, files in os.walk(root):
    for f in files:
        if f.endswith((".html", ".md")):
            path = os.path.join(dp, f)
            with open(path, encoding="utf-8") as file:
                content = file.read()
                for layout in layouts + includes:
                    if os.path.basename(layout) in content:
                        used_files.add(layout)

unused = set(layouts + includes) - used_files
print("未被引用的模板文件：")
for u in unused:
    print(u)

