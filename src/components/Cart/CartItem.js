import React from "react";
import Button from "../UI/Button";
import "./CartItem.css";

const CartItem = (props) => {
  const cartItems = (
    <ul className="cart-items">
      <li>
        <h4>ITEM</h4>
        <h4>PRICE</h4>
        <h4>QUANTITY</h4>
      </li>
      <hr />
      {props.items.map((item) => (
        <li key={Math.random() * 10}>
          <img src={item.imageUrl} alt={item.title} className="cart-img" />
          <p>{item.title}</p>
          <Button className="btn-remove">REMOVE</Button>
        </li>
      ))}
      <hr />
    </ul>
  );
  return (
    <div>
      <h3>CART</h3>
      {cartItems}
    </div>
  );
};

export default CartItem;
