import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { getPost } from '../data/blog'
import { BlogComments } from './BlogComments'

/* ---- Markdown 渲染组件：沿用站内设计 token（shell / eyebrow / chip 等）---- */
const proseComponents = {
  table: ({ children }: any) => (
    <div className="my-6 overflow-x-auto border border-rule">
      <table className="min-w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => <thead className="border-b border-rule bg-surface-2">{children}</thead>,
  th: ({ children }: any) => (
    <th className="border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0">{children}</th>
  ),
  td: ({ children }: any) => (
    <td className="border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0">{children}</td>
  ),
  h1: ({ children, ...props }: any) => {
    const text = typeof children === 'string' ? children : children?.toString() || ''
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    return <h1 id={id} className="mb-5 text-2xl font-bold tracking-tight text-ink first:mt-0" {...props}>{children}</h1>
  },
  h2: ({ children, ...props }: any) => {
    const text = typeof children === 'string' ? children : children?.toString() || ''
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    return <h2 id={id} className="mt-10 mb-4 text-xl font-bold tracking-tight text-ink" {...props}>{children}</h2>
  },
  h3: ({ children, ...props }: any) => {
    const text = typeof children === 'string' ? children : children?.toString() || ''
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    return <h3 id={id} className="mt-8 mb-3 text-lg font-bold text-ink" {...props}>{children}</h3>
  },
  h4: ({ children, ...props }: any) => <h4 className="mt-6 mb-2 text-base font-semibold text-ink" {...props}>{children}</h4>,
  h5: ({ children, ...props }: any) => <h5 className="mt-5 mb-2 text-sm font-semibold text-ink-2" {...props}>{children}</h5>,
  h6: ({ children, ...props }: any) => <h6 className="mt-4 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3" {...props}>{children}</h6>,
  p: ({ children, ...props }: any) => <p className="mb-5 leading-relaxed text-ink-2" {...props}>{children}</p>,
  a: ({ children, href, ...props }: any) => (
    <a href={href} className="text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  ),
  img: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} className="my-6 h-auto w-full border border-rule object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} {...props} />
  ),
  ul: ({ children, ...props }: any) => <ul className="mb-5 list-disc space-y-1 pl-6 text-ink-2" {...props}>{children}</ul>,
  ol: ({ children, ...props }: any) => <ol className="mb-5 list-decimal space-y-1 pl-6 text-ink-2" {...props}>{children}</ol>,
  li: ({ children, ...props }: any) => <li className="leading-relaxed" {...props}>{children}</li>,
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="my-6 border-l-2 border-accent pl-4 text-ink-2 italic" {...props}>{children}</blockquote>
  ),
  code: ({ className, children, ...props }: any) => {
    const isBlock = className?.includes('language-') || (typeof children === 'string' && children.includes('\n'))
    if (isBlock) {
      return <code className={`${className || ''} font-mono text-[13px] text-ink`} {...props}>{children}</code>
    }
    return <code className="rounded border border-rule bg-surface-2 px-1.5 py-0.5 font-mono text-[13px] text-ink" {...props}>{children}</code>
  },
  pre: ({ children, ...props }: any) => (
    <pre className="mb-5 overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas" {...props}>{children}</pre>
  ),
  hr: ({ ...props }: any) => <hr className="my-10 border-0 border-t border-rule" {...props} />,
}

export const BlogPostView = () => {
  const { slug } = useParams()
  const post = getPost(slug || '')

  useEffect(() => {
    if (post) document.title = `${post.title} · Lili's Blog`
    return () => { document.title = 'Lili Lin | Portfolio' }
  }, [post])

  if (!post) {
    return (
      <div className="shell flex h-full items-center justify-center py-20">
        <div className="text-center">
          <p className="eyebrow">Error</p>
          <p className="mt-3 text-display-sm">Post not found</p>
          <Link to="/blog" className="btn-ghost mt-6">← 返回博客</Link>
        </div>
      </div>
    )
  }

  return (
    <article className="shell animate-rise-in py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        {/* 返回 + 面包屑 */}
        <div className="mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
          <Link to="/blog" className="transition-colors hover:text-ink">← 全部文章</Link>
          <span className="h-3 w-px bg-rule" aria-hidden="true" />
          <span>{post.date || '未标注日期'}</span>
        </div>

        {/* 标题区 */}
        <h1 className="text-display-sm mb-4">{post.title}</h1>
        {post.description && (
          <p className="mb-6 max-w-measure text-base leading-relaxed text-ink-2">{post.description}</p>
        )}
        {post.tags.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-1.5">
            {post.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
          </div>
        )}

        {post.cover && (
          <img src={post.cover} alt="" className="mb-10 w-full border border-rule object-cover" />
        )}

        {/* 正文 */}
        <div className="prose-custom border-t border-rule-strong pt-10 text-base leading-relaxed text-ink-2">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={proseComponents}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* 评论：term 用 slug（文件名），改名标题不会丢评论 */}
        <BlogComments term={`blog/${post.slug}`} />
      </div>
    </article>
  )
}
