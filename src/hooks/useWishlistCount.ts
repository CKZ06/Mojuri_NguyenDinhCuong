import { useEffect, useState } from 'react'
import { WISHLIST_STORAGE_KEY, WISHLIST_UPDATED_EVENT } from '../lib/shoppingState'
export { notifyWishlistUpdated, WISHLIST_STORAGE_KEY } from '../lib/shoppingState'

export function getWishlistCount() {
  if (typeof window === 'undefined') return 0
  try {
    const items = JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY) ?? '[]') as unknown[]
    return Array.isArray(items) ? items.length : 0
  } catch {
    return 0
  }
}

export function useWishlistCount() {
  const [count, setCount] = useState(getWishlistCount)

  useEffect(() => {
    function refresh() {
      setCount(getWishlistCount())
    }

    window.addEventListener('storage', refresh)
    window.addEventListener(WISHLIST_UPDATED_EVENT, refresh)
    refresh()

    return () => {
      window.removeEventListener('storage', refresh)
      window.removeEventListener(WISHLIST_UPDATED_EVENT, refresh)
    }
  }, [])

  return count
}
