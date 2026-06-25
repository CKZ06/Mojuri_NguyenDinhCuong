import { Link } from 'react-router-dom'
import type { Product } from '../types/api'

export default function ProductCard({ product, onAdd, list = false }: {
  product: Product
  onAdd: (product: Product) => void
  list?: boolean
}) {
  return (
    <article className="api-product-card">
      <Link to={`/product/${product._id}`} className="api-product-image">
        <img src={product.thumbnail} alt={product.name} />
        {product.salePrice && <span>Sale</span>}
      </Link>
      <div className="product-card-content">
        <p className="category">{product.category}</p>
        <h3><Link to={`/product/${product._id}`}>{product.name}</Link></h3>
        {list && <p>{product.description.replace(/<[^>]*>/g, ' ').slice(0, 180)}</p>}
        <div className="rating-line">
          {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))} ({product.reviewCount})
        </div>
        <div className="price">
          {product.salePrice && <del>${product.price.toFixed(2)}</del>}
          <strong>${(product.salePrice ?? product.price).toFixed(2)}</strong>
        </div>
        <button type="button" disabled={product.stock < 1} onClick={() => onAdd(product)}>
          {product.stock > 0 ? 'Thêm vào giỏ' : 'Hết hàng'}
        </button>
      </div>
    </article>
  )
}
