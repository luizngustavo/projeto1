import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import productsList from "../DB/productsList";
import "../../src/Produtosstyle.css";

function Produtos({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: "",
    image: "",
    name: "",
    description: "",
    price: "",
  });

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setNewProduct({ id: "", name: "", description: "", price: "" });
  };

  const Product = ({ product }) => (
    <div className="custom-card">
      <Link
        to={{
          pathname: `/produto/${product.id}`,
        }}
      >
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
      </Link>
      {/* <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button> */}
      <button onClick={() => console.log("Click!")}>
        Adicionar ao carrinho
      </button>
    </div>
  );

  useEffect(() => {
    localStorage.removeItem("products");
    const productsData = localStorage.getItem("products");
    if (productsData) {
      setProducts(JSON.parse(productsData));
    } else {
      localStorage.setItem("products", JSON.stringify(productsList));
      setProducts(productsList);
    }
  }, []);

  return (
    <div className="App">
      <h2>Produtos</h2>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Produtos;
