import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell'
import { useAuth } from '../contexts/AuthContext'

export const LoginApiBodyClass = 'page functional-body'

export default function LoginApi() {
  const { login, register } = useAuth()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    const form = new FormData(event.currentTarget)
    setSubmitting(true)
    setError('')
    try {
      const user = mode === 'login'
        ? await login(String(form.get('email')), String(form.get('password')))
        : await register(String(form.get('name')), String(form.get('email')), String(form.get('password')))
      const requestedPath = (location.state as { from?: string } | null)?.from
      if (user.role === 'admin') {
        navigate('/admin', { replace: true })
        return
      }
      navigate(requestedPath ?? '/', { replace: true })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể xác thực')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AppShell>
      <section className="auth-page">
        <div className="auth-panel image-panel">
          <p>Mojuri members</p>
          <h1>Trang sức đẹp hơn khi hành trình mua sắm cũng mượt mà.</h1>
        </div>
        <div className="auth-panel form-panel">
          <div className="auth-tabs">
            <button className={mode === 'login' ? 'active' : ''} type="button" onClick={() => setMode('login')}>Đăng nhập</button>
            <button className={mode === 'register' ? 'active' : ''} type="button" onClick={() => setMode('register')}>Đăng ký</button>
          </div>
          <form onSubmit={handleSubmit}>
            <h2>{mode === 'login' ? 'Chào mừng trở lại' : 'Tạo tài khoản mới'}</h2>
            {mode === 'register' && <label>Họ tên<input name="name" required /></label>}
            <label>Email<input name="email" type="email" required /></label>
            <label>Mật khẩu<input name="password" type="password" minLength={mode === 'login' ? 3 : 6} required /></label>
            {error && <p className="form-error">{error}</p>}
            <button className="primary-action" disabled={submitting} type="submit">
              {submitting ? 'Đang xử lý…' : mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
            </button>
          </form>
        </div>
      </section>
    </AppShell>
  )
}
