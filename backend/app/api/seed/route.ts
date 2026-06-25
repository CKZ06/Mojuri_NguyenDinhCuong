import bcrypt from 'bcryptjs'
import type { NextRequest } from 'next/server'
import { createRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'

const products = [
  { name: 'Medium Flat Hoops', slug: 'medium-flat-hoops', description: '<p>Classic polished hoops for everyday elegance.</p>', price: 100, thumbnail: '/media/product/1.jpg', hoverImage: '/media/product/1-2.jpg', images: ['/media/product/1.jpg', '/media/product/1-2.jpg'], stock: 30, featured: true, category: 'Earrings' },
  { name: 'Bold Pearl Hoop Earrings', slug: 'bold-pearl-hoop-earrings', description: '', price: 200, salePrice: 180, thumbnail: '/media/product/2.jpg', hoverImage: '/media/product/2-2.jpg', images: [], stock: 18, featured: true, category: 'Earrings' },
  { name: 'Twin Hoops', slug: 'twin-hoops', description: '', price: 150, thumbnail: '/media/product/3.jpg', hoverImage: '/media/product/3-2.jpg', images: [], stock: 24, featured: true, category: 'Earrings' },
  { name: 'Silver Turquoise Earrings', slug: 'silver-turquoise-earrings', description: '', price: 150, salePrice: 100, thumbnail: '/media/product/4.jpg', hoverImage: '/media/product/4-2.jpg', images: [], stock: 12, featured: true, category: 'Earrings' },
  { name: 'Classic Gold Ring', slug: 'classic-gold-ring', description: '', price: 240, thumbnail: '/media/product/5.jpg', hoverImage: '/media/product/5-2.jpg', images: [], stock: 15, featured: false, category: 'Rings' },
  { name: 'Minimal Chain Necklace', slug: 'minimal-chain-necklace', description: '', price: 320, thumbnail: '/media/product/6.jpg', hoverImage: '/media/product/6-2.jpg', images: [], stock: 10, featured: false, category: 'Necklaces' },
]
const categories = [
  { name: 'Rings', slug: 'rings', type: 'product' as const }, { name: 'Necklaces', slug: 'necklaces', type: 'product' as const },
  { name: 'Earrings', slug: 'earrings', type: 'product' as const }, { name: 'Bracelets', slug: 'bracelets', type: 'product' as const },
  { name: 'Tips', slug: 'tips', type: 'blog' as const }, { name: 'Collections', slug: 'collections', type: 'blog' as const }, { name: 'News', slug: 'news', type: 'blog' as const },
]

export function OPTIONS() { return options() }
export async function POST(request: NextRequest) {
  try {
    if (request.headers.get('x-seed-secret') !== (process.env.SEED_SECRET ?? 'mojuri-seed')) return fail('Seed secret không hợp lệ', 403)
    const password = await bcrypt.hash('123', 12)
    const result = await updateDatabase((database) => {
      const existingAdmin = database.users.find((item) => item.email === 'admin@gmail.com')
        ?? database.users.find((item) => item.role === 'admin')
      const admin = existingAdmin ?? createRecord({ name: 'Mojuri Admin', email: 'admin@gmail.com', password, role: 'admin' as const, isActive: true })
      for (const user of database.users) {
        if (user._id !== admin._id) user.role = 'user'
      }
      Object.assign(admin, { name: 'Mojuri Admin', email: 'admin@gmail.com', password, role: 'admin', isActive: true })
      if (!existingAdmin) database.users.push(admin)
      database.products = products.map((item) => createRecord({ ...item, stockStatus: item.stock > 0 ? 'in_stock' as const : 'out_of_stock' as const, rating: 0, reviewCount: 0, isActive: true }))
      database.categories = categories.map((item) => createRecord({ ...item, description: '', isActive: true }))
      database.reviews = []; database.orders = []; database.contacts = []
      database.posts = [
        createRecord({ title: 'Cách bảo quản trang sức bạc luôn sáng đẹp', slug: 'cach-bao-quan-trang-suc-bac', excerpt: 'Những thói quen đơn giản giúp trang sức bạc hạn chế xỉn màu.', content: '<h2>Giữ trang sức luôn khô ráo</h2><p>Hãy tháo trang sức trước khi tắm, bơi hoặc sử dụng hóa chất.</p>', thumbnail: '/media/blog/1.jpg', category: 'Tips', status: 'published' as const, publishedAt: new Date().toISOString(), author: admin._id }),
        createRecord({ title: 'Bộ sưu tập nhẫn tối giản mới', slug: 'bo-suu-tap-nhan-toi-gian', excerpt: 'Khám phá những thiết kế nhẫn thanh lịch cho phong cách hằng ngày.', content: '<p>Bộ sưu tập mới kết hợp đường nét tối giản và chất liệu tinh tế.</p>', thumbnail: '/media/blog/2.jpg', category: 'Collections', status: 'published' as const, publishedAt: new Date().toISOString(), author: admin._id }),
      ]
      return { products: database.products.length, categories: database.categories.length, posts: database.posts.length, admin: { email: admin.email, password: '123' } }
    })
    return ok(result)
  } catch (error) { return fail('Không thể tạo dữ liệu mẫu', 500, getErrorMessage(error)) }
}
