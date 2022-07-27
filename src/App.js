import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Products from "./components/Product/Products";
import Footer from "./components/Layout/Footer";
import Button from "./components/UI/Button";
import Cart from "./components/Cart/Cart";

import About from "./screens/About";
import Home from "./screens/Home";

import ContextProvider from "./store/ContextProvider";
import "./App.css";
import ContactUs from "./screens/ContactUs";

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
        <Route path="/Contact" exact>
          <ContactUs />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/Store">
          <main>
            <Products />
          </main>
          <Button onClick={openHandler} className="cart">
            See the Cart
          </Button>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </ContextProvider>
  );
}

export default App;
