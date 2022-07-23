import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import "./App.css";

function App() {
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
      <Header />
      <main>
        <Products items={PRODUCTS_ARR} />
      </main>
      <button type="submit">See the Cart</button>
    </React.Fragment>
  );
}

export default App;
