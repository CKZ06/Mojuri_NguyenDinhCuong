import { useState } from 'react'
import type { FormEvent } from 'react'
import AppShell from '../components/AppShell'
import { apiRequest } from '../lib/api'
import type { Order } from '../types/api'

const labels: Record<Order['status'], string> = {
  pending: 'Chờ xử lý',
  processing: 'Đang chuẩn bị',
  shipped: 'Đang giao',
  delivered: 'Đã giao',
  cancelled: 'Đã hủy',
}

export const OrderTrackingBodyClass = 'shop functional-body'

export default function OrderTracking() {
  const [order, setOrder] = useState<Order | null>(null)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    try {
      const result = await apiRequest<Order>(`/orders/track?code=${encodeURIComponent(String(form.get('code')))}&email=${encodeURIComponent(String(form.get('email')))}`)
      setOrder(result)
      setError('')
    } catch (reason) {
      setOrder(null)
      setError(reason instanceof Error ? reason.message : 'Không tìm thấy đơn hàng')
    }
  }

  return (
    <AppShell>
      <section className="functional-container functional-page tracking-page">
        <h1>Tra cứu đơn hàng</h1>
        <form className="tracking-form" onSubmit={handleSubmit}>
          <label>Mã đơn hàng<input name="code" required placeholder="Ví dụ: 665..." /></label>
          <label>Email đặt hàng<input name="email" type="email" required /></label>
          <button className="primary-action" type="submit">Tra cứu</button>
        </form>
        {error && <div className="state-card error">{error}</div>}
        {order && (
          <div className="tracking-result">
            <div><span>Mã đơn</span><strong>#{order._id}</strong></div>
            <div><span>Khách hàng</span><strong>{order.customer.name}</strong></div>
            <div><span>Trạng thái</span><strong>{labels[order.status]}</strong></div>
            <div><span>Tổng tiền</span><strong>${order.total.toFixed(2)}</strong></div>
          </div>
        )}
      </section>
    </AppShell>
  )
}
