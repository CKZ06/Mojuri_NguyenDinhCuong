import type { NextRequest } from 'next/server'
import { authError, requireUser } from '@/lib/auth'
import { readDatabase, touchRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { parseJson, postSchema, validationDetails } from '@/lib/validation'
type Context = { params: Promise<{ id: string }> }
export function OPTIONS() { return options() }
export async function GET(_request: NextRequest, context: Context) {
  try {
    const { id } = await context.params; const database = await readDatabase()
    const post = database.posts.find((item) => (item._id === id || item.slug === id) && item.status === 'published')
    if (!post) return fail('Không tìm thấy bài viết', 404)
    const author = database.users.find((item) => item._id === post.author)
    const recent = database.posts.filter((item) => item._id !== post._id && item.status === 'published').toSorted((a, b) => (b.publishedAt ?? b.createdAt).localeCompare(a.publishedAt ?? a.createdAt)).slice(0, 5)
    return ok({ ...post, author: author ? { name: author.name } : undefined, recent })
  } catch (error) { return fail('Không thể tải bài viết', 404, getErrorMessage(error)) }
}
export async function PUT(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin']); const { id } = await context.params; const body = await parseJson(request, postSchema)
    const post = await updateDatabase((database) => {
      const record = database.posts.find((item) => item._id === id); if (!record) return null
      Object.assign(record, body, { publishedAt: body.status === 'published' ? (body.publishedAt ?? new Date()).toISOString() : undefined }); return touchRecord(record)
    })
    return post ? ok(post) : fail('Không tìm thấy bài viết', 404)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    const details = validationDetails(error); if (details) return fail('Dữ liệu bài viết không hợp lệ', 422, details)
    return fail('Không thể cập nhật bài viết', 400, getErrorMessage(error))
  }
}
export async function DELETE(request: NextRequest, context: Context) {
  try {
    await requireUser(request, ['admin']); const { id } = await context.params
    const deleted = await updateDatabase((database) => { const index = database.posts.findIndex((item) => item._id === id); if (index < 0) return false; database.posts.splice(index, 1); return true })
    return deleted ? ok({ deleted: true }) : fail('Không tìm thấy bài viết', 404)
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    return fail('Không thể xóa bài viết', 400, getErrorMessage(error))
  }
}
