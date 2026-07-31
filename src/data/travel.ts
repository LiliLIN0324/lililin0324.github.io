export interface CityWalkEntry {
  city: string        // 城市名
  country: string     // 国家/地区
  date?: string       // 到访时间
  photo?: string      // 照片路径（不填则用占位渐变）
  note?: string       // 一句话感受
}

export const cityWalks: CityWalkEntry[] = [
  { city: '上海', country: '中国', date: '2024', note: '法租界的梧桐树影' },
  { city: '东京', country: '日本', date: '2025', note: '下北泽的午后散步' },
  { city: '首尔', country: '韩国', date: '2025', note: '汉江边的晚风与霓虹' },
  { city: '新加坡', country: '新加坡', date: '2026', note: '滨海湾的花园城市漫游' },
  { city: '明尼阿波利斯', country: '美国', date: '2025', note: '密西西比河畔的秋日' },
  { city: '剑桥', country: '英国', date: '2025', note: '康河上的撑船与学院回廊' },
  { city: '武汉', country: '中国', date: '2023', note: '东湖绿道与热干面的早晨' },
  { city: '香港', country: '中国', date: '2024', note: '中环半山扶梯的夜色' },
]
