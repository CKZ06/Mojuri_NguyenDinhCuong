import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { createRecord, readDatabase, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { parseJson, postSchema, validationDetails } from '@/lib/validation'

export function OPTIONS() { return options() }
export async function GET(request: NextRequest) {
  try {
    const showAll = request.nextUrl.searchParams.get('all') === 'true'
    if (showAll) await requireUser(request, ['admin'])
    const database = await readDatabase()
    const category = request.nextUrl.searchParams.get('category')
    const limit = Math.min(100, Math.max(1, Number(request.nextUrl.searchParams.get('limit')) || 12))
    const posts = database.posts
      .filter((post) => (showAll || post.status === 'published') && (!category || post.category === category))
      .toSorted((a, b) => (b.publishedAt ?? b.createdAt).localeCompare(a.publishedAt ?? a.createdAt))
      .slice(0, limit)
      .map((post) => ({ ...post, author: database.users.find((user) => user._id === post.author) ? { name: database.users.find((user) => user._id === post.author)!.name } : undefined }))
    return ok(posts)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    return fail('Không thể tải bài viết', 500, getErrorMessage(error))
  }
}
export async function POST(request: NextRequest) {
  try {
    const user = await requireUser(request, ['admin'])
    const body = await parseJson(request, postSchema)
    const post = await updateDatabase((database) => {
      if (database.posts.some((item) => item.slug === body.slug)) throw new Error('SLUG_EXISTS')
      const record = createRecord({ ...body, publishedAt: body.status === 'published' ? (body.publishedAt ?? new Date()).toISOString() : undefined, author: user._id })
      database.posts.push(record); return record
    })
    return ok(post, 201)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error); if (details) return fail('Dữ liệu bài viết không hợp lệ', 422, details)
    return fail('Không thể tạo bài viết', 400, getErrorMessage(error))
  }
}
