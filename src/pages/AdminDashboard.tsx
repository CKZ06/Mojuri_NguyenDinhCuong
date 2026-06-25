import { useState } from 'react'
import type { FormEvent } from 'react'
import { useQueries, useQueryClient } from '@tanstack/react-query'
import AppShell from '../components/AppShell'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { apiRequest } from '../lib/api'
import type { BlogPost, Category, ContactMessage, Order, Product, User } from '../types/api'

type Tab = 'overview' | 'products' | 'categories' | 'orders' | 'contacts' | 'posts' | 'users'
type ProductResult = { items: Product[]; pagination: { total: number } }
type RevenueStat = { label: string; revenue: number; orders: number }

export const AdminDashboardBodyClass = 'functional-body admin-body'

export default function AdminDashboard() {
  const { user, loading } = useAuth()
  const { remove: removeFromCart } = useCart()
  const [tab, setTab] = useState<Tab>('overview')
  const [error, setError] = useState('')
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [showProductForm, setShowProductForm] = useState(false)
  const [showPostForm, setShowPostForm] = useState(false)
  const queryClient = useQueryClient()
  const enabled = user?.role === 'admin'
  const results = useQueries({
    queries: [
      { queryKey: ['admin', 'products'], queryFn: () => apiRequest<ProductResult>('/products?limit=100'), enabled },
      { queryKey: ['admin', 'orders'], queryFn: () => apiRequest<Order[]>('/orders'), enabled },
      { queryKey: ['admin', 'users'], queryFn: () => apiRequest<User[]>('/users'), enabled },
      { queryKey: ['categories'], queryFn: () => apiRequest<Category[]>('/categories'), enabled },
      { queryKey: ['admin', 'contacts'], queryFn: () => apiRequest<ContactMessage[]>('/contacts'), enabled },
      { queryKey: ['admin', 'posts'], queryFn: () => apiRequest<BlogPost[]>('/posts?all=true'), enabled },
      { queryKey: ['admin', 'stats'], queryFn: () => apiRequest<RevenueStat[]>('/orders/stats?period=day'), enabled },
    ],
  })
  const products = (results[0].data as ProductResult | undefined)?.items ?? []
  const orders = (results[1].data as Order[] | undefined) ?? []
  const users = (results[2].data as User[] | undefined) ?? []
  const categories = (results[3].data as Category[] | undefined) ?? []
  const contacts = (results[4].data as ContactMessage[] | undefined) ?? []
  const posts = (results[5].data as BlogPost[] | undefined) ?? []
  const stats = (results[6].data as RevenueStat[] | undefined) ?? []
  const dashboardLoading = results.some((result) => result.isLoading)

  async function saveProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    await runMutation(async () => {
      await apiRequest(editingProduct ? `/products/${editingProduct._id}` : '/products', {
        method: editingProduct ? 'PUT' : 'POST',
        body: JSON.stringify({
          name: form.get('name'),
          slug: form.get('slug'),
          price: Number(form.get('price')),
          salePrice: form.get('salePrice') ? Number(form.get('salePrice')) : undefined,
          category: form.get('category'),
          thumbnail: form.get('thumbnail'),
          hoverImage: form.get('hoverImage'),
          images: String(form.get('images') ?? '').split('\n').map((item) => item.trim()).filter(Boolean),
          stock: Number(form.get('stock')),
          stockStatus: Number(form.get('stock')) > 0 ? 'in_stock' : 'out_of_stock',
          description: form.get('description'),
          featured: form.get('featured') === 'on',
          isActive: true,
        }),
      })
      setShowProductForm(false)
      setEditingProduct(null)
    })
  }

  async function deleteProduct(product: Product) {
    if (!window.confirm(`Xóa sản phẩm "${product.name}"?`)) return
    await runMutation(async () => {
      await apiRequest(`/products/${product._id}`, { method: 'DELETE' })
      removeFromCart(product._id)
    })
  }

  async function saveCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    await runMutation(async () => {
      await apiRequest('/categories', {
        method: 'POST',
        body: JSON.stringify({ name: form.get('name'), slug: form.get('slug'), type: form.get('type') }),
      })
      event.currentTarget.reset()
    })
  }

  async function savePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    await runMutation(async () => {
      await apiRequest(editingPost ? `/posts/${editingPost._id}` : '/posts', {
        method: editingPost ? 'PUT' : 'POST',
        body: JSON.stringify({
          title: form.get('title'),
          slug: form.get('slug'),
          excerpt: form.get('excerpt'),
          content: form.get('content'),
          thumbnail: form.get('thumbnail'),
          category: form.get('category'),
          status: form.get('status'),
        }),
      })
      setShowPostForm(false)
      setEditingPost(null)
    })
  }

  async function runMutation(action: () => Promise<void>) {
    try {
      await action()
      await queryClient.invalidateQueries({ queryKey: ['admin'] })
      await queryClient.invalidateQueries({ queryKey: ['categories'] })
      await queryClient.invalidateQueries({ queryKey: ['products'] })
      await queryClient.invalidateQueries({ queryKey: ['posts'] })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Thao tác thất bại')
    }
  }

  if (loading) return <div className="admin-gate">Đang kiểm tra quyền truy cập…</div>
  if (!user) {
    return <div className="admin-gate"><h1>Vui lòng đăng nhập Admin</h1><a className="primary-action" href="/login">Đăng nhập</a></div>
  }
  if (user?.role !== 'admin') {
    return <AppShell><div className="admin-gate"><h1>Không có quyền truy cập</h1><p>Trang này chỉ dành cho quản trị viên.</p><a className="primary-action" href="/login">Đăng nhập Admin</a></div></AppShell>
  }

  const revenue = orders.filter((order) => order.status !== 'cancelled').reduce((sum, order) => sum + order.total, 0)
  const labels: Record<Tab, string> = { overview: 'Tổng quan', products: 'Sản phẩm', categories: 'Danh mục', orders: 'Đơn hàng', contacts: 'Liên hệ', posts: 'Bài viết', users: 'Người dùng' }
  const icons: Record<Tab, string> = { overview: '⌂', products: '◇', categories: '▦', orders: '▤', contacts: '✉', posts: '✎', users: '♙' }
  const counts: Partial<Record<Tab, number>> = {
    products: products.length,
    categories: categories.length,
    orders: orders.length,
    contacts: contacts.filter((contact) => contact.status === 'new').length,
    posts: posts.length,
    users: users.filter((account) => account.role === 'user').length,
  }

  return (
    <AppShell>
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="admin-brand"><span>M</span><div><p className="admin-kicker">Mojuri</p><h2>Administration</h2></div></div>
          <p className="admin-nav-label">Quản lý cửa hàng</p>
          <nav className="admin-nav">
            {(Object.keys(labels) as Tab[]).map((item) => (
              <button key={item} type="button" className={tab === item ? 'active' : ''} onClick={() => setTab(item)}>
                <span className="admin-nav-icon">{icons[item]}</span>
                <span>{labels[item]}</span>
                {item !== 'overview' && <b>{counts[item] ?? 0}</b>}
              </button>
            ))}
          </nav>
          <div className="admin-profile">
            <span>{user.name.slice(0, 1).toUpperCase()}</span>
            <div><strong>{user.name}</strong><small>Quản trị viên cao nhất</small></div>
          </div>
        </aside>
        <section className="admin-content">
          <div className="admin-heading">
            <div><p>Không gian quản trị · {new Date().toLocaleDateString('vi-VN')}</p><h1>{labels[tab]}</h1></div>
            {tab === 'products' && <button className="primary-action" type="button" onClick={() => { setEditingProduct(null); setShowProductForm(true) }}>+ Thêm sản phẩm</button>}
            {tab === 'posts' && <button className="primary-action" type="button" onClick={() => { setEditingPost(null); setShowPostForm(true) }}>+ Thêm bài viết</button>}
          </div>
          {error && <div className="state-card error">{error}</div>}
          {dashboardLoading && <div className="admin-loading"><i /><span>Đang đồng bộ dữ liệu cửa hàng…</span></div>}
          {!dashboardLoading && tab === 'overview' && <Overview products={products} orders={orders} users={users} revenue={revenue} stats={stats} onOrderChange={(order, status) => runMutation(() => updateOrder(order, status))} />}
          {tab === 'products' && <ProductTable products={products} onEdit={(product) => { setEditingProduct(product); setShowProductForm(true) }} onDelete={(product) => void deleteProduct(product)} />}
          {tab === 'categories' && <CategoryManager categories={categories} onSubmit={saveCategory} onEdit={(item) => {
            const name = window.prompt('Tên danh mục', item.name)
            const slug = window.prompt('Slug', item.slug)
            if (name && slug) void runMutation(() => apiRequest(`/categories/${item._id}`, { method: 'PUT', body: JSON.stringify({ name, slug, type: item.type }) }))
          }} onDelete={(item) => runMutation(() => apiRequest(`/categories/${item._id}`, { method: 'DELETE' }))} />}
          {tab === 'orders' && <div className="admin-card table-scroll"><OrderTable orders={orders} onChange={(order, status) => runMutation(() => updateOrder(order, status))} /></div>}
          {tab === 'contacts' && <ContactInbox contacts={contacts} onChange={(contact, status) => runMutation(() => apiRequest(`/contacts/${contact._id}`, { method: 'PATCH', body: JSON.stringify({ status }) }))} />}
          {tab === 'posts' && <PostTable posts={posts} onEdit={(post) => { setEditingPost(post); setShowPostForm(true) }} onDelete={(post) => runMutation(() => apiRequest(`/posts/${post._id}`, { method: 'DELETE' }))} />}
          {tab === 'users' && <UserTable users={users} onDelete={(account) => {
            const id = account._id ?? account.id
            if (!id || account.role === 'admin' || !window.confirm(`Xóa tài khoản "${account.email}"?`)) return
            void runMutation(() => apiRequest(`/users?id=${encodeURIComponent(id)}`, { method: 'DELETE' }))
          }} />}
        </section>
      </div>
      {showProductForm && <ProductModal product={editingProduct} categories={categories} onClose={() => setShowProductForm(false)} onSubmit={saveProduct} />}
      {showPostForm && <PostModal post={editingPost} categories={categories} onClose={() => setShowPostForm(false)} onSubmit={savePost} />}
    </AppShell>
  )
}

function Overview({ products, orders, users, revenue, stats, onOrderChange }: { products: Product[]; orders: Order[]; users: User[]; revenue: number; stats: RevenueStat[]; onOrderChange: (order: Order, status: Order['status']) => void }) {
  return <><div className="stats-grid"><article className="stat-products"><div><span>Sản phẩm</span><strong>{products.length}</strong><small>Đang có trong cửa hàng</small></div><i>◇</i></article><article className="stat-orders"><div><span>Đơn hàng</span><strong>{orders.length}</strong><small>{orders.filter((order) => order.status === 'pending').length} đơn đang chờ xử lý</small></div><i>▤</i></article><article className="stat-users"><div><span>Khách hàng</span><strong>{users.filter((item) => item.role === 'user').length}</strong><small>Tài khoản mua sắm</small></div><i>♙</i></article><article className="stat-revenue"><div><span>Doanh thu</span><strong>${revenue.toFixed(2)}</strong><small>Không tính đơn đã hủy</small></div><i>↗</i></article></div><div className="admin-card"><div className="admin-card-heading"><div><span>Hoạt động mới nhất</span><h2>Đơn hàng gần đây</h2></div><b>{orders.length} đơn hàng</b></div>{orders.length ? <OrderTable orders={orders.slice(0, 5)} onChange={onOrderChange} /> : <EmptyState icon="▤" title="Chưa có đơn hàng" text="Đơn hàng mới của khách sẽ xuất hiện tại đây." />}</div><div className="admin-card revenue-card"><div className="admin-card-heading"><div><span>Hiệu suất bán hàng</span><h2>Doanh thu theo ngày</h2></div></div>{stats.length ? <div className="revenue-bars">{stats.map((item) => <div key={item.label}><strong>${item.revenue.toFixed(0)}</strong><i style={{ height: `${Math.max(10, Math.min(150, item.revenue / 5))}px` }} /><span>{item.label}</span></div>)}</div> : <EmptyState icon="↗" title="Chưa có dữ liệu doanh thu" text="Biểu đồ sẽ được cập nhật khi cửa hàng có đơn hàng." />}</div></>
}

function EmptyState({ icon, title, text }: { icon: string; title: string; text: string }) {
  return <div className="admin-empty"><i>{icon}</i><strong>{title}</strong><span>{text}</span></div>
}

function ProductTable({ products, onEdit, onDelete }: { products: Product[]; onEdit: (product: Product) => void; onDelete: (product: Product) => void }) {
  return <div className="admin-card table-scroll"><div className="admin-card-heading"><div><span>Kho sản phẩm</span><h2>Tất cả sản phẩm</h2></div><b>{products.length} sản phẩm</b></div>{products.length ? <table><thead><tr><th>Sản phẩm</th><th>Danh mục</th><th>Giá</th><th>Kho</th><th>Trạng thái</th><th /></tr></thead><tbody>{products.map((product) => <tr key={product._id}><td><div className="admin-product"><img src={product.thumbnail} alt="" /><strong>{product.name}</strong></div></td><td>{product.category}</td><td>${(product.salePrice ?? product.price).toFixed(2)}</td><td>{product.stock}</td><td><span className={`status-pill ${product.stock > 0 ? 'success' : 'danger'}`}>{product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}</span></td><td><button type="button" onClick={() => onEdit(product)}>Sửa</button><button className="danger-link" type="button" onClick={() => onDelete(product)}>Xóa</button></td></tr>)}</tbody></table> : <EmptyState icon="◇" title="Chưa có sản phẩm" text="Hãy thêm sản phẩm đầu tiên cho cửa hàng." />}</div>
}

function CategoryManager({ categories, onSubmit, onEdit, onDelete }: { categories: Category[]; onSubmit: (event: FormEvent<HTMLFormElement>) => void; onEdit: (item: Category) => void; onDelete: (item: Category) => void }) {
  return <div className="admin-card"><form className="inline-admin-form" onSubmit={onSubmit}><input name="name" required placeholder="Tên danh mục" /><input name="slug" required placeholder="slug" /><select name="type"><option value="product">Sản phẩm</option><option value="blog">Blog</option></select><button className="primary-action" type="submit">Thêm</button></form><table><thead><tr><th>Tên</th><th>Slug</th><th>Loại</th><th /></tr></thead><tbody>{categories.map((item) => <tr key={item._id}><td>{item.name}</td><td>{item.slug}</td><td>{item.type}</td><td><button type="button" onClick={() => onEdit(item)}>Sửa</button><button className="danger-link" type="button" onClick={() => onDelete(item)}>Xóa</button></td></tr>)}</tbody></table></div>
}

function ContactInbox({ contacts, onChange }: { contacts: ContactMessage[]; onChange: (contact: ContactMessage, status: ContactMessage['status']) => void }) {
  return <div className="admin-card inbox-list"><div className="admin-card-heading"><div><span>Hộp thư khách hàng</span><h2>Liên hệ mới</h2></div><b>{contacts.filter((contact) => contact.status === 'new').length} chưa đọc</b></div>{contacts.length ? contacts.map((contact) => <article className={contact.status === 'new' ? 'unread' : ''} key={contact._id}><div><strong>{contact.subject}</strong><span>{contact.name} · {contact.email}{contact.user ? ' · Có tài khoản' : ' · Khách vãng lai'}</span></div><p>{contact.message}</p><select className={`status-select ${contact.status}`} value={contact.status} onChange={(event) => onChange(contact, event.target.value as ContactMessage['status'])}><option value="new">Chưa đọc</option><option value="read">Đã đọc</option><option value="replied">Đã phản hồi</option></select></article>) : <EmptyState icon="✉" title="Hộp thư đang trống" text="Contact của khách hàng sẽ xuất hiện tại đây." />}</div>
}

function PostTable({ posts, onEdit, onDelete }: { posts: BlogPost[]; onEdit: (post: BlogPost) => void; onDelete: (post: BlogPost) => void }) {
  return <div className="admin-card table-scroll"><table><thead><tr><th>Bài viết</th><th>Danh mục</th><th>Trạng thái</th><th /></tr></thead><tbody>{posts.map((post) => <tr key={post._id}><td><strong>{post.title}</strong><small>{post.slug}</small></td><td>{post.category}</td><td><span className="status-pill">{post.status}</span></td><td><button type="button" onClick={() => onEdit(post)}>Sửa</button><button className="danger-link" type="button" onClick={() => onDelete(post)}>Xóa</button></td></tr>)}</tbody></table></div>
}

function UserTable({ users, onDelete }: { users: User[]; onDelete: (user: User) => void }) {
  return <div className="admin-card table-scroll"><table><thead><tr><th>Họ tên</th><th>Email</th><th>Vai trò</th><th /></tr></thead><tbody>{users.map((item) => <tr key={item._id ?? item.id}><td>{item.name}</td><td>{item.email}</td><td><span className="status-pill">{item.role}</span></td><td>{item.role === 'user' && <button className="danger-link" type="button" onClick={() => onDelete(item)}>Xóa</button>}</td></tr>)}</tbody></table></div>
}

function OrderTable({ orders, onChange }: { orders: Order[]; onChange: (order: Order, status: Order['status']) => void }) {
  return <table><thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Giao hàng</th><th>Tổng</th><th>Ngày</th><th>Trạng thái</th></tr></thead><tbody>{orders.map((order) => <tr key={order._id}><td><strong className="order-code">#{order._id.slice(-6).toUpperCase()}</strong></td><td>{order.customer.name}<small>{order.customer.email}</small></td><td>{order.customer.phone}<small>{order.customer.address}</small></td><td><strong>${order.total.toFixed(2)}</strong></td><td>{new Date(order.createdAt).toLocaleDateString('vi-VN')}</td><td><select className={`status-select ${order.status}`} value={order.status} onChange={(event) => onChange(order, event.target.value as Order['status'])}><option value="pending">Chờ xử lý</option><option value="processing">Đang xử lý</option><option value="shipped">Đang giao</option><option value="delivered">Đã giao</option><option value="cancelled">Đã hủy</option></select></td></tr>)}</tbody></table>
}

function ProductModal({ product, categories, onClose, onSubmit }: { product: Product | null; categories: Category[]; onClose: () => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return <div className="modal-backdrop"><form className="admin-modal" onSubmit={onSubmit}><div className="modal-title"><h2>{product ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</h2><button type="button" onClick={onClose}>×</button></div><div className="admin-form-grid"><label>Tên<input name="name" required defaultValue={product?.name} /></label><label>Slug<input name="slug" required defaultValue={product?.slug} /></label><label>Giá<input name="price" type="number" min="0" required defaultValue={product?.price} /></label><label>Giá sale<input name="salePrice" type="number" min="0" defaultValue={product?.salePrice} /></label><label>Danh mục<select name="category" defaultValue={product?.category}>{categories.filter((item) => item.type === 'product').map((item) => <option key={item._id}>{item.name}</option>)}</select></label><label>Tồn kho<input name="stock" type="number" min="0" required defaultValue={product?.stock ?? 0} /></label><label className="full">Thumbnail<input name="thumbnail" required defaultValue={product?.thumbnail ?? '/media/product/1.jpg'} /></label><label className="full">Ảnh hover<input name="hoverImage" defaultValue={product?.hoverImage} /></label><label className="full">Gallery (mỗi URL một dòng)<textarea name="images" defaultValue={product?.images?.join('\n')} /></label><label className="full">Mô tả Rich Text (HTML)<textarea className="rich-editor" name="description" defaultValue={product?.description} /></label><label className="checkbox-row"><input name="featured" type="checkbox" defaultChecked={product?.featured} /> Sản phẩm nổi bật</label></div><button className="primary-action" type="submit">Lưu sản phẩm</button></form></div>
}

function PostModal({ post, categories, onClose, onSubmit }: { post: BlogPost | null; categories: Category[]; onClose: () => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return <div className="modal-backdrop"><form className="admin-modal" onSubmit={onSubmit}><div className="modal-title"><h2>{post ? 'Sửa bài viết' : 'Thêm bài viết'}</h2><button type="button" onClick={onClose}>×</button></div><div className="admin-form-grid"><label>Tiêu đề<input name="title" required defaultValue={post?.title} /></label><label>Slug<input name="slug" required defaultValue={post?.slug} /></label><label>Danh mục<select name="category" defaultValue={post?.category}>{categories.filter((item) => item.type === 'blog').map((item) => <option key={item._id}>{item.name}</option>)}</select></label><label>Trạng thái<select name="status" defaultValue={post?.status ?? 'draft'}><option value="draft">Draft</option><option value="published">Published</option></select></label><label className="full">Ảnh bìa<input name="thumbnail" required defaultValue={post?.thumbnail ?? '/media/blog/1.jpg'} /></label><label className="full">Tóm tắt<textarea name="excerpt" defaultValue={post?.excerpt} /></label><label className="full">Nội dung Rich Text (HTML)<textarea className="rich-editor" name="content" required defaultValue={post?.content} /></label></div><button className="primary-action" type="submit">Lưu bài viết</button></form></div>
}

async function updateOrder(order: Order, status: Order['status']) {
  await apiRequest(`/orders/${order._id}`, { method: 'PATCH', body: JSON.stringify({ status, paymentStatus: order.paymentStatus }) })
}
