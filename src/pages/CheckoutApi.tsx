import { useState } from 'react'
import type { FormEvent } from 'react'
import AppShell from '../components/AppShell'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { apiRequest } from '../lib/api'
import type { Order } from '../types/api'

export const CheckoutApiBodyClass = 'shop functional-body'

export default function CheckoutApi() {
  const { user } = useAuth()
  const { items, subtotal, clear } = useCart()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [order, setOrder] = useState<Order | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setSubmitting(true)
    setError('')
    try {
      const result = await apiRequest<Order>('/orders', {
        method: 'POST',
        body: JSON.stringify({
          customer: {
            name: form.get('name'),
            email: form.get('email'),
            phone: form.get('phone'),
            address: form.get('address'),
            note: form.get('note'),
          },
          paymentMethod: form.get('paymentMethod'),
          items: items.map((item) => ({ product: item.product._id, quantity: item.quantity })),
        }),
      })
      setOrder(result)
      clear()
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể tạo đơn hàng')
    } finally {
      setSubmitting(false)
    }
  }

  if (order) {
    return (
      <AppShell>
        <section className="functional-container functional-page">
          <div className="success-card">
            <h1>Đặt hàng thành công</h1>
            <p>Mã đơn: <strong>{order._id}</strong></p>
            <p>Tổng thanh toán: <strong>${order.total.toFixed(2)}</strong></p>
            <a className="primary-action" href="/shop">Tiếp tục mua sắm</a>
          </div>
        </section>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <section className="functional-container functional-page">
        <h1>Thanh toán</h1>
        {items.length === 0 ? <div className="state-card">Không có sản phẩm để thanh toán.</div> : (
          <form className="checkout-layout" onSubmit={handleSubmit}>
            <div className="checkout-form">
              <h2>Thông tin nhận hàng</h2>
              <label>Họ tên<input name="name" required defaultValue={user?.name ?? ''} /></label>
              <label>Email<input name="email" type="email" required defaultValue={user?.email ?? ''} /></label>
              <label>Số điện thoại<input name="phone" required /></label>
              <label>Địa chỉ<textarea name="address" required /></label>
              <label>Ghi chú<textarea name="note" /></label>
              <label>Thanh toán
                <select name="paymentMethod">
                  <option value="cod">Thanh toán khi nhận hàng</option>
                  <option value="bank">Chuyển khoản ngân hàng</option>
                </select>
              </label>
            </div>
            <aside className="order-summary">
              <h2>Đơn hàng</h2>
              {items.map((item) => (
                <div key={item.product._id}>
                  <span>{item.product.name} × {item.quantity}</span>
                  <strong>${((item.product.salePrice ?? item.product.price) * item.quantity).toFixed(2)}</strong>
                </div>
              ))}
              <div className="summary-total">
                <span>Tổng cộng</span>
                <strong>${(subtotal + (subtotal >= 400 ? 0 : 20)).toFixed(2)}</strong>
              </div>
              {error && <p className="form-error">{error}</p>}
              <button className="primary-action" disabled={submitting} type="submit">
                {submitting ? 'Đang xử lý…' : 'Đặt hàng'}
              </button>
            </aside>
          </form>
        )}
      </section>
    </AppShell>
  )
}
