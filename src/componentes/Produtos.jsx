import React, { useState, useEffect } from 'react';

import { pool } from '../DB/db.js';


async function getProducts() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM Products');
    return res.rows;
  } catch(err) {
    console.error(err);
  } finally {
    client.release();
  }
}

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar produtos.</div>;
  }

  return (
    <div>
      <h2>Produtos</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="custom-card">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.description}</p>
            <p>Preço: R$ {(product.price).toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;