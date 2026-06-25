import type { ReactNode } from 'react'
import { useAuthStore } from '../stores/authStore'

export function AuthProvider({ children }: { children: ReactNode }) {
  return children
}

export function useAuth() {
  return useAuthStore()
}
