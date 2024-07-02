import React from "react";
import "./sellers.scss";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import SellerCharlie from "../../assets/images/delivery-man-charlie.png";
import SellerMalaika from "../../assets/images/delivery-man-malika.png";
import SellerSimon from "../../assets/images/simon.png";
import SellerAshley from "../../assets/images/Ashley-Brooke.png";
import SellerNishant from "../../assets/images/Nishant-Talwar.png";
import SellerMark from "../../assets/images/Mark-Jacobs.png";
import CloseIcon from '../../assets/icons/close.svg'
import DropDownIcon from '../../assets/icons/dropDown.svg'

const seller = [
  {
    image: SellerCharlie,
    name: "Charlie Kristen",
    id: 5442,
    location: "123, Serene Street, Chandanpur,India",
    status: "Not Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerMalaika,
    name: "Malaika Brown",
    id: 5974,
    location: "456, Lotus Lane, Green Valley",
    status: "Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerSimon,
    name: "Simon Minter",
    id: 3683,
    location: "789, Emerald Avenue, Royal Gardens",
    status: "Not Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerAshley,
    name: "Ashley Brooke",
    id: 6749,
    location: "456, Lotus Lane, Green Valley",
    status: "Not Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerNishant,
    name: "Nishant Talwar",
    id: 7668,
    location: "123, Serene Street, Chandanpur,India",
    status: "Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerMark,
    name: "Mark Jacobs",
    id: 8457,
    location: "789, Emerald Avenue, Royal Gardens",
    status: "Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerSimon,
    name: "Charlie Kristen",
    id: 6734,
    location: "101, Sunflower Street, Sunnydale Colony",
    status: "Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerCharlie,
    name: "Malaika Brown",
    id: 4545,
    location: "456, Lotus Lane, Green Valley",
    status: "Not Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: SellerMark,
    name: "Mark Jacobs",
    id: 7468,
    location: "123, Serene Street, Chandanpur,India",
    status: "Available",
    edit: EditIcon,
    delete: DeleteIcon,
  },
];
export default function Sellers() {
  return (
    <div>
      <div className="sellers-main">
        <div></div>
        <div className="sellers-items">
          <div className="sellers-title">
            <h2>Sellers</h2>
            <button type="button" aria-label="Add seller">
              Add Seller
            </button>
          </div>
          <div className="sellers-container">
            <div className="sellers-header">
              <ul>
                <li className="seller-title">SELLERS</li>
                <li className="seller-id">ID</li>
                <li className="seller-location">LOCATION</li>
                <li className="seller-status">STATUS</li>
              </ul>
            </div>
            <div className="seller-listing-details">
              {seller.map((items) => (
                <div className="sellers-listing">
                  <div className="seller-flex">
                    <div className="seller-img-name">
                      <img src={items.image} alt={items.name} />
                      <h2>{items.name}</h2>
                    </div>
                    <span className="seller-id-listed">{items.id}</span>
                    <span className="seller-listed-location">
                      {items.location}
                    </span>
                    <span className="seller-listed-status">{items.status}</span>
                  </div>
                  <div className="edit-delete-icon">
                    <div className="edit-icon">
                      <img src={items.edit} alt="edit-icon" />
                    </div>
                    <div className="delete-icon">
                      <img src={items.delete} alt="delete-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="product-add-pop-up">
            <div className="container-product-pop-up">
              <img src={CloseIcon} alt="close-icon" />
              <h2>Add Seller</h2>
              <form method="POST">
                <div className="pop-up-add-products">
                  <div className="pop-up-add-product-flex">
                    <input type="text" placeholder="Seller Name" />
                    <div className="category-input-custom">
                      <input type="number" placeholder="ID" />
                    </div>
                  </div>

                  <textarea
                    name="message"
                    rows="4"
                    cols="50"
                    placeholder="Location"
                  ></textarea>
                  <div className="submit-button-product">
                    <button type="submit" aria-label="Add Product">
                      Add Seller
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
