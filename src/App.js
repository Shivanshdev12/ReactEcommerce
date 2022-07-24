import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Product/Products";
import Footer from "./components/Layout/Footer";
import Button from "./components/UI/Button";
import Cart from "./components/Cart/Cart";

import ContextProvider from "./store/ContextProvider";
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
      <main>
        <Products />
      </main>
      <Button>See the Cart</Button>
      <Footer />
    </ContextProvider>
  );
}

export default App;
