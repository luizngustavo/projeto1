import React from "react";
import { useLocation } from "react-router-dom";

function CompraConfirmada() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state;

  return (
    <div>
      <h2>Compra Confirmada</h2>
      <h3>Detalhes do Pedido:</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantidade: {item.quantity}</span>
            <span>Preço: R$ {item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p>Valor total do pedido: R$ {totalPrice.toFixed(2)}</p>
      <p>Obrigado por sua compra!</p>
    </div>
  );
}

export default CompraConfirmada;
