/**
 * BlogApp —— 完全独立的博客组件。
 *
 * 拥有自己的 header / 布局 / 路由，挂在 `/blog` 下，
 * 与作品集（MainPage）互不干扰，可整体增删。
 */

import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import { BlogPostView } from './BlogPostView'

const BlogList = () => {
  useEffect(() => {
    document.title = "Lili's Blog"
    return () => { document.title = 'Lili Lin | Portfolio' }
  }, [])

  if (blogPosts.length === 0) {
    return (
      <div className="shell py-20 text-center">
        <p className="eyebrow">Blog</p>
        <p className="mt-3 text-ink-3">还没有文章，往 <code className="font-mono">src/data/blog/</code> 里放一个 .md 文件即可。</p>
      </div>
    )
  }

  return (
    <div className="shell animate-rise-in py-10 md:py-14">
      <div className="section-head mb-6">
        <p className="eyebrow">Blog / Index</p>
        <p className="eyebrow nums-tabular">{String(blogPosts.length).padStart(2, '0')} Posts</p>
      </div>

      <h1 className="text-display-sm mb-10">写作</h1>

      <ul className="border-t border-rule">
        {blogPosts.map((post, index) => (
          <li key={post.slug} className="group border-b border-rule transition-colors duration-300 hover:bg-surface">
            <Link to={`/blog/${post.slug}`} className="flex items-start gap-5 py-6 md:gap-8">
              <span className="nums-tabular hidden w-10 shrink-0 pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="text-lg font-bold tracking-tight text-ink md:text-xl">
                    <span className="wipe-underline">{post.title}</span>
                  </h2>
                  <span className="eyebrow nums-tabular shrink-0">{post.date}</span>
                </div>

                {post.description && (
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2">{post.description}</p>
                )}

                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
                  </div>
                )}
              </div>

              <span className="self-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors group-hover:text-ink">
                Read →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const BlogApp = () => {
  return (
    <div className="flex h-screen flex-col bg-canvas text-ink">
      {/* 独立 header */}
      <header className="shrink-0 border-b border-rule bg-surface/85 backdrop-blur">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <Link to="/blog" className="group flex items-baseline gap-2.5">
            <span className="text-lg font-bold tracking-masthead md:text-xl">Lili's Blog</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 sm:inline">
              notes & writing
            </span>
          </Link>

          <Link to="/" className="btn-ghost !px-3 !py-1.5">
            ← 返回作品集
          </Link>
        </div>
      </header>

      {/* 独立内容区 */}
      <main className="min-h-0 flex-1 overflow-y-auto">
        <Routes>
          <Route index element={<BlogList />} />
          <Route path=":slug" element={<BlogPostView />} />
        </Routes>
      </main>

      <footer className="shrink-0 border-t border-rule bg-surface">
        <div className="shell flex h-12 items-center justify-between font-mono text-[10px] uppercase tracking-eyebrow text-ink-3">
          <span>Lili Lin</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}
