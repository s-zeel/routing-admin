import React from "react";
import "./orderupdate.scss";
import SellerCharlie from "../../../assets/images/delivery-man-charlie.png";
import SellerMalaika from "../../../assets/images/delivery-man-malika.png";
import SellerSimon from "../../../assets/images/simon.png";
import SellerAshley from "../../../assets/images/Ashley-Brooke.png";
import SellerNishant from "../../../assets/images/Nishant-Talwar.png";
import SellerMark from "../../../assets/images/Mark-Jacobs.png";
import CloseIcon from "../../../assets/icons/close.svg";

const orderUpdate = [
  {
    image: SellerCharlie,
    name: "Charlie Kristen",
    orderId: "#465442",
    quantity: "3 kg",
    date: "22/03/24",
    location: "123, Serene Street, Chandanpur,India",
    price: "₹22.99",
    status: "Delivered",
  },
  {
    image: SellerMalaika,
    name: "Malaika Brown",
    orderId: "#465974",
    quantity: "3 kg",
    date: "22/03/24",
    location: "456, Lotus Lane, Green Valley",
    price: "₹22.99",
    status: "On the Way",
  },
  {
    image: SellerSimon,
    name: "Simon Minter",
    orderId: "#463683",
    quantity: "3 kg",
    date: "22/03/24",
    location: "789, Emerald Avenue, Royal Gardens",
    price: "₹22.99",
    status: "Delivered",
  },
  {
    image: SellerAshley,
    name: "Ashley Brooke",
    orderId: "#976749",
    quantity: "3 kg",
    date: "22/03/24",
    price: "₹22.99",
    location: "456, Lotus Lane, Green Valley",
    status: "On the Way",
  },
  {
    image: SellerNishant,
    name: "Nishant Talwar",
    orderId: "#667668",
    quantity: "3 kg",
    date: "22/03/24",
    price: "₹22.99",
    location: "123, Serene Street, Chandanpur,India",
    status: "Delivered",
  },
  {
    image: SellerMark,
    name: "Mark Jacobs",
    orderId: "#238457",
    quantity: "3 kg",
    date: "22/03/24",
    price: "₹22.99",
    location: "789, Emerald Avenue, Royal Gardens",
    status: "On the Way",
  },
  {
    image: SellerSimon,
    name: "Charlie Kristen",
    orderId: "#986734",
    quantity: "3 kg",
    date: "22/03/24",
    price: "₹22.99",
    location: "101, Sunflower Street, Sunnydale Colony",
    status: "On the Way",
  },
  {
    image: SellerCharlie,
    name: "Malaika Brown",
    orderId: "#124545",
    quantity: "3 kg",
    date: "22/03/24",
    price: "₹22.99",
    location: "456, Lotus Lane, Green Valley",
    status: "On the Way",
  },
  {
    image: SellerMark,
    name: "Mark Jacobs",
    orderId: "#567468",
    quantity: "3 kg",
    date: "22/03/24",
    price: "₹22.99",
    location: "123, Serene Street, Chandanpur,India",
    status: "Delivered",
  },
];
export default function OrderUpdate() {
  return (
    <div>
      <div className="order-main">
        <div></div>
        <div className="order-items">
          <div className="order-title">
            <h2>All Order</h2>
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
          <div className="order-container">
            <div className="order-header">
              <ul>
                <li className="order-delivery-man">DELIVERY MAN</li>
                <li className="order-order-id">ORDER ID</li>
                <li className="order-price">PRICE</li>
                <li className="order-quantity">QUANTITY</li>
                <li className="order-date">DATE</li>
                <li className="order-location">LOCATION</li>
                <li className="order-status">STATUS</li>
              </ul>
            </div>
            <div className="order-listing-details">
              {orderUpdate.map((items) => (
                <div className="order-listing">
                  <div className="order-flex">
                    <div className="order-img-name">
                      <img src={items.image} alt={items.name} />
                      <h2>{items.name}</h2>
                    </div>
                    <span className="order-order-id">{items.orderId}</span>
                    <span className="order-price">{items.price}</span>
                    <span className="order-listed-quantity">
                      {items.quantity}
                    </span>
                    <span className="order-listed-date">{items.date}</span>
                    <span className="order-listed-location">
                      {items.location}
                    </span>
                    <div className="status-button">
                      <button
                        type="button"
                        aria-label="Assign"
                        className="green-button"
                      >
                        {items.status}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-status-pop-up">
            <div className="container-status-pop-up">
              <img
                src={CloseIcon}
                alt="close-icon"
                className="close-icon-pop-up"
              />
              <h2>Order</h2>
              <div className="order-details-pop-up">
                <div className="order-flex-pop-up">
                  <h3>Order ID:</h3>
                  <span>#465442</span>
                </div>
                <div className="order-flex-pop-up">
                  <h3>Order Date:</h3>
                  <span>March 22, 2024</span>
                </div>
                <div className="order-flex-pop-up">
                  <h3>Address:</h3>
                  <span>456 Elm Street, Townsville, State, ZIP</span>
                </div>
              </div>

              <div className="order-status-tracking-graph">
                <div className="tracking-progress-bar">
                  <div className="order-tracking-circle">
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5298 1.26501L4.03579 7.75899L1.08398 4.80718"
                        stroke="white"
                        stroke-width="1.77108"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="progress-line"></div>
                  <div className="order-tracking-circle gray-circle">
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5298 1.26501L4.03579 7.75899L1.08398 4.80718"
                        stroke="white"
                        stroke-width="1.77108"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="progress-line gray-progress-line"></div>
                  <div className="order-tracking-circle gray-circle-no-tick"></div>
                </div>

                <div className="progress-bar-text-flex">
                  <div className="progress-bar-text">
                    <h5>Order Pickup</h5>
                    <span>22 March 2024, 11:45PM</span>
                  </div>
                  <div className="progress-bar-text">
                    <h5>On a Way</h5>
                    <span>22 March 2024, 12:45PM</span>
                  </div>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
