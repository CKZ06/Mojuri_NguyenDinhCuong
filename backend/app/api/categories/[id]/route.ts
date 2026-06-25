import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { touchRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { categorySchema, parseJson, validationDetails } from '@/lib/validation'
type Context = { params: Promise<{ id: string }> }
export function OPTIONS() { return options() }
export async function PUT(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin']); const { id } = await context.params; const body = await parseJson(request, categorySchema)
    const category = await updateDatabase((database) => { const record = database.categories.find((item) => item._id === id); if (!record) return null; Object.assign(record, body); return touchRecord(record) })
    return category ? ok(category) : fail('Không tìm thấy danh mục', 404)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error); if (details) return fail('Dữ liệu danh mục không hợp lệ', 422, details)
    return fail('Không thể cập nhật danh mục', 400, getErrorMessage(error))
  }
}
export async function DELETE(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin']); const { id } = await context.params
    const deleted = await updateDatabase((database) => { const index = database.categories.findIndex((item) => item._id === id); if (index < 0) return false; database.categories.splice(index, 1); return true })
    return deleted ? ok({ deleted: true }) : fail('Không tìm thấy danh mục', 404)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    return fail('Không thể xóa danh mục', 400, getErrorMessage(error))
  }
}
