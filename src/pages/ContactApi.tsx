import { useState } from 'react'
import type { FormEvent } from 'react'
import AppShell from '../components/AppShell'
import { useAuth } from '../contexts/AuthContext'
import { apiRequest } from '../lib/api'
import type { ContactMessage } from '../types/api'

export const ContactApiBodyClass = 'page functional-body'

export default function ContactApi() {
  const { user } = useAuth()
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setSubmitting(true)
    try {
      await apiRequest<ContactMessage>('/contacts', {
        method: 'POST',
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          subject: form.get('subject'),
          message: form.get('message'),
        }),
      })
      setMessage('Tin nhắn đã được gửi. Mojuri sẽ phản hồi bạn sớm nhất.')
      event.currentTarget.reset()
    } catch (reason) {
      setMessage(reason instanceof Error ? reason.message : 'Không thể gửi tin nhắn')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AppShell>
      <section className="functional-hero compact"><p>We would love to hear from you</p><h1>Contact Us</h1></section>
      <section className="functional-container contact-layout">
        <div className="contact-copy">
          <p className="category">Mojuri support</p>
          <h2>Chúng tôi luôn sẵn lòng lắng nghe.</h2>
          <p>Hãy gửi câu hỏi về sản phẩm, đơn hàng hoặc chính sách cửa hàng. Bộ phận CSKH sẽ liên hệ qua email.</p>
          <p><strong>Email:</strong> support@mojuri.local</p>
          <p><strong>Điện thoại:</strong> 01743 234500</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Họ tên<input name="name" required defaultValue={user?.name ?? ''} readOnly={Boolean(user)} /></label>
          <label>Email<input name="email" type="email" required defaultValue={user?.email ?? ''} readOnly={Boolean(user)} /></label>
          <label>Tiêu đề<input name="subject" required /></label>
          <label>Nội dung<textarea name="message" rows={7} required /></label>
          {message && <p className="form-notice">{message}</p>}
          <button className="primary-action" disabled={submitting} type="submit">{submitting ? 'Đang gửi…' : 'Gửi tin nhắn'}</button>
        </form>
      </section>
    </AppShell>
  )
}
