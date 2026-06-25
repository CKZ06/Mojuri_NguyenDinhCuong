import { z } from 'zod'

const requiredText = z.string().trim().min(1)
const optionalUrl = z.string().trim().min(1).optional().or(z.literal(''))

export const registerSchema = z.object({
  name: requiredText.min(2).max(100),
  email: z.email(),
  password: z.string().min(6).max(100),
})

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
})

export const productSchema = z.object({
  name: requiredText.max(200),
  slug: requiredText.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().default(''),
  price: z.number().nonnegative(),
  salePrice: z.number().nonnegative().optional(),
  category: requiredText,
  thumbnail: requiredText,
  hoverImage: optionalUrl,
  images: z.array(z.string().trim().min(1)).default([]),
  stock: z.number().int().nonnegative(),
  stockStatus: z.enum(['in_stock', 'out_of_stock']).optional(),
  featured: z.boolean().default(false),
  isActive: z.boolean().default(true),
}).refine(
  (product) => product.salePrice === undefined || product.salePrice <= product.price,
  { path: ['salePrice'], message: 'Giá khuyến mãi không được lớn hơn giá bán' },
)

export const categorySchema = z.object({
  name: requiredText.max(100),
  slug: requiredText.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  type: z.enum(['product', 'blog']),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
})

export const reviewSchema = z.object({
  name: requiredText.max(100).optional(),
  email: z.email().optional(),
  rating: z.number().int().min(1).max(5),
  comment: requiredText.min(3).max(2000),
})

export const customerSchema = z.object({
  name: requiredText.max(100),
  email: z.email(),
  phone: requiredText.max(30),
  address: requiredText.max(500),
  note: z.string().max(2000).optional(),
})

export const orderSchema = z.object({
  customer: customerSchema,
  paymentMethod: z.enum(['cod', 'bank']).default('cod'),
  items: z.array(z.object({
    product: requiredText,
    quantity: z.number().int().positive(),
  })).min(1),
})

export const orderStatusSchema = z.object({
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  paymentStatus: z.enum(['unpaid', 'paid']),
})

export const contactSchema = z.object({
  name: requiredText.max(100),
  email: z.email(),
  subject: requiredText.max(200),
  message: requiredText.min(2, 'Nội dung liên hệ phải có ít nhất 2 ký tự').max(5000),
})

export const contactStatusSchema = z.object({
  status: z.enum(['new', 'read', 'replied']),
})

export const postSchema = z.object({
  title: requiredText.max(250),
  slug: requiredText.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  excerpt: z.string().max(1000).default(''),
  content: requiredText,
  thumbnail: requiredText,
  category: requiredText,
  status: z.enum(['draft', 'published']).default('draft'),
  publishedAt: z.coerce.date().optional(),
})

export async function parseJson<T>(request: Request, schema: z.ZodType<T>) {
  return schema.parse(await request.json())
}

export function validationDetails(error: unknown) {
  if (!(error instanceof z.ZodError)) return null
  return error.issues.map((issue) => ({
    field: issue.path.join('.'),
    message: issue.message,
  }))
}
