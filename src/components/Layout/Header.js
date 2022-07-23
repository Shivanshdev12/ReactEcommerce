import React, { Fragment } from "react";
import Button from "../UI/Button";
import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="container">
        <ul className="header-items">
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
          <li>
            <Button onClick={props.onOpen}>Cart</Button>
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
