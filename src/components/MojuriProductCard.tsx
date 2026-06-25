import { Link } from 'react-router-dom'
import type { Product } from '../types/api'

export default function MojuriProductCard({ product, onAdd, columnClass = 'col-xl-4 col-lg-4 col-md-4 col-sm-6' }: {
  product: Product
  onAdd: (product: Product) => void
  columnClass?: string
}) {
  return (
    <div className={columnClass}>
      <div className="products-entry clearfix product-wapper">
        <div className="products-thumb">
          <div className="product-thumb-hover">
            <Link to={`/product/${product._id}`}>
              <img width={600} height={600} src={product.thumbnail} className="post-image" alt={product.name} />
              <img width={600} height={600} src={product.hoverImage || product.thumbnail} className="hover-image back" alt={product.name} />
            </Link>
          </div>
          <div className="product-button">
            <div className="btn-add-to-cart" data-title="Add to cart">
              <button type="button" className="product-btn button" disabled={product.stock < 1} onClick={() => onAdd(product)}>
                {product.stock > 0 ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>
          </div>
        </div>
        <div className="products-content">
          <div className="contents text-center">
            <div className="rating"><div className={`star star-${Math.round(product.rating)}`} /><span className="count">({product.reviewCount} review)</span></div>
            <h3 className="product-title"><Link to={`/product/${product._id}`}>{product.name}</Link></h3>
            <span className="price">{product.salePrice ? <><del><span>${product.price.toFixed(2)}</span></del><ins><span>${product.salePrice.toFixed(2)}</span></ins></> : `$${product.price.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
