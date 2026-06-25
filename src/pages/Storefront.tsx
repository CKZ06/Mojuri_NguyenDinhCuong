import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AppShell from '../components/AppShell'
import ProductCard from '../components/ProductCard'
import { useCart } from '../contexts/CartContext'
import { apiRequest } from '../lib/api'
import type { Category, Product } from '../types/api'

type ProductResult = {
  items: Product[]
  pagination: { page: number; pages: number; total: number }
}

export const StorefrontBodyClass = 'shop functional-body'

export default function Storefront() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('newest')
  const [page, setPage] = useState(1)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const { add } = useCart()
  const { data: categories = [] } = useQuery({ queryKey: ['categories', 'product'], queryFn: () => apiRequest<Category[]>('/categories?type=product') })
  const params = new URLSearchParams({ page: String(page), limit: '8', search, category, minPrice, maxPrice, sort })
  const { data, isLoading: loading, error } = useQuery({
    queryKey: ['products', page, search, category, minPrice, maxPrice, sort],
    queryFn: () => apiRequest<ProductResult>(`/products?${params}`),
    placeholderData: (previous) => previous,
  })
  const products = data?.items ?? []
  const pages = data?.pagination.pages || 1
  const total = data?.pagination.total ?? 0

  function resetPage(valueSetter: (value: string) => void, value: string) {
    valueSetter(value)
    setPage(1)
  }

  return (
    <AppShell>
      <section className="functional-hero compact">
        <p>Fine jewelry, powered by a real API</p>
        <h1>Cửa hàng Mojuri</h1>
      </section>
      <section className="functional-container">
        <div className="shop-layout">
          <aside className="shop-filters">
            <h3>Lọc sản phẩm</h3>
            <label>Tìm kiếm
              <input value={search} onChange={(event) => resetPage(setSearch, event.target.value)} placeholder="Tên sản phẩm..." />
            </label>
            <label>Danh mục
              <select value={category} onChange={(event) => resetPage(setCategory, event.target.value)}>
                <option value="">Tất cả</option>
                {categories.map((item) => <option key={item._id} value={item.name}>{item.name}</option>)}
              </select>
            </label>
            <div className="price-filter">
              <label>Giá từ<input type="number" min="0" value={minPrice} onChange={(event) => resetPage(setMinPrice, event.target.value)} /></label>
              <label>Đến<input type="number" min="0" value={maxPrice} onChange={(event) => resetPage(setMaxPrice, event.target.value)} /></label>
            </div>
          </aside>
          <div>
            <div className="store-toolbar">
              <div><h2>Sản phẩm</h2><p>{total} sản phẩm</p></div>
              <div className="shop-toolbar-actions">
                <select value={sort} onChange={(event) => resetPage(setSort, event.target.value)}>
                  <option value="newest">Mới nhất</option>
                  <option value="price_asc">Giá tăng dần</option>
                  <option value="price_desc">Giá giảm dần</option>
                </select>
                <button type="button" className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')}>Grid</button>
                <button type="button" className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}>List</button>
              </div>
            </div>
            {loading && <div className="state-card">Đang tải sản phẩm…</div>}
        {error && <div className="state-card error">{error instanceof Error ? error.message : 'Không thể tải sản phẩm'}. Hãy kiểm tra backend cổng 3000.</div>}
            {!loading && !error && (
              <>
                <div className={`api-product-grid ${view === 'list' ? 'list-view' : ''}`}>
                  {products.map((product) => <ProductCard key={product._id} product={product} onAdd={add} list={view === 'list'} />)}
                </div>
                <div className="pagination">
                  <button type="button" disabled={page <= 1} onClick={() => setPage(page - 1)}>←</button>
                  {Array.from({ length: pages }, (_, index) => index + 1).map((item) => (
                    <button type="button" className={item === page ? 'active' : ''} key={item} onClick={() => setPage(item)}>{item}</button>
                  ))}
                  <button type="button" disabled={page >= pages} onClick={() => setPage(page + 1)}>→</button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </AppShell>
  )
}
