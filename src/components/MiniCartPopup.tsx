import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import type { MouseEvent } from 'react'
import { useCart } from '../contexts/CartContext'

export default function MiniCartPopup() {
  const { items, subtotal, remove } = useCart()
  const remainingForFreeShip = Math.max(0, 400 - subtotal)
  const progress = Math.min(100, Math.round((subtotal / 400) * 100))

  useEffect(() => {
    function handleDocumentClick(event: Event) {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLButtonElement>('[data-mini-cart-remove]')
        : null

      if (!target) return

      const productId = target.dataset.productId
      if (!productId) return

      event.preventDefault()
      event.stopPropagation()
      if ('stopImmediatePropagation' in event) event.stopImmediatePropagation()
      remove(productId)
    }

    document.addEventListener('click', handleDocumentClick, true)
    document.addEventListener('pointerdown', handleDocumentClick, true)

    return () => {
      document.removeEventListener('click', handleDocumentClick, true)
      document.removeEventListener('pointerdown', handleDocumentClick, true)
    }
  }, [remove])

  function handleRemove(event: MouseEvent<HTMLButtonElement>, productId: string) {
    event.preventDefault()
    event.stopPropagation()
    remove(productId)
  }

  if (items.length === 0) {
    return (
      <div className="cart-empty-wrap live-mini-cart">
        <ul className="cart-list">
          <li className="empty">
            <span>No products in the cart.</span>
            <Link className="go-shop" to="/shop">
              GO TO SHOP
              <i aria-hidden="true" className="arrow_right"></i>
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="cart-list-wrap live-mini-cart">
      <ul className="cart-list">
        {items.map(({ product, quantity }) => {
          const price = product.salePrice ?? product.price
          return (
            <li className="mini-cart-item" key={product._id}>
              <button type="button" className="live-mini-cart-remove" title="Remove this item" aria-label={`Remove ${product.name}`} data-mini-cart-remove data-product-id={product._id} onClick={(event) => handleRemove(event, product._id)}>
                x
              </button>
              <Link to={`/product/${product._id}`} className="product-image">
                <img width={600} height={600} src={product.thumbnail} alt={product.name} />
              </Link>
              <Link to={`/product/${product._id}`} className="product-name">
                {product.name}
              </Link>
              <div className="quantity">Qty: {quantity}</div>
              <div className="price">${(price * quantity).toFixed(2)}</div>
            </li>
          )
        })}
      </ul>
      <div className="total-cart">
        <div className="title-total">Total:</div>
        <div className="total-price">
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <div className="free-ship">
        <div className="title-ship">
          {remainingForFreeShip > 0 ? (
            <>
              Buy <strong>${remainingForFreeShip.toFixed(0)}</strong> more to enjoy <strong>FREE Shipping</strong>
            </>
          ) : (
            <strong>FREE Shipping</strong>
          )}
        </div>
        <div className="total-percent">
          <div className="percent" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/cart" className="button btn view-cart btn-primary">View cart</Link>
        <Link to="/checkout" className="button btn checkout btn-default">Check out</Link>
      </div>
    </div>
  )
}
