import { Link } from 'react-router-dom'
import { useState } from 'react'
import { notifyWishlistUpdated, WISHLIST_STORAGE_KEY } from '../lib/shoppingState'
import type { Product } from '../types/api'

const COMPARE_KEY = 'mojuri-compare'

function readStoredProducts(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as Product[]
  } catch {
    return []
  }
}

function hasStoredProduct(key: string, productId: string) {
  if (typeof window === 'undefined') return false
  return readStoredProducts(key).some((item) => item._id === productId)
}

function toggleStoredProduct(key: string, product: Product, limit?: number) {
  const products = readStoredProducts(key)
  const exists = products.some((item) => item._id === product._id)
  const next = exists ? products.filter((item) => item._id !== product._id) : [product, ...products].slice(0, limit)
  localStorage.setItem(key, JSON.stringify(next))
  return !exists
}

export default function MojuriProductCard({ product, onAdd, columnClass = 'col-xl-4 col-lg-4 col-md-4 col-sm-6' }: {
  product: Product
  onAdd: (product: Product) => void
  columnClass?: string
}) {
  const [wished, setWished] = useState(() => hasStoredProduct(WISHLIST_STORAGE_KEY, product._id))
  const [compared, setCompared] = useState(() => hasStoredProduct(COMPARE_KEY, product._id))
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [cartAdded, setCartAdded] = useState(false)
  const currentPrice = product.salePrice ?? product.price

  function handleAddToCart() {
    if (product.stock < 1) return
    onAdd(product)
    setCartAdded(true)
    window.setTimeout(() => setCartAdded(false), 1200)
  }

  function handleWishlist() {
    setWished(toggleStoredProduct(WISHLIST_STORAGE_KEY, product))
    notifyWishlistUpdated()
  }

  function handleCompare() {
    setCompared(toggleStoredProduct(COMPARE_KEY, product, 4))
  }

  return (
    <div className={columnClass}>
      <div className="products-entry clearfix product-wapper">
        <div className="products-thumb">
          {product.featured && <div className="product-lable"><div className="hot">Hot</div></div>}
          <div className="product-thumb-hover">
            <Link to={`/product/${product._id}`}>
              <img width={600} height={600} src={product.thumbnail} className="post-image" alt={product.name} />
              <img width={600} height={600} src={product.hoverImage || product.thumbnail} className="hover-image back" alt={product.name} />
            </Link>
          </div>
          <div className="product-button">
            <div className="btn-add-to-cart" data-title={product.stock > 0 ? 'Add to cart' : 'Out of stock'}>
              <button type="button" className={`product-btn button ${cartAdded ? 'added' : ''}`} disabled={product.stock < 1} onClick={handleAddToCart} aria-label={product.stock > 0 ? `Add ${product.name} to cart` : `${product.name} is out of stock`}>
                {product.stock > 0 ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>
            <div className="btn-wishlist" data-title={wished ? 'Remove wishlist' : 'Wishlist'}>
              <button type="button" className={`product-btn ${wished ? 'added' : ''}`} onClick={handleWishlist} aria-pressed={wished} aria-label={`${wished ? 'Remove from' : 'Add to'} wishlist`}>
                Wishlist
              </button>
            </div>
            <div className="btn-compare" data-title={compared ? 'Remove compare' : 'Compare'}>
              <button type="button" className={`product-btn ${compared ? 'added' : ''}`} onClick={handleCompare} aria-pressed={compared} aria-label={`${compared ? 'Remove from' : 'Add to'} compare`}>
                Compare
              </button>
            </div>
            <span className="product-quickview" data-title="Quick View">
              <a href={`/product/${product._id}`} className="quickview quickview-button" onClick={(event) => { event.preventDefault(); setQuickViewOpen(true) }} aria-label={`Quick view ${product.name}`}>
                Quick View <i className="icon-search" />
              </a>
            </span>
          </div>
          {product.stock < 1 && <div className="product-stock"><span className="stock">Out Of Stock</span></div>}
        </div>
        <div className="products-content">
          <div className="contents text-center">
            <div className="rating"><div className={`star star-${Math.round(product.rating)}`} /><span className="count">({product.reviewCount} review)</span></div>
            <h3 className="product-title"><Link to={`/product/${product._id}`}>{product.name}</Link></h3>
            <span className="price">{product.salePrice ? <><del><span>${product.price.toFixed(2)}</span></del><ins><span>${product.salePrice.toFixed(2)}</span></ins></> : `$${product.price.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
      {quickViewOpen && (
        <div className="mojuri-quickview-backdrop" role="dialog" aria-modal="true" aria-label={`Quick view ${product.name}`}>
          <div className="mojuri-quickview-panel">
            <button type="button" className="mojuri-quickview-close" onClick={() => setQuickViewOpen(false)} aria-label="Close quick view">x</button>
            <div className="mojuri-quickview-media">
              <img src={product.thumbnail} alt={product.name} />
            </div>
            <div className="mojuri-quickview-content">
              <h2>{product.name}</h2>
              <div className="price-single">
                {product.salePrice && <del>${product.price.toFixed(2)}</del>}
                <span>${currentPrice.toFixed(2)}</span>
              </div>
              <p className={product.stock > 0 ? 'quickview-stock in-stock' : 'quickview-stock out-stock'}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </p>
              <div className="quickview-description" dangerouslySetInnerHTML={{ __html: product.description || 'No description yet.' }} />
              <div className="mojuri-quickview-actions">
                <button type="button" className="button" disabled={product.stock < 1} onClick={handleAddToCart}>
                  {product.stock > 0 ? 'Add to cart' : 'Out of stock'}
                </button>
                <Link className="button quick-buy" to={`/product/${product._id}`}>View details</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
