import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { apiRequest, clearToken, setToken } from '../lib/api'
import type { User } from '../types/api'

type AuthResult = { token: string; user: User }

type AuthState = {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  verifySession: () => Promise<User | null>
  login: (email: string, password: string) => Promise<User>
  register: (name: string, email: string, password: string) => Promise<User>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),
      async verifySession() {
        set({ loading: true })
        try {
          const user = await apiRequest<User>('/auth/me')
          set({ user, loading: false })
          return user
        } catch {
          clearToken()
          set({ user: null, loading: false })
          return null
        }
      },
      async login(email, password) {
        const result = await apiRequest<AuthResult>('/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        })
        setToken(result.token)
        set({ user: result.user })
        return result.user
      },
      async register(name, email, password) {
        const result = await apiRequest<AuthResult>('/auth/register', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
        })
        setToken(result.token)
        set({ user: result.user })
        return result.user
      },
      logout() {
        clearToken()
        set({ user: null })
      },
    }),
    {
      name: 'mojuri-auth',
      partialize: (state) => ({ user: state.user }),
    },
  ),
)
