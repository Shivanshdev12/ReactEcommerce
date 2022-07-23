import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Product/Products";
import Footer from "./components/Layout/Footer";
import Button from "./components/UI/Button";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const closeHandler = () => {
    setCartOpen(false);
  };
  const openHandler = () => {
    setCartOpen(true);
  };
  const PRODUCTS_ARR = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <React.Fragment>
      <Header onOpen={openHandler} />
      <main>
        <Products items={PRODUCTS_ARR} />
      </main>
      {isCartOpen && <Cart onClose={closeHandler} />}
      <Button>See the Cart</Button>
      <Footer />
    </React.Fragment>
  );
}

export default App;
