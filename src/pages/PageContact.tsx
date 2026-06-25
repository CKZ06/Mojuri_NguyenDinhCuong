import { useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { apiRequest } from '../lib/api'
import type { ContactMessage } from '../types/api'

export const PageContactBodyClass = 'page'

export default function PageContact() {
  const { user } = useAuth()
  const [notice, setNotice] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    setSubmitting(true)
    setNotice('')
    try {
      await apiRequest<ContactMessage>('/contacts', {
        method: 'POST',
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          subject: form.get('subject'),
          message: form.get('message'),
        }),
      })
      setNotice('Tin nhắn đã được gửi. Mojuri sẽ liên hệ với bạn sớm nhất.')
      formElement.reset()
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Không thể gửi tin nhắn')
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
                      Contact Us
                    </h1>
                  </div>
                  <div className="breadcrumbs">
                    <a href="index.html">
                      Home
                    </a>
                    <span className="delimiter"></span>
                    Contact Us
                  </div>
                </div>
              </div>
              <div id="content" className="site-content" role="main">
                <div className="page-contact">
                  <section className="section section-padding">
                    <div className="section-container small">
                      {/* Block Contact Map */}
                      <div className="block block-contact-map">
                        <div className="block-widget-wrap">
                          <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" aria-label="London Eye, London, United Kingdom"></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="section section-padding m-b-70">
                    <div className="section-container">
                      {/* Block Contact Info */}
                      <div className="block block-contact-info">
                        <div className="block-widget-wrap">
                          <div className="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height={512} viewBox="0 0 511.985 511.985" width={512}>
                              <g>
                                <g>
                                  <path d="m256.002 19.995c-4.193 0-8.038-2.714-9.438-6.667-1.415-3.996-.091-8.565 3.231-11.192 3.218-2.545 7.81-2.846 11.333-.741 3.587 2.144 5.493 6.408 4.697 10.512-.902 4.643-5.097 8.088-9.823 8.088z"></path>
                                  <path d="m486.898 258.449c12.552-6.567 20.748-20.113 19.768-35.14-.641-9.838-5.073-18.839-12.478-25.343-4.91-4.312-10.737-7.185-16.974-8.444-14.109-91.307-83.346-165.063-174.016-184.544-5.399-1.16-10.723 2.277-11.883 7.68-1.162 5.402 2.278 10.723 7.68 11.884 82.042 17.628 144.813 84.063 158.199 166.49-14.984 5.483-25.248 20.366-24.158 37.083.64 9.831 5.066 18.824 12.46 25.326-8.551 4.454-14.918 11.927-17.963 21.102-3.64 10.962-1.835 22.447 3.935 31.503-1.269-.047-2.548-.03-3.833.054-9.835.642-18.83 5.079-25.331 12.493-7.141 8.146-10.047 18.579-8.897 28.58-.57-.221-1.148-.429-1.732-.623-9.356-3.111-19.359-2.388-28.169 2.032-8.947 4.489-15.278 12.151-18.315 20.944l-81.746-89.114-.161-.16c-4.044-4.041-10.602-4.025-14.626.035l-.032.032c-.002.002-81.832 89.207-81.832 89.207-3.037-8.793-9.368-16.455-18.315-20.944-8.81-4.42-18.817-5.144-28.169-2.032-.584.194-1.162.402-1.732.623 1.15-10.002-1.756-20.435-8.897-28.581-6.501-7.413-15.496-11.85-25.331-12.492-1.284-.085-2.563-.103-3.831-.056 5.769-9.056 7.574-20.539 3.935-31.5-3.046-9.176-9.413-16.649-17.964-21.103 7.394-6.502 11.819-15.495 12.46-25.326 1.09-16.717-9.173-31.6-24.157-37.083 13.363-82.19 76.353-148.774 157.896-166.426 5.366-1.162 9.066-6.345 8.026-11.735-1.066-5.526-6.455-9.066-11.928-7.893-90.28 19.398-159.919 93.388-174.016 184.542-6.234 1.26-12.064 4.135-16.973 8.446-7.405 6.504-11.838 15.504-12.479 25.343-.98 15.028 7.216 28.573 19.768 35.14-10.777 9.503-15.465 24.89-10.66 39.366 3.107 9.358 9.668 16.946 18.478 21.365 5.21 2.614 10.837 3.935 16.5 3.935.477 0 .955-.01 1.433-.028-8.588 13.487-7.683 31.584 3.374 44.198 6.501 7.413 15.496 11.85 25.331 12.492.822.054 1.64.08 2.455.08 4.598 0 9.089-.848 13.29-2.48-1.698 14.954 5.912 30.08 20.119 37.209 5.21 2.614 10.836 3.934 16.499 3.934 3.914 0 7.847-.631 11.67-1.902 4.973-1.653 9.445-4.285 13.207-7.712l91.792 100.065c.005.005.018.019.04.04 4.089 3.962 10.592 3.958 14.72.036l.03-.029 91.836-100.113c3.762 3.427 8.234 6.058 13.207 7.712 3.824 1.271 7.755 1.902 11.67 1.902 5.662 0 11.289-1.32 16.499-3.934 14.206-7.128 21.817-22.255 20.119-37.209 4.201 1.632 8.691 2.48 13.29 2.48.815 0 1.634-.026 2.455-.08 9.835-.642 18.83-5.079 25.331-12.493 11.057-12.613 11.962-30.709 3.375-44.197.477.019.955.028 1.432.028 5.662 0 11.29-1.321 16.5-3.935 8.809-4.419 15.371-12.007 18.478-21.365 4.806-14.475.117-29.862-10.659-39.365zm-18.146-49.608c4.491-.292 8.841 1.184 12.229 4.16 3.391 2.979 5.422 7.101 5.716 11.61.607 9.302-6.459 17.364-15.749 17.971-4.492.296-8.841-1.183-12.23-4.159-3.391-2.978-5.421-7.101-5.715-11.609-.606-9.303 6.459-17.366 15.749-17.973zm-212.76 224.088-32.196-38.257 32.196-38.257 32.195 38.257zm10.006-95.702v-24.429l65.927 71.869h-26.004zm-20.011-24.429v24.429l-39.924 47.44h-26.003zm-220.7-88.188c.294-4.507 2.324-8.63 5.716-11.609 3.106-2.728 7.014-4.197 11.109-4.197.371 0 .746.012 1.121.036 9.29.607 16.355 8.67 15.749 17.973-.294 4.507-2.324 8.631-5.715 11.609-3.389 2.974-7.728 4.445-12.23 4.159-9.291-.606-16.357-8.668-15.75-17.971zm16.591 76.684c-4.032-2.023-7.036-5.497-8.459-9.783-2.937-8.849 1.863-18.438 10.7-21.377 1.749-.581 3.547-.87 5.337-.87 2.59 0 5.163.604 7.546 1.8 4.031 2.023 7.036 5.496 8.459 9.783 2.937 8.849-1.863 18.438-10.701 21.377-4.278 1.422-8.854 1.093-12.882-.93zm51.2 54.354c-3.389 2.977-7.74 4.454-12.23 4.16-4.499-.294-8.614-2.324-11.588-5.716-6.145-7.01-5.447-17.715 1.557-23.864 3.105-2.728 7.013-4.197 11.107-4.197.373 0 .747.012 1.123.036 4.499.294 8.614 2.324 11.588 5.716 6.142 7.011 5.445 17.717-1.557 23.865zm44.184 41.98c-4.28 1.422-8.854 1.093-12.882-.929-8.327-4.177-11.704-14.358-7.528-22.695 2.022-4.035 5.491-7.042 9.77-8.465 1.749-.581 3.546-.87 5.336-.87 2.59 0 5.164.604 7.547 1.8 8.326 4.177 11.704 14.357 7.528 22.694-2.021 4.036-5.492 7.042-9.771 8.465zm68.801 7.05 39.924 47.44v24.429l-65.927-71.869zm59.935 71.869v-24.429l39.923-47.44h26.004zm121.606-79.848c-4.029 2.023-8.604 2.352-12.882.929-4.279-1.423-7.749-4.429-9.771-8.465-4.175-8.337-.797-18.517 7.528-22.694 4.03-2.022 8.604-2.354 12.883-.93 4.279 1.423 7.748 4.429 9.77 8.465 4.176 8.337.799 18.518-7.528 22.695zm55.122-42.607c-2.974 3.392-7.09 5.423-11.588 5.717-4.488.293-8.841-1.183-12.229-4.16-.001 0-.001 0-.001 0-7.003-6.149-7.699-16.855-1.556-23.863 2.974-3.392 7.09-5.423 11.588-5.717.375-.024.749-.036 1.123-.036 4.094 0 8.001 1.469 11.108 4.197 7.002 6.148 7.699 16.853 1.555 23.862zm35.839-62.581c-1.423 4.286-4.426 7.76-8.459 9.783-4.03 2.023-8.604 2.353-12.882.93-8.838-2.939-13.638-12.528-10.7-21.378 1.422-4.285 4.426-7.759 8.458-9.782 4.03-2.023 8.604-2.353 12.882-.93 8.838 2.94 13.638 12.529 10.701 21.377z"></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="info-title">
                            <h2>
                              Need Help?
                            </h2>
                          </div>
                          <div className="info-items">
                            <div className="row">
                              <div className="col-md-4 sm-m-b-30">
                                <div className="info-item">
                                  <div className="item-tilte">
                                    <h2>
                                      Phone
                                    </h2>
                                  </div>
                                  <div className="item-content">
                                    810.222.5439
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 sm-m-b-30">
                                <div className="info-item">
                                  <div className="item-tilte">
                                    <h2>
                                      Customer Service
                                    </h2>
                                  </div>
                                  <div className="item-content">
                                    <p>
                                      Monday to Friday
                                    </p>
                                    <p>
                                      8:00am – 4:00pm Sydney, NSW time (UTC +10)
                                    </p>
                                    <p>
                                      Saturday and Sunday closed
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="info-item">
                                  <div className="item-tilte">
                                    <h2>
                                      Returns
                                    </h2>
                                  </div>
                                  <div className="item-content small-width">
                                    For information on Returns and Refunds, please click
                                    <a href="#">
                                      here.
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="section section-padding background-img bg-img-7 p-t-70 p-b-70 m-b-0">
                    <div className="section-container small">
                      {/* Block Contact Form */}
                      <div className="block block-contact-form">
                        <div className="block-widget-wrap">
                          <div className="block-title">
                            <h2>
                              Send Us Your Questions!
                            </h2>
                            <div className="sub-title">
                              We’ll get back to you within two days.
                            </div>
                          </div>
                          <div className="block-content">
                            <form method="post" className="contact-form" onSubmit={handleSubmit}>
                              <div className="contact-us-form">
                                <div className="row">
                                  <div className="col-sm-12 col-md-6">
                                    <label className="required">
                                      Name
                                    </label>
                                    <br />
                                    <span className="form-control-wrap">
                                      <input type="text" name="name" defaultValue={user?.name ?? ''} readOnly={Boolean(user)} size={40} className="form-control" required />
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6">
                                    <label className="required">
                                      Email
                                    </label>
                                    <br />
                                    <span className="form-control-wrap">
                                      <input type="email" name="email" defaultValue={user?.email ?? ''} readOnly={Boolean(user)} size={40} className="form-control" required />
                                    </span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <label className="required">Subject</label>
                                    <br />
                                    <span className="form-control-wrap">
                                      <input type="text" name="subject" size={40} className="form-control" required />
                                    </span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <label className="required">
                                      Message
                                    </label>
                                    <br />
                                    <span className="form-control-wrap">
                                      <textarea name="message" cols={40} rows={10} className="form-control" minLength={2} required></textarea>
                                    </span>
                                  </div>
                                </div>
                                <div className="form-button">
                                  <input type="submit" value={submitting ? 'Sending...' : 'Submit'} className="button" disabled={submitting} />
                                </div>
                                {notice && <p className="mojuri-contact-notice">{notice}</p>}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* #content */}
            </div>
            {/* #primary */}
          </div>
          {/* #main-content */}
        </div>
        <footer id="site-footer" className="site-footer background four-columns m-t-0">
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
      {/* Quickview */}
      <div className="quickview-popup">
        <div id="quickview-container">
          <div className="quickview-container">
            <a href="#" className="quickview-close"></a>
            <div className="quickview-notices-wrapper"></div>
            <div className="product single-product product-type-simple">
              <div className="product-detail">
                <div className="row">
                  <div className="img-quickview">
                    <div className="product-images-slider">
                      <div id="quickview-slick-carousel">
                        <div className="images">
                          <div className="scroll-image">
                            <div className="slick-wrap">
                              <div className="slick-sliders image-additional" data-dots="true" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns="1" data-nav="true">
                                <div className="img-thumbnail slick-slide">
                                  <a href="media/product/3.jpg" className="image-scroll" title="">
                                    <img width={900} height={900} src="media/product/3.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="img-thumbnail slick-slide">
                                  <a href="media/product/3-2.jpg" className="image-scroll" title="">
                                    <img width={900} height={900} src="media/product/3-2.jpg" alt="" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quickview-single-info">
                    <div className="product-content-detail entry-summary">
                      <h1 className="product-title entry-title">
                        Twin Hoops
                      </h1>
                      <div className="price-single">
                        <div className="price">
                          <del>
                            <span>
                              $150.00
                            </span>
                          </del>
                          <span>
                            $100.00
                          </span>
                        </div>
                      </div>
                      <div className="product-rating">
                        <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                          <span style={{width: "80%"} as CSSProperties}>
                            Rated
                            <strong className="rating">
                              4.00
                            </strong>
                            out of 5 based on
                            <span className="rating">
                              1
                            </span>
                            customer rating
                          </span>
                        </div>
                        <a href="#" className="review-link">
                          (
                          <span className="count">
                            1
                          </span>
                          customer review)
                        </a>
                      </div>
                      <div className="description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…
                        </p>
                      </div>
                      <form className="cart" method="post" encType="multipart/form-data">
                        <div className="quantity-button">
                          <div className="quantity">
                            <button type="button" className="plus">
                              +
                            </button>
                            <input type="number" className="input-text qty text" step={1} min={1} max="" name="quantity" value="1" title="Qty" size={4} placeholder="" inputMode="numeric" autoComplete="off" />
                            <button type="button" className="minus">
                              -
                            </button>
                          </div>
                          <button type="submit" className="single-add-to-cart-button button alt">
                            Add to cart
                          </button>
                        </div>
                        <button className="button quick-buy">
                          Buy It Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
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
