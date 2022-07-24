import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import "./Header.css";

const Header = (props) => {
  const ctxobj = useContext(CartContext);
  let totalQuantity = 0;
  const items = ctxobj.items;
  for (let i = 0; i < items.length; i++) {
    totalQuantity = totalQuantity + items[i].quantity;
  }
  return (
    <Fragment>
      <div className="container">
        <ul className="header-items">
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
          <li>
            <Button onClick={props.onOpen}>Cart </Button>({totalQuantity})
          </li>
        </ul>
      </div>
      <div className="header">
        <h1>Ecomm Store</h1>
      </div>
    </Fragment>
  );
};

export default Header;
