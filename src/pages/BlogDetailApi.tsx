import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import AppShell from '../components/AppShell'
import { apiRequest } from '../lib/api'
import type { BlogPost } from '../types/api'

export const BlogDetailApiBodyClass = 'blog functional-body'

export default function BlogDetailApi() {
  const { slug = '' } = useParams()
  const { data: post, error } = useQuery({ queryKey: ['post', slug], queryFn: () => apiRequest<BlogPost>(`/posts/${slug}`), enabled: Boolean(slug) })

  return (
    <AppShell>
      <section className="functional-container blog-detail-layout">
        {error && <div className="state-card error">{error instanceof Error ? error.message : 'Không tìm thấy bài viết'}</div>}
        {post && (
          <article className="blog-detail">
            <p className="category">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="post-meta">{new Date(post.publishedAt ?? post.createdAt).toLocaleDateString('vi-VN')} · {post.author?.name ?? 'Mojuri'}</p>
            <img className="blog-cover" src={post.thumbnail} alt={post.title} />
            <div className="rich-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        )}
        <aside className="blog-sidebar">
          <h3>Recent Posts</h3>
          {post?.recent?.map((item) => (
            <Link className="recent-post" to={`/blog/${item.slug}`} key={item._id}>
              <img src={item.thumbnail} alt="" /><span>{item.title}</span>
            </Link>
          ))}
        </aside>
      </section>
    </AppShell>
  )
}
