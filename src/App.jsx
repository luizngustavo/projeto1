import React, { useState } from 'react';
import Nav from "./componentes/Nav";
import Produtos from "./componentes/Produtos";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar um item ao carrinho
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <Nav cartItems={cartItems} /> {/* Passa os itens do carrinho para o componente Nav */}
      <Produtos addToCart={addToCart} /> {/* Passa a função addToCart para o componente Produtos */}
    </>
  );
}

export default App;

