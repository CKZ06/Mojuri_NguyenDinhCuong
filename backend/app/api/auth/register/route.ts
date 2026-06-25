import bcrypt from 'bcryptjs'
import type { NextRequest } from 'next/server'
import { signToken } from '@/lib/auth'
import { createRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { parseJson, registerSchema, validationDetails } from '@/lib/validation'

export function OPTIONS() { return options() }

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await parseJson(request, registerSchema)
    const normalizedEmail = email.trim().toLowerCase()
    const passwordHash = await bcrypt.hash(password, 12)
    const user = await updateDatabase((database) => {
      if (database.users.some((item) => item.email === normalizedEmail)) throw new Error('EMAIL_EXISTS')
      const record = createRecord({ name: name.trim(), email: normalizedEmail, password: passwordHash, role: 'user' as const, isActive: true })
      database.users.push(record)
      return record
    })
    const token = await signToken({ userId: user._id, email: user.email, role: user.role })
    return ok({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } }, 201)
  } catch (error) {
    if (error instanceof Error && error.message === 'EMAIL_EXISTS') return fail('Email đã được sử dụng', 409)
    const details = validationDetails(error)
    if (details) return fail('Dữ liệu đăng ký không hợp lệ', 422, details)
    return fail('Không thể đăng ký', 500, getErrorMessage(error))
  }
}
