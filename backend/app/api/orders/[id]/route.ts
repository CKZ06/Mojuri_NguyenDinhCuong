import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { touchRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { orderStatusSchema, parseJson, validationDetails } from '@/lib/validation'
type Context = { params: Promise<{ id: string }> }
export function OPTIONS() { return options() }
export async function PATCH(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin']); const { id } = await context.params; const body = await parseJson(request, orderStatusSchema)
    const order = await updateDatabase((database) => { const record = database.orders.find((item) => item._id === id); if (!record) return null; record.status = body.status; record.paymentStatus = body.paymentStatus; return touchRecord(record) })
    return order ? ok(order) : fail('Không tìm thấy đơn hàng', 404)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error); if (details) return fail('Trạng thái đơn hàng không hợp lệ', 422, details)
    return fail('Không thể cập nhật đơn hàng', 400, getErrorMessage(error))
  }
}
