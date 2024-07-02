import React from "react";
import "./stock.scss";
import stockImg from "../../../assets/images/productImage.png";
import stockCarrat from "../../../assets/images/product-carrat.png";
import AlertTriangle from "../../../assets/icons/alertTriangle.svg";

const stock = [
  {
    image: stockImg,
    name: "Cabbage",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    status: "Not Availabe",
    alert: AlertTriangle,
  },
  {
    image: stockCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Availabe",
  },
  {
    image: stockImg,
    name: "Broccoli",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Not Availabe",
  },
  {
    image: stockCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Not Availabe",
  },
  {
    image: stockImg,
    name: "Broccoli",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Availabe",
  },
  {
    image: stockImg,
    name: "Broccoli",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Availabe",
  },
  {
    image: stockCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Availabe",
  },
  {
    image: stockImg,
    name: "Cabbage",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Not Availabe",
  },
  {
    image: stockCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    alert: AlertTriangle,
    status: "Availabe",
  },
];
export default function Stock() {
  return (
    <div>
      <div className="stock-main">
        <div></div>
        <div className="stock-items">
          <div className="stock-title">
            <h2>Stock</h2>
            <button type="button" aria-label="Add stock">
              Add Stock
            </button>
          </div>
          <div className="stock-container">
            <div className="stock-header">
              <ul>
                <li className="stock-image">IMAGE</li>
                <li className="stock-name">NAME</li>
                <li className="stock-label">STOCK</li>
                <li className="stock-date">DATE</li>
                <li className="stock-price">PRICE(PER KG)</li>
                <li className="stock-description">DESCRIPTION</li>
                <li className="stock-status">STATUS</li>
              </ul>
            </div>
            <div className="stock-details">
              {stock.map((items) => (
                <div className="stock">                
                  <img src={items.alert} alt={items.alert} className="alert-icon" />
                  <img src={items.image} alt={items.name} className="stock-product-image"/>
                  <span className="stock-listed-name">{items.name}</span>
                  <span className="stock-listed-stock">{items.stock}</span>
                  <span className="stock-listed-date">{items.date}</span>
                  <span className="stock-listed-price">{items.price}</span>
                  <span className="stock-listed-description">
                    {items.description}
                  </span>
                  <button type="button" aria-label={items.status}>{items.status}</button>
                </div>
              ))}
            </div>
          </div>

          </div>
      </div>
    </div>
  );
}
