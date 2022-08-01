import React, { useContext, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/CartContext/cart-context";
import Button from "../UI/Button";
import "./ProductItems.css";

const ProductItems = (props) => {
  const ctxobj = useContext(CartContext);
  // const [isAdded, setIsAdded] = useState(false);
  let username = localStorage.getItem("email");
  username = username.substring(0, username.lastIndexOf("@"));

  const addHandler = () => {
    // axios.get(`https://crudcrud.com/api/db6f856867034225a11ee42e2ab84391/${username}`)
    //   .then((res) => {
    //     for (let i = 0; i < res.data.length; i++) {
    //       if (res.data[i].id == props.item.id) {
    //         window.alert("Already added");

    //       }
    //     }
    //   })
    axios.post(`https://crudcrud.com/api/db6f856867034225a11ee42e2ab84391/${username}`, {
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
