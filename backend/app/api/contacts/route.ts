import type { NextRequest } from 'next/server'
import { authError, getCurrentUser, requireUser } from '@/lib/auth'
import { createRecord, readDatabase, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { contactSchema, parseJson, validationDetails } from '@/lib/validation'
export function OPTIONS() { return options() }
export async function GET(request: NextRequest) {
  try {
    await requireUser(request, ['admin']); const database = await readDatabase()
    return ok(database.contacts.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt)))
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    return fail('Không thể tải liên hệ', 500, getErrorMessage(error))
  }
}
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    const body = await parseJson(request, contactSchema)
    const contact = await updateDatabase((database) => {
      const record = createRecord({
        ...body,
        user: user?._id,
        name: user?.name ?? body.name,
        email: user?.email ?? body.email,
        status: 'new' as const,
      })
      database.contacts.push(record)
      return record
    })
    return ok(contact, 201)
  } catch (error) {
    const details = validationDetails(error); if (details) return fail('Dữ liệu liên hệ không hợp lệ', 422, details)
    return fail('Không thể gửi liên hệ', 400, getErrorMessage(error))
  }
}
