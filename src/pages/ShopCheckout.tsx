import { useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { apiRequest } from '../lib/api'
import MiniCartPopup from '../components/MiniCartPopup'
import type { Order } from '../types/api'

export const ShopCheckoutBodyClass = 'shop'

export default function ShopCheckout() {
  const { user } = useAuth()
  const { items, subtotal, clear } = useCart()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null)
  const shippingFee = items.length === 0 || subtotal >= 400 ? 0 : 20

  async function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (items.length === 0) {
      setError('Your cart is empty.')
      return
    }

    const form = new FormData(event.currentTarget)
    const address = [
      form.get('billing_address_1'),
      form.get('billing_address_2'),
      form.get('billing_city'),
      form.get('billing_state'),
      form.get('billing_country'),
    ].filter(Boolean).join(', ')

    setSubmitting(true)
    setError('')
    try {
      const order = await apiRequest<Order>('/orders', {
        method: 'POST',
        body: JSON.stringify({
          customer: {
            name: `${form.get('billing_first_name')} ${form.get('billing_last_name')}`.trim(),
            email: form.get('billing_email'),
            phone: form.get('billing_phone'),
            address,
            note: form.get('order_comments'),
          },
          paymentMethod: form.get('payment_method') === 'bank' ? 'bank' : 'cod',
          items: items.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
          })),
        }),
      })
      setCreatedOrder(order)
      clear()
      window.scrollTo(0, 0)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to create order.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
<div id="page" className="hfeed page-wrapper">
        <header id="site-header" className="site-header header-v1">
          <div className="header-mobile">
            <div className="section-padding">
              <div className="section-container">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                    <div className="navbar-header">
                      <button type="button" id="show-megamenu" className="navbar-toggle"></button>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                    <div className="site-logo">
                      <a href="index.html">
                        <img width={400} height={79} src="media/logo-white.png" alt="Mojuri – Jewelry Store HTML Template" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                    <div className="mojuri-topcart dropdown">
                      <div className="dropdown mini-cart top-cart">
                        <div className="remove-cart-shadow"></div>
                        <a className="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <div className="icons-cart">
                            <i className="icon-large-paper-bag"></i>
                            <span className="cart-count">
                              2
                            </span>
                          </div>
                        </a>
                        <div className="dropdown-menu cart-popup">
                          <MiniCartPopup />
                          <div className="cart-empty-wrap">
                            <ul className="cart-list">
                              <li className="empty">
                                <span>
                                  No products in the cart.
                                </span>
                                <a className="go-shop" href="shop-grid-left.html">
                                  GO TO SHOP
                                  <i aria-hidden="true" className="arrow_right"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="cart-list-wrap">
                            <ul className="cart-list">
                              <li className="mini-cart-item">
                                <a href="#" className="remove" title="Remove this item">
                                  <i className="icon_close"></i>
                                </a>
                                <a href="shop-details.html" className="product-image">
                                  <img width={600} height={600} src="media/product/3.jpg" alt="" />
                                </a>
                                <a href="shop-details.html" className="product-name">
                                  Twin Hoops
                                </a>
                                <div className="quantity">
                                  Qty: 1
                                </div>
                                <div className="price">
                                  $150.00
                                </div>
                              </li>
                              <li className="mini-cart-item">
                                <a href="#" className="remove" title="Remove this item">
                                  <i className="icon_close"></i>
                                </a>
                                <a href="shop-details.html" className="product-image">
                                  <img width={600} height={600} src="media/product/1.jpg" alt="" />
                                </a>
                                <a href="shop-details.html" className="product-name">
                                  Medium Flat Hoops
                                </a>
                                <div className="quantity">
                                  Qty: 1
                                </div>
                                <div className="price">
                                  $100.00
                                </div>
                              </li>
                            </ul>
                            <div className="total-cart">
                              <div className="title-total">
                                Total:
                              </div>
                              <div className="total-price">
                                <span>
                                  $250.00
                                </span>
                              </div>
                            </div>
                            <div className="free-ship">
                              <div className="title-ship">
                                Buy
                                <strong>
                                  $400
                                </strong>
                                more to enjoy
                                <strong>
                                  FREE Shipping
                                </strong>
                              </div>
                              <div className="total-percent">
                                <div className="percent" style={{width: "20%"} as CSSProperties}></div>
                              </div>
                            </div>
                            <div className="buttons">
                              <a href="shop-cart.html" className="button btn view-cart btn-primary">
                                View cart
                              </a>
                              <a href="shop-checkout.html" className="button btn checkout btn-default">
                                Check out
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-mobile-fixed">
              {/* Shop */}
              <div className="shop-page">
                <a href="shop-grid-left.html">
                  <i className="wpb-icon-shop"></i>
                </a>
              </div>
              {/* Login */}
              <div className="my-account">
                <div className="login-header">
                  <a href="page-my-account.html">
                    <i className="wpb-icon-user"></i>
                  </a>
                </div>
              </div>
              {/* Search */}
              <div className="search-box">
                <div className="search-toggle">
                  <i className="wpb-icon-magnifying-glass"></i>
                </div>
              </div>
              {/* Wishlist */}
              <div className="wishlist-box">
                <a href="shop-wishlist.html">
                  <i className="wpb-icon-heart"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="header-desktop">
            <div className="header-wrapper">
              <div className="section-padding">
                <div className="section-container large p-l-r">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-left">
                      <div className="site-logo">
                        <a href="index.html">
                          <img width={400} height={140} src="media/logo.png" alt="Mojuri – Jewelry Store HTML Template" />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                      <div className="site-navigation">
                        <nav id="main-navigation">
                          <ul id="menu-main-menu" className="menu">
                            <li className="level-0 menu-item menu-item-has-children current-menu-item">
                              <a href="index.html">
                                <span className="menu-item-text">
                                  Home
                                </span>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="index.html">
                                    <span className="menu-item-text">
                                      Home Clean
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index2.html">
                                    <span className="menu-item-text">
                                      Home Collection
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index3.html">
                                    <span className="menu-item-text">
                                      Home Minimal
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index4.html">
                                    <span className="menu-item-text">
                                      Home Modern
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index5.html">
                                    <span className="menu-item-text">
                                      Home Parallax
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index6.html">
                                    <span className="menu-item-text">
                                      Home Strong
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index7.html">
                                    <span className="menu-item-text">
                                      Home Style
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index8.html">
                                    <span className="menu-item-text">
                                      Home Unique
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level-0 menu-item menu-item-has-children">
                              <a href="shop-grid-left.html">
                                <span className="menu-item-text">
                                  Shop
                                </span>
                              </a>
                              <ul className="sub-menu">
                                <li className="level-1 menu-item menu-item-has-children">
                                  <a href="shop-grid-left.html">
                                    <span className="menu-item-text">
                                      Shop - Products
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li>
                                      <a href="shop-grid-left.html">
                                        <span className="menu-item-text">
                                          Shop Grid - Left Sidebar
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-left.html">
                                        <span className="menu-item-text">
                                          Shop List - Left Sidebar
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-grid-right.html">
                                        <span className="menu-item-text">
                                          Shop Grid - Right Sidebar
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-right.html">
                                        <span className="menu-item-text">
                                          Shop List - Right Sidebar
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-grid-fullwidth.html">
                                        <span className="menu-item-text">
                                          Shop Grid - No Sidebar
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="shop-details.html">
                                    <span className="menu-item-text">
                                      Shop Details
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-cart.html">
                                    <span className="menu-item-text">
                                      Shop - Cart
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-checkout.html">
                                    <span className="menu-item-text">
                                      Shop - Checkout
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-wishlist.html">
                                    <span className="menu-item-text">
                                      Shop - Wishlist
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
                              <a href="blog-grid-left.html">
                                <span className="menu-item-text">
                                  Blog
                                </span>
                              </a>
                              <div className="sub-menu">
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="menu-section">
                                      <h2 className="sub-menu-title">
                                        Blog Category
                                      </h2>
                                      <ul className="menu-list">
                                        <li>
                                          <a href="blog-grid-left.html">
                                            <span className="menu-item-text">
                                              Blog Grid - Left Sidebar
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="blog-grid-right.html">
                                            <span className="menu-item-text">
                                              Blog Grid - Right Sidebar
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="blog-list-left.html">
                                            <span className="menu-item-text">
                                              Blog List - Left Sidebar
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="blog-list-right.html">
                                            <span className="menu-item-text">
                                              Blog List - Right Sidebar
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="blog-grid-fullwidth.html">
                                            <span className="menu-item-text">
                                              Blog Grid - No Sidebar
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="menu-section">
                                      <h2 className="sub-menu-title">
                                        Blog Details
                                      </h2>
                                      <ul className="menu-list">
                                        <li>
                                          <a href="blog-details-left.html">
                                            <span className="menu-item-text">
                                              Blog Details - Left Sidebar
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="blog-details-right.html">
                                            <span className="menu-item-text">
                                              Blog Details - Right Sidebar
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="blog-details-fullwidth.html">
                                            <span className="menu-item-text">
                                              Blog Details - No Sidebar
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="menu-section">
                                      <h2 className="sub-menu-title">
                                        Recent Posts
                                      </h2>
                                      <div className="block block-posts recent-posts p-t-5">
                                        <ul className="posts-list">
                                          <li className="post-item">
                                            <a href="blog-details-right.html" className="post-image">
                                              <img src="media/blog/1.jpg" />
                                            </a>
                                            <div className="post-content">
                                              <h2 className="post-title">
                                                <a href="blog-details-right.html">
                                                  Bridial Fair Collections 2023
                                                </a>
                                              </h2>
                                              <div className="post-time">
                                                <span className="post-date">
                                                  May 30, 2022
                                                </span>
                                                <span className="post-comment">
                                                  4 Comments
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="post-item">
                                            <a href="blog-details-right.html" className="post-image">
                                              <img src="media/blog/2.jpg" />
                                            </a>
                                            <div className="post-content">
                                              <h2 className="post-title">
                                                <a href="blog-details-right.html">
                                                  Our Sterling Silver
                                                </a>
                                              </h2>
                                              <div className="post-time">
                                                <span className="post-date">
                                                  Aug 24, 2022
                                                </span>
                                                <span className="post-comment">
                                                  2 Comments
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="post-item">
                                            <a href="blog-details-right.html" className="post-image">
                                              <img src="media/blog/3.jpg" />
                                            </a>
                                            <div className="post-content">
                                              <h2 className="post-title">
                                                <a href="blog-details-right.html">
                                                  Kitchen Inspired On Japanese
                                                </a>
                                              </h2>
                                              <div className="post-time">
                                                <span className="post-date">
                                                  Dec 06, 2022
                                                </span>
                                                <span className="post-comment">
                                                  1 Comment
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="level-0 menu-item menu-item-has-children">
                              <a href="#">
                                <span className="menu-item-text">
                                  Pages
                                </span>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="page-login.html">
                                    <span className="menu-item-text">
                                      Login / Register
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-forgot-password.html">
                                    <span className="menu-item-text">
                                      Forgot Password
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-my-account.html">
                                    <span className="menu-item-text">
                                      My Account
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-about.html">
                                    <span className="menu-item-text">
                                      About Us
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-contact.html">
                                    <span className="menu-item-text">
                                      Contact
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-faq.html">
                                    <span className="menu-item-text">
                                      FAQ
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-404.html">
                                    <span className="menu-item-text">
                                      Page 404
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level-0 menu-item">
                              <a href="page-contact.html">
                                <span className="menu-item-text">
                                  Contact
                                </span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-right">
                      <div className="header-page-link">
                        {/* Search */}
                        <div className="search-box">
                          <div className="search-toggle">
                            <i className="icon-search"></i>
                          </div>
                        </div>
                        {/* Login */}
                        <div className="login-header icon">
                          <a className="active-login" href="#">
                            <i className="icon-user"></i>
                          </a>
                          <div className="form-login-register">
                            <div className="box-form-login">
                              <div className="active-login"></div>
                              <div className="box-content">
                                <div className="form-login active">
                                  <form id="login_ajax" method="post" className="login">
                                    <h2>
                                      Sign in
                                    </h2>
                                    <p className="status"></p>
                                    <div className="content">
                                      <div className="username">
                                        <input type="text" required className="input-text" name="username" id="username" placeholder="Your name" />
                                      </div>
                                      <div className="password">
                                        <input className="input-text" required type="password" name="password" id="password" placeholder="Password" />
                                      </div>
                                      <div className="rememberme-lost">
                                        <div className="rememberme">
                                          <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                          <label htmlFor="rememberme" className="inline">
                                            Remember me
                                          </label>
                                        </div>
                                        <div className="lost_password">
                                          <a href="forgot-password.html">
                                            Lost your password?
                                          </a>
                                        </div>
                                      </div>
                                      <div className="button-login">
                                        <input type="submit" className="button" name="login" value="Login" />
                                      </div>
                                      <div className="button-next-reregister">
                                        Create An Account
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="form-register">
                                  <form method="post" className="register">
                                    <h2>
                                      REGISTER
                                    </h2>
                                    <div className="content">
                                      <div className="email">
                                        <input type="email" className="input-text" placeholder="Email" name="email" id="reg_email" value="" />
                                      </div>
                                      <div className="password">
                                        <input type="password" className="input-text" placeholder="Password" name="password" id="reg_password" />
                                      </div>
                                      <div className="button-register">
                                        <input type="submit" className="button" name="register" value="Register" />
                                      </div>
                                      <div className="button-next-login">
                                        Already has an account
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Wishlist */}
                        <div className="wishlist-box">
                          <a href="shop-wishlist.html">
                            <i className="icon-heart"></i>
                          </a>
                          <span className="count-wishlist">
                            1
                          </span>
                        </div>
                        {/* Cart */}
                        <div className="mojuri-topcart dropdown light">
                          <div className="dropdown mini-cart top-cart">
                            <div className="remove-cart-shadow"></div>
                            <a className="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <div className="icons-cart">
                                <i className="icon-large-paper-bag"></i>
                                <span className="cart-count">
                                  2
                                </span>
                              </div>
                            </a>
                            <div className="dropdown-menu cart-popup">
                              <MiniCartPopup />
                              <div className="cart-empty-wrap">
                                <ul className="cart-list">
                                  <li className="empty">
                                    <span>
                                      No products in the cart.
                                    </span>
                                    <a className="go-shop" href="shop-grid-left.html">
                                      GO TO SHOP
                                      <i aria-hidden="true" className="arrow_right"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-list-wrap">
                                <ul className="cart-list">
                                  <li className="mini-cart-item">
                                    <a href="#" className="remove" title="Remove this item">
                                      <i className="icon_close"></i>
                                    </a>
                                    <a href="shop-details.html" className="product-image">
                                      <img width={600} height={600} src="media/product/3.jpg" alt="" />
                                    </a>
                                    <a href="shop-details.html" className="product-name">
                                      Twin Hoops
                                    </a>
                                    <div className="quantity">
                                      Qty: 1
                                    </div>
                                    <div className="price">
                                      $150.00
                                    </div>
                                  </li>
                                  <li className="mini-cart-item">
                                    <a href="#" className="remove" title="Remove this item">
                                      <i className="icon_close"></i>
                                    </a>
                                    <a href="shop-details.html" className="product-image">
                                      <img width={600} height={600} src="media/product/1.jpg" alt="" />
                                    </a>
                                    <a href="shop-details.html" className="product-name">
                                      Medium Flat Hoops
                                    </a>
                                    <div className="quantity">
                                      Qty: 1
                                    </div>
                                    <div className="price">
                                      $100.00
                                    </div>
                                  </li>
                                </ul>
                                <div className="total-cart">
                                  <div className="title-total">
                                    Total:
                                  </div>
                                  <div className="total-price">
                                    <span>
                                      $250.00
                                    </span>
                                  </div>
                                </div>
                                <div className="free-ship">
                                  <div className="title-ship">
                                    Buy
                                    <strong>
                                      $400
                                    </strong>
                                    more to enjoy
                                    <strong>
                                      FREE Shipping
                                    </strong>
                                  </div>
                                  <div className="total-percent">
                                    <div className="percent" style={{width: "20%"} as CSSProperties}></div>
                                  </div>
                                </div>
                                <div className="buttons">
                                  <a href="shop-cart.html" className="button btn view-cart btn-primary">
                                    View cart
                                  </a>
                                  <a href="shop-checkout.html" className="button btn checkout btn-default">
                                    Check out
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="site-main" className="site-main">
          <div id="main-content" className="main-content">
            <div id="primary" className="content-area">
              <div id="title" className="page-title">
                <div className="section-container">
                  <div className="content-title-heading">
                    <h1 className="text-title-heading">
                      Checkout
                    </h1>
                  </div>
                  <div className="breadcrumbs">
                    <a href="index.html">
                      Home
                    </a>
                    <span className="delimiter"></span>
                    <a href="shop-grid-left.html">
                      Shop
                    </a>
                    <span className="delimiter"></span>
                    Checkout
                  </div>
                </div>
              </div>
              <div id="content" className="site-content" role="main">
                <div className="section-padding">
                  <div className="section-container p-l-r">
                    <div className="shop-checkout">
                      {createdOrder && (
                        <div className="checkout-order-success">
                          <h2>Thank you. Your order has been received.</h2>
                          <p>Order ID: <strong>{createdOrder._id}</strong></p>
                          <p>Total: <strong>${createdOrder.total.toFixed(2)}</strong></p>
                          <p>Status: <strong>{createdOrder.status}</strong></p>
                          <a className="button" href="/track-order">Track your order</a>
                        </div>
                      )}
                      {!createdOrder && <form name="checkout" method="post" className="checkout" autoComplete="off" onSubmit={handleCheckout}>
                        <div className="row">
                          <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                            <div className="customer-details">
                              <div className="billing-fields">
                                <h3>
                                  Billing Details
                                </h3>
                                <div className="billing-fields-wrapper">
                                  <p className="form-row form-row-first validate-required">
                                    <label>
                                      First name
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="text" className="input-text" name="billing_first_name" defaultValue={user?.name?.split(' ')[0] ?? ''} required />
                                    </span>
                                  </p>
                                  <p className="form-row form-row-last validate-required">
                                    <label>
                                      Last name
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="text" className="input-text" name="billing_last_name" defaultValue={user?.name?.split(' ').slice(1).join(' ') ?? ''} required />
                                    </span>
                                  </p>
                                  <p className="form-row form-row-wide">
                                    <label>
                                      Company name
                                      <span className="optional">
                                        (optional)
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="text" className="input-text" name="billing_company" defaultValue="" />
                                    </span>
                                  </p>
                                  <p className="form-row form-row-wide validate-required">
                                    <label>
                                      Country / Region
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <select name="billing_country" className="country-select custom-select">
                                        <option value="">
                                          Select a country / region…
                                        </option>
                                        <option value="AF">
                                          Afghanistan
                                        </option>
                                        <option value="AX">
                                          Åland Islands
                                        </option>
                                        <option value="AL">
                                          Albania
                                        </option>
                                        <option value="DZ">
                                          Algeria
                                        </option>
                                        <option value="AS">
                                          American Samoa
                                        </option>
                                        <option value="AD">
                                          Andorra
                                        </option>
                                      </select>
                                    </span>
                                  </p>
                                  <p className="form-row address-field validate-required form-row-wide">
                                    <label>
                                      Street address
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="text" className="input-text" name="billing_address_1" placeholder="House number and street name" defaultValue="" required />
                                    </span>
                                  </p>
                                  <p className="form-row address-field form-row-wide">
                                    <label>
                                      Apartment, suite, unit, etc.
                                      <span className="optional">
                                        (optional)
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="text" className="input-text" name="billing_address_2" placeholder="Apartment, suite, unit, etc. (optional)" defaultValue="" />
                                    </span>
                                  </p>
                                  <p className="form-row address-field validate-required form-row-wide">
                                    <label htmlFor="billing_city" className="">
                                      Town / City
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="text" className="input-text" name="billing_city" defaultValue="" required />
                                    </span>
                                  </p>
                                  <p className="form-row address-field validate-required validate-state form-row-wide">
                                    <label>
                                      State / County
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <select name="billing_state" className="state-select custom-select">
                                        <option value="">
                                          Select a state / county…
                                        </option>
                                        <option value="VN">
                                          Vinnytsia Oblast
                                        </option>
                                        <option value="VL">
                                          Volyn Oblast
                                        </option>
                                        <option value="DP">
                                          Dnipropetrovsk Oblast
                                        </option>
                                        <option value="DT">
                                          Donetsk Oblast
                                        </option>
                                        <option value="ZT">
                                          Zhytomyr Oblast
                                        </option>
                                      </select>
                                    </span>
                                  </p>
                                  <p className="form-row address-field validate-required validate-postcode form-row-wide">
                                    <label>
                                      Postcode / ZIP
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="text" className="input-text" name="billing_postcode" defaultValue="" />
                                    </span>
                                  </p>
                                  <p className="form-row form-row-wide validate-required validate-phone">
                                    <label>
                                      Phone
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="tel" className="input-text" name="billing_phone" defaultValue="" required />
                                    </span>
                                  </p>
                                  <p className="form-row form-row-wide validate-required validate-email">
                                    <label>
                                      Email address
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper">
                                      <input type="email" className="input-text" name="billing_email" defaultValue={user?.email ?? ''} autoComplete="email" required />
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="account-fields">
                                <p className="form-row form-row-wide">
                                  <label className="checkbox">
                                    <input className="input-checkbox" type="checkbox" name="createaccount" value="1" />
                                    <span>
                                      Create an account?
                                    </span>
                                  </label>
                                </p>
                                <div className="create-account">
                                  <p className="form-row validate-required">
                                    <label>
                                      Create account password
                                      <span className="required" title="required">
                                        *
                                      </span>
                                    </label>
                                    <span className="input-wrapper password-input">
                                      <input type="password" className="input-text" name="account_password" value="" autoComplete="off" />
                                      <span className="show-password-input"></span>
                                    </span>
                                  </p>
                                  <div className="clear"></div>
                                </div>
                              </div>
                            </div>
                            <div className="shipping-fields">
                              <p className="form-row form-row-wide ship-to-different-address">
                                <label className="checkbox">
                                  <input className="input-checkbox" type="checkbox" name="ship_to_different_address" value="1" />
                                  <span>
                                    Ship to a different address?
                                  </span>
                                </label>
                              </p>
                              <div className="shipping-address">
                                <p className="form-row form-row-first validate-required">
                                  <label>
                                    First name
                                    <span className="required" title="required">
                                      *
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <input type="text" className="input-text" name="shipping_first_name" value="" />
                                  </span>
                                </p>
                                <p className="form-row form-row-last validate-required">
                                  <label>
                                    Last name
                                    <span className="required" title="required">
                                      *
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <input type="text" className="input-text" name="shipping_last_name" value="" />
                                  </span>
                                </p>
                                <p className="form-row form-row-wide">
                                  <label>
                                    Company name
                                    <span className="optional">
                                      (optional)
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <input type="text" className="input-text" name="shipping_company" value="" />
                                  </span>
                                </p>
                                <p className="form-row form-row-wide address-field validate-required">
                                  <label htmlFor="shipping_country" className="">
                                    Country / Region
                                    <span className="required" title="required">
                                      *
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <select name="billing_state" className="state-select custom-select">
                                      <option value="">
                                        Select a country / region…
                                      </option>
                                      <option value="VN">
                                        Vinnytsia Oblast
                                      </option>
                                      <option value="VL">
                                        Volyn Oblast
                                      </option>
                                      <option value="DP">
                                        Dnipropetrovsk Oblast
                                      </option>
                                      <option value="DT">
                                        Donetsk Oblast
                                      </option>
                                      <option value="ZT">
                                        Zhytomyr Oblast
                                      </option>
                                    </select>
                                  </span>
                                </p>
                                <p className="form-row address-field validate-required form-row-wide">
                                  <label>
                                    Street address
                                    <span className="required" title="required">
                                      *
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <input type="text" className="input-text" name="shipping_address_1" placeholder="House number and street name" value="" />
                                  </span>
                                </p>
                                <p className="form-row address-field form-row-wide">
                                  <label>
                                    Apartment, suite, unit, etc.
                                    <span className="optional">
                                      (optional)
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <input type="text" className="input-text" name="shipping_address_2" placeholder="Apartment, suite, unit, etc. (optional)" value="" />
                                  </span>
                                </p>
                                <p className="form-row address-field validate-required form-row-wide">
                                  <label>
                                    Town / City
                                    <span className="required" title="required">
                                      *
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <input type="text" className="input-text" name="shipping_city" value="" />
                                  </span>
                                </p>
                                <p className="form-row address-field validate-required validate-state form-row-wide">
                                  <label htmlFor="shipping_state" className="">
                                    State / County
                                    <span className="required" title="required">
                                      *
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <select name="billing_state" className="state-select custom-select">
                                      <option value="">
                                        Select a state / county…
                                      </option>
                                      <option value="VN">
                                        Vinnytsia Oblast
                                      </option>
                                      <option value="VL">
                                        Volyn Oblast
                                      </option>
                                      <option value="DP">
                                        Dnipropetrovsk Oblast
                                      </option>
                                      <option value="DT">
                                        Donetsk Oblast
                                      </option>
                                      <option value="ZT">
                                        Zhytomyr Oblast
                                      </option>
                                    </select>
                                  </span>
                                </p>
                                <p className="form-row address-field validate-required validate-postcode form-row-wide">
                                  <label>
                                    Postcode / ZIP
                                    <span className="required" title="required">
                                      *
                                    </span>
                                  </label>
                                  <span className="input-wrapper">
                                    <input type="text" className="input-text" name="shipping_postcode" value="" />
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="additional-fields">
                              <p className="form-row notes">
                                <label>
                                  Order notes
                                  <span className="optional">
                                    (optional)
                                  </span>
                                </label>
                                <span className="input-wrapper">
                                  <textarea name="order_comments" className="input-text" placeholder="Notes about your order, e.g. special notes for delivery." rows={2} cols={5}></textarea>
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                            <div className="checkout-review-order">
                              <div className="checkout-review-order-table">
                                <h3 className="review-order-title">
                                  Product
                                </h3>
                                <div className="cart-items">
                                  {items.map(({ product, quantity }) => {
                                    const price = product.salePrice ?? product.price
                                    return (
                                      <div className="cart-item mojuri-checkout-item" key={product._id}>
                                        <div className="info-product">
                                          <div className="product-thumbnail"><img width={600} height={600} src={product.thumbnail} alt={product.name} /></div>
                                          <div className="product-name">{product.name}<strong className="product-quantity">QTY : {quantity}</strong></div>
                                        </div>
                                        <div className="product-total"><span>${(price * quantity).toFixed(2)}</span></div>
                                      </div>
                                    )
                                  })}
                                  <div className="template-static-checkout">
                                  <div className="cart-item">
                                    <div className="info-product">
                                      <div className="product-thumbnail">
                                        <img width={600} height={600} src="media/product/3.jpg" alt="" />
                                      </div>
                                      <div className="product-name">
                                        Twin Hoops
                                        <strong className="product-quantity">
                                          QTY : 2
                                        </strong>
                                      </div>
                                    </div>
                                    <div className="product-total">
                                      <span>
                                        $300.00
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cart-item">
                                    <div className="info-product">
                                      <div className="product-thumbnail">
                                        <img width={600} height={600} src="media/product/1.jpg" alt="" />
                                      </div>
                                      <div className="product-name">
                                        Medium Flat Hoops
                                        <strong className="product-quantity">
                                          QTY : 1
                                        </strong>
                                      </div>
                                    </div>
                                    <div className="product-total">
                                      <span>
                                        $180.00
                                      </span>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                                <div className="cart-subtotal">
                                  <h2>
                                    Subtotal
                                  </h2>
                                  <div className="subtotal-price">
                                    <span>
                                      ${subtotal.toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                                <div className="shipping-totals shipping">
                                  <h2>
                                    Shipping
                                  </h2>
                                  <div data-title="Shipping">
                                    <ul className="shipping-methods custom-radio">
                                      <li>
                                        <input type="radio" name="shipping_method" data-index="0" value="free_shipping" className="shipping_method" defaultChecked />
                                        <label>
                                          {shippingFee === 0 ? 'Free shipping' : `$${shippingFee.toFixed(2)} flat rate`}
                                        </label>
                                      </li>
                                      <li>
                                        <input type="radio" name="shipping_method" data-index="0" value="flat_rate" className="shipping_method" />
                                        <label>
                                          Flat rate
                                        </label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="order-total">
                                  <h2>
                                    Total
                                  </h2>
                                  <div className="total-price">
                                    <strong>
                                      <span>
                                      ${(subtotal + shippingFee).toFixed(2)}
                                      </span>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                              <div id="payment" className="checkout-payment">
                                <ul className="payment-methods methods custom-radio">
                                  <li className="payment-method">
                                    <input type="radio" className="input-radio" name="payment_method" value="bank" defaultChecked />
                                    <label htmlFor="payment_method_bacs">
                                      Direct bank transfer
                                    </label>
                                    <div className="payment-box">
                                      <p>
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                      </p>
                                    </div>
                                  </li>
                                  <li className="payment-method">
                                    <input type="radio" className="input-radio" name="payment_method" value="cheque" />
                                    <label>
                                      Check payments
                                    </label>
                                    <div className="payment-box">
                                      <p>
                                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                      </p>
                                    </div>
                                  </li>
                                  <li className="payment-method">
                                    <input type="radio" className="input-radio" name="payment_method" value="cod" />
                                    <label>
                                      Cash on delivery
                                    </label>
                                    <div className="payment-box">
                                      <p>
                                        Pay with cash upon delivery.
                                      </p>
                                    </div>
                                  </li>
                                  <li className="payment-method">
                                    <input type="radio" className="input-radio" name="payment_method" value="paypal" />
                                    <label>
                                      PayPal
                                    </label>
                                    <div className="payment-box">
                                      <p>
                                        Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                                <div className="form-row place-order">
                                  <div className="terms-and-conditions-wrapper">
                                    <div className="privacy-policy-text"></div>
                                  </div>
                                  {error && <p className="auth-form-error">{error}</p>}
                                  <button type="submit" className="button alt" name="checkout_place_order" value="Place order" disabled={submitting || items.length === 0}>
                                    {submitting ? 'Placing order...' : 'Place order'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>}
                    </div>
                  </div>
                </div>
              </div>
              {/* #content */}
            </div>
            {/* #primary */}
          </div>
          {/* #main-content */}
        </div>
        <footer id="site-footer" className="site-footer background four-columns">
          <div className="footer">
            <div className="section-padding">
              <div className="section-container">
                <div className="block-widget-wrap">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 column-1">
                      <div className="block block-menu m-b-20">
                        <h2 className="block-title">
                          Contact Us
                        </h2>
                        <div className="block-content">
                          <ul>
                            <li>
                              <span>
                                Head Office:
                              </span>
                              26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD
                            </li>
                            <li>
                              <span>
                                Tel:
                              </span>
                              01743 234500
                            </li>
                            <li>
                              <span>
                                Email:
                              </span>
                              <a href="mailto:support@mojuri.com">
                                support@mojuri.com
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="block block-social">
                        <ul className="social-link">
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-dribbble"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 column-2">
                      <div className="block block-menu">
                        <h2 className="block-title">
                          Customer Services
                        </h2>
                        <div className="block-content">
                          <ul>
                            <li>
                              <a href="shop-grid-left.html">
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Track Your Order
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Product Care &amp; Repair
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Book an Appointment
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Frequently Asked Questions
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Shipping &amp; Returns
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 column-3">
                      <div className="block block-menu">
                        <h2 className="block-title">
                          About Us
                        </h2>
                        <div className="block-content">
                          <ul>
                            <li>
                              <a href="#">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                FAQ
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Our Producers
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sitemap
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Privacy Policy
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 column-4">
                      <div className="block block-menu">
                        <h2 className="block-title">
                          Catalog
                        </h2>
                        <div className="block-content">
                          <ul>
                            <li>
                              <a href="shop-grid-left.html">
                                Earrings
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Necklaces
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Bracelets
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Rings
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Jewelry Box
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Studs
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="section-padding">
              <div className="section-container">
                <div className="block-widget-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="footer-left">
                        <p className="copyright">
                          Copyright © 2023. All Right Reserved
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="footer-right">
                        <div className="block block-image">
                          <img width={309} height={32} src="media/payments.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* Back Top button */}
      <div className="back-top button-show">
        <i className="arrow_carrot-up"></i>
      </div>
      {/* Search */}
      <div className="search-overlay">
        <div className="close-search"></div>
        <div className="wrapper-search">
          <form role="search" method="get" className="search-from ajax-search" action="#">
            <a href="#" className="search-close"></a>
            <div className="search-box">
              <button id="searchsubmit" className="btn" type="submit">
                <i className="icon-search"></i>
              </button>
              <input type="text" autoComplete="off" value="" name="s" className="input-search s" placeholder="Search..." />
              <div className="content-menu_search">
                <label>
                  Suggested
                </label>
                <ul id="menu_search" className="menu">
                  <li>
                    <a href="#">
                      Earrings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Necklaces
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bracelets
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Jewelry Box
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Wishlist */}
      <div className="wishlist-popup">
        <div className="wishlist-popup-inner">
          <div className="wishlist-popup-content">
            <div className="wishlist-popup-content-top">
              <span className="wishlist-name">
                Wishlist
              </span>
              <span className="wishlist-count-wrapper">
                <span className="wishlist-count">
                  2
                </span>
              </span>
              <span className="wishlist-popup-close"></span>
            </div>
            <div className="wishlist-popup-content-mid">
              <table className="wishlist-items">
                <tbody>
                  <tr className="wishlist-item">
                    <td className="wishlist-item-remove">
                      <span></span>
                    </td>
                    <td className="wishlist-item-image">
                      <a href="shop-details.html">
                        <img width={600} height={600} src="media/product/3.jpg" alt="" />
                      </a>
                    </td>
                    <td className="wishlist-item-info">
                      <div className="wishlist-item-name">
                        <a href="shop-details.html">
                          Twin Hoops
                        </a>
                      </div>
                      <div className="wishlist-item-price">
                        <span>
                          $150.00
                        </span>
                      </div>
                      <div className="wishlist-item-time">
                        June 4, 2022
                      </div>
                    </td>
                    <td className="wishlist-item-actions">
                      <div className="wishlist-item-stock">
                        In stock
                      </div>
                      <div className="wishlist-item-add">
                        <div data-title="Add to cart">
                          <a rel="nofollow" href="#">
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="wishlist-item">
                    <td className="wishlist-item-remove">
                      <span></span>
                    </td>
                    <td className="wishlist-item-image">
                      <a href="shop-details.html">
                        <img width={600} height={600} src="media/product/4.jpg" alt="" />
                      </a>
                    </td>
                    <td className="wishlist-item-info">
                      <div className="wishlist-item-name">
                        <a href="shop-details.html">
                          Yilver And Turquoise Earrings
                        </a>
                      </div>
                      <div className="wishlist-item-price">
                        <del aria-hidden="true">
                          <span>
                            $150.00
                          </span>
                        </del>
                        <ins>
                          <span>
                            $100.00
                          </span>
                        </ins>
                      </div>
                      <div className="wishlist-item-time">
                        June 4, 2022
                      </div>
                    </td>
                    <td className="wishlist-item-actions">
                      <div className="wishlist-item-stock">
                        In stock
                      </div>
                      <div className="wishlist-item-add">
                        <div data-title="Add to cart">
                          <a rel="nofollow" href="#">
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="wishlist-popup-content-bot">
              <div className="wishlist-popup-content-bot-inner">
                <a className="wishlist-page" href="shop-wishlist.html">
                  Open wishlist page
                </a>
                <span className="wishlist-continue" data-url="">
                  Continue shopping
                </span>
              </div>
              <div className="wishlist-notice wishlist-notice-show">
                Added to the wishlist!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Compare */}
      <div className="compare-popup">
        <div className="compare-popup-inner">
          <div className="compare-table">
            <div className="compare-table-inner">
              <a href="#" id="compare-table-close" className="compare-table-close">
                <span className="compare-table-close-icon"></span>
              </a>
              <div className="compare-table-items">
                <table id="product-table" className="product-table">
                  <thead>
                    <tr>
                      <th>
                        <a href="#" className="compare-table-settings">
                          Settings
                        </a>
                      </th>
                      <th>
                        <a href="shop-details.html">
                          Twin Hoops
                        </a>
                        <span className="remove">
                          remove
                        </span>
                      </th>
                      <th>
                        <a href="shop-details.html">
                          Medium Flat Hoops
                        </a>
                        <span className="remove">
                          remove
                        </span>
                      </th>
                      <th>
                        <a href="shop-details.html">
                          Bold Pearl Hoop Earrings
                        </a>
                        <span className="remove">
                          remove
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr-image">
                      <td className="td-label">
                        Image
                      </td>
                      <td>
                        <a href="shop-details.html">
                          <img width={600} height={600} src="media/product/3.jpg" alt="" />
                        </a>
                      </td>
                      <td>
                        <a href="shop-details.html">
                          <img width={600} height={600} src="media/product/1.jpg" alt="" />
                        </a>
                      </td>
                      <td>
                        <a href="shop-details.html">
                          <img width={600} height={600} src="media/product/2.jpg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr className="tr-sku">
                      <td className="td-label">
                        SKU
                      </td>
                      <td>
                        VN00189
                      </td>
                      <td></td>
                      <td>
                        D1116
                      </td>
                    </tr>
                    <tr className="tr-rating">
                      <td className="td-label">
                        Rating
                      </td>
                      <td>
                        <div className="star-rating">
                          <span style={{width: "80%"} as CSSProperties}></span>
                        </div>
                      </td>
                      <td>
                        <div className="star-rating">
                          <span style={{width: "100%"} as CSSProperties}></span>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="tr-price">
                      <td className="td-label">
                        Price
                      </td>
                      <td>
                        <span className="amount">
                          $150.00
                        </span>
                      </td>
                      <td>
                        <del>
                          <span className="amount">
                            $150.00
                          </span>
                        </del>
                        <ins>
                          <span className="amount">
                            $100.00
                          </span>
                        </ins>
                      </td>
                      <td>
                        <span className="amount">
                          $200.00
                        </span>
                      </td>
                    </tr>
                    <tr className="tr-add-to-cart">
                      <td className="td-label">
                        Add to cart
                      </td>
                      <td>
                        <div data-title="Add to cart">
                          <a href="#" className="button">
                            Add to cart
                          </a>
                        </div>
                      </td>
                      <td>
                        <div data-title="Add to cart">
                          <a href="#" className="button">
                            Add to cart
                          </a>
                        </div>
                      </td>
                      <td>
                        <div data-title="Add to cart">
                          <a href="#" className="button">
                            Add to cart
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="tr-description">
                      <td className="td-label">
                        Description
                      </td>
                      <td>
                        Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </td>
                      <td>
                        The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium weight fleece comfort all year around. Feel better in this sweatshirt because Hanes keeps plastic bottles of landfills by using recycled polyester.7.8 ounce fleece sweatshirt made with up to 5 percent polyester created from recycled plastic.
                      </td>
                    </tr>
                    <tr className="tr-content">
                      <td className="td-label">
                        Content
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </td>
                    </tr>
                    <tr className="tr-dimensions">
                      <td className="td-label">
                        Dimensions
                      </td>
                      <td>
                        N/A
                      </td>
                      <td>
                        N/A
                      </td>
                      <td>
                        N/A
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Loader */}
      <div className="page-preloader">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
      {/* Dependency Scripts */}
      {/* Site Scripts */}
    </>
  )
}
