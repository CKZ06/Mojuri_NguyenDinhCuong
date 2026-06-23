export default function Header (){
    return(
        <>
        <header id="site-header" className="site-header header-v1 color-white">
  <div className="header-mobile">
    <div className="section-padding">
      <div className="section-container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
            <div className="navbar-header">
              <button type="button" id="show-megamenu" className="navbar-toggle" />
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
                <div className="remove-cart-shadow" />
                <a className="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="icons-cart"><i className="icon-large-paper-bag" /><span className="cart-count">2</span></div>
                </a>
                <div className="dropdown-menu cart-popup">
                  <div className="cart-empty-wrap">
                    <ul className="cart-list">
                      <li className="empty">
                        <span>No products in the cart.</span>
                        <a className="go-shop" href="shop-grid-left.html">GO TO SHOP<i aria-hidden="true" className="arrow_right" /></a>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-list-wrap">
                    <ul className="cart-list ">
                      <li className="mini-cart-item">
                        <a href="#" className="remove" title="Remove this item"><i className="icon_close" /></a>
                        <a href="shop-details.html" className="product-image"><img width={600} height={600} src="media/product/3.jpg"  /></a>
                        <a href="shop-details.html" className="product-name">Twin Hoops</a>		
                        <div className="quantity">Qty: 1</div>
                        <div className="price">$150.00</div>
                      </li>
                      <li className="mini-cart-item">
                        <a href="#" className="remove" title="Remove this item"><i className="icon_close" /></a>													
                        <a href="shop-details.html" className="product-image"><img width={600} height={600} src="media/product/1.jpg"  /></a>
                        <a href="shop-details.html" className="product-name">Medium Flat Hoops</a>
                        <div className="quantity">Qty: 1</div>
                        <div className="price">$100.00</div>						
                      </li>
                    </ul>
                    <div className="total-cart">
                      <div className="title-total">Total: </div>
                      <div className="total-price"><span>$250.00</span></div>
                    </div>
                    <div className="free-ship">
                      <div className="title-ship">Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong></div>
                      <div className="total-percent"><div className="percent" style={{width: '20%'}} /></div>
                    </div>
                    <div className="buttons">
                      <a href="shop-cart.html" className="button btn view-cart btn-primary">View cart</a>
                      <a href="shop-checkout.html" className="button btn checkout btn-default">Check out</a>
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
        <a href="shop-grid-left.html"><i className="wpb-icon-shop" /></a>
      </div>
      {/* Login */}
      <div className="my-account">
        <div className="login-header">
          <a href="page-my-account.html"><i className="wpb-icon-user" /></a>
        </div>
      </div>
      {/* Search */}
      <div className="search-box">
        <div className="search-toggle"><i className="wpb-icon-magnifying-glass" /></div>
      </div>
      {/* Wishlist */}
      <div className="wishlist-box">
        <a href="shop-wishlist.html"><i className="wpb-icon-heart" /></a>
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
                  <img width={400} height={140} src="media/logo-white.png" alt="Mojuri – Jewelry Store HTML Template" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
              <div className="site-navigation">
                <nav id="main-navigation">
                  <ul id="menu-main-menu" className="menu">
                    <li className="level-0 menu-item menu-item-has-children current-menu-item">
                      <a href="index.html"><span className="menu-item-text">Home</span></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html"><span className="menu-item-text">Home Clean</span></a>
                        </li>
                        <li>
                          <a href="index2.html"><span className="menu-item-text">Home Collection</span></a>
                        </li>
                        <li>
                          <a href="index3.html"><span className="menu-item-text">Home Minimal</span></a>
                        </li>
                        <li>
                          <a href="index4.html"><span className="menu-item-text">Home Modern</span></a>
                        </li>
                        <li>
                          <a href="index5.html"><span className="menu-item-text">Home Parallax</span></a>
                        </li>
                        <li>
                          <a href="index6.html"><span className="menu-item-text">Home Strong</span></a>
                        </li>
                        <li>
                          <a href="index7.html"><span className="menu-item-text">Home Style</span></a>
                        </li>
                        <li>
                          <a href="index8.html"><span className="menu-item-text">Home Unique</span></a>
                        </li>
                      </ul>
                    </li>
                    <li className="level-0 menu-item menu-item-has-children">
                      <a href="shop-grid-left.html"><span className="menu-item-text">Shop</span></a>
                      <ul className="sub-menu">
                        <li className="level-1 menu-item menu-item-has-children">
                          <a href="shop-grid-left.html"><span className="menu-item-text">Shop - Products</span></a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop-grid-left.html"><span className="menu-item-text">Shop Grid - Left Sidebar</span></a>
                            </li>
                            <li>
                              <a href="shop-list-left.html"><span className="menu-item-text">Shop List - Left Sidebar</span></a>
                            </li>
                            <li>
                              <a href="shop-grid-right.html"><span className="menu-item-text">Shop Grid - Right Sidebar</span></a>
                            </li>
                            <li>
                              <a href="shop-list-right.html"><span className="menu-item-text">Shop List - Right Sidebar</span></a>
                            </li>
                            <li>
                              <a href="shop-grid-fullwidth.html"><span className="menu-item-text">Shop Grid - No Sidebar</span></a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-details.html"><span className="menu-item-text">Shop Details</span></a>
                        </li>
                        <li>
                          <a href="shop-cart.html"><span className="menu-item-text">Shop - Cart</span></a>
                        </li>
                        <li>
                          <a href="shop-checkout.html"><span className="menu-item-text">Shop - Checkout</span></a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html"><span className="menu-item-text">Shop - Wishlist</span></a>
                        </li>
                      </ul>
                    </li>
                    <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
                      <a href="blog-grid-left.html"><span className="menu-item-text">Blog</span></a>
                      <div className="sub-menu">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="menu-section">
                              <h2 className="sub-menu-title">Blog Category</h2>
                              <ul className="menu-list">
                                <li>
                                  <a href="blog-grid-left.html"><span className="menu-item-text">Blog Grid - Left Sidebar</span></a>
                                </li>
                                <li>
                                  <a href="blog-grid-right.html"><span className="menu-item-text">Blog Grid - Right Sidebar</span></a>
                                </li>
                                <li>
                                  <a href="blog-list-left.html"><span className="menu-item-text">Blog List - Left Sidebar</span></a>
                                </li>
                                <li>
                                  <a href="blog-list-right.html"><span className="menu-item-text">Blog List - Right Sidebar</span></a>
                                </li>
                                <li>
                                  <a href="blog-grid-fullwidth.html"><span className="menu-item-text">Blog Grid - No Sidebar</span></a>
                                </li>
                              </ul>
                            </div>
                            <div className="menu-section">
                              <h2 className="sub-menu-title">Blog Details</h2>
                              <ul className="menu-list">
                                <li>
                                  <a href="blog-details-left.html"><span className="menu-item-text">Blog Details - Left Sidebar</span></a>
                                </li>
                                <li>
                                  <a href="blog-details-right.html"><span className="menu-item-text">Blog Details - Right Sidebar</span></a>
                                </li>
                                <li>
                                  <a href="blog-details-fullwidth.html"><span className="menu-item-text">Blog Details - No Sidebar</span></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="menu-section">
                              <h2 className="sub-menu-title">Recent Posts</h2>
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
                                        <span className="post-date">May 30, 2022</span>
                                        <span className="post-comment">4 Comments</span>
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
                                        <span className="post-date">Aug 24, 2022</span>
                                        <span className="post-comment">2 Comments</span>
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
                                        <span className="post-date">Dec 06, 2022</span>
                                        <span className="post-comment">1 Comment</span>
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
                      <a href="#"><span className="menu-item-text">Pages</span></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="page-login.html"><span className="menu-item-text">Login / Register</span></a>
                        </li>
                        <li>
                          <a href="page-forgot-password.html"><span className="menu-item-text">Forgot Password</span></a>
                        </li>
                        <li>
                          <a href="page-my-account.html"><span className="menu-item-text">My Account</span></a>
                        </li>
                        <li>
                          <a href="page-about.html"><span className="menu-item-text">About Us</span></a>
                        </li>
                        <li>
                          <a href="page-contact.html"><span className="menu-item-text">Contact</span></a>
                        </li>
                        <li>
                          <a href="page-faq.html"><span className="menu-item-text">FAQ</span></a>
                        </li>
                        <li>
                          <a href="page-404.html"><span className="menu-item-text">Page 404</span></a>
                        </li>
                      </ul>
                    </li>
                    <li className="level-0 menu-item">
                      <a href="page-contact.html"><span className="menu-item-text">Contact</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-right">
              <div className="header-page-link">
                {/* Search */}
                <div className="search-box">
                  <div className="search-toggle"><i className="icon-search" /></div>
                </div>
                {/* Login */}
                <div className="login-header icon">
                  <a className="active-login" href="#"><i className="icon-user" /></a>
                  <div className="form-login-register">
                    <div className="box-form-login">
                      <div className="active-login" />
                      <div className="box-content">
                        <div className="form-login active">
                          <form id="login_ajax" method="post" className="login">
                            <h2>Sign in</h2>
                            <p className="status" />
                            <div className="content">
                              <div className="username">
                                <input type="text" required className="input-text" name="username" id="username" placeholder="Your name" />
                              </div>
                              <div className="password">
                                <input className="input-text" required type="password" name="password" id="password" placeholder="Password" />
                              </div>
                              <div className="rememberme-lost">
                                <div className="rememberme">
                                  <input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" />
                                  <label htmlFor="rememberme" className="inline">Remember me</label>
                                </div>
                                <div className="lost_password">
                                  <a href="forgot-password.html">Lost your password?</a>
                                </div>
                              </div>
                              <div className="button-login">
                                <input type="submit" className="button" name="login" defaultValue="Login" />
                              </div>
                              <div className="button-next-reregister">Create An Account</div>
                            </div>						
                          </form>
                        </div>
                        <div className="form-register">
                          <form method="post" className="register">
                            <h2>REGISTER</h2>
                            <div className="content">
                              <div className="email">
                                <input type="email" className="input-text" placeholder="Email" name="email" id="reg_email" defaultValue="" />
                              </div>
                              <div className="password">
                                <input type="password" className="input-text" placeholder="Password" name="password" id="reg_password" />
                              </div>															
                              <div className="button-register">
                                <input type="submit" className="button" name="register" defaultValue="Register" />
                              </div>
                              <div className="button-next-login">Already has an account</div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wishlist */}
                <div className="wishlist-box">
                  <a href="shop-wishlist.html"><i className="icon-heart" /></a>
                  <span className="count-wishlist">1</span>
                </div>
                {/* Cart */}
                <div className="mojuri-topcart dropdown light">
                  <div className="dropdown mini-cart top-cart">
                    <div className="remove-cart-shadow" />
                    <a className="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className="icons-cart"><i className="icon-large-paper-bag" /><span className="cart-count">2</span></div>
                    </a>
                    <div className="dropdown-menu cart-popup">
                      <div className="cart-empty-wrap">
                        <ul className="cart-list">
                          <li className="empty">
                            <span>No products in the cart.</span>
                            <a className="go-shop" href="shop-grid-left.html">GO TO SHOP<i aria-hidden="true" className="arrow_right" /></a>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-list-wrap">
                        <ul className="cart-list ">
                          <li className="mini-cart-item">
                            <a href="#" className="remove" title="Remove this item"><i className="icon_close" /></a>
                            <a href="shop-details.html" className="product-image"><img width={600} height={600} src="media/product/3.jpg" alt="" /></a>
                            <a href="shop-details.html" className="product-name">Twin Hoops</a>		
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$150.00</div>
                          </li>
                          <li className="mini-cart-item">
                            <a href="#" className="remove" title="Remove this item"><i className="icon_close" /></a>													
                            <a href="shop-details.html" className="product-image"><img width={600} height={600} src="media/product/1.jpg" alt="" /></a>
                            <a href="shop-details.html" className="product-name">Medium Flat Hoops</a>
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$100.00</div>						
                          </li>
                        </ul>
                        <div className="total-cart">
                          <div className="title-total">Total: </div>
                          <div className="total-price"><span>$250.00</span></div>
                        </div>
                        <div className="free-ship">
                          <div className="title-ship">Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong></div>
                          <div className="total-percent"><div className="percent" style={{width: '20%'}} /></div>
                        </div>
                        <div className="buttons">
                          <a href="shop-cart.html" className="button btn view-cart btn-primary">View cart</a>
                          <a href="shop-checkout.html" className="button btn checkout btn-default">Check out</a>
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

        </>
    )
}