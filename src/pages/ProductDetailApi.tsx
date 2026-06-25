import { useState } from 'react'
import type { FormEvent } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import AppShell from '../components/AppShell'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { apiRequest } from '../lib/api'
import type { Product, Review } from '../types/api'

export const ProductDetailApiBodyClass = 'shop functional-body'

export default function ProductDetailApi() {
  const [activeImage, setActiveImage] = useState('')
  const [reviewMessage, setReviewMessage] = useState('')
  const { add } = useCart()
  const { user } = useAuth()
  const { id = '' } = useParams()
  const queryClient = useQueryClient()
  const { data: product, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => apiRequest<Product>(`/products/${id}`),
    enabled: Boolean(id),
  })
  const reviewMutation = useMutation({
    mutationFn: (body: { name: FormDataEntryValue | null; email: FormDataEntryValue | null; rating: number; comment: FormDataEntryValue | null }) => (
      apiRequest<Review>(`/products/${id}/reviews`, { method: 'POST', body: JSON.stringify(body) })
    ),
    onSuccess: async () => {
      setReviewMessage('Cảm ơn bạn đã gửi đánh giá.')
      await queryClient.invalidateQueries({ queryKey: ['product', id] })
    },
  })

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    try {
      await reviewMutation.mutateAsync({
          name: form.get('name'),
          email: form.get('email'),
          rating: Number(form.get('rating')),
          comment: form.get('comment'),
      })
      event.currentTarget.reset()
    } catch (reason) {
      setReviewMessage(reason instanceof Error ? reason.message : 'Không thể gửi đánh giá')
    }
  }

  return (
    <AppShell>
      <section className="functional-container">
        {error && <div className="state-card error">{error instanceof Error ? error.message : 'Không tìm thấy sản phẩm'}</div>}
        {!product && !error && <div className="state-card">Đang tải…</div>}
        {product && (
          <>
            <div className="product-detail-api">
              <div>
                <div className="product-detail-image"><img src={activeImage || product.thumbnail} alt={product.name} /></div>
                <div className="gallery-thumbs">
                  {[product.thumbnail, ...(product.images ?? [])].filter((image, index, list) => list.indexOf(image) === index).map((image) => (
                    <button type="button" className={(activeImage || product.thumbnail) === image ? 'active' : ''} key={image} onClick={() => setActiveImage(image)}>
                      <img src={image} alt="" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="category">{product.category}</p>
                <h1>{product.name}</h1>
                <div className="rating-line">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))} ({product.reviewCount} đánh giá)</div>
                <div className="detail-price">${(product.salePrice ?? product.price).toFixed(2)}</div>
                <div className="rich-content" dangerouslySetInnerHTML={{ __html: product.description || '<p>Một thiết kế trang sức thanh lịch từ bộ sưu tập Mojuri.</p>' }} />
                <p>Trạng thái: <strong>{product.stock > 0 ? `Còn hàng (${product.stock})` : 'Hết hàng'}</strong></p>
                <button className="primary-action" disabled={product.stock < 1} type="button" onClick={() => add(product)}>Thêm vào giỏ hàng</button>
              </div>
            </div>
            <section className="product-reviews">
              <div>
                <h2>Đánh giá sản phẩm</h2>
                {product.reviews?.length ? product.reviews.map((review) => (
                  <article className="review-card" key={review._id}>
                    <strong>{review.name}</strong><span>{'★'.repeat(review.rating)}</span>
                    <p>{review.comment}</p>
                    <small>{new Date(review.createdAt).toLocaleDateString('vi-VN')}</small>
                  </article>
                )) : <p>Chưa có đánh giá. Hãy là người đầu tiên.</p>}
              </div>
              <form className="review-form" onSubmit={submitReview}>
                <h3>Viết đánh giá</h3>
                {!user && <>
                  <label>Họ tên<input name="name" required /></label>
                  <label>Email<input name="email" type="email" required /></label>
                </>}
                <label>Số sao<select name="rating" defaultValue="5"><option value="5">5 sao</option><option value="4">4 sao</option><option value="3">3 sao</option><option value="2">2 sao</option><option value="1">1 sao</option></select></label>
                <label>Nội dung<textarea name="comment" required /></label>
                {reviewMessage && <p>{reviewMessage}</p>}
                <button className="primary-action" type="submit">Gửi đánh giá</button>
              </form>
            </section>
            <section className="related-products">
              <h2>Sản phẩm liên quan</h2>
              <div className="api-product-grid">
                {product.related?.map((item) => (
                  <article className="api-product-card" key={item._id}>
                    <Link to={`/product/${item._id}`} className="api-product-image"><img src={item.thumbnail} alt={item.name} /></Link>
                    <div className="product-card-content"><h3>{item.name}</h3><strong>${(item.salePrice ?? item.price).toFixed(2)}</strong></div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </section>
    </AppShell>
  )
}
