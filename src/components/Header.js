import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="container">
        <ul className="header-items">
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="header">
        <h1>Ecomm Store</h1>
      </div>
    </Fragment>
  );
};

export default Header;
