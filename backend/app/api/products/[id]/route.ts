import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { readDatabase, touchRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { parseJson, productSchema, validationDetails } from '@/lib/validation'

type Context = { params: Promise<{ id: string }> }
export function OPTIONS() { return options() }

export async function GET(_request: NextRequest, context: Context) {
  const { id } = await context.params
  const database = await readDatabase()
  const product = database.products.find((item) => item._id === id)
  if (!product) return fail('Không tìm thấy sản phẩm', 404)
  const reviews = database.reviews.filter((item) => item.product === id && item.approved).toSorted((a, b) => b.createdAt.localeCompare(a.createdAt))
  const related = database.products.filter((item) => item._id !== id && item.category === product.category && item.isActive).slice(0, 4)
  return ok({ ...product, reviews, related })
}

export async function PUT(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin'])
    const { id } = await context.params
    const body = await parseJson(request, productSchema)
    const product = await updateDatabase((database) => {
      const record = database.products.find((item) => item._id === id)
      if (!record) return null
      if (database.products.some((item) => item._id !== id && item.slug === body.slug)) throw new Error('SLUG_EXISTS')
      Object.assign(record, body, { stockStatus: body.stock > 0 ? 'in_stock' : 'out_of_stock' })
      return touchRecord(record)
    })
    if (!product) return fail('Không tìm thấy sản phẩm', 404)
    return ok(product)
  } catch (error) {
    const auth = authError(error)
    if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error)
    if (details) return fail('Dữ liệu sản phẩm không hợp lệ', 422, details)
    return fail('Không thể cập nhật sản phẩm', 400, getErrorMessage(error))
  }
}

export async function DELETE(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin'])
    const { id } = await context.params
    const deleted = await updateDatabase((database) => {
      const index = database.products.findIndex((item) => item._id === id)
      if (index < 0) return false
      database.products.splice(index, 1)
      database.reviews = database.reviews.filter((item) => item.product !== id)
      return true
    })
    return deleted ? ok({ deleted: true }) : fail('Không tìm thấy sản phẩm', 404)
  } catch (error) {
    const auth = authError(error)
    if (auth) return fail(auth.message, auth.status)
    return fail('Không thể xóa sản phẩm', 400, getErrorMessage(error))
  }
}
