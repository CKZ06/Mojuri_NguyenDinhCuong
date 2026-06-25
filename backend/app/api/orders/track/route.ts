import type { NextRequest } from 'next/server'
import { readDatabase } from '@/lib/db'
import { fail, ok, options } from '@/lib/http'
export function OPTIONS() { return options() }
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')?.trim(); const email = request.nextUrl.searchParams.get('email')?.trim().toLowerCase()
  if (!code || !email) return fail('Vui lòng nhập mã đơn và email')
  const database = await readDatabase(); const order = database.orders.find((item) => item._id === code && item.customer.email.toLowerCase() === email)
  return order ? ok(order) : fail('Không tìm thấy đơn hàng phù hợp', 404)
}
