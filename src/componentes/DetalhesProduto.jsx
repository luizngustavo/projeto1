import React from "react";
import { useParams } from "react-router-dom";
import "../../src/style.css";

function DetalhesProduto({ addToCart }) {
  const { id } = useParams();

  const productsData = localStorage.getItem("products");
  const produtos = JSON.parse(productsData);

  // Busca o produto correspondente ao ID
  const produto = produtos.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(produto);
  };

  return (
    <div className="detalhes-produto-container">
      <h2>{produto.name}</h2>
      <img className="produto-image" src={produto.image} alt={produto.name} />
      <p className="produto-price">{produto.price}</p>
      <p className="produto-description">{produto.description}</p>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        COMPRAR
      </button>
    </div>
  );
}

export default DetalhesProduto;
