import AppShell from '../components/AppShell'
import { useCart } from '../contexts/CartContext'

export const CartApiBodyClass = 'shop functional-body'

export default function CartApi() {
  const { items, subtotal, update, remove } = useCart()

  return (
    <AppShell>
      <section className="functional-container functional-page">
        <h1>Giỏ hàng</h1>
        {items.length === 0 ? (
          <div className="state-card">Giỏ hàng đang trống. <a href="/shop">Tiếp tục mua sắm</a></div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map(({ product, quantity }) => (
                <article className="cart-item" key={product._id}>
                  <img src={product.thumbnail} alt={product.name} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>${(product.salePrice ?? product.price).toFixed(2)}</p>
                  </div>
                  <input
                    aria-label={`Số lượng ${product.name}`}
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(event) => update(product._id, Number(event.target.value))}
                  />
                  <strong>${((product.salePrice ?? product.price) * quantity).toFixed(2)}</strong>
                  <button type="button" onClick={() => remove(product._id)}>Xóa</button>
                </article>
              ))}
            </div>
            <aside className="order-summary">
              <h2>Tổng đơn hàng</h2>
              <div><span>Tạm tính</span><strong>${subtotal.toFixed(2)}</strong></div>
              <div><span>Vận chuyển</span><strong>{subtotal >= 400 ? 'Miễn phí' : '$20.00'}</strong></div>
              <div className="summary-total">
                <span>Tổng cộng</span>
                <strong>${(subtotal + (subtotal >= 400 ? 0 : 20)).toFixed(2)}</strong>
              </div>
              <a className="primary-action" href="/checkout">Tiến hành thanh toán</a>
            </aside>
          </div>
        )}
      </section>
    </AppShell>
  )
}
