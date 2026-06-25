import { NextResponse } from 'next/server'

const allowedOrigin = process.env.FRONTEND_URL ?? 'http://localhost:5173'

export const corsHeaders = {
  'Access-Control-Allow-Origin': allowedOrigin,
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
}

export function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: corsHeaders })
}

export function ok(data: unknown, status = 200) {
  return json({ success: true, data }, status)
}

export function fail(message: string, status = 400, details?: unknown) {
  return json({ success: false, message, details }, status)
}

export function options() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Đã xảy ra lỗi không xác định'
}
