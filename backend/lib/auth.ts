import { SignJWT, jwtVerify } from 'jose'
import type { NextRequest } from 'next/server'
import { readDatabase, type UserRole, withoutPassword } from '@/lib/db'

if (!process.env.JWT_SECRET) throw new Error('Thiếu biến môi trường JWT_SECRET')
const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export type AuthPayload = { userId: string; email: string; role: UserRole }

export async function signToken(payload: AuthPayload) {
  return new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('7d').sign(secret)
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, secret)
  return payload as unknown as AuthPayload
}

export async function getCurrentUser(request: NextRequest) {
  const authorization = request.headers.get('authorization')
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : null
  if (!token) return null
  try {
    const payload = await verifyToken(token)
    const database = await readDatabase()
    const user = database.users.find((item) => item._id === payload.userId && item.isActive)
    return user ? withoutPassword(user) : null
  } catch {
    return null
  }
}

export async function requireUser(request: NextRequest, roles?: UserRole[]) {
  const user = await getCurrentUser(request)
  if (!user) throw new Error('UNAUTHORIZED')
  if (roles && !roles.includes(user.role)) throw new Error('FORBIDDEN')
  return user
}

export function authError(error: unknown) {
  const message = error instanceof Error ? error.message : ''
  if (message === 'UNAUTHORIZED') return { message: 'Bạn chưa đăng nhập', status: 401 }
  if (message === 'FORBIDDEN') return { message: 'Bạn không có quyền thực hiện thao tác này', status: 403 }
  return null
}
