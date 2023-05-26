import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./componentes/Nav";
import Produtos from "./componentes/Produtos";
import Carrinho from "./componentes/Carrinho";
import DetalhesProduto from "./componentes/DetalhesProduto";
import PaginaInicial from "./componentes/PaginaInicial";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<PaginaInicial addToCart={addToCart} />} />
        <Route path="/carrinho" element={<Carrinho cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/produtos" element={<Produtos addToCart={addToCart} />} />
        <Route path="/produto/:id" element={<DetalhesProduto addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;



