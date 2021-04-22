import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import Header from "./Header";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import "../styles/Layout.css";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  return (
    <div className="App">
      <Header>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Header>
      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
