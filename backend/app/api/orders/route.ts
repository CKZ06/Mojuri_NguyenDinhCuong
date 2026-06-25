import type { NextRequest } from 'next/server'
import { authError, getCurrentUser, requireUser } from '@/lib/auth'
import { createRecord, readDatabase, touchRecord, updateDatabase } from '@/lib/db'
import { fail, getErrorMessage, ok, options } from '@/lib/http'
import { orderSchema, parseJson, validationDetails } from '@/lib/validation'
export function OPTIONS() { return options() }
export async function GET(request: NextRequest) {
  try {
    const user = await requireUser(request); const database = await readDatabase()
    return ok(database.orders.filter((order) => user.role === 'admin' || order.user === user._id).toSorted((a, b) => b.createdAt.localeCompare(a.createdAt)))
  } catch (error) {
    const auth = authError(error); if (auth) return fail(auth.message, auth.status)
    return fail('Không thể tải đơn hàng', 500, getErrorMessage(error))
  }
}
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request); const body = await parseJson(request, orderSchema)
    const order = await updateDatabase((database) => {
      const items = body.items.map((item) => {
        const product = database.products.find((entry) => entry._id === item.product && entry.isActive)
        if (!product) throw new Error('Sản phẩm trong giỏ không còn tồn tại')
        if (product.stock < item.quantity) throw new Error(`${product.name} không đủ tồn kho`)
        return { product: product._id, name: product.name, price: product.salePrice ?? product.price, quantity: item.quantity, thumbnail: product.thumbnail }
      })
      const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0); const shippingFee = subtotal >= 400 ? 0 : 20
      const record = createRecord({ user: user?._id, customer: body.customer, items, subtotal, shippingFee, total: subtotal + shippingFee, status: 'pending' as const, paymentMethod: body.paymentMethod, paymentStatus: 'unpaid' as const })
      database.orders.push(record)
      for (const item of items) { const product = database.products.find((entry) => entry._id === item.product)!; product.stock -= item.quantity; product.stockStatus = product.stock > 0 ? 'in_stock' : 'out_of_stock'; touchRecord(product) }
      return record
    })
    return ok(order, 201)
  } catch (error) {
    const details = validationDetails(error); if (details) return fail('Dữ liệu đơn hàng không hợp lệ', 422, details)
    return fail(getErrorMessage(error), 400)
  }
}
