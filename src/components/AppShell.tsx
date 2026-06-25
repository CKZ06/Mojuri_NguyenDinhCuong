import type { ReactNode } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

export default function AppShell({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth()
  const { count } = useCart()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="functional-app">
      <header className="functional-header">
        <Link className="functional-logo" to="/">
          <img src="/media/logo.png" alt="Mojuri" />
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/track-order">Tra cứu đơn</NavLink>
          {user?.role === 'admin' && <NavLink to="/admin">Admin</NavLink>}
        </nav>
        <div className="functional-actions">
          {user ? (
            <>
              <span>Xin chào, {user.name}</span>
              <button type="button" onClick={handleLogout}>Đăng xuất</button>
            </>
          ) : <Link to="/login">Đăng nhập</Link>}
          <Link to="/cart">Giỏ hàng ({count})</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="functional-footer">
        <strong>Mojuri Jewelry</strong>
        <span>Frontend React Vite kết nối Next.js API</span>
      </footer>
    </div>
  )
}
