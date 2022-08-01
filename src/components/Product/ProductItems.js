import React, { useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/CartContext/cart-context";
import Button from "../UI/Button";
import "./ProductItems.css";

const ProductItems = (props) => {
  const ctxobj = useContext(CartContext);
  let username = localStorage.getItem("email");
  username = username.substring(0, username.lastIndexOf("@"));

  const addHandler = () => {
    axios.post(`https://crudcrud.com/api/094200a2e139484c91fa8e16b2565eb0/${username}`, {
      ...props.item, quantity: 1
    })
      .then((res) => ctxobj.addItem(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <ul className="product-items" id={props.id}>
      <li>
        <h3>{props.item.title}</h3>
      </li>
      <li>
        <img src={props.item.imageUrl} />
      </li>
      <li>
        <h4>${props.item.price}</h4>
      </li>
      <li>
        <Button className="btn-purchase" onClick={addHandler}>
          Add to Cart
        </Button>
        <NavLink className="btn btn-purchase" state={props.item} to={`/product-detail/${props.id}`}>
          Check product
        </NavLink>
      </li>
    </ul >
  );
};

export default ProductItems;
