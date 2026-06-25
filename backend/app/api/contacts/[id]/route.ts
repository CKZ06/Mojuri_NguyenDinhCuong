import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { touchRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { contactStatusSchema, parseJson, validationDetails } from '@/lib/validation'
type Context = { params: Promise<{ id: string }> }
export function OPTIONS() { return options() }
export async function PATCH(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin']); const { id } = await context.params; const { status } = await parseJson(request, contactStatusSchema)
    const contact = await updateDatabase((database) => { const record = database.contacts.find((item) => item._id === id); if (!record) return null; record.status = status; return touchRecord(record) })
    return contact ? ok(contact) : fail('Không tìm thấy liên hệ', 404)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error); if (details) return fail('Trạng thái liên hệ không hợp lệ', 422, details)
    return fail('Không thể cập nhật liên hệ', 400, getErrorMessage(error))
  }
}
