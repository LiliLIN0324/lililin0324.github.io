/**
 * Blog —— 一个完全独立的内容源，跟作品集（projects.ts）互不干扰。
 *
 * 使用方式：往 `src/data/blog/` 里丢一个 `.md` 文件，它就会自动出现在
 * 博客列表里，无需改任何代码。文件名即 slug（URL），例如
 * `my-first-post.md` → `/blog/my-first-post`。
 *
 * frontmatter 支持以下字段（都可省略）：
 *   title       博文标题（省略则用文件名）
 *   date        发布日期，YYYY-MM-DD，用于排序
 *   description 一句话摘要，显示在列表卡片里
 *   tags        标签，行内数组 `[A, B]` 或 YAML 列表
 *   cover       封面图 URL（可选）
 */

import { parseFrontmatter } from './frontmatter'

export interface BlogPost {
  slug: string
  title: string
  /** YYYY-MM-DD，用于排序与列表展示 */
  date: string
  description: string
  tags: string[]
  cover?: string
  content: string
}

/* 自动扫描 blog 目录下的所有 .md 文件（eager 以便在打包时内联内容）。 */
const raw = import.meta.glob('./blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === 'string') return value.trim()
  return ''
}

function parse(path: string, md: string): BlogPost {
  const slug = path.split('/').pop()!.replace(/\.md$/, '')

  // 单篇文章的 frontmatter 写坏了，不应该把整个站点拖成白屏
  try {
    const { data, content } = parseFrontmatter(md)
    return {
      slug,
      title: typeof data.title === 'string' && data.title ? data.title : slug,
      date: toDateString(data.date),
      description: typeof data.description === 'string' ? data.description : '',
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      cover: typeof data.cover === 'string' && data.cover ? data.cover : undefined,
      content,
    }
  } catch (error) {
    console.error(`[blog] 解析 ${path} 失败，已跳过 frontmatter`, error)
    return { slug, title: slug, date: '', description: '', tags: [], content: md }
  }
}

export const blogPosts: BlogPost[] = Object.entries(raw)
  .map(([path, md]) => parse(path, md))
  .sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug)
