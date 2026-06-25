import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { createRecord, readDatabase, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { parseJson, productSchema, validationDetails } from '@/lib/validation'

export function OPTIONS() { return options() }

export async function GET(request: NextRequest) {
  try {
    const database = await readDatabase()
    const params = request.nextUrl.searchParams
    const page = Math.max(1, Number(params.get('page')) || 1)
    const limit = Math.min(100, Math.max(1, Number(params.get('limit')) || 12))
    const search = params.get('search')?.trim().toLowerCase()
    const category = params.get('category')?.trim()
    const minPrice = Number(params.get('minPrice'))
    const maxPrice = Number(params.get('maxPrice'))
    let items = database.products.filter((product) => product.isActive)
    if (search) items = items.filter((product) => `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(search))
    if (category) items = items.filter((product) => product.category === category)
    if (params.get('featured') === 'true') items = items.filter((product) => product.featured)
    if (Number.isFinite(minPrice) && minPrice > 0) items = items.filter((product) => product.price >= minPrice)
    if (Number.isFinite(maxPrice) && maxPrice > 0) items = items.filter((product) => product.price <= maxPrice)
    const sort = params.get('sort')
    items.sort(sort === 'price_asc' ? (a, b) => a.price - b.price : sort === 'price_desc' ? (a, b) => b.price - a.price : (a, b) => b.createdAt.localeCompare(a.createdAt))
    const total = items.length
    items = items.slice((page - 1) * limit, page * limit)
    return ok({ items, pagination: { page, limit, total, pages: Math.ceil(total / limit) } })
  } catch (error) {
    return fail('Không thể tải sản phẩm', 500, getErrorMessage(error))
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireUser(request, ['admin'])
    const body = await parseJson(request, productSchema)
    const product = await updateDatabase((database) => {
      if (database.products.some((item) => item.slug === body.slug)) throw new Error('SLUG_EXISTS')
      const record = createRecord({ ...body, description: body.description ?? '', hoverImage: body.hoverImage ?? '', images: body.images ?? [], salePrice: body.salePrice, stockStatus: body.stock > 0 ? 'in_stock' as const : 'out_of_stock' as const, rating: 0, reviewCount: 0 })
      database.products.push(record)
      return record
    })
    return ok(product, 201)
  } catch (error) {
    const auth = authError(error)
    if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error)
    if (details) return fail('Dữ liệu sản phẩm không hợp lệ', 422, details)
    return fail(error instanceof Error && error.message === 'SLUG_EXISTS' ? 'Slug sản phẩm đã tồn tại' : 'Không thể tạo sản phẩm', 400, getErrorMessage(error))
  }
}
