export type UserRole = 'user' | 'admin'

export type User = {
  _id?: string
  id?: string
  name: string
  email: string
  role: UserRole
}

export type Product = {
  _id: string
  name: string
  slug: string
  description: string
  price: number
  salePrice?: number
  category: string
  thumbnail: string
  hoverImage?: string
  images?: string[]
  stock: number
  stockStatus?: 'in_stock' | 'out_of_stock'
  rating: number
  reviewCount: number
  featured: boolean
  isActive: boolean
  reviews?: Review[]
  related?: Product[]
}

export type Review = {
  _id: string
  name: string
  email: string
  rating: number
  comment: string
  createdAt: string
}

export type Category = {
  _id: string
  name: string
  slug: string
  type: 'product' | 'blog'
  description?: string
  isActive: boolean
}

export type Order = {
  _id: string
  customer: {
    name: string
    email: string
    phone: string
    address: string
  }
  items: Array<{
    product: string
    name: string
    price: number
    quantity: number
    thumbnail: string
  }>
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentStatus: 'unpaid' | 'paid'
  createdAt: string
}

export type ContactMessage = {
  _id: string
  user?: string
  name: string
  email: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied'
  createdAt: string
}

export type BlogPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  thumbnail: string
  category: string
  status: 'draft' | 'published'
  publishedAt?: string
  createdAt: string
  author?: { name: string }
  recent?: BlogPost[]
}

export type ApiResponse<T> = {
  success: boolean
  data: T
  message?: string
  details?: unknown
}
