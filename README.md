# Mojuri Full-stack

Dự án gồm hai ứng dụng độc lập:

- Frontend: React + Vite, chạy tại `http://localhost:5173`
- Backend: Next.js API + JSON database, chạy tại `http://localhost:3000`

## Chức năng

- Client Mojuri: Home, Shop, chi tiết sản phẩm, Cart, Checkout, Blog, Contact
- Authentication bằng JWT: đăng ký, đăng nhập, lấy thông tin tài khoản
- Phân quyền `user` và `admin`
- API JSON và CORS cho frontend cổng 5173
- File JSON lưu người dùng, sản phẩm, đơn hàng, bài viết và liên hệ
- Admin Dashboard tại `/admin`
- Admin CRUD sản phẩm, xem/cập nhật đơn hàng và xem người dùng
- CRUD danh mục sản phẩm và danh mục blog
- Gallery, trạng thái tồn kho, review và sản phẩm liên quan
- Shop Grid/List, tìm kiếm, lọc danh mục/giá và phân trang
- Tra cứu trạng thái đơn hàng tại `/track-order`
- Inbox liên hệ với trạng thái chưa đọc/đã đọc/đã phản hồi
- Blog Draft/Published, nội dung HTML rich text, ảnh bìa và Recent Posts
- Thống kê doanh thu cơ bản theo ngày

## Chuẩn kỹ thuật đã áp dụng

### Backend

- Next.js App Router với REST API trong `backend/app/api`
- JSON database tại `backend/data/database.json`
- JWT bằng `jose`
- Mã hóa mật khẩu bằng `bcryptjs`
- Zod validation trước khi ghi dữ liệu vào database
- Middleware helper bảo vệ API Admin theo role
- CORS giới hạn theo `FRONTEND_URL`

### Frontend

- React Router DOM v6 với `ClientLayout` và route bảo vệ `AdminLayout`
- Zustand quản lý global Auth state và Cart state
- Zustand Persist lưu giỏ hàng và thông tin phiên vào LocalStorage
- TanStack Query quản lý server state, cache, loading, retry và cache invalidation
- Component tái sử dụng: `AppShell`, `ProductCard`, các table/form component Admin

Phiên bản chính:

```text
react-router-dom 6.30.2
@tanstack/react-query 5.x
zustand 5.x
zod 4.x
```

Lưu ý: npm audit hiện cảnh báo nhánh React Router v6 về open redirect/XSS và chưa có
bản vá trong nhánh v6. Dự án giữ v6 để đúng yêu cầu môn học; nên nâng React Router v7
khi yêu cầu phiên bản được nới lỏng.

## 1. Cấu hình môi trường

Tạo file `.env` ở thư mục gốc:

```env
VITE_API_URL=http://localhost:3000/api
```

Tạo file `backend/.env.local`:

```env
JWT_SECRET=thay-bang-mot-chuoi-bi-mat-dai-va-ngau-nhien
FRONTEND_URL=http://localhost:5173
SEED_SECRET=mojuri-seed
```

## 2. Cài dependency

```bash
npm install
npm --prefix backend install
```

## 3. Chạy dự án

Không cần cài đặt hay khởi động database riêng. Chỉ cần một lệnh:

```bash
npm run dev
```

Lệnh này khởi động đồng thời:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

Nếu muốn chạy riêng từng phần:

```bash
npm run dev:frontend
npm run dev:backend
```

## 4. Tạo dữ liệu mẫu

Sau khi backend đã chạy:

```bash
curl -X POST http://localhost:3000/api/seed \
  -H "x-seed-secret: mojuri-seed"
```

Trên PowerShell:

```powershell
Invoke-RestMethod -Method Post `
  -Uri http://localhost:3000/api/seed `
  -Headers @{ "x-seed-secret" = "mojuri-seed" }
```

Tài khoản quản trị mẫu:

```text
Email: admin@gmail.com
Password: 123
```

Hãy đổi mật khẩu và `SEED_SECRET` khi triển khai thật.

## API chính

| Method | Endpoint | Quyền |
|---|---|---|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |
| GET | `/api/auth/me` | User |
| GET | `/api/products` | Public |
| POST/PUT/DELETE | `/api/products` | Admin |
| POST | `/api/orders` | Public/User |
| GET | `/api/orders` | User/Admin |
| PATCH | `/api/orders/:id` | Admin |
| GET | `/api/users` | Admin |
| GET/POST | `/api/posts` | Public/Admin |
| GET/POST | `/api/contacts` | Admin/Public |

## Kiểm tra

```bash
npm run lint:all
npm run build:all
```

Frontend hiện vẫn giữ các trang template Mojuri cũ. Các route chức năng mới là:

- `/shop`
- `/product/:id`
- `/cart`
- `/checkout`
- `/login`
- `/admin`
- `/blog`
- `/blog/:slug`
- `/page-contact`
- `/track-order`
