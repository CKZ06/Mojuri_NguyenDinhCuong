import type { CSSProperties } from 'react'

export const Home7BodyClass = 'home home-7 title-7'

export default function Home7() {
  return (
    <>
<div id="page" className="hfeed page-wrapper">
        <header id="site-header" className="site-header header-v4 padding-large">
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
                      <a href="index7.html">
                        <img width={400} height={79} src="media/logo.png" alt="Mojuri – Jewelry Store HTML Template" />
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
                          <div className="cart-empty-wrap" style={{display: "none"} as CSSProperties}>
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
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-left">
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
                            <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth">
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
                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 text-center header-center">
                      <div className="site-logo">
                        <a href="index7.html">
                          <img width={400} height={140} src="media/logo.png" alt="Mojuri – Jewelry Store HTML Template" />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-right">
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
                              <div className="cart-empty-wrap" style={{display: "none"} as CSSProperties}>
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
              <div id="content" className="site-content" role="main">
                <section className="section m-b-70">
                  {/* Block Banners (Layout 6) */}
                  <div className="block block-banners layout-6 no-space">
                    <div className="row">
                      <div className="col-md-6 sm-m-b-15">
                        <div className="block-widget-banner">
                          <div className="bg-banner">
                            <div className="banner-wrapper banners">
                              <div className="banner-image">
                                <a href="shop-grid-left.html">
                                  <img width={960} height={730} src="media/banner/banner-7-1.jpg" alt="Banner Image" />
                                </a>
                              </div>
                              <div className="banner-wrapper-infor">
                                <div className="info">
                                  <div className="content">
                                    <h3 className="title-banner">
                                      New arrivals
                                    </h3>
                                    <a className="button button-outline border-white thick-border" href="shop-grid-left.html">
                                      Shop Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="block-widget-banner">
                          <div className="bg-banner">
                            <div className="banner-wrapper banners">
                              <div className="banner-image">
                                <a href="shop-grid-left.html">
                                  <img width={960} height={730} src="media/banner/banner-7-2.jpg" alt="Banner Image" />
                                </a>
                              </div>
                              <div className="banner-wrapper-infor">
                                <div className="info">
                                  <div className="content">
                                    <h3 className="title-banner">
                                      Best Seller
                                    </h3>
                                    <a className="button button-outline border-white thick-border" href="shop-grid-left.html">
                                      Shop Now
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
                </section>
                <section className="section section-padding m-b-70">
                  <div className="section-container large">
                    {/* Block Products */}
                    <div className="block block-products slider">
                      <div className="block-widget-wrap">
                        <div className="block-title">
                          <h2>
                            Shop The Latest
                          </h2>
                        </div>
                        <div className="block-content">
                          <div className="content-product-list slick-wrap">
                            <div className="slick-sliders products-list grid" data-slidestoscroll="true" data-dots="false" data-nav="1" data-columns4="1" data-columns3="2" data-columns2="3" data-columns1="3" data-columns1440="4" data-columns="4">
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="hot">
                                          Hot
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/1.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/1-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-0"></div>
                                          <span className="count">
                                            (0 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Medium Flat Hoops
                                          </a>
                                        </h3>
                                        <span className="price">
                                          $100.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="onsale">
                                          -10%
                                        </div>
                                        <div className="hot">
                                          Hot
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/2.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/2-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-5"></div>
                                          <span className="count">
                                            (1 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Bold Pearl Hoop Earrings
                                          </a>
                                        </h3>
                                        <span className="price">
                                          <del aria-hidden="true">
                                            <span>
                                              $200.00
                                            </span>
                                          </del>
                                          <ins>
                                            <span>
                                              $180.00
                                            </span>
                                          </ins>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="hot">
                                          Hot
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/3.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/3-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-0"></div>
                                          <span className="count">
                                            (0 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Twin Hoops
                                          </a>
                                        </h3>
                                        <span className="price">
                                          $150.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="onsale">
                                          -33%
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/4.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/4-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-4"></div>
                                          <span className="count">
                                            (2 reviews)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Yilver And Turquoise Earrings
                                          </a>
                                        </h3>
                                        <span className="price">
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
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="onsale">
                                          -7%
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/13.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/13-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                      <div className="product-stock">
                                        <span className="stock">
                                          Out Of Stock
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-5"></div>
                                          <span className="count">
                                            (1 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Medium Flat Hoops
                                          </a>
                                        </h3>
                                        <span className="price">
                                          <del aria-hidden="true">
                                            <span>
                                              $150.00
                                            </span>
                                          </del>
                                          <ins>
                                            <span>
                                              $140.00
                                            </span>
                                          </ins>
                                        </span>
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
                </section>
                <section className="section section-padding m-b-70">
                  <div className="section-container large">
                    {/* Block Banners (Layout 7) */}
                    <div className="block block-banners layout-7 banners-effect">
                      <div className="block-widget-wrap">
                        <div className="row">
                          <div className="col-md-4 sm-m-b-40">
                            <div className="block-widget-banner">
                              <div className="bg-banner">
                                <div className="banner-wrapper banners">
                                  <div className="banner-image">
                                    <a href="shop-grid-left.html">
                                      <img width={567} height={654} src="media/banner/banner-7-3.jpg" alt="Banner Image" />
                                    </a>
                                  </div>
                                  <div className="banner-wrapper-infor">
                                    <div className="info">
                                      <div className="content">
                                        <h3 className="title-banner">
                                          NEW // EARRINGS
                                        </h3>
                                        <div className="banner-image-description">
                                          Ut varius tincidunt libero. Nullam nulla eros, ultricies sit amet, nonummy idpede metus. Vestibulum dapibus nunc ac augue
                                        </div>
                                        <a className="button button-outline border-black" href="shop-grid-left.html">
                                          Shop Now
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 sm-m-b-40">
                            <div className="block-widget-banner">
                              <div className="bg-banner">
                                <div className="banner-wrapper banners">
                                  <div className="banner-image">
                                    <a href="shop-grid-left.html">
                                      <img width={567} height={654} src="media/banner/banner-7-4.jpg" alt="Banner Image" />
                                    </a>
                                  </div>
                                  <div className="banner-wrapper-infor">
                                    <div className="info">
                                      <div className="content">
                                        <h3 className="title-banner">
                                          JEWELLERY FAVOURITES
                                        </h3>
                                        <div className="banner-image-description">
                                          Ut varius tincidunt libero. Nullam nulla eros, ultricies sit amet, nonummy idpede metus. Vestibulum dapibus nunc ac augue
                                        </div>
                                        <a className="button button-outline border-black" href="shop-grid-left.html">
                                          Shop Now
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="block-widget-banner">
                              <div className="bg-banner">
                                <div className="banner-wrapper banners">
                                  <div className="banner-image">
                                    <a href="shop-grid-left.html">
                                      <img width={567} height={654} src="media/banner/banner-7-5.jpg" alt="Banner Image" />
                                    </a>
                                  </div>
                                  <div className="banner-wrapper-infor">
                                    <div className="info">
                                      <div className="content">
                                        <h3 className="title-banner">
                                          AWARENESS BRACELET
                                        </h3>
                                        <div className="banner-image-description">
                                          Ut varius tincidunt libero. Nullam nulla eros, ultricies sit amet, nonummy idpede metus. Vestibulum dapibus nunc ac augue
                                        </div>
                                        <a className="button button-outline border-black" href="shop-grid-left.html">
                                          Shop Now
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
                </section>
                <section className="section m-b-70">
                  {/* Block Lookbook */}
                  <div className="block block-lookbook">
                    <div className="lookbook-item">
                      <div className="lookbook-container">
                        <div className="lookbook-content">
                          <div className="item">
                            <img src="media/banner/lookbook-7-1.jpg" alt="Look Book 1" />
                            <div className="item-lookbook" style={{left: "63.65%", top: "62.01%"} as CSSProperties}>
                              <span className="number-lookbook">
                                1
                              </span>
                              <div className="content-lookbook" style={{right: "33px", bottom: "10px"} as CSSProperties}>
                                <div className="item-thumb">
                                  <a href="shop-details.html">
                                    <img width={1000} height={1000} src="media/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="content-lookbook-bottom">
                                  <div className="item-title">
                                    <a href="shop-details.html">
                                      Medium Flat Hoops
                                    </a>
                                  </div>
                                  <span className="price">
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
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item-lookbook" style={{left: "49.17%", top: "20.78%"} as CSSProperties}>
                              <span className="number-lookbook">
                                1
                              </span>
                              <div className="content-lookbook" style={{left: "33px", top: "10px"} as CSSProperties}>
                                <div className="item-thumb">
                                  <a href="shop-details.html">
                                    <img width={1000} height={1000} src="media/product/2.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="content-lookbook-bottom">
                                  <div className="item-title">
                                    <a href="shop-details.html">
                                      Bold Pearl Hoop Earrings
                                    </a>
                                  </div>
                                  <span className="price">
                                    <ins>
                                      <span>
                                        $230.00
                                      </span>
                                    </ins>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item-lookbook" style={{left: "35.36%", top: "84.42%"} as CSSProperties}>
                              <span className="number-lookbook">
                                1
                              </span>
                              <div className="content-lookbook" style={{left: "33px", bottom: "10px"} as CSSProperties}>
                                <div className="item-thumb">
                                  <a href="shop-details.html">
                                    <img width={1000} height={1000} src="media/product/3.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="content-lookbook-bottom">
                                  <div className="item-title">
                                    <a href="shop-details.html">
                                      Twin Hoops
                                    </a>
                                  </div>
                                  <span className="price">
                                    <del aria-hidden="true">
                                      <span>
                                        $180.00
                                      </span>
                                    </del>
                                    <ins>
                                      <span>
                                        $160.00
                                      </span>
                                    </ins>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section section-padding m-b-70">
                  <div className="section-container large">
                    {/* Block Products */}
                    <div className="block block-products slider">
                      <div className="block-widget-wrap">
                        <div className="block-title">
                          <h2>
                            Recommended For You
                          </h2>
                        </div>
                        <div className="block-content">
                          <div className="content-product-list slick-wrap">
                            <div className="slick-sliders products-list grid" data-slidestoscroll="true" data-dots="false" data-nav="1" data-columns4="1" data-columns3="2" data-columns2="3" data-columns1="3" data-columns1440="4" data-columns="4">
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="hot">
                                          Hot
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/13.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/13-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-5"></div>
                                          <span className="count">
                                            (1 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Les Textured Hoops
                                          </a>
                                        </h3>
                                        <span className="price">
                                          $100.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="onsale">
                                          -10%
                                        </div>
                                        <div className="hot">
                                          Hot
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/14.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/14-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-0"></div>
                                          <span className="count">
                                            (0 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Oversized Thin Hoops
                                          </a>
                                        </h3>
                                        <span className="price">
                                          <del aria-hidden="true">
                                            <span>
                                              $200.00
                                            </span>
                                          </del>
                                          <ins>
                                            <span>
                                              $180.00
                                            </span>
                                          </ins>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="hot">
                                          Hot
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/15.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/15-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-5"></div>
                                          <span className="count">
                                            (1 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Bold Hoops
                                          </a>
                                        </h3>
                                        <span className="price">
                                          $150.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="onsale">
                                          -33%
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/16.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/16-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-5"></div>
                                          <span className="count">
                                            (1 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Organic Pearl Stacked Hoops
                                          </a>
                                        </h3>
                                        <span className="price">
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
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item-product slick-slide">
                                <div className="items">
                                  <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                      <div className="product-lable">
                                        <div className="onsale">
                                          -7%
                                        </div>
                                      </div>
                                      <div className="product-thumb-hover">
                                        <a href="shop-details.html">
                                          <img width={600} height={600} src="media/product/1.jpg" className="post-image" alt="" />
                                          <img width={600} height={600} src="media/product/1-2.jpg" className="hover-image back" alt="" />
                                        </a>
                                      </div>
                                      <div className="product-button">
                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                          <a rel="nofollow" href="#" className="product-btn button">
                                            Add to cart
                                          </a>
                                        </div>
                                        <div className="btn-wishlist" data-title="Wishlist">
                                          <button className="product-btn">
                                            Add to wishlist
                                          </button>
                                        </div>
                                        <div className="btn-compare" data-title="Compare">
                                          <button className="product-btn">
                                            Compare
                                          </button>
                                        </div>
                                        <span className="product-quickview" data-title="Quick View">
                                          <a href="#" className="quickview quickview-button">
                                            Quick View
                                            <i className="icon-search"></i>
                                          </a>
                                        </span>
                                      </div>
                                      <div className="product-stock">
                                        <span className="stock">
                                          Out Of Stock
                                        </span>
                                      </div>
                                    </div>
                                    <div className="products-content">
                                      <div className="contents">
                                        <div className="rating">
                                          <div className="star star-0"></div>
                                          <span className="count">
                                            (0 review)
                                          </span>
                                        </div>
                                        <h3 className="product-title">
                                          <a href="shop-details.html">
                                            Diamond Celestial Studs
                                          </a>
                                        </h3>
                                        <span className="price">
                                          <del aria-hidden="true">
                                            <span>
                                              $150.00
                                            </span>
                                          </del>
                                          <ins>
                                            <span>
                                              $140.00
                                            </span>
                                          </ins>
                                        </span>
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
                </section>
                <section className="section section-padding background-img bg-img-3 p-t-70 p-b-80 m-b-0">
                  <div className="section-container">
                    {/* Block Testimonial */}
                    <div className="block block-testimonial layout-1">
                      <div className="block-widget-wrap">
                        <div className="testimonial-wrap slick-wrap">
                          <div className="slick-sliders" data-slidestoscroll="true" data-nav="0" data-dots="1" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns="1">
                            <div className="testimonial-content">
                              <div className="item">
                                <div className="testimonial-item">
                                  <div className="testimonial-icon">
                                    <span className="icon-straight-quotes"></span>
                                    <div className="rating">
                                      <div className="star star-5"></div>
                                    </div>
                                  </div>
                                  <div className="testimonial-excerpt">
                                    Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
                                  </div>
                                </div>
                                <div className="testimonial-image image-position-top">
                                  <div className="thumbnail">
                                    <img width={110} height={110} src="media/testimonial/1.jpg" alt="" />
                                  </div>
                                  <div className="testimonial-info">
                                    <h2 className="testimonial-customer-name">
                                      Robet Smith
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <div className="item">
                                <div className="testimonial-item">
                                  <div className="testimonial-icon">
                                    <span className="icon-straight-quotes"></span>
                                    <div className="rating">
                                      <div className="star star-4"></div>
                                    </div>
                                  </div>
                                  <div className="testimonial-excerpt">
                                    Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
                                  </div>
                                </div>
                                <div className="testimonial-image image-position-top">
                                  <div className="thumbnail">
                                    <img width={110} height={110} src="media/testimonial/2.jpg" alt="" />
                                  </div>
                                  <div className="testimonial-info">
                                    <h2 className="testimonial-customer-name">
                                      Saitama One
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <div className="item">
                                <div className="testimonial-item">
                                  <div className="testimonial-icon">
                                    <span className="icon-straight-quotes"></span>
                                    <div className="rating">
                                      <div className="star star-5"></div>
                                    </div>
                                  </div>
                                  <div className="testimonial-excerpt">
                                    Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
                                  </div>
                                </div>
                                <div className="testimonial-image image-position-top">
                                  <div className="thumbnail">
                                    <img width={110} height={110} src="media/testimonial/3.jpg" alt="" />
                                  </div>
                                  <div className="testimonial-info">
                                    <h2 className="testimonial-customer-name">
                                      Sara Colinton
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <div className="item">
                                <div className="testimonial-item">
                                  <div className="testimonial-icon">
                                    <span className="icon-straight-quotes"></span>
                                    <div className="rating">
                                      <div className="star star-5"></div>
                                    </div>
                                  </div>
                                  <div className="testimonial-excerpt">
                                    Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
                                  </div>
                                </div>
                                <div className="testimonial-image image-position-top">
                                  <div className="thumbnail">
                                    <img width={110} height={110} src="media/testimonial/4.jpg" alt="" />
                                  </div>
                                  <div className="testimonial-info">
                                    <h2 className="testimonial-customer-name">
                                      Shetty Jamie
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section section-padding p-t-10 p-b-10 m-b-0">
                  <div className="section-container">
                    {/* Block Image */}
                    <div className="block block-image slider">
                      <div className="block-widget-wrap">
                        <div className="slick-wrap">
                          <div className="slick-sliders" data-nav="0" data-columns4="1" data-columns3="2" data-columns2="3" data-columns1="4" data-columns1440="4" data-columns="5">
                            <div className="item slick-slide">
                              <div className="item-image animation-horizontal">
                                <a href="#">
                                  <img width={450} height={450} src="media/brand/1.jpg" alt="Brand 1" />
                                </a>
                              </div>
                            </div>
                            <div className="item slick-slide">
                              <div className="item-image animation-horizontal">
                                <a href="#">
                                  <img width={450} height={450} src="media/brand/2.jpg" alt="Brand 2" />
                                </a>
                              </div>
                            </div>
                            <div className="item slick-slide">
                              <div className="item-image animation-horizontal">
                                <a href="#">
                                  <img width={450} height={450} src="media/brand/3.jpg" alt="Brand 3" />
                                </a>
                              </div>
                            </div>
                            <div className="item slick-slide">
                              <div className="item-image animation-horizontal">
                                <a href="#">
                                  <img width={450} height={450} src="media/brand/4.jpg" alt="Brand 4" />
                                </a>
                              </div>
                            </div>
                            <div className="item slick-slide">
                              <div className="item-image animation-horizontal">
                                <a href="#">
                                  <img width={450} height={450} src="media/brand/5.jpg" alt="Brand 5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* #content */}
            </div>
            {/* #primary */}
          </div>
          {/* #main-content */}
        </div>
        <footer id="site-footer" className="site-footer">
          <div className="footer">
            <div className="section-padding">
              <div className="section-container">
                <div className="block-widget-wrap">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="block block-menu m-b-20">
                        <h2 className="block-title">
                          Contact Us
                        </h2>
                        <div className="block-content">
                          <ul>
                            <li>
                              <span className="contact-us">
                                Head Office:
                              </span>
                              260 Wyle Cop, Shrewsbury,
                              <br />
                              Shropshire, SY1 1XD
                            </li>
                            <li>
                              <span className="contact-us">
                                Tel:
                              </span>
                              01743 234500
                            </li>
                            <li>
                              <span className="contact-us">
                                Email:
                              </span>
                              support&amp;mojury.com
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
                    <div className="col-lg-3 col-md-6">
                      <div className="block block-menu">
                        <h2 className="block-title">
                          Customer Services
                        </h2>
                        <div className="block-content">
                          <ul>
                            <li>
                              <a href="#">
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Track Your Order
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Product Care &amp; Repair
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Book an Appointment
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Frequently Asked Questions
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Shipping &amp; Returns
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
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
                    <div className="col-lg-3 col-md-6">
                      <div className="block block-menu">
                        <h2 className="block-title">
                          Catalog
                        </h2>
                        <div className="block-content">
                          <ul>
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
                                Rings
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Jewelry Box
                              </a>
                            </li>
                            <li>
                              <a href="#">
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
      {/* Newsletter Popup */}
      <div className="popup-shadow"></div>
      <div className="newsletter-popup">
        <a href="#" className="newsletter-close"></a>
        <div className="newsletter-container">
          <div className="newsletter-img">
            <img src="media/banner/newsletter-popup.jpg" alt="" />
          </div>
          <div className="newsletter-form">
            <form action="#" method="post">
              <div className="newsletter-title">
                <div className="title">
                  Get
                  <br />
                  free shipping
                </div>
                <div className="sub-title">
                  on your first order. Offer ends soon.
                </div>
              </div>
              <div className="newsletter-input clearfix">
                <input type="email" name="your-email" size={40} className="form-control" placeholder="Enter Your Email ..." />
                <input type="submit" value="Subscribe" className="form-control" />
              </div>
              <div className="newsletter-no">
                no thanks !
              </div>
            </form>
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
