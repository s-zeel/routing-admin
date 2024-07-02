import React from "react";
import "./navigation.scss";
import Graph from "../../../assets/icons/graph.svg";
import Logo from "../../../assets/icons/logo.svg";
import CategoryIcon from "../../../assets/icons/categry.svg";
import SellerIcon from "../../../assets/icons/seller.svg";
import CartIcon from "../../../assets/icons/cart.svg";
import Logout from '../../../assets/icons/logout.svg'
import Dashboard from "../../../modules/dashboard";
import AllProducts from "../../../modules/AllProduct";
import Category from "../../../modules/Category";
import Sellers from "../../../modules/Sellers";
import Product from "../../../modules/SellerMain/product";
import Notification from "../../../modules/SellerMain/Notification";
import OrderUpdate from "../../../modules/SellerMain/OrderUpdate";
import DeliveryMan from "../../../modules/SellerMain/DeliveryMan";
import Stock from "../../../modules/SellerMain/Stock";
export default function Navigation() {
  return (
    <div>
      <div className="navigation-main">
        <div className="main-container-navigation">
          <div className="logo-div">
            <img src={Logo} alt="company-logo" />
          </div>
          <div className="navigation-tabs">
            <a href="#" className="tabs-details">
              <div className="tabs-svg">
                <img src={Graph} alt="graph-icon" />
              </div>
              <div className="tab-label">
                Analytics
              </div>
            </a>
            <a href="#" className="tabs-details">
              <div className="tabs-svg">
                <img src={CartIcon} alt="cart-icon" />
              </div>
              <div className="tab-label">
                All Product
              </div>
            </a>
            <a href="#" className="tabs-details">
              <div className="tabs-svg">
                <img src={CategoryIcon} alt="category-icon" />
              </div>
              <div className="tab-label">
                Category
              </div>
            </a>
            <a href="#" className="tabs-details">
              <div className="tabs-svg">
                <img src={SellerIcon} alt="seller-icon" />
              </div>
              <div className="tab-label">
                Sellers
              </div>
            </a>
          </div>
        </div>
        <div className="navigation-log-out">
            <div className="logout-icon">
                <img src={Logout} alt="logout-icon"/>
            </div>
            <h3>Logout</h3>
        </div>
      </div>
      <div className="context-area">
        {/* <Dashboard /> */}
        <AllProducts />
        {/* <Category /> */}
        {/* <Sellers /> */}
        {/* <Product /> */}
        {/* <Notification /> */}
        {/* <OrderUpdate /> */}
        {/* <DeliveryMan /> */}
        {/* <Stock /> */}
      </div>
    </div>
  );
}
