import React, { useState } from "react";

export const [cartItems, setCartItems] = useState([]);

export const addToCart = (item) => {
  setCartItems([...cartItems, item]);
};
