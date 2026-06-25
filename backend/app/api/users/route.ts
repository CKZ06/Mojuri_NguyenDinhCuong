import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { readDatabase, updateDatabase, withoutPassword } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'

export function OPTIONS() { return options() }

export async function GET(request: NextRequest) {
  try {
    await requireUser(request, ['admin'])
    const database = await readDatabase()
    return ok(database.users.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt)).map(withoutPassword))
  } catch (error) {
    const auth = authError(error)
    if (auth) return fail(auth.message, auth.status)
    return fail('Không thể tải người dùng', 500, getErrorMessage(error))
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const admin = await requireUser(request, ['admin'])
    const id = request.nextUrl.searchParams.get('id')
    if (!id) return fail('Thiếu mã tài khoản người dùng', 400)
    if (id === admin._id) return fail('Không thể xóa tài khoản Admin đang đăng nhập', 400)

    const deleted = await updateDatabase((database) => {
      const index = database.users.findIndex((user) => user._id === id && user.role === 'user')
      if (index < 0) return false
      database.users.splice(index, 1)
      return true
    })

    return deleted ? ok({ deleted: true }) : fail('Không tìm thấy tài khoản người dùng', 404)
  } catch (error) {
    const auth = authError(error)
    if (auth) return fail(auth.message, auth.status)
    return fail('Không thể xóa tài khoản người dùng', 400, getErrorMessage(error))
  }
}
