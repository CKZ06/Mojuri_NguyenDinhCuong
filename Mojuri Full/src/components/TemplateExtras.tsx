export default function TemplateExtras() {
  return (
    <>
      <div className="page-preloader">
        <div className="loader">
          <div />
          <div />
        </div>
      </div>

      <div className="search-overlay">
        <div className="close-search search-close" />
        <div className="search-from ajax-search">
          <form action="#" method="get">
            <div className="search-box">
              <input
                type="text"
                className="input-search"
                name="s"
                placeholder="Search..."
                autoComplete="off"
              />
              <button id="searchsubmit" className="btn" type="submit">
                <i className="icon-search" />
              </button>
            </div>
          </form>
          <div className="content-menu_search">
            <label>Suggested</label>
            <ul id="menu_search" className="menu">
              <li><a href="shop-grid-left.html">Earrings</a></li>
              <li><a href="shop-grid-left.html">Necklaces</a></li>
              <li><a href="shop-grid-left.html">Bracelets</a></li>
              <li><a href="shop-grid-left.html">Jewelry Box</a></li>
            </ul>
          </div>
          <div className="result-search-products">
            <div className="result-search-products-content">
              <ul className="items-search">
                <li className="item-search">
                  <a className="item-image" href="shop-details.html">
                    <img src="media/product/3.jpg" alt="Twin Hoops" />
                  </a>
                  <div className="item-content">
                    <a href="shop-details.html" className="product-title">Twin Hoops</a>
                    <span className="price">$150.00</span>
                  </div>
                </li>
                <li className="item-search">
                  <a className="item-image" href="shop-details.html">
                    <img src="media/product/1.jpg" alt="Medium Flat Hoops" />
                  </a>
                  <div className="item-content">
                    <a href="shop-details.html" className="product-title">Medium Flat Hoops</a>
                    <span className="price">$100.00</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="wishlist-popup">
        <div className="wishlist-popup-inner">
          <div className="wishlist-popup-content">
            <div className="wishlist-popup-content-top">
              <span className="wishlist-name">Wishlist</span>
              <span className="wishlist-count">2</span>
              <span className="wishlist-popup-close" />
            </div>
            <div className="wishlist-popup-content-mid">
              <table className="wishlist-items">
                <tbody>
                  <tr className="wishlist-item">
                    <td className="wishlist-item-remove"><span /></td>
                    <td className="wishlist-item-image">
                      <a href="shop-details.html"><img src="media/product/3.jpg" alt="Twin Hoops" /></a>
                    </td>
                    <td className="wishlist-item-info">
                      <a className="wishlist-item-name" href="shop-details.html">Twin Hoops</a>
                      <span className="wishlist-item-price">$150.00</span>
                      <span className="wishlist-item-time">June 4, 2022</span>
                    </td>
                    <td className="wishlist-item-stock">In stock</td>
                    <td className="wishlist-item-add">
                      <div className="btn-add-to-cart"><a href="#" className="product-btn">Add to cart</a></div>
                    </td>
                  </tr>
                  <tr className="wishlist-item">
                    <td className="wishlist-item-remove"><span /></td>
                    <td className="wishlist-item-image">
                      <a href="shop-details.html"><img src="media/product/4.jpg" alt="Yilver And Turquoise Earrings" /></a>
                    </td>
                    <td className="wishlist-item-info">
                      <a className="wishlist-item-name" href="shop-details.html">Yilver And Turquoise Earrings</a>
                      <span className="wishlist-item-price"><del>$150.00</del> $100.00</span>
                      <span className="wishlist-item-time">June 4, 2022</span>
                    </td>
                    <td className="wishlist-item-stock">In stock</td>
                    <td className="wishlist-item-add">
                      <div className="btn-add-to-cart"><a href="#" className="product-btn">Add to cart</a></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="wishlist-notice">Added to the wishlist!</div>
            </div>
            <div className="wishlist-popup-content-bot">
              <a className="wishlist-page" href="shop-wishlist.html">Open wishlist page</a>
              <span className="wishlist-continue">Continue shopping</span>
            </div>
          </div>
        </div>
      </div>

      <div className="compare-popup">
        <div className="compare-popup-inner">
          <div className="compare-table-close" />
          <div className="compare-table">
            <div className="compare-table-inner">
              <div className="compare-table-items">
                <table className="product-table">
                  <tbody>
                    <tr className="tr-image">
                      <td>Image</td>
                      <td><img src="media/product/3.jpg" alt="Twin Hoops" /></td>
                      <td><img src="media/product/1.jpg" alt="Medium Flat Hoops" /></td>
                      <td><img src="media/product/2.jpg" alt="Bold Pearl Hoop Earrings" /></td>
                    </tr>
                    <tr><td>SKU</td><td>VN00189</td><td>D1116</td><td>MJ200</td></tr>
                    <tr><td>Rating</td><td /><td /><td /></tr>
                    <tr><td>Price</td><td>$150.00</td><td><del>$150.00</del> $100.00</td><td>$200.00</td></tr>
                    <tr className="tr-add-to-cart">
                      <td>Add to cart</td>
                      <td><a href="#">Add to cart</a></td>
                      <td><a href="#">Add to cart</a></td>
                      <td><a href="#">Add to cart</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quickview-popup">
        <div className="quickview-container">
          <div className="quickview-close" />
          <div className="quickview-notices-wrapper" />
          <div className="product single-product product-type-simple">
            <div className="row">
              <div className="img-quickview col-md-6">
                <div className="slick-sliders" data-nav="true" data-dots="true" data-columns="1">
                  <div className="item"><img src="media/product/3.jpg" alt="Twin Hoops" /></div>
                  <div className="item"><img src="media/product/1.jpg" alt="Medium Flat Hoops" /></div>
                  <div className="item"><img src="media/product/2.jpg" alt="Bold Pearl Hoop Earrings" /></div>
                </div>
              </div>
              <div className="quickview-single-info col-md-6">
                <div className="entry-summary">
                  <h1 className="product-title">Twin Hoops</h1>
                  <div className="price">$150.00 <del>$150.00</del> $100.00 $200.00</div>
                  <form className="cart" action="#" method="post">
                    <div className="quantity">
                      <button type="button" className="minus">-</button>
                      <input type="number" className="qty" step="1" min="1" max="" name="quantity" defaultValue="1" title="Qty" />
                      <button type="button" className="plus">+</button>
                    </div>
                    <button type="submit" className="single_add_to_cart_button button">Add to cart</button>
                  </form>
                  <div className="description">
                    <p>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-popup">
        <div className="newsletter-container">
          <div className="newsletter-img"><img src="media/banner/newsletter-popup.jpg" alt="Newsletter" /></div>
          <div className="newsletter-form">
            <div className="newsletter-title"><h2 className="title">Sign Up</h2></div>
            <div className="newsletter-desc">Subscribe to get special offers and updates.</div>
            <form action="#" method="post">
              <div className="newsletter-input">
                <input type="email" name="email" placeholder="Email address" />
                <input type="submit" value="Subscribe" />
              </div>
            </form>
            <span className="newsletter-no">No thanks</span>
          </div>
          <span className="newsletter-close" />
        </div>
      </div>
      <div className="popup-shadow" />
      <div className="back-top button-show"><i className="arrow_carrot-up" /></div>
    </>
  )
}
