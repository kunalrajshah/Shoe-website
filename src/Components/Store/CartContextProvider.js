import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (it) => {
    setItems((prevItems) => [...prevItems, it]);
  };
  const clearCartHandler = () => {
    setItems([]);
  };
  const obj = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCart,
    clearItem: clearCartHandler,
  };
  return (
    <CartContext.Provider value={obj}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
