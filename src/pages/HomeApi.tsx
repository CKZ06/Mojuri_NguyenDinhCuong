import { useQuery } from '@tanstack/react-query'
import AppShell from '../components/AppShell'
import ProductCard from '../components/ProductCard'
import { useCart } from '../contexts/CartContext'
import { apiRequest } from '../lib/api'
import type { Product } from '../types/api'

type ProductResult = { items: Product[] }

export const HomeApiBodyClass = 'home functional-body'

export default function HomeApi() {
  const { add } = useCart()
  const { data, isLoading } = useQuery({
    queryKey: ['home-products'],
    queryFn: async () => Promise.all([
      apiRequest<ProductResult>('/products?featured=true&limit=4'),
      apiRequest<ProductResult>('/products?newest=true&limit=4'),
    ]),
  })
  const trending = data?.[0].items ?? []
  const newProducts = data?.[1].items ?? []

  return (
    <AppShell>
      <section className="home-api-hero">
        <div><p>Timeless jewelry, modern story</p><h1>Shine in your own way.</h1><a className="primary-action" href="/shop">Khám phá bộ sưu tập</a></div>
      </section>
      <ProductSection loading={isLoading} title="Trending Products" subtitle="Những thiết kế đang được yêu thích" products={trending} onAdd={add} />
      <section className="home-story-banner"><div><p>Designed for every moment</p><h2>Trang sức kể câu chuyện của riêng bạn.</h2></div></section>
      <ProductSection loading={isLoading} title="New Arrivals" subtitle="Sản phẩm mới nhất từ Mojuri" products={newProducts} onAdd={add} />
    </AppShell>
  )
}

function ProductSection({ title, subtitle, products, onAdd, loading }: { title: string; subtitle: string; products: Product[]; onAdd: (product: Product) => void; loading: boolean }) {
  return (
    <section className="functional-container home-product-section">
      <div className="section-heading"><p>{subtitle}</p><h2>{title}</h2></div>
      {loading ? <div className="state-card">Đang tải sản phẩm…</div> : products.length === 0 ? <div className="state-card">Chưa có dữ liệu. Hãy chạy API seed.</div> : (
        <div className="api-product-grid">
          {products.map((product) => <ProductCard key={product._id} product={product} onAdd={onAdd} />)}
        </div>
      )}
    </section>
  )
}
