import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./componentes/Nav";
import Produtos from "./componentes/Produtos";
import Carrinho from "./componentes/Carrinho";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar um item ao carrinho
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Produtos addToCart={addToCart} />} />
        <Route path="/carrinho" element={<Carrinho cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
