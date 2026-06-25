import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { readDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
export function OPTIONS() { return options() }
export async function GET(request: NextRequest) {
  try {
    await requireUser(request, ['admin']); const database = await readDatabase(); const monthly = request.nextUrl.searchParams.get('period') === 'month'
    const groups = new Map<string, { label: string; revenue: number; orders: number }>()
    for (const order of database.orders.filter((item) => item.status !== 'cancelled')) {
      const label = order.createdAt.slice(0, monthly ? 7 : 10); const item = groups.get(label) ?? { label, revenue: 0, orders: 0 }; item.revenue += order.total; item.orders += 1; groups.set(label, item)
    }
    return ok([...groups.values()].toSorted((a, b) => a.label.localeCompare(b.label)).slice(-(monthly ? 12 : 30)))
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    return fail('Không thể tải thống kê', 500, getErrorMessage(error))
  }
}
