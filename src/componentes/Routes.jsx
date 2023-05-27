import React from "react";
import { Routes, Route } from "react-router-dom";
import Produtos from "./Produtos";
import Carrinho from "./Carrinho";
import DetalhesProduto from "./DetalhesProduto";
import PaginaInicial from "./PaginaInicial";
import ProductManagement from "./ProductManagement";
import ConfirmacaoCompra from "./ConfirmacaoCompra";
import CompraConfirmada from "./CompraConfirmada";

const AppRoutes = ({ addToCart, cartItems, setCartItems }) => {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial addToCart={addToCart} />} />
      <Route
        path="/carrinho"
        element={<Carrinho cartItems={cartItems} setCartItems={setCartItems} />}
      />
      <Route path="/produtos" element={<Produtos addToCart={addToCart} />} />
      <Route path="/productManagement" element={<ProductManagement />} />
      <Route
        path="/produto/:id"
        element={<DetalhesProduto addToCart={addToCart} />}
      />
      <Route path="/confirmacao-compra" element={<ConfirmacaoCompra />} />
      <Route path="/compra-confirmada" element={<CompraConfirmada />} />
    </Routes>
  );
};

export default AppRoutes;
