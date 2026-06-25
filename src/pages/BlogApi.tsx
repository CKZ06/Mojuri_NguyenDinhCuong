import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell'
import { apiRequest } from '../lib/api'
import type { BlogPost, Category } from '../types/api'

export const BlogApiBodyClass = 'blog functional-body'

export default function BlogApi() {
  const [category, setCategory] = useState('')
  const { data: categories = [] } = useQuery({ queryKey: ['categories', 'blog'], queryFn: () => apiRequest<Category[]>('/categories?type=blog') })
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts', category],
    queryFn: () => apiRequest<BlogPost[]>(`/posts${category ? `?category=${encodeURIComponent(category)}` : ''}`),
  })

  return (
    <AppShell>
      <section className="functional-hero compact"><p>Stories & jewelry knowledge</p><h1>Mojuri Journal</h1></section>
      <section className="functional-container blog-layout">
        <div className="blog-grid">
          {isLoading && <div className="state-card">Đang tải bài viết…</div>}
          {posts.map((post) => (
            <article className="blog-card" key={post._id}>
              <Link to={`/blog/${post.slug}`}><img src={post.thumbnail} alt={post.title} /></Link>
              <p className="category">{post.category} · {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString('vi-VN')}</p>
              <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.excerpt}</p>
              <Link className="read-more" to={`/blog/${post.slug}`}>Đọc tiếp →</Link>
            </article>
          ))}
        </div>
        <aside className="blog-sidebar">
          <h3>Danh mục</h3>
          <button type="button" onClick={() => setCategory('')}>Tất cả</button>
          {categories.map((item) => <button type="button" key={item._id} onClick={() => setCategory(item.name)}>{item.name}</button>)}
          <h3>Recent Posts</h3>
          {posts.slice(0, 5).map((post) => <Link to={`/blog/${post.slug}`} key={post._id}>{post.title}</Link>)}
        </aside>
      </section>
    </AppShell>
  )
}
