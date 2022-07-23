import React from "react";
import "./Products.css";

const Product = (props) => {
  return (
    <div className="products">
      {props.items.map((item) => {
        return (
          <ul className="product-items">
            <li>
              <h3>{item.title}</h3>
            </li>
            <li>
              <img src={item.imageUrl} />
            </li>
            <li>
              <h4>${item.price}</h4>
            </li>
            <li>
              <button>ADD TO CART</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Product;
