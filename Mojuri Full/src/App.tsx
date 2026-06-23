import { useEffect, useMemo, useState } from 'react'
import type { ComponentType } from 'react'
import BlogDetailsFullwidth, { BlogDetailsFullwidthBodyClass } from './pages/BlogDetailsFullwidth'
import BlogDetailsLeft, { BlogDetailsLeftBodyClass } from './pages/BlogDetailsLeft'
import BlogDetailsRight, { BlogDetailsRightBodyClass } from './pages/BlogDetailsRight'
import BlogGridFullwidth, { BlogGridFullwidthBodyClass } from './pages/BlogGridFullwidth'
import BlogGridLeft, { BlogGridLeftBodyClass } from './pages/BlogGridLeft'
import BlogGridRight, { BlogGridRightBodyClass } from './pages/BlogGridRight'
import BlogListLeft, { BlogListLeftBodyClass } from './pages/BlogListLeft'
import BlogListRight, { BlogListRightBodyClass } from './pages/BlogListRight'
import ForgotPassword, { ForgotPasswordBodyClass } from './pages/ForgotPassword'
import Home, { HomeBodyClass } from './pages/Home'
import Home2, { Home2BodyClass } from './pages/Home2'
import Home3, { Home3BodyClass } from './pages/Home3'
import Home4, { Home4BodyClass } from './pages/Home4'
import Home5, { Home5BodyClass } from './pages/Home5'
import Home6, { Home6BodyClass } from './pages/Home6'
import Home7, { Home7BodyClass } from './pages/Home7'
import Home8, { Home8BodyClass } from './pages/Home8'
import Page404, { Page404BodyClass } from './pages/Page404'
import PageAbout, { PageAboutBodyClass } from './pages/PageAbout'
import PageContact, { PageContactBodyClass } from './pages/PageContact'
import PageFaq, { PageFaqBodyClass } from './pages/PageFaq'
import PageForgotPassword, { PageForgotPasswordBodyClass } from './pages/PageForgotPassword'
import PageLogin, { PageLoginBodyClass } from './pages/PageLogin'
import PageMyAccount, { PageMyAccountBodyClass } from './pages/PageMyAccount'
import ShopCart, { ShopCartBodyClass } from './pages/ShopCart'
import ShopCheckout, { ShopCheckoutBodyClass } from './pages/ShopCheckout'
import ShopDetails, { ShopDetailsBodyClass } from './pages/ShopDetails'
import ShopGridFullwidth, { ShopGridFullwidthBodyClass } from './pages/ShopGridFullwidth'
import ShopGridLeft, { ShopGridLeftBodyClass } from './pages/ShopGridLeft'
import ShopGridRight, { ShopGridRightBodyClass } from './pages/ShopGridRight'
import ShopListLeft, { ShopListLeftBodyClass } from './pages/ShopListLeft'
import ShopListRight, { ShopListRightBodyClass } from './pages/ShopListRight'
import ShopWishlist, { ShopWishlistBodyClass } from './pages/ShopWishlist'
import './App.css'

type PageEntry = {
  Component: ComponentType
  bodyClass: string
}

const pages: Record<string, PageEntry> = {
  '/': { Component: Home, bodyClass: HomeBodyClass },
  '/blog-details-fullwidth': { Component: BlogDetailsFullwidth, bodyClass: BlogDetailsFullwidthBodyClass },
  '/blog-details-fullwidth.html': { Component: BlogDetailsFullwidth, bodyClass: BlogDetailsFullwidthBodyClass },
  '/blog-details-left': { Component: BlogDetailsLeft, bodyClass: BlogDetailsLeftBodyClass },
  '/blog-details-left.html': { Component: BlogDetailsLeft, bodyClass: BlogDetailsLeftBodyClass },
  '/blog-details-right': { Component: BlogDetailsRight, bodyClass: BlogDetailsRightBodyClass },
  '/blog-details-right.html': { Component: BlogDetailsRight, bodyClass: BlogDetailsRightBodyClass },
  '/blog-grid-fullwidth': { Component: BlogGridFullwidth, bodyClass: BlogGridFullwidthBodyClass },
  '/blog-grid-fullwidth.html': { Component: BlogGridFullwidth, bodyClass: BlogGridFullwidthBodyClass },
  '/blog-grid-left': { Component: BlogGridLeft, bodyClass: BlogGridLeftBodyClass },
  '/blog-grid-left.html': { Component: BlogGridLeft, bodyClass: BlogGridLeftBodyClass },
  '/blog-grid-right': { Component: BlogGridRight, bodyClass: BlogGridRightBodyClass },
  '/blog-grid-right.html': { Component: BlogGridRight, bodyClass: BlogGridRightBodyClass },
  '/blog-list-left': { Component: BlogListLeft, bodyClass: BlogListLeftBodyClass },
  '/blog-list-left.html': { Component: BlogListLeft, bodyClass: BlogListLeftBodyClass },
  '/blog-list-right': { Component: BlogListRight, bodyClass: BlogListRightBodyClass },
  '/blog-list-right.html': { Component: BlogListRight, bodyClass: BlogListRightBodyClass },
  '/forgot-password': { Component: ForgotPassword, bodyClass: ForgotPasswordBodyClass },
  '/forgot-password.html': { Component: ForgotPassword, bodyClass: ForgotPasswordBodyClass },
  '/index': { Component: Home, bodyClass: HomeBodyClass },
  '/index.html': { Component: Home, bodyClass: HomeBodyClass },
  '/index2': { Component: Home2, bodyClass: Home2BodyClass },
  '/index2.html': { Component: Home2, bodyClass: Home2BodyClass },
  '/index3': { Component: Home3, bodyClass: Home3BodyClass },
  '/index3.html': { Component: Home3, bodyClass: Home3BodyClass },
  '/index4': { Component: Home4, bodyClass: Home4BodyClass },
  '/index4.html': { Component: Home4, bodyClass: Home4BodyClass },
  '/index5': { Component: Home5, bodyClass: Home5BodyClass },
  '/index5.html': { Component: Home5, bodyClass: Home5BodyClass },
  '/index6': { Component: Home6, bodyClass: Home6BodyClass },
  '/index6.html': { Component: Home6, bodyClass: Home6BodyClass },
  '/index7': { Component: Home7, bodyClass: Home7BodyClass },
  '/index7.html': { Component: Home7, bodyClass: Home7BodyClass },
  '/index8': { Component: Home8, bodyClass: Home8BodyClass },
  '/index8.html': { Component: Home8, bodyClass: Home8BodyClass },
  '/page-404': { Component: Page404, bodyClass: Page404BodyClass },
  '/page-404.html': { Component: Page404, bodyClass: Page404BodyClass },
  '/page-about': { Component: PageAbout, bodyClass: PageAboutBodyClass },
  '/page-about.html': { Component: PageAbout, bodyClass: PageAboutBodyClass },
  '/page-contact': { Component: PageContact, bodyClass: PageContactBodyClass },
  '/page-contact.html': { Component: PageContact, bodyClass: PageContactBodyClass },
  '/page-faq': { Component: PageFaq, bodyClass: PageFaqBodyClass },
  '/page-faq.html': { Component: PageFaq, bodyClass: PageFaqBodyClass },
  '/page-forgot-password': { Component: PageForgotPassword, bodyClass: PageForgotPasswordBodyClass },
  '/page-forgot-password.html': { Component: PageForgotPassword, bodyClass: PageForgotPasswordBodyClass },
  '/page-login': { Component: PageLogin, bodyClass: PageLoginBodyClass },
  '/page-login.html': { Component: PageLogin, bodyClass: PageLoginBodyClass },
  '/page-my-account': { Component: PageMyAccount, bodyClass: PageMyAccountBodyClass },
  '/page-my-account.html': { Component: PageMyAccount, bodyClass: PageMyAccountBodyClass },
  '/shop-cart': { Component: ShopCart, bodyClass: ShopCartBodyClass },
  '/shop-cart.html': { Component: ShopCart, bodyClass: ShopCartBodyClass },
  '/shop-checkout': { Component: ShopCheckout, bodyClass: ShopCheckoutBodyClass },
  '/shop-checkout.html': { Component: ShopCheckout, bodyClass: ShopCheckoutBodyClass },
  '/shop-details': { Component: ShopDetails, bodyClass: ShopDetailsBodyClass },
  '/shop-details.html': { Component: ShopDetails, bodyClass: ShopDetailsBodyClass },
  '/shop-grid-fullwidth': { Component: ShopGridFullwidth, bodyClass: ShopGridFullwidthBodyClass },
  '/shop-grid-fullwidth.html': { Component: ShopGridFullwidth, bodyClass: ShopGridFullwidthBodyClass },
  '/shop-grid-left': { Component: ShopGridLeft, bodyClass: ShopGridLeftBodyClass },
  '/shop-grid-left.html': { Component: ShopGridLeft, bodyClass: ShopGridLeftBodyClass },
  '/shop-grid-right': { Component: ShopGridRight, bodyClass: ShopGridRightBodyClass },
  '/shop-grid-right.html': { Component: ShopGridRight, bodyClass: ShopGridRightBodyClass },
  '/shop-list-left': { Component: ShopListLeft, bodyClass: ShopListLeftBodyClass },
  '/shop-list-left.html': { Component: ShopListLeft, bodyClass: ShopListLeftBodyClass },
  '/shop-list-right': { Component: ShopListRight, bodyClass: ShopListRightBodyClass },
  '/shop-list-right.html': { Component: ShopListRight, bodyClass: ShopListRightBodyClass },
  '/shop-wishlist': { Component: ShopWishlist, bodyClass: ShopWishlistBodyClass },
  '/shop-wishlist.html': { Component: ShopWishlist, bodyClass: ShopWishlistBodyClass },
}

function getCurrentPath() {
  return window.location.pathname || '/'
}

function normalizeInternalHref(href: string) {
  if (!href || href === '#') return null
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return null
  if (href.endsWith('.html')) return href.startsWith('/') ? href : `/${href}`
  return null
}

function reloadMojuriScript() {
  document.querySelectorAll('script[data-mojuri-app="true"]').forEach((script) => script.remove())
  const script = document.createElement('script')
  script.src = `/assets/js/app.js?v=${Date.now()}`
  script.dataset.mojuriApp = 'true'
  document.body.appendChild(script)
}

function App() {
  const [pathname, setPathname] = useState(getCurrentPath)

  const page = useMemo(() => pages[pathname] ?? pages['/'], [pathname])
  const ActivePage = page.Component

  useEffect(() => {
    const classes = page.bodyClass || 'home'
    document.body.className = classes
    document.title = 'Mojuri – Jewelry Store HTML Template'
    window.scrollTo(0, 0)
    window.setTimeout(reloadMojuriScript, 0)
  }, [page])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest<HTMLAnchorElement>('a[href]')
      if (!link || link.target === '_blank' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      const href = link.getAttribute('href')
      const normalized = normalizeInternalHref(href ?? '')
      if (!normalized || !pages[normalized]) return
      event.preventDefault()
      window.history.pushState(null, '', normalized)
      setPathname(getCurrentPath())
    }

    const handlePopState = () => setPathname(getCurrentPath())

    document.addEventListener('click', handleClick)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return <ActivePage />
}

export default App
