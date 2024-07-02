import React from "react";
import "./deliveryman.scss";
import DropDownIcon from "../../../assets/icons/dropDown.svg";
import SellerCharlie from "../../../assets/images/delivery-man-charlie.png";
import SellerMalaika from "../../../assets/images/delivery-man-malika.png";
import SellerSimon from "../../../assets/images/simon.png";
import SellerAshley from "../../../assets/images/Ashley-Brooke.png";
import SellerNishant from "../../../assets/images/Nishant-Talwar.png";
import SellerMark from "../../../assets/images/Mark-Jacobs.png";
import UploadIcon from '../../../assets/icons/upload.svg'
import CloseIcon from '../../../assets/icons/close.svg'
import DeleteGreenIcon from '../../../assets/icons/deleteGreen.svg'

const deliveryManDetail = [
  {
    image: SellerCharlie,
    name: "Charlie Kristen",
    id: "5442",
    email: "charliekristen@gmail.com",
    date: "22/03/24",
    location: "123, Serene Street, Chandanpur,India",
    task: "2",
    status: "Delivered",
  },
  {
    image: SellerMalaika,
    name: "Malaika Brown",
    id: "5974",
    email: "malaikabrown@gmail.com",
    date: "22/03/24",
    location: "456, Lotus Lane, Green Valley",
    task: "4",
    status: "On the Way",
  },
  {
    image: SellerSimon,
    name: "Simon Minter",
    id: "3683",
    email: "simonminter@gmail.com",
    date: "22/03/24",
    location: "789, Emerald Avenue, Royal Gardens",
    task: "1",
    status: "Delivered",
  },
  {
    image: SellerAshley,
    name: "Ashley Brooke",
    id: "6749",
    email: "ashleybrooke@gmail.com",
    date: "22/03/24",
    task: "4",
    location: "456, Lotus Lane, Green Valley",
    status: "On the Way",
  },
  {
    image: SellerNishant,
    name: "Nishant Talwar",
    id: "7668",
    email: "charliekristen@gmail.com",
    date: "22/03/24",
    task: "3",
    location: "123, Serene Street, Chandanpur,India",
    status: "Delivered",
  },
  {
    image: SellerMark,
    name: "Mark Jacobs",
    id: "8457",
    email: "markjacobs@gmail.com",
    date: "22/03/24",
    task: "2",
    location: "789, Emerald Avenue, Royal Gardens",
    status: "On the Way",
  },
  {
    image: SellerSimon,
    name: "Charlie Kristen",
    id: "6734",
    email: "charliekristen@gmail.com",
    date: "22/03/24",
    task: "2",
    location: "101, Sunflower Street, Sunnydale Colony",
    status: "On the Way",
  },
  {
    image: SellerCharlie,
    name: "Malaika Brown",
    id: "4545",
    email: "malaikabrown@gmail.com",
    date: "22/03/24",
    task: "4",
    location: "456, Lotus Lane, Green Valley",
    status: "On the Way",
  },
  {
    image: SellerMark,
    name: "Mark Jacobs",
    id: "7468",
    email: "markjacobs@gmail.com",
    date: "22/03/24",
    task: "1",
    location: "123, Serene Street, Chandanpur,India",
    status: "Delivered",
  },
];
export default function DeliveryMan() {
  return (
    <div>
      <div className="delivery-man-status-main">
        <div></div>
        <div className="delivery-man-status-items">
          <div className="delivery-man-status-title">
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
          <div className="delivery-man-task-container">
            <div className="delivery-man-task-header">
              <ul>
                <li className="delivery-man-task-label">DELIVERY MAN</li>
                <li className="delivery-man-task-id">ID</li>
                <li className="delivery-man-task">TASK</li>
                <li className="delivery-man-task-email">EMAIL</li>
                <li className="delivery-man-task-location">LOCATION</li>
                <li className="delivery-man-task-status">STATUS</li>
              </ul>
            </div>
            <div className="delivery-man-task-listing-details">
              {deliveryManDetail.map((items) => (
                <div className="delivery-man-task-listing">
                  <div className="delivery-man-task-flex">
                    <div className="delivery-man-task-img-name">
                      <img src={items.image} alt={items.name} />
                      <h2>{items.name}</h2>
                    </div>
                    <span className="delivery-man-task-listed-id">{items.id}</span>
                    <span className="delivery-man-task-listed">{items.task}</span>
                    <span className="delivery-man-task-listed-email">
                      {items.email}
                    </span>
                    <span className="delivery-man-task-listed-location">
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

          </div>
      </div>
    </div>
  );
}
