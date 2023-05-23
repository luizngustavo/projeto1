import React from 'react';

function Carrinho({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} width="50" height="50" />
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
  );
}

export default Carrinho;





