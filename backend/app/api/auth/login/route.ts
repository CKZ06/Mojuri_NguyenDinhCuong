import bcrypt from 'bcryptjs'
import type { NextRequest } from 'next/server'
import { signToken } from '@/lib/auth'
import { readDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { loginSchema, parseJson, validationDetails } from '@/lib/validation'

export function OPTIONS() { return options() }

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await parseJson(request, loginSchema)
    const database = await readDatabase()
    const user = database.users.find((item) => item.email === email.trim().toLowerCase() && item.isActive)
    if (!user || !(await bcrypt.compare(password, user.password))) return fail('Email hoặc mật khẩu không đúng', 401)
    const token = await signToken({ userId: user._id, email: user.email, role: user.role })
    return ok({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } })
  } catch (error) {
    const details = validationDetails(error)
    if (details) return fail('Dữ liệu đăng nhập không hợp lệ', 422, details)
    return fail('Không thể đăng nhập', 500, getErrorMessage(error))
  }
}
