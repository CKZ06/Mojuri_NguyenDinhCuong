import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { createRecord, readDatabase, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { categorySchema, parseJson, validationDetails } from '@/lib/validation'
export function OPTIONS() { return options() }
export async function GET(request: NextRequest) {
  const database = await readDatabase()
  const type = request.nextUrl.searchParams.get('type')
  return ok(database.categories.filter((item) => item.isActive && (!type || item.type === type)).toSorted((a, b) => a.name.localeCompare(b.name)))
}
export async function POST(request: NextRequest) {
  try {
    await requireUser(request, ['admin']); const body = await parseJson(request, categorySchema)
    const category = await updateDatabase((database) => {
      if (database.categories.some((item) => item.slug === body.slug && item.type === body.type)) throw new Error('SLUG_EXISTS')
      const record = createRecord({ ...body, description: body.description ?? '', isActive: body.isActive ?? true }); database.categories.push(record); return record
    })
    return ok(category, 201)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error); if (details) return fail('Dữ liệu danh mục không hợp lệ', 422, details)
    return fail('Không thể tạo danh mục', 400, getErrorMessage(error))
  }
}
