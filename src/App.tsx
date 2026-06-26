import { lazy, Suspense, useEffect } from 'react'
import type { ElementType } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getToken } from './lib/api'
import { clearStoredShoppingState } from './lib/shoppingState'
import { useCartStore } from './stores/cartStore'
import ClientLayout from './layouts/ClientLayout'
import AdminLayout from './layouts/AdminLayout'
import './App.css'

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const BlogDetailsFullwidth = lazy(() => import('./pages/BlogDetailsFullwidth'))
const BlogDetailsLeft = lazy(() => import('./pages/BlogDetailsLeft'))
const BlogDetailsRight = lazy(() => import('./pages/BlogDetailsRight'))
const BlogGridFullwidth = lazy(() => import('./pages/BlogGridFullwidth'))
const BlogGridLeft = lazy(() => import('./pages/BlogGridLeft'))
const BlogGridRight = lazy(() => import('./pages/BlogGridRight'))
const BlogListLeft = lazy(() => import('./pages/BlogListLeft'))
const BlogListRight = lazy(() => import('./pages/BlogListRight'))
const Home = lazy(() => import('./pages/Home'))
const Home2 = lazy(() => import('./pages/Home2'))
const Home3 = lazy(() => import('./pages/Home3'))
const Home4 = lazy(() => import('./pages/Home4'))
const Home5 = lazy(() => import('./pages/Home5'))
const Home6 = lazy(() => import('./pages/Home6'))
const Home7 = lazy(() => import('./pages/Home7'))
const Home8 = lazy(() => import('./pages/Home8'))
const OrderTracking = lazy(() => import('./pages/OrderTracking'))
const Page404 = lazy(() => import('./pages/Page404'))
const PageAbout = lazy(() => import('./pages/PageAbout'))
const PageContact = lazy(() => import('./pages/PageContact'))
const PageFaq = lazy(() => import('./pages/PageFaq'))
const PageLogin = lazy(() => import('./pages/PageLogin'))
const PageMyAccount = lazy(() => import('./pages/PageMyAccount'))
const ShopCart = lazy(() => import('./pages/ShopCart'))
const ShopCheckout = lazy(() => import('./pages/ShopCheckout'))
const ShopDetails = lazy(() => import('./pages/ShopDetails'))
const ShopGridLeft = lazy(() => import('./pages/ShopGridLeft'))
const ShopGridFullwidth = lazy(() => import('./pages/ShopGridFullwidth'))
const ShopGridRight = lazy(() => import('./pages/ShopGridRight'))
const ShopListLeft = lazy(() => import('./pages/ShopListLeft'))
const ShopListRight = lazy(() => import('./pages/ShopListRight'))
const ShopWishlist = lazy(() => import('./pages/ShopWishlist'))

type PageProps = {
  Component: ElementType
  bodyClass: string
}

const bodyClasses = {
  adminDashboard: 'functional-body admin-body',
  blog: 'blog',
  home: 'home',
  home2: 'home home-2 title-2',
  home3: 'home home-3 title-3',
  home4: 'home home-4 title-4',
  home5: 'home home-5',
  home6: 'home home-6 title-6',
  home7: 'home home-7 title-7',
  home8: 'home home-8 title-8',
  page: 'page',
  account: 'blog',
  shop: 'shop',
  tracking: 'shop functional-body',
}

function reloadMojuriScript() {
  document.querySelectorAll('script[data-mojuri-app="true"]').forEach((script) => script.remove())
  const script = document.createElement('script')
  script.src = '/assets/js/app.js'
  script.dataset.mojuriApp = 'true'
  document.body.appendChild(script)
}

function RoutePage({ Component, bodyClass }: PageProps) {
  useEffect(() => {
    document.body.className = bodyClass
    document.title = 'Mojuri – Jewelry Store'
    window.scrollTo(0, 0)
    if (bodyClass.includes('functional')) {
      document.querySelectorAll('script[data-mojuri-app="true"]').forEach((script) => script.remove())
    } else {
      const timer = window.setTimeout(reloadMojuriScript, 1200)
      return () => window.clearTimeout(timer)
    }
  }, [bodyClass])

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}

export default function App() {
  useEffect(() => {
    if (!getToken()) {
      clearStoredShoppingState()
      useCartStore.getState().clear()
      useCartStore.persist.clearStorage()
    }
  }, [])

  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<RoutePage Component={Home} bodyClass={bodyClasses.home} />} />
        <Route path="/shop" element={<RoutePage Component={ShopGridLeft} bodyClass={bodyClasses.shop} />} />
        <Route path="/product/:id" element={<RoutePage Component={ShopDetails} bodyClass={bodyClasses.shop} />} />
        <Route path="/cart" element={<RoutePage Component={ShopCart} bodyClass={bodyClasses.shop} />} />
        <Route path="/checkout" element={<RoutePage Component={ShopCheckout} bodyClass={bodyClasses.shop} />} />
        <Route path="/login" element={<RoutePage Component={PageLogin} bodyClass={bodyClasses.page} />} />
        <Route path="/blog" element={<RoutePage Component={BlogGridFullwidth} bodyClass={bodyClasses.blog} />} />
        <Route path="/blog/:slug" element={<RoutePage Component={BlogDetailsFullwidth} bodyClass={bodyClasses.blog} />} />
        <Route path="/contact" element={<RoutePage Component={PageContact} bodyClass={bodyClasses.page} />} />
        <Route path="/track-order" element={<RoutePage Component={OrderTracking} bodyClass={bodyClasses.tracking} />} />
        <Route path="/about" element={<RoutePage Component={PageAbout} bodyClass={bodyClasses.page} />} />
        <Route path="/faq" element={<RoutePage Component={PageFaq} bodyClass={bodyClasses.page} />} />
        <Route path="/account" element={<RoutePage Component={PageMyAccount} bodyClass={bodyClasses.account} />} />
        <Route path="/wishlist" element={<RoutePage Component={ShopWishlist} bodyClass={bodyClasses.shop} />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin/*" element={<RoutePage Component={AdminDashboard} bodyClass={bodyClasses.adminDashboard} />} />
      </Route>

      <Route path="/index.html" element={<RoutePage Component={Home} bodyClass={bodyClasses.home} />} />
      <Route path="/index2.html" element={<RoutePage Component={Home2} bodyClass={bodyClasses.home2} />} />
      <Route path="/index3.html" element={<RoutePage Component={Home3} bodyClass={bodyClasses.home3} />} />
      <Route path="/index4.html" element={<RoutePage Component={Home4} bodyClass={bodyClasses.home4} />} />
      <Route path="/index5.html" element={<RoutePage Component={Home5} bodyClass={bodyClasses.home5} />} />
      <Route path="/index6.html" element={<RoutePage Component={Home6} bodyClass={bodyClasses.home6} />} />
      <Route path="/index7.html" element={<RoutePage Component={Home7} bodyClass={bodyClasses.home7} />} />
      <Route path="/index8.html" element={<RoutePage Component={Home8} bodyClass={bodyClasses.home8} />} />
      <Route path="/shop-grid-left.html" element={<RoutePage Component={ShopGridLeft} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-grid-right.html" element={<RoutePage Component={ShopGridRight} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-grid-fullwidth.html" element={<RoutePage Component={ShopGridFullwidth} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-list-left.html" element={<RoutePage Component={ShopListLeft} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-list-right.html" element={<RoutePage Component={ShopListRight} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-details.html" element={<RoutePage Component={ShopDetails} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-cart.html" element={<RoutePage Component={ShopCart} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-checkout.html" element={<RoutePage Component={ShopCheckout} bodyClass={bodyClasses.shop} />} />
      <Route path="/shop-wishlist.html" element={<RoutePage Component={ShopWishlist} bodyClass={bodyClasses.shop} />} />
      <Route path="/page-login.html" element={<RoutePage Component={PageLogin} bodyClass={bodyClasses.page} />} />
      <Route path="/page-my-account.html" element={<RoutePage Component={PageMyAccount} bodyClass={bodyClasses.account} />} />
      <Route path="/page-contact" element={<RoutePage Component={PageContact} bodyClass={bodyClasses.page} />} />
      <Route path="/page-contact.html" element={<RoutePage Component={PageContact} bodyClass={bodyClasses.page} />} />
      <Route path="/blog-grid-fullwidth.html" element={<RoutePage Component={BlogGridFullwidth} bodyClass={bodyClasses.blog} />} />
      <Route path="/blog-grid-left.html" element={<RoutePage Component={BlogGridLeft} bodyClass={bodyClasses.blog} />} />
      <Route path="/blog-grid-right.html" element={<RoutePage Component={BlogGridRight} bodyClass={bodyClasses.blog} />} />
      <Route path="/blog-list-left.html" element={<RoutePage Component={BlogListLeft} bodyClass={bodyClasses.blog} />} />
      <Route path="/blog-list-right.html" element={<RoutePage Component={BlogListRight} bodyClass={bodyClasses.blog} />} />
      <Route path="/blog-details-fullwidth.html" element={<RoutePage Component={BlogDetailsFullwidth} bodyClass={bodyClasses.blog} />} />
      <Route path="/blog-details-left.html" element={<RoutePage Component={BlogDetailsLeft} bodyClass={bodyClasses.blog} />} />
      <Route path="/blog-details-right.html" element={<RoutePage Component={BlogDetailsRight} bodyClass={bodyClasses.blog} />} />
      <Route path="*" element={<RoutePage Component={Page404} bodyClass={bodyClasses.page} />} />
    </Routes>
  )
}
