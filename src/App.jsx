// App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./componentes/Nav";
import AppRoutes from "./componentes/Routes";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Nav cartItems={cartItems} />
      <AppRoutes
        addToCart={addToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </Router>
  );
}

export default App;
