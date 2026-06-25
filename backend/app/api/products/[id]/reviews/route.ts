import type { NextRequest } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { createRecord, readDatabase, touchRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { parseJson, reviewSchema, validationDetails } from '@/lib/validation'

type Context = { params: Promise<{ id: string }> }
export function OPTIONS() { return options() }

export async function GET(_request: NextRequest, context: Context) {
  const { id } = await context.params
  const database = await readDatabase()
  return ok(database.reviews.filter((item) => item.product === id && item.approved).toSorted((a, b) => b.createdAt.localeCompare(a.createdAt)))
}

export async function POST(request: NextRequest, context: Context) {
  try {
    const { id } = await context.params
    const user = await getCurrentUser(request)
    const body = await parseJson(request, reviewSchema)
    if (!user && (!body.name || !body.email)) return fail('Vui lòng nhập họ tên và email', 422)
    const review = await updateDatabase((database) => {
      const product = database.products.find((item) => item._id === id)
      if (!product) throw new Error('PRODUCT_NOT_FOUND')
      const record = createRecord({ product: id, user: user?._id, name: user?.name ?? body.name!, email: (user?.email ?? body.email!).toLowerCase(), rating: body.rating, comment: body.comment, approved: true })
      database.reviews.push(record)
      const approved = database.reviews.filter((item) => item.product === id && item.approved)
      product.rating = approved.reduce((sum, item) => sum + item.rating, 0) / approved.length
      product.reviewCount = approved.length
      touchRecord(product)
      return record
    })
    return ok(review, 201)
  } catch (error) {
    if (error instanceof Error && error.message === 'PRODUCT_NOT_FOUND') return fail('Không tìm thấy sản phẩm', 404)
    const details = validationDetails(error)
    if (details) return fail('Dữ liệu đánh giá không hợp lệ', 422, details)
    return fail('Không thể gửi đánh giá', 400, getErrorMessage(error))
  }
}
