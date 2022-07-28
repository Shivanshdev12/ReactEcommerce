import { Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import ProductsPage from "./components/Product/ProductsPage";
import ContextProvider from "./store/ContextProvider";
import Products from "./components/Product/Products";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Button from "./components/UI/Button";
import ContactUs from "./screens/ContactUs";
import Cart from "./components/Cart/Cart";
import About from "./screens/About";
import Home from "./screens/Home";

import "./App.css";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const closeHandler = () => {
    setCartOpen(false);
  };
  const openHandler = () => {
    setCartOpen(true);
  };

  return (
    <ContextProvider>
      <Header onOpen={openHandler} />
      {isCartOpen && <Cart onClose={closeHandler} />}
      <Switch>
        <Route path="/product-detail/:id">
          <ProductsPage />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/store">
          <main>
            <Products />
          </main>
          <Button onClick={openHandler} className="cart">
            See the Cart
          </Button>
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </ContextProvider>
  );
}

export default App;
