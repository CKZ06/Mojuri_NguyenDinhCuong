import type { NextRequest } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { fail, ok, options } from '@/lib/http'

export function OPTIONS() {
  return options()
}

export async function GET(request: NextRequest) {
  const user = await getCurrentUser(request)
  if (!user) return fail('Phiên đăng nhập không hợp lệ', 401)
  return ok(user)
}
