import React, { useState } from "react";

function ProductManagement({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    setNewProduct({ id: "", name: "", description: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <h2>Gerenciamento de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={newProduct.id}
          onChange={handleInputChange}
          placeholder="ID"
          required
        />
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Nome"
          required
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Descrição"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Preço"
          required
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="URL da Imagem"
        />
        <button type="submit">Adicionar Produto</button>
      </form>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
            <button onClick={() => handleDelete(product.id)}>
              Deletar Produto
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManagement;
