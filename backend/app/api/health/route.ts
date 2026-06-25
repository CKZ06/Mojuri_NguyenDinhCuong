import { ok, options } from '@/lib/http'

export function OPTIONS() {
  return options()
}

export function GET() {
  return ok({
    service: 'mojuri-backend',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  })
}
