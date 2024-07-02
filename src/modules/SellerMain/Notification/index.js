import React from "react";
import "./notification.scss";
import DropDownIcon from "../../../assets/icons/dropDown.svg";
import ProductImg from "../../../assets/images/productImage.png";
import ProductCarrat from "../../../assets/images/product-carrat.png";
import CloseIcon from "../../../assets/icons/close.svg";

const notification = [
  {
    image: ProductImg,
    name: "Cabbage",
    orderId: "#465442",
    quantity: "3kg",
    date: "22/03/24",
    location: "123, Serene Street, Chandanpur,India",
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    orderId: "#465974",
    quantity: "3kg",
    date: "22/03/24",
    location: "456, Lotus Lane, Green Valley",
  },
  {
    image: ProductImg,
    name: "Broccoli",
    orderId: "#463683",
    quantity: "3kg",
    date: "22/03/24",
    location: "789, Emerald Avenue, Royal Gardens",
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    orderId: "#976749",
    quantity: "3kg",
    date: "22/03/24",
    location: "456, Lotus Lane, Green Valley",
  },
  {
    image: ProductImg,
    name: "Broccoli",
    orderId: "#667668",
    quantity: "3kg",
    date: "22/03/24",
    location: "123, Serene Street, Chandanpur,India",
  },
  {
    image: ProductImg,
    name: "Broccoli",
    orderId: "#238457",
    quantity: "3kg",
    date: "22/03/24",
    location: "789, Emerald Avenue, Royal Gardens",
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    orderId: "#986734",
    quantity: "3kg",
    date: "22/03/24",
    location: "101, Sunflower Street, Sunnydale Colony",
  },
  {
    image: ProductImg,
    name: "Cabbage",
    orderId: "#124545",
    quantity: "3kg",
    date: "22/03/24",
    location: "456, Lotus Lane, Green Valley",
  },
  {
    image: ProductCarrat,
    name: "Seeds",
    orderId: "#567468",
    quantity: "3kg",
    date: "22/03/24",
    location: "123, Serene Street, Chandanpur,India",
  },
];
export default function Notification() {
  return (
    <div>
      <div className="notification-main">
        <div></div>
        <div className="notification-items">
          <div className="notification-title">
            <h2>Notification</h2>
            <button>
              Today
              <div className="drop-down-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#BBBBBB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="notification-container">
            <div className="notification-header">
              <ul>
                <li className="notification-order-id">ORDER ID</li>
                <li className="notification-product">PRODUCT</li>
                <li className="notification-quantity">QUANTITY</li>
                <li className="notification-date">DATE</li>
                <li className="notification-location">LOCATION</li>
                <li className="notification-status">STATUS</li>
              </ul>
            </div>
            <div className="notification-listing-details">
              {notification.map((items) => (
                <div className="notification-listing">
                  <div className="notification-flex">
                    <span className="notification-order-id">
                      {items.orderId}
                    </span>
                    <div className="notification-img-name">
                      <img src={items.image} alt={items.name} />
                      <h2>{items.name}</h2>
                    </div>
                    <span className="notification-listed-quantity">
                      {items.quantity}
                    </span>
                    <span className="notification-listed-date">
                      {items.date}
                    </span>
                    <span className="notification-listed-location">
                      {items.location}
                    </span>
                  </div>
                  <div className="status-button">
                    <button type="button" aria-label="Cancel">
                      Cancel
                    </button>
                    <button
                      type="button"
                      aria-label="Assign"
                      className="green-button"
                    >
                      Assign
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="assign-order-add-pop-up">
            <div className="container-assign-order-pop-up">
              <img src={CloseIcon} alt="close-icon" />
              <h2>Assign Order</h2>
              <form method="POST">
                <div className="pop-up-add-products">
                  <div className="pop-up-add-product-flex">
                    <div className="category-input-custom">
                      <input type="text" placeholder="Select Delivery Man" />
                      <img src={DropDownIcon} alt="DropDown-Icon" />
                    </div>
                    <div className="category-input-custom">
                      <input placeholder="Select Order" />
                      <img src={DropDownIcon} alt="DropDown-Icon" />
                    </div>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    placeholder="Instruction"
                  ></textarea>
                  <div className="submit-button-product">
                    <button type="submit" aria-label="Add Product">
                      Assign Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
