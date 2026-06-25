import { randomUUID } from 'node:crypto'
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import path from 'node:path'

export type UserRole = 'user' | 'admin'
export type UserRecord = { _id: string; name: string; email: string; password: string; role: UserRole; isActive: boolean; createdAt: string; updatedAt: string }
export type ProductRecord = { _id: string; name: string; slug: string; description: string; price: number; salePrice?: number; category: string; thumbnail: string; hoverImage: string; images: string[]; stock: number; stockStatus: 'in_stock' | 'out_of_stock'; rating: number; reviewCount: number; featured: boolean; isActive: boolean; createdAt: string; updatedAt: string }
export type CategoryRecord = { _id: string; name: string; slug: string; type: 'product' | 'blog'; description: string; isActive: boolean; createdAt: string; updatedAt: string }
export type PostRecord = { _id: string; title: string; slug: string; excerpt: string; content: string; thumbnail: string; category: string; status: 'draft' | 'published'; publishedAt?: string; author?: string; createdAt: string; updatedAt: string }
export type ReviewRecord = { _id: string; product: string; user?: string; name: string; email: string; rating: number; comment: string; approved: boolean; createdAt: string; updatedAt: string }
export type OrderRecord = { _id: string; user?: string; customer: { name: string; email: string; phone: string; address: string; note?: string }; items: Array<{ product: string; name: string; price: number; quantity: number; thumbnail: string }>; subtotal: number; shippingFee: number; total: number; status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'; paymentMethod: 'cod' | 'bank'; paymentStatus: 'unpaid' | 'paid'; createdAt: string; updatedAt: string }
export type ContactRecord = { _id: string; user?: string; name: string; email: string; subject: string; message: string; status: 'new' | 'read' | 'replied'; createdAt: string; updatedAt: string }

export type Database = {
  users: UserRecord[]
  products: ProductRecord[]
  categories: CategoryRecord[]
  posts: PostRecord[]
  reviews: ReviewRecord[]
  orders: OrderRecord[]
  contacts: ContactRecord[]
}

const dataDirectory = path.join(process.cwd(), 'data')
const databaseFile = path.join(dataDirectory, 'database.json')
const temporaryFile = path.join(dataDirectory, 'database.tmp.json')
const emptyDatabase = (): Database => ({ users: [], products: [], categories: [], posts: [], reviews: [], orders: [], contacts: [] })
const globalStore = globalThis as typeof globalThis & { jsonDatabaseWriteQueue?: Promise<void> }
globalStore.jsonDatabaseWriteQueue ??= Promise.resolve()

async function ensureDatabase() {
  await mkdir(dataDirectory, { recursive: true })
  try {
    await readFile(databaseFile, 'utf8')
  } catch {
    await writeFile(databaseFile, `${JSON.stringify(emptyDatabase(), null, 2)}\n`, 'utf8')
  }
}

export async function readDatabase(): Promise<Database> {
  await ensureDatabase()
  await globalStore.jsonDatabaseWriteQueue
  return { ...emptyDatabase(), ...JSON.parse(await readFile(databaseFile, 'utf8')) } as Database
}

export async function updateDatabase<T>(mutator: (database: Database) => T | Promise<T>): Promise<T> {
  let result!: T
  const operation = (globalStore.jsonDatabaseWriteQueue ?? Promise.resolve()).then(async () => {
    await ensureDatabase()
    const database = { ...emptyDatabase(), ...JSON.parse(await readFile(databaseFile, 'utf8')) } as Database
    result = await mutator(database)
    await writeFile(temporaryFile, `${JSON.stringify(database, null, 2)}\n`, 'utf8')
    await rename(temporaryFile, databaseFile)
  })
  globalStore.jsonDatabaseWriteQueue = operation.catch(() => undefined)
  await operation
  return result
}

export function createRecord<T extends object>(values: T): T & { _id: string; createdAt: string; updatedAt: string } {
  const now = new Date().toISOString()
  return { ...values, _id: randomUUID(), createdAt: now, updatedAt: now }
}

export function touchRecord<T extends { updatedAt: string }>(record: T) {
  record.updatedAt = new Date().toISOString()
  return record
}

export function withoutPassword(user: UserRecord) {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}
