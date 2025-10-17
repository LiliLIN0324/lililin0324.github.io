---
title: 🟣 Portfolio - Architectural and Urban Design 
author: Lili
date: 2025-10-11 06:50:00 +0900
categories: [design,architecture,urban planning]
tags: [design]
---

<!-- ---
title: Portfolio
author: Lili
date: 2025-10-11 06:50:00 +0900
categories: [design,architecture,urban planning]
tags: [design]
---

<div id="flipbook"></div>

<script src="{{'/assets/js/data/jquery-3.7.1.min.js' | relative_url }}"></script>
<script src="{{'/assets/js/data/turn.min.js' | relative_url }}"></script>
<script>
// 假设你有一个数组存储图片文件名，按数字排序
const portfolioFiles = [
'000.png',
'100.png','101.png',
'200.png','201.png',
'300.png','301.png',
'400.png','401.png',
'500.png','501.png',
'600.png','601.png',
'700.png','701.png',
'800.png','801.png',
'900.png','901.png',
'1000.png','1001.png',
'1100.png','1101.png',
'1200.png','1201.png',
'1300.png','1301.png',
'1400.png','1401.png',
'1500.png','1501.png',
'1600.png','1601.png',
'1700.png','1701.png',
'1800.png','1801.png',
'1900.png','1901.png',
'2000.png','2001.png',
'2100.png','2101.png',
'2200.png','2201.png',
'2300.png','2301.png',
'2400.png','2401.png',
'2500.png','2501.png',
'2600.png','2601.png',
'2700.png','2701.png',
'2800.png','2801.png',
'2900.png','2901.png',
'3000.png'
];

// 如果你以后图片多，可以用 Node.js 或 Jekyll 构建时生成这个数组
// 这里我们手动排序
portfolioFiles.sort((a,b) => {
  // 提取数字部分进行排序
  const numA = parseInt(a.match(/\d+/)[0]);
  const numB = parseInt(b.match(/\d+/)[0]);
  return numA - numB;
});

// 生成 flipbook 页面
portfolioFiles.forEach(file => {
  const div = `<div><img src="/assets/portfolio/${file}" style="width:100%;height:auto;"></div>`;
  $('#flipbook').append(div);
});

// 初始化翻书效果
$(document).ready(function() {
  $("#flipbook").turn({
      width: 800,
      height: 530,
      autoCenter: true,
      display: 'double'
  });
});
</script> -->


<div id="flipbook"></div>

<script src="{{ '/assets/js/data/jquery-3.7.1.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/data/turn.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/flipbook.js' | relative_url }}"></script>
