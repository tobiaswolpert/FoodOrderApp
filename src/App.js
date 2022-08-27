import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCardHandler = () => {
    setShowCart(true);
  };

  const hideCardHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart ? <Cart onClick={hideCardHandler} /> : null}
      <Header onClick={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
