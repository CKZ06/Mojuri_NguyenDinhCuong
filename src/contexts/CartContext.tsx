import type { ReactNode } from 'react'
import { useCartStore } from '../stores/cartStore'

export type { CartItem } from '../stores/cartStore'

export function CartProvider({ children }: { children: ReactNode }) {
  return children
}

export function useCart() {
  const store = useCartStore()
  return {
    ...store,
    count: store.items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: store.items.reduce((sum, item) => (
      sum + (item.product.salePrice ?? item.product.price) * item.quantity
    ), 0),
  }
}
