import React, { useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/CartContext/cart-context";
import Button from "../UI/Button";
import "./ProductItems.css";

const ProductItems = (props) => {
  const ctxobj = useContext(CartContext);
  let username = localStorage.getItem("email");
  let t = "";
  for (let i = 0; i < username.length; i++) {
    if (username[i] == '.' || username[i] == '@') {
      continue;
    }
    else {
      t += username[i];
    }
  }
  username = t;

  const addHandler = () => {
    axios.post(`https://crudcrud.com/api/c9afa3f634c34fec9f93d86f8375bad9/${username}`, {
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
