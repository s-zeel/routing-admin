import React from "react";
import "./product.scss";
import ProductImg from "../../../assets/images/productImage.png";
import EditIcon from "../../../assets/icons/edit.svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import ProductCarrat from "../../../assets/images/product-carrat.png";
import UploadIcon from "../../../assets/icons/upload.svg";
import DropDownIcon from "../../../assets/icons/dropDown.svg";
import CloseIcon from "../../../assets/icons/close.svg";
import DeleteGreenIcon from "../../../assets/icons/deleteGreen.svg";

const sellerProduct = [
  {
    image: ProductImg,
    name: "Cabbage",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Cabbage",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    stock: "30kg",
    date: "22/03/24",
    price: "₹22.99",
    description: "Carrots are root vegetables that come",
    edit: EditIcon,
    delete: DeleteIcon,
  },
];
export default function Product() {
  return (
    <div>
      <div className="seller-products-main">
        <div></div>
        <div className="seller-products-items">
          <div className="seller-products-title">
            <h2>Product</h2>
            <button type="button" aria-label="Add Product">
              Add Product
            </button>
          </div>
          <div className="seller-product-listing-container">
            <div className="seller-product-listing-header">
              <ul>
                <li className="seller-listing-image">IMAGE</li>
                <li className="seller-listing-name">NAME</li>
                <li className="seller-listing-date">DATE</li>
                <li className="seller-listing-price">PRICE(PER KG)</li>
                <li className="seller-listing-stock">STOCK</li>
                <li className="seller-listing-description">DESCRIPTION</li>
              </ul>
            </div>
            <div className="seller-product-listing-details">
              {sellerProduct.map((items) => (
                <div className="seller-product-listing">
                  <div className="seller-flex-items-product">
                    <img src={items.image} alt={items.name} />
                    <span className="seller-product-listed-name">{items.name}</span>
                    <span className="seller-product-listed-date">{items.date}</span>
                    <span className="seller-product-listed-price">{items.price}</span>
                    <span className="seller-product-listed-stock">{items.stock}</span>
                    <span className="seller-product-listed-description">
                      {items.description}
                    </span>
                  </div>
                  <div className="seller-edit-delete-icon">
                    <div className="seller-edit-icon">
                      <img src={items.edit} alt="edit-icon" />
                    </div>
                    <div className="seller-delete-icon">
                      <img src={items.delete} alt="delete-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="seller-product-pop-up">
            <div className="container-product-pop-up">
              <img src={CloseIcon} alt="close-icon" className="close-icon-pop-up"/>
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
                    <input type="text" placeholder="Stock" />
                  </div>
                  <div className="category-input-custom">
                    <input placeholder="Category" className="wide-input-box" />
                    <img src={DropDownIcon} alt="DropDown-Icon" />
                  </div>
                  
                  <div className="submit-button-product">
                    <button type="submit" aria-label="Add Product">
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="seller-product-delete-pop-up">
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
