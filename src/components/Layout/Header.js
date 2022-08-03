import React, { Fragment, useContext, useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/CartContext/cart-context";
import AuthContext from "../../store/AuthContext/auth-context";
import Button from "../UI/Button";
import "./Header.css";

const Header = (props) => {
  const ctxobj = useContext(CartContext);
  const authctx = useContext(AuthContext);
  let totalQuantity = 0;
  for (let i = 0; i < ctxobj.items.length; i++) {
    totalQuantity = totalQuantity + ctxobj.items[i].quantity;
  }

  const isToken = localStorage.getItem('token');
  const logoutHandler = () => {
    authctx.logout();
    localStorage.removeItem('email');
    window.location.reload();
  }
  return (
    <Fragment>
      <div className="container">
        <ul className="header-items">
          <li>
            <NavLink className="link" activeClassName="active" to="/home">
              Home
            </NavLink>
          </li>
          {isToken !== null && <li>
            <NavLink className="link" activeClassName="active" to="/store">
              Store
            </NavLink>
          </li>}
          <li>
            <NavLink className="link" activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          {isToken == null && <li>
            <NavLink className="link" activeClassName="active" to="/login">
              SignIn
            </NavLink>
          </li>}
          {isToken !== null && <li>
            <Button onClick={logoutHandler}>Logout</Button>
          </li>}
          <li>
            <NavLink className="link" activeClassName="active" to="/contact">
              Contact Us
            </NavLink>
          </li>
          {isToken !== null && <li>
            <Button onClick={props.onOpen} className="btn">Cart </Button>({totalQuantity})
          </li>}
        </ul>
      </div>
      <div className="header">
        <h1>Ecomm Store</h1>
      </div>
    </Fragment>
  );
};

export default Header;
