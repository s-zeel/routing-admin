import React from "react";
import "./allproducts.scss";
import ProductImg from "../../assets/images/productImage.png";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import ProductCarrat from "../../assets/images/product-carrat.png";
import UploadIcon from "../../assets/icons/upload.svg";
import DropDownIcon from "../../assets/icons/dropDown.svg";
import CloseIcon from "../../assets/icons/close.svg";
import DeleteGreenIcon from "../../assets/icons/deleteGreen.svg";

const product = [
  {
    image: ProductImg,
    name: "Cabbage",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Cabbage",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "50kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
];
export default function AllProducts() {
  return (
    <div>
      <div className="all-products-main">
        <div></div>
        <div className="all-products-items">
          <div className="all-products-title">
            <h2>All Product</h2>
            <button type="button" aria-label="Add Product">
              Add Product
            </button>
          </div>
          <div className="product-listing-container">
            <div className="product-listing-header">
              <ul>
                <li className="listing-image">IMAGE</li>
                <li className="listing-name">NAME</li>
                <li className="listing-stock">STOCK</li>
                <li className="listing-date">DATE</li>
                <li className="listing-price">PRICE(PER KG)</li>
                <li className="listing-description">DESCRIPTION</li>
              </ul>
            </div>
            <div className="product-listing-details">
              {product.map((items) => (
                <div className="product-listing">
                  <img src={items.image} alt={items.name} />
                  <span className="product-listed-name">{items.name}</span>
                  <span className="product-listed-stock">{items.stock}</span>
                  <span className="product-listed-date">{items.date}</span>
                  <span className="product-listed-price">{items.price}</span>
                  <span className="product-listed-description">
                    {items.description}
                  </span>
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

          <div className="add-product-pop-up">
            <div className="container-product-pop-up">
              <img
                src={CloseIcon}
                alt="close-icon" 
                className="close-icon-pop-up"
              />

              <h2>Add Product</h2>
              <div className="add-product-image-pop-up">
                <div className="image-input">
                  <img src={UploadIcon} alt="upload-icon" />
                  <input type="file" placeholder="Upload Image" />
                  <p>Upload Image</p>
                </div>
              </div>
              <form method="POST">
                <div className="pop-up-add-products">
                  <div className="pop-up-add-product-flex">
                    <input type="text" placeholder="Product Name" />
                    <input type="text" placeholder="Price" />
                  </div>
                  <div className="pop-up-add-product-flex">
                    <input type="number" placeholder="Date" />
                    <input type="text" placeholder="stock" />
                  </div>
                  <div className="category-input-custom">
                    <input placeholder="Category" className="wide-input-box" />
                    <img src={DropDownIcon} alt="DropDown-Icon" />
                  </div>
                  <input
                    type="text"
                    placeholder="Description"
                    className="wide-input-box"
                  />
                  <div className="submit-button-product">
                    <button type="submit" aria-label="Add Product">
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="delete-pop-up">
            <div className="delete-pop-up-container">
              <img src={CloseIcon} alt="Close-Icon" className="close-icon" />
              <div className="trash-pop-up-icon">
                <img src={DeleteGreenIcon} alt="Delete-Icon" />
              </div>
              <h2>Delete Item</h2>
              <span>Are you sure you want to delete this item?</span>
              <div className="delete-pop-up-buttons">
                <button type="button" aria-label="Cancel">
                  Cancel
                </button>
                <button
                  type="button"
                  aria-label="Delete"
                  className="green-button-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
