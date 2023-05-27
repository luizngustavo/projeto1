import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmacaoCompra() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state;
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    navigate("/compra-confirmada", { state: { cartItems, totalPrice } });
  };

  return (
    <div>
      <h2>Confirmação da Compra</h2>
      <h3>Itens do Carrinho:</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Valor total do pedido: R$ {totalPrice.toFixed(2)}</p>
      <button onClick={() => handleFinalizarCompra()}>Confirmar Compra</button>
    </div>
  );
}

export default ConfirmacaoCompra;
