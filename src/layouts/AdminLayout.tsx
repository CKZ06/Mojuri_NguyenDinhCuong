import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

export default function AdminLayout() {
  const user = useAuthStore((state) => state.user)
  const loading = useAuthStore((state) => state.loading)
  const verifySession = useAuthStore((state) => state.verifySession)
  const [hydrated, setHydrated] = useState(() => useAuthStore.persist.hasHydrated())
  const [sessionChecked, setSessionChecked] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = useAuthStore.persist.onFinishHydration(() => setHydrated(true))
    if (useAuthStore.persist.hasHydrated()) setHydrated(true)
    return unsubscribe
  }, [])

  useEffect(() => {
    if (!hydrated) return
    let active = true
    void verifySession().finally(() => {
      if (active) setSessionChecked(true)
    })
    return () => {
      active = false
    }
  }, [hydrated, verifySession])

  if (!hydrated || !sessionChecked || loading) return <div className="admin-gate">Đang kiểm tra phiên đăng nhập…</div>
  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />
  if (user.role !== 'admin') return <Navigate to="/" replace />
  return <Outlet />
}
