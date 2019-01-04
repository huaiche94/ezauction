import React, { Component } from "react";
import fire from "../config/Fire";
import "./css/style.css";
import "./css/slick-theme.css";
import "./css/slick.css";
import "./css/nouislider.min.css";
import "./css/font-awesome.min.css";
import "./css/bootstrap.min.css";
import { throws } from "assert";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updateQty = this.updateQty.bind(this);
    this.qtyUp = this.qtyUp.bind(this);
    this.qtyDown = this.qtyDown.bind(this);
    // this.confirm = this.confirm.bind(this);

    this.state = {
      isOpen: false,
      price: 0,
      quantity: 0
    };
  }
  updatePrice(e) {
    this.setState({ price: e.target.value });
  }
  updateQty(e) {
    this.setState({ quantity: e.target.value });
  }

  qtyUp() {
    this.setState({ quantity: this.state.quantity + 1 });
  }
  qtyDown() {
    this.setState({ quantity: this.state.quantity - 1 });
  }
  // confirm(){
  //push data to firebase
  // }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <header>
          <div id="top-header">
            <div className="container">
              <ul className="header-links pull-left">
                <li>
                  <a href="#">
                    <i className="fa fa-phone" /> +021-95-51-84
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o" /> email@email.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" /> 1734 Stonecoal Road
                  </a>
                </li>
              </ul>
              <ul className="header-links pull-right">
                <li>
                  <a href="#">
                    <i className="fa fa-dollar" /> USD
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user-o" /> My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="header">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="header-logo">
                    <a href="../ezauction/index.html" className="logo">
                      <img src={require("./img/logo.png")} alt="" />
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="header-search">
                    <form>
                      <select className="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                      </select>
                      <input className="input" placeholder="Search here" />
                      <button className="search-btn">Search</button>
                    </form>
                  </div>
                </div>

                <div className="col-md-3 clearfix">
                  <div className="header-ctn">
                    <div className="dropdown">
                      <div className="cart-dropdown">
                        <div className="cart-list">
                          <div className="product-widget">
                            <div className="product-img">
                              <img
                                src={require("./img/product01.png")}
                                alt=""
                              />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name">
                                <a href="#">product name goes here</a>
                              </h3>
                              <h4 className="product-price">
                                <span className="qty">1x</span>$980.00
                              </h4>
                            </div>
                            <button className="delete">
                              <i className="fa fa-close" />
                            </button>
                          </div>

                          <div className="product-widget">
                            <div className="product-img">
                              <img
                                src={require("./img/product02.png")}
                                alt=""
                              />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name">
                                <a href="#">product name goes here</a>
                              </h3>
                              <h4 className="product-price">
                                <span className="qty">3x</span>$980.00
                              </h4>
                            </div>
                            <button className="delete">
                              <i className="fa fa-close" />
                            </button>
                          </div>
                        </div>
                        <div className="cart-summary">
                          <small>3 Item(s) selected</small>
                          <h5>SUBTOTAL: $2940.00</h5>
                        </div>
                        <div className="cart-btns">
                          <a href="#">View Cart</a>
                          <a href="#">
                            Checkout <i className="fa fa-arrow-circle-right" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="menu-toggle">
                      <a href="#">
                        <i className="fa fa-bars" />
                        <span>Menu</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="breadcrumb" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="breadcrumb-tree">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">All Categories</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Headphones</a>
                  </li>
                  <li className="active">Product name goes here</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                  <div className="product-preview">
                    <img src={require("./img/product01.png")} alt="" />
                  </div>

                  <div className="product-preview">
                    <img src={require("./img/product03.png")} alt="" />
                  </div>

                  <div className="product-preview">
                    <img src={require("./img/product06.png")} alt="" />
                  </div>

                  <div className="product-preview">
                    <img src={require("./img/product08.png")} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-md-2  col-md-pull-5">
                <div id="product-imgs">
                  <div className="product-preview">
                    <img src={require("./img/product01.png")} alt="" />
                  </div>

                  <div className="product-preview">
                    <img src={require("./img/product03.png")} alt="" />
                  </div>

                  <div className="product-preview">
                    <img src={require("./img/product06.png")} alt="" />
                  </div>

                  <div className="product-preview">
                    <img src={require("./img/product08.png")} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="product-details">
                  <h2 className="product-name">product name goes here</h2>
                  <div>
                    <div className="product-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <a className="review-link" href="#">
                      10 Review(s) | Add your review
                    </a>
                  </div>
                  <div>
                    <h3 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h3>
                    <span className="product-available">In Stock</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <div className="product-options">
                    <label>
                      PRICE
                      <div className="input-number">
                        <input
                          type="number"
                          value={this.state.price}
                          onChange={this.updatePrice}
                        />
                      </div>
                    </label>
                  </div>

                  <div className="add-to-cart">
                    <div className="qty-label">
                      Qty{" = "}
                      <div className="input-number">
                        <input
                          type="number"
                          value={this.state.quantity}
                          onChange={this.updateQty}
                        />
                        <span className="qty-up" onClick={this.qtyUp}>
                          +
                        </span>
                        <span className="qty-down" onClick={this.qtyDown}>
                          -
                        </span>
                      </div>
                    </div>
                    <button className="add-to-cart-btn" onClick={this.confirm}>
                      <i className="fa fa-shopping-cart" /> confirm
                    </button>
                  </div>

                  <ul className="product-btns">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart-o" /> add to wishlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-exchange" /> add to compare
                      </a>
                    </li>
                  </ul>

                  <ul className="product-links">
                    <li>Category:</li>
                    <li>
                      <a href="#">Headphones</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>

                  <ul className="product-links">
                    <li>Share:</li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-12">
                <div id="product-tab">
                  <ul className="tab-nav">
                    <li className="active">
                      <a data-toggle="tab" href="#tab1">
                        Description
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2">
                        Details
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab3">
                        Reviews (3)
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="tab1" className="tab-pane fade in active">
                      <div className="row">
                        <div className="col-md-12">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div id="tab2" className="tab-pane fade in">
                      <div className="row">
                        <div className="col-md-12">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div id="tab3" className="tab-pane fade in">
                      <div className="row">
                        <div className="col-md-3">
                          <div id="rating">
                            <div className="rating-avg">
                              <span>4.5</span>
                              <div className="rating-stars">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                              </div>
                            </div>
                            <ul className="rating">
                              <li>
                                <div className="rating-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                                <span className="sum">3</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-o" />
                                </div>
                                <span className="sum">2</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="rating-progress">
                                  <div />
                                </div>
                                <span className="sum">0</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="rating-progress">
                                  <div />
                                </div>
                                <span className="sum">0</span>
                              </li>
                              <li>
                                <div className="rating-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="rating-progress">
                                  <div />
                                </div>
                                <span className="sum">0</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div id="reviews">
                            <ul className="reviews">
                              <li>
                                <div className="review-heading">
                                  <h5 className="name">John</h5>
                                  <p className="date">27 DEC 2018, 8:0 PM</p>
                                  <div className="review-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                  </div>
                                </div>
                                <div className="review-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="review-heading">
                                  <h5 className="name">John</h5>
                                  <p className="date">27 DEC 2018, 8:0 PM</p>
                                  <div className="review-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                  </div>
                                </div>
                                <div className="review-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="review-heading">
                                  <h5 className="name">John</h5>
                                  <p className="date">27 DEC 2018, 8:0 PM</p>
                                  <div className="review-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                  </div>
                                </div>
                                <div className="review-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <ul className="reviews-pagination">
                              <li className="active">1</li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li>
                                <a href="#">4</a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div id="review-form">
                            <form className="review-form">
                              <input
                                className="input"
                                type="text"
                                placeholder="Your Name"
                              />
                              <input
                                className="input"
                                type="email"
                                placeholder="Your Email"
                              />
                              <textarea
                                className="input"
                                placeholder="Your Review"
                              />
                              <div className="input-rating">
                                <span>Your Rating: </span>
                                <div className="stars">
                                  <input
                                    id="star5"
                                    name="rating"
                                    value="5"
                                    type="radio"
                                  />
                                  <label for="star5" />
                                  <input
                                    id="star4"
                                    name="rating"
                                    value="4"
                                    type="radio"
                                  />
                                  <label for="star4" />
                                  <input
                                    id="star3"
                                    name="rating"
                                    value="3"
                                    type="radio"
                                  />
                                  <label for="star3" />
                                  <input
                                    id="star2"
                                    name="rating"
                                    value="2"
                                    type="radio"
                                  />
                                  <label for="star2" />
                                  <input
                                    id="star1"
                                    name="rating"
                                    value="1"
                                    type="radio"
                                  />
                                  <label for="star1" />
                                </div>
                              </div>
                              <button className="primary-btn">Submit</button>
                            </form>
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

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  <h3 className="title">Related Products</h3>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src={require("./img/product01.png")} alt="" />
                    <div className="product-label">
                      <span className="sale">-30%</span>
                    </div>
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                    <div className="product-rating" />
                    <div className="product-btns">
                      <button className="add-to-wishlist">
                        <i className="fa fa-heart-o" />
                        <span className="tooltipp">add to wishlist</span>
                      </button>
                      <button className="add-to-compare">
                        <i className="fa fa-exchange" />
                        <span className="tooltipp">add to compare</span>
                      </button>
                      <button className="quick-view">
                        <i className="fa fa-eye" />
                        <span className="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart" /> add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src={require("./img/product02.png")} alt="" />
                    <div className="product-label">
                      <span className="new">NEW</span>
                    </div>
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                    <div className="product-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-btns">
                      <button className="add-to-wishlist">
                        <i className="fa fa-heart-o" />
                        <span className="tooltipp">add to wishlist</span>
                      </button>
                      <button className="add-to-compare">
                        <i className="fa fa-exchange" />
                        <span className="tooltipp">add to compare</span>
                      </button>
                      <button className="quick-view">
                        <i className="fa fa-eye" />
                        <span className="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart" /> add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="clearfix visible-sm visible-xs" />

              <div className="col-md-3 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src={require("./img/product03.png")} alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                    <div className="product-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-btns">
                      <button className="add-to-wishlist">
                        <i className="fa fa-heart-o" />
                        <span className="tooltipp">add to wishlist</span>
                      </button>
                      <button className="add-to-compare">
                        <i className="fa fa-exchange" />
                        <span className="tooltipp">add to compare</span>
                      </button>
                      <button className="quick-view">
                        <i className="fa fa-eye" />
                        <span className="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart" /> add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src={require("./img/product04.png")} alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                    <div className="product-rating" />
                    <div className="product-btns">
                      <button className="add-to-wishlist">
                        <i className="fa fa-heart-o" />
                        <span className="tooltipp">add to wishlist</span>
                      </button>
                      <button className="add-to-compare">
                        <i className="fa fa-exchange" />
                        <span className="tooltipp">add to compare</span>
                      </button>
                      <button className="quick-view">
                        <i className="fa fa-eye" />
                        <span className="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart" /> add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="newsletter" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="newsletter">
                  <p>
                    Sign Up for the <strong>NEWSLETTER</strong>
                  </p>
                  <form>
                    <input
                      className="input"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button className="newsletter-btn">
                      <i className="fa fa-envelope" /> Subscribe
                    </button>
                  </form>
                  <ul className="newsletter-follow">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="footer">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">About Us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                    <ul className="footer-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" />
                          1734 Stonecoal Road
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-phone" />
                          +021-95-51-84
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-envelope-o" />
                          email@email.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Categories</h3>
                    <ul className="footer-links">
                      <li>
                        <a href="#">Hot deals</a>
                      </li>
                      <li>
                        <a href="#">Laptops</a>
                      </li>
                      <li>
                        <a href="#">Smartphones</a>
                      </li>
                      <li>
                        <a href="#">Cameras</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="clearfix visible-xs" />

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Information</h3>
                    <ul className="footer-links">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Orders and Returns</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Service</h3>
                    <ul className="footer-links">
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">View Cart</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="bottom-footer" className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="footer-payments">
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-visa" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-credit-card" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-paypal" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-mastercard" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-discover" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-amex" />
                      </a>
                    </li>
                  </ul>
                  <span className="copyright">
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" /> by
                    Colorlib - More Templates{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="js/jquery.min.js" />
        <script src="js/bootstrap.min.js" />
        <script src="js/slick.min.js" />
        <script src="js/nouislider.min.js" />
        <script src="js/jquery.zoom.min.js" />
        <script src="js/main.js" />
      </div>
    );
  }
}

export default ProductPage;
