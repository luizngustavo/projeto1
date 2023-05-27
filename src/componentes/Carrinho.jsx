import React from "react";
import { useNavigate } from "react-router-dom";
import "../../src/carrinhostyle.css";

function Carrinho({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const countItems = (itemId) => {
    const itemCount = cartItems.reduce((count, item) => {
      if (item.id === itemId) {
        return count + 1;
      }
      return count;
    }, 0);
    return itemCount;
  };

  // const handleFinalizarCompra = () => {
  //   navigate(`/confirmacao-compra?totalPrice=${totalPrice}`);
  // };

  const handleFinalizarCompra = () => {
    navigate("/confirmacao-compra", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="carrinho-container">
      <div className="carrinho-itens">
        <h2>Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={`${item.id}-${index}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50"
                    height="50"
                  />
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <button onClick={() => handleRemoveItem(item.id)}>X</button>
                </li>
              ))}
            </ul>
            <p>Valor total do carrinho: R$ {totalPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
      <div className="carrinho-resumo">
        <h2>Resumo do Pedido</h2>

        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <p>Valor total do pedido: R$ {totalPrice.toFixed(2)}</p>
        {/* Adicione aqui os meios de pagamento disponíveis */}
        <button className="btn-finalizar" onClick={handleFinalizarCompra}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Carrinho;
