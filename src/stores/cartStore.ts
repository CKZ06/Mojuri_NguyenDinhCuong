import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CART_STORAGE_KEY } from '../lib/shoppingState'
import type { Product } from '../types/api'

export type CartItem = { product: Product; quantity: number }

type CartState = {
  items: CartItem[]
  add: (product: Product, quantity?: number) => void
  update: (productId: string, quantity: number) => void
  remove: (productId: string) => void
  clear: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add(product, quantity = 1) {
        set((state) => {
          const existing = state.items.find((item) => item.product._id === product._id)
          return {
            items: existing
              ? state.items.map((item) => item.product._id === product._id
                ? { ...item, quantity: Math.min(product.stock, item.quantity + quantity) }
                : item)
              : [...state.items, { product, quantity }],
          }
        })
      },
      update(productId, quantity) {
        set((state) => ({
          items: state.items.map((item) => item.product._id === productId
            ? { ...item, quantity: Math.max(1, Math.min(item.product.stock, quantity)) }
            : item),
        }))
      },
      remove(productId) {
        set((state) => ({ items: state.items.filter((item) => item.product._id !== productId) }))
      },
      clear() {
        set({ items: [] })
      },
    }),
    { name: CART_STORAGE_KEY },
  ),
)
