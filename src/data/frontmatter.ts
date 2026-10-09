/**
 * 极简 frontmatter 解析器 —— 只解析博客实际用到的 YAML 子集。
 *
 * 为什么不用 gray-matter：它在浏览器里会炸。`matter(string)` 内部会把字符串
 * 走 `toFile()` → `Buffer.from()`，而浏览器没有 `Buffer`，于是在模块顶层求值
 * 时抛 ReferenceError，整棵模块图挂掉、页面白屏（`vite build` 不执行代码，
 * 所以构建一直是绿的，看不出来）。
 *
 * 支持：
 *   key: value
 *   key: "value"        （单/双引号，支持 \" \' 转义）
 *   key: [a, b, c]      （行内数组）
 *   key:                （块状数组）
 *     - a
 *     - b
 *
 * 行首 `#` 为注释，空行忽略。未加引号的值按字符串原样返回（不做数字/布尔/
 * 日期推断）—— 这样 `date: 2026-09-18` 会稳定地是字符串，排序不会因时区漂移。
 */

export interface FrontmatterResult {
  data: Record<string, unknown>
  content: string
}

const FENCE = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/
const PAIR = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/
const LIST_ITEM = /^\s*-\s*(.*)$/
const BOM = 0xfeff

export function parseFrontmatter(md: string): FrontmatterResult {
  const stripped = md.charCodeAt(0) === BOM ? md.slice(1) : md
  const normalized = stripped.replace(/\r\n/g, '\n')
  const match = FENCE.exec(normalized)

  if (!match) return { data: {}, content: normalized }

  const data: Record<string, unknown> = {}
  let pendingKey: string | null = null

  for (const line of match[1].split('\n')) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue

    // 块状数组项，归属于上一个只写了 `key:` 的键
    const item = LIST_ITEM.exec(line)
    if (item && pendingKey) {
      const list = data[pendingKey] as string[]
      list.push(unquote(item[1]))
      continue
    }

    const pair = PAIR.exec(line)
    if (!pair) continue

    const [, key, rawValue] = pair
    const value = rawValue.trim()

    if (value === '') {
      // 可能是块状数组的开头；若后面没有 `- ` 项，就是个空数组
      pendingKey = key
      data[key] = []
      continue
    }

    pendingKey = null
    data[key] =
      value.startsWith('[') && value.endsWith(']')
        ? splitInlineArray(value.slice(1, -1))
        : unquote(value)
  }

  return { data, content: normalized.slice(match[0].length) }
}

function unquote(value: string): string {
  const v = value.trim()
  const quote = v[0]
  if (v.length >= 2 && (quote === '"' || quote === "'") && v.endsWith(quote)) {
    return v.slice(1, -1).replace(/\\(["'])/g, '$1')
  }
  return v
}

function splitInlineArray(inner: string): string[] {
  return inner
    .split(',')
    .map((part) => unquote(part))
    .filter((part) => part !== '')
}
