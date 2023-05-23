import React from 'react';

function Carrinho({ cartItems, totalPrice, finalizarCompra }) {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <p>Preço Total: R$ {totalPrice.toFixed(2)}</p>
          <button onClick={finalizarCompra}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
}

export default Carrinho;
