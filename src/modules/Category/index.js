import React from "react";
import "./category.scss";
import ProductImg from "../../assets/images/productImage.png";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import DropDownIcon from "../../assets/icons/dropDown.svg";
import ProductCarrat from "../../assets/images/product-carrat.png";
import CloseIcon from "../../assets/icons/close.svg";
import DeleteGreenIcon from "../../assets/icons/deleteGreen.svg";

const categories = [
  {
    image: ProductImg,
    name: "Cabbage",
    category: "Vegetables",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    category: "Fruits",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    category: "Vegetables",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    category: "Vegetables",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    category: "Seeds",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Broccoli",
    category: "Fruits",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Carrots",
    category: "Vegetables",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductImg,
    name: "Cabbage",
    category: "Fruits",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
  {
    image: ProductCarrat,
    name: "Seeds",
    category: "Vegetables",
    description: "Fresh, organic carrots packed with nutrients.",
    edit: EditIcon,
    delete: DeleteIcon,
  },
];
export default function Category() {
  return (
    <div>
      <div className="category-main">
        <div></div>
        <div className="category-items">
          <div className="category-title">
            <h2>Category</h2>
            <button type="button" aria-label="Add Category">
              Add Category
            </button>
          </div>
          <div className="category-container">
            <div className="category-header">
              <ul>
                <li className="category-product">PRODUCT</li>
                <li className="category-name">CATEGORY</li>
                <li className="category-description">DESCRIPTION</li>
              </ul>
            </div>
            <div className="category-listing-details">
              {categories.map((items) => (
                <div className="category-listing">
                  <div className="category-flex">
                    <div className="category-img-name">
                      <img src={items.image} alt={items.name} />
                      <h3>{items.name}</h3>
                    </div>
                    <span className="category-listed">{items.category}</span>
                    <span className="category-listed-description">
                      {items.description}
                    </span>
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
              <h2>Add Category</h2>
              <form method="POST">
                <div className="pop-up-add-products">
                  <div className="pop-up-add-product-flex">
                    <input type="text" placeholder="Product Name" />
                    <div className="category-input-custom">
                      <input placeholder="Category" />
                      <img src={DropDownIcon} alt="DropDown-Icon" />
                    </div>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    placeholder="Description"
                  ></textarea>
                  <div className="submit-button-product">
                    <button type="submit" aria-label="Add Product">
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="category-delete-pop-up">
            <div className="delete-pop-up-container">
              <img src={CloseIcon} alt="Close-Icon" className="close-icon" />
              <div className="trash-pop-up-icon">
                <img src={DeleteGreenIcon} alt="Delete-Icon" />
              </div>
              <h2>Delete Category</h2>
              <span>Are you sure you want to delete this category?</span>
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
