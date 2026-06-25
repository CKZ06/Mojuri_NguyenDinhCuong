import { useEffect } from 'react'
import type { ComponentType } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard, { AdminDashboardBodyClass } from './pages/AdminDashboard'
import BlogDetailsFullwidth, { BlogDetailsFullwidthBodyClass } from './pages/BlogDetailsFullwidth'
import BlogDetailsLeft, { BlogDetailsLeftBodyClass } from './pages/BlogDetailsLeft'
import BlogDetailsRight, { BlogDetailsRightBodyClass } from './pages/BlogDetailsRight'
import BlogGridFullwidth, { BlogGridFullwidthBodyClass } from './pages/BlogGridFullwidth'
import BlogGridLeft, { BlogGridLeftBodyClass } from './pages/BlogGridLeft'
import BlogGridRight, { BlogGridRightBodyClass } from './pages/BlogGridRight'
import BlogListLeft, { BlogListLeftBodyClass } from './pages/BlogListLeft'
import BlogListRight, { BlogListRightBodyClass } from './pages/BlogListRight'
import Home, { HomeBodyClass } from './pages/Home'
import Home2, { Home2BodyClass } from './pages/Home2'
import Home3, { Home3BodyClass } from './pages/Home3'
import Home4, { Home4BodyClass } from './pages/Home4'
import Home5, { Home5BodyClass } from './pages/Home5'
import Home6, { Home6BodyClass } from './pages/Home6'
import Home7, { Home7BodyClass } from './pages/Home7'
import Home8, { Home8BodyClass } from './pages/Home8'
import ClientLayout from './layouts/ClientLayout'
import OrderTracking, { OrderTrackingBodyClass } from './pages/OrderTracking'
import Page404, { Page404BodyClass } from './pages/Page404'
import PageAbout, { PageAboutBodyClass } from './pages/PageAbout'
import PageContact, { PageContactBodyClass } from './pages/PageContact'
import PageFaq, { PageFaqBodyClass } from './pages/PageFaq'
import PageLogin, { PageLoginBodyClass } from './pages/PageLogin'
import PageMyAccount, { PageMyAccountBodyClass } from './pages/PageMyAccount'
import ShopCart, { ShopCartBodyClass } from './pages/ShopCart'
import ShopCheckout, { ShopCheckoutBodyClass } from './pages/ShopCheckout'
import ShopDetails, { ShopDetailsBodyClass } from './pages/ShopDetails'
import ShopGridLeft, { ShopGridLeftBodyClass } from './pages/ShopGridLeft'
import ShopGridFullwidth, { ShopGridFullwidthBodyClass } from './pages/ShopGridFullwidth'
import ShopGridRight, { ShopGridRightBodyClass } from './pages/ShopGridRight'
import ShopListLeft, { ShopListLeftBodyClass } from './pages/ShopListLeft'
import ShopListRight, { ShopListRightBodyClass } from './pages/ShopListRight'
import ShopWishlist, { ShopWishlistBodyClass } from './pages/ShopWishlist'
import './App.css'

type PageProps = {
  Component: ComponentType
  bodyClass: string
}

function reloadMojuriScript() {
  document.querySelectorAll('script[data-mojuri-app="true"]').forEach((script) => script.remove())
  const script = document.createElement('script')
  script.src = `/assets/js/app.js?v=${Date.now()}`
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

  return <Component />
}

export default function App() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<RoutePage Component={Home} bodyClass={HomeBodyClass} />} />
        <Route path="/shop" element={<RoutePage Component={ShopGridLeft} bodyClass={ShopGridLeftBodyClass} />} />
        <Route path="/product/:id" element={<RoutePage Component={ShopDetails} bodyClass={ShopDetailsBodyClass} />} />
        <Route path="/cart" element={<RoutePage Component={ShopCart} bodyClass={ShopCartBodyClass} />} />
        <Route path="/checkout" element={<RoutePage Component={ShopCheckout} bodyClass={ShopCheckoutBodyClass} />} />
        <Route path="/login" element={<RoutePage Component={PageLogin} bodyClass={PageLoginBodyClass} />} />
        <Route path="/blog" element={<RoutePage Component={BlogGridFullwidth} bodyClass={BlogGridFullwidthBodyClass} />} />
        <Route path="/blog/:slug" element={<RoutePage Component={BlogDetailsFullwidth} bodyClass={BlogDetailsFullwidthBodyClass} />} />
        <Route path="/contact" element={<RoutePage Component={PageContact} bodyClass={PageContactBodyClass} />} />
        <Route path="/track-order" element={<RoutePage Component={OrderTracking} bodyClass={OrderTrackingBodyClass} />} />
        <Route path="/about" element={<RoutePage Component={PageAbout} bodyClass={PageAboutBodyClass} />} />
        <Route path="/faq" element={<RoutePage Component={PageFaq} bodyClass={PageFaqBodyClass} />} />
        <Route path="/account" element={<RoutePage Component={PageMyAccount} bodyClass={PageMyAccountBodyClass} />} />
        <Route path="/wishlist" element={<RoutePage Component={ShopWishlist} bodyClass={ShopWishlistBodyClass} />} />
      </Route>
      <Route path="/admin/*" element={<RoutePage Component={AdminDashboard} bodyClass={AdminDashboardBodyClass} />} />

      <Route path="/index.html" element={<RoutePage Component={Home} bodyClass={HomeBodyClass} />} />
      <Route path="/index2.html" element={<RoutePage Component={Home2} bodyClass={Home2BodyClass} />} />
      <Route path="/index3.html" element={<RoutePage Component={Home3} bodyClass={Home3BodyClass} />} />
      <Route path="/index4.html" element={<RoutePage Component={Home4} bodyClass={Home4BodyClass} />} />
      <Route path="/index5.html" element={<RoutePage Component={Home5} bodyClass={Home5BodyClass} />} />
      <Route path="/index6.html" element={<RoutePage Component={Home6} bodyClass={Home6BodyClass} />} />
      <Route path="/index7.html" element={<RoutePage Component={Home7} bodyClass={Home7BodyClass} />} />
      <Route path="/index8.html" element={<RoutePage Component={Home8} bodyClass={Home8BodyClass} />} />
      <Route path="/shop-grid-left.html" element={<RoutePage Component={ShopGridLeft} bodyClass={ShopGridLeftBodyClass} />} />
      <Route path="/shop-grid-right.html" element={<RoutePage Component={ShopGridRight} bodyClass={ShopGridRightBodyClass} />} />
      <Route path="/shop-grid-fullwidth.html" element={<RoutePage Component={ShopGridFullwidth} bodyClass={ShopGridFullwidthBodyClass} />} />
      <Route path="/shop-list-left.html" element={<RoutePage Component={ShopListLeft} bodyClass={ShopListLeftBodyClass} />} />
      <Route path="/shop-list-right.html" element={<RoutePage Component={ShopListRight} bodyClass={ShopListRightBodyClass} />} />
      <Route path="/shop-details.html" element={<RoutePage Component={ShopDetails} bodyClass={ShopDetailsBodyClass} />} />
      <Route path="/shop-cart.html" element={<RoutePage Component={ShopCart} bodyClass={ShopCartBodyClass} />} />
      <Route path="/shop-checkout.html" element={<RoutePage Component={ShopCheckout} bodyClass={ShopCheckoutBodyClass} />} />
      <Route path="/shop-wishlist.html" element={<RoutePage Component={ShopWishlist} bodyClass={ShopWishlistBodyClass} />} />
      <Route path="/page-login.html" element={<RoutePage Component={PageLogin} bodyClass={PageLoginBodyClass} />} />
      <Route path="/page-my-account.html" element={<RoutePage Component={PageMyAccount} bodyClass={PageMyAccountBodyClass} />} />
      <Route path="/page-contact" element={<RoutePage Component={PageContact} bodyClass={PageContactBodyClass} />} />
      <Route path="/page-contact.html" element={<RoutePage Component={PageContact} bodyClass={PageContactBodyClass} />} />
      <Route path="/blog-grid-fullwidth.html" element={<RoutePage Component={BlogGridFullwidth} bodyClass={BlogGridFullwidthBodyClass} />} />
      <Route path="/blog-grid-left.html" element={<RoutePage Component={BlogGridLeft} bodyClass={BlogGridLeftBodyClass} />} />
      <Route path="/blog-grid-right.html" element={<RoutePage Component={BlogGridRight} bodyClass={BlogGridRightBodyClass} />} />
      <Route path="/blog-list-left.html" element={<RoutePage Component={BlogListLeft} bodyClass={BlogListLeftBodyClass} />} />
      <Route path="/blog-list-right.html" element={<RoutePage Component={BlogListRight} bodyClass={BlogListRightBodyClass} />} />
      <Route path="/blog-details-fullwidth.html" element={<RoutePage Component={BlogDetailsFullwidth} bodyClass={BlogDetailsFullwidthBodyClass} />} />
      <Route path="/blog-details-left.html" element={<RoutePage Component={BlogDetailsLeft} bodyClass={BlogDetailsLeftBodyClass} />} />
      <Route path="/blog-details-right.html" element={<RoutePage Component={BlogDetailsRight} bodyClass={BlogDetailsRightBodyClass} />} />
      <Route path="*" element={<RoutePage Component={Page404} bodyClass={Page404BodyClass} />} />
    </Routes>
  )
}
