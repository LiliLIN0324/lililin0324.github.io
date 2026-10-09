/**
 * 博客评论 —— 基于 giscus（GitHub Discussions），零后端、零成本。
 *
 * 当前状态：仓库的 Discussions 已开启，repoId / categoryId 已填好。
 * 还差最后一步（只能在浏览器里点，无法用 API 完成）：
 *   到 https://github.com/apps/giscus/installations/new 把 giscus App
 *   安装到本仓库。装完评论即刻生效。
 *
 * 未配置两个 ID 时，评论区会显示一个「未配置」占位框，不影响博客其它功能。
 */

import { useEffect, useRef } from 'react'

/* ---------------------------------------------------------------------------
   在这里填你自己的 giscus 配置（第二步的产物）
   --------------------------------------------------------------------------- */
const GISCUS_CONFIG = {
  repo: 'LiliLIN0324/lililin0324.github.io',
  repoId: 'R_kgDOQpt6HQ',
  // Announcements 是 giscus 官方推荐的分类：只有维护者能发起讨论，
  // 而 giscus App 仍可为每篇文章自动创建，天然防垃圾评论。
  category: 'Announcements',
  categoryId: 'DIC_kwDOQpt6Hc4DF4Yk',
  // specific = 用下面传入的 term 作为讨论标识，每篇文章一个独立讨论。
  // 不用 'title' 映射：giscus 读的是 document.title，而子组件的 effect 先于
  // 父组件执行，脚本会在标题写入前加载，可能挂到错误的讨论上。
  mapping: 'specific',
  lang: 'zh-CN',
  theme: 'preferred_color_scheme',
}

export const BlogComments = ({ term }: { term: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const configured = Boolean(GISCUS_CONFIG.repoId && GISCUS_CONFIG.categoryId)

  useEffect(() => {
    if (!configured) return
    const container = ref.current
    if (!container) return

    // 每次切换文章时清空重建，避免旧评论残留
    container.innerHTML = ''
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', GISCUS_CONFIG.repo)
    script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId)
    script.setAttribute('data-category', GISCUS_CONFIG.category)
    script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId)
    script.setAttribute('data-mapping', GISCUS_CONFIG.mapping)
    script.setAttribute('data-term', term)
    // term 映射下不需要严格标题匹配，置 0 避免「找不到讨论」的边界情况
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', GISCUS_CONFIG.theme)
    script.setAttribute('data-lang', GISCUS_CONFIG.lang)
    script.setAttribute('data-loading', 'lazy')
    container.appendChild(script)
  }, [term, configured])

  if (!configured) {
    return (
      <div className="border border-dashed border-rule p-6">
        <p className="eyebrow mb-2">Comments</p>
        <p className="text-sm leading-relaxed text-ink-3">
          评论尚未配置。在{' '}
          <code className="font-mono text-ink-2">src/blog/BlogComments.tsx</code>{' '}
          的 <code className="font-mono text-ink-2">GISCUS_CONFIG</code> 里填入
          repoId 与 categoryId 即可（仓库的 Discussions 已开启）。
        </p>
      </div>
    )
  }

  return <div ref={ref} className="giscus mt-10" />
}
