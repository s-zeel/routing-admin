import React from "react";
import "./dashboard.scss";
import UserImage from "../../assets/icons/greenUser.svg";
import GreenGraph from "../../assets/icons/greengraph.svg";
import ProductImage from "../../assets/images/productImage.png";
import DeliveryManCharlie from "../../assets/images/delivery-man-charlie.png";
import DeliveryManMalika from "../../assets/images/delivery-man-malika.png";

const order = [
  {
    image: DeliveryManCharlie,
    name: "Charlie Kristen",
    orderId: "#465442",
    price: "₹22.99",
    quantity: "3 kg",
    date: "22/03/24",
    location: "123, Serene Street, Chandanpur,India",
    status: "Delivered",
  },

  {
    image: DeliveryManMalika,
    name: "Malaika Brown",
    orderId: "#465974",
    price: "₹22.99",
    quantity: "3 kg",
    date: "22/03/24",
    location: "456, Lotus Lane, Green Valley",
    status: "On the Way",
  },
];

const topProducts = [
  {
    no: "1",
    image: ProductImage,
    name: "Cabbage",
    price: "$35",
    itemSold: "498 pcs",
  },
  {
    no: "2",
    image: ProductImage,
    name: "Cabbage",
    price: "$55",
    itemSold: "367 pcs",
  },
  {
    no: "3",
    image: ProductImage,
    name: "Cabbage",
    price: "$55",
    itemSold: "367 pcs",
  },
  {
    no: "4",
    image: ProductImage,
    name: "Cabbage",
    price: "$55",
    itemSold: "367 pcs",
  },
  {
    no: "5",
    image: ProductImage,
    name: "Cabbage",
    price: "$48",
    itemSold: "255 pcs",
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-main">
        <div></div>
        <div className="dashboard-items">
          <div className="dashboard-title">
            <h2>Dashboard</h2>
          </div>
          <div className="dashboard-parent-container">
            <div className="dashboard-analysis">
              <div className="dashboard-cards-charts">
                <div className="cards-flex">
                  <div className="custom-card-dashboard">
                    <div className="flex-elements">
                      <div className="icon-div">
                        <img src={UserImage} alt="seller-icon" />
                      </div>
                      <h2>Users</h2>
                    </div>
                    <p>580</p>
                  </div>
                  <div className="custom-card-dashboard">
                    <div className="flex-elements">
                      <div className="icon-div">
                        <img src={GreenGraph} alt="graph-icon" />
                      </div>
                      <h2>Sales</h2>
                    </div>
                    <p>₹6,580</p>
                  </div>
                </div>
              </div>
              <div className="top-products-analysis">
                <div className="top-bar-products-dashboard">
                  <h3>Top Products</h3>
                  <p>View All</p>
                </div>
                <div className="product-title-column">
                  <div className="text-column">
                    <h4>NO.</h4>
                    <h4>PRODUCT</h4>
                  </div>
                  <div className="number-column">
                    <h4>PRICE</h4>
                    <h4>ITEM SOLD</h4>
                  </div>
                </div>
                {topProducts.map((product) => (
                  <div className="product-information-column">
                    <div className="information-column-left">
                      <div className="light-sm-text">{product.no}</div>
                      <div className="product-image-name">
                        <img src={product.image} alt="product-image" />
                        <div className="product-name">{product.name}</div>
                      </div>
                    </div>
                    <div className="information-column-right">
                      <div className="product-price">{product.price}</div>
                      <div className="product-sold">{product.itemSold}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard-order-details">
              <div className="all-order-details">
                <h3>All Order</h3>
                <p>View All</p>
              </div>
              <div className="order-details-header">
                <table>
                  <tr>
                    <th class="delivery-man">DELIVERY MAN</th>
                    <th class="order-id">ORDER ID</th>
                    <th class="price">PRICE</th>
                    <th class="quantity">QUANTITY</th>
                    <th class="date">DATE</th>
                    <th class="location">LOCATION</th>
                    <th class="status">STATUS</th>
                  </tr>
                </table>
              </div>
              <div className="order-list-container">
                {order.map((orders) => (
                  <div className="order-list">
                    <div className="delivery-man-details">
                      <img src={orders.image} alt={orders.name} />
                      <h2>{orders.name}</h2>
                    </div>
                    <span className="order-id-number">{orders.orderId}</span>
                    <span className="order-price">{orders.price}</span>
                    <span className="order-quantity">{orders.quantity}</span>
                    <span className="order-date">{orders.date}</span>
                    <span className="order-location">{orders.location}</span>
                    <button
                      type="button"
                      aria-label={order.status}
                      className="order-status"
                    >
                      {orders.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
