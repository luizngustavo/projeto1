import React, { useState, useEffect } from "react";
import {
  connectToPool,
  createProducts,
  getProducts,
} from "../DB/product_model";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    connectToPool();
  }, []);

  // client.release();

  return (
    <div>
      <h2>Produtos</h2>
      <div className="products-container">
        <div key={"productID"} className="custom-card">
          <h3 className="card-title">Produto teste</h3>
          <p className="card-text">Descrição teste</p>
          <p>Preço: R$ MILÃO</p>
          <button onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button onClick={() => createProducts}>CRIE OS PRODUTOS</button>
      </div>
    </div>
  );
}

export default Products;
