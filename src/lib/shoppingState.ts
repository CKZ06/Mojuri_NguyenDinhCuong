export const CART_STORAGE_KEY = 'mojuri-cart-v2'
export const WISHLIST_STORAGE_KEY = 'mojuri-wishlist-v2'
export const WISHLIST_UPDATED_EVENT = 'mojuri-wishlist-updated'

export function notifyWishlistUpdated() {
  window.dispatchEvent(new Event(WISHLIST_UPDATED_EVENT))
}

export function clearStoredShoppingState() {
  if (typeof window === 'undefined') return

  localStorage.removeItem(CART_STORAGE_KEY)
  localStorage.removeItem(WISHLIST_STORAGE_KEY)
  localStorage.removeItem('mojuri-cart')
  localStorage.removeItem('mojuri-wishlist')
  notifyWishlistUpdated()
}
