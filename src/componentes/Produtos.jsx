import React from 'react';

function Produtos({ addToCart }) {
  const handleAddToCart = () => {
    const item = { id: 1, name: 'Card title' }; // Exemplo de item a ser adicionado ao carrinho
    addToCart(item);
  };

  return (
    <div className="col-9">
      <div className="row justify-content-center text-center">
        <div className="col-3"></div>
        <div className="col-3">
          <div className="card">
            <img
              src="https://images.kabum.com.br/produtos/fotos/404448/placa-de-video-rtx-3060-1-click-oc-pci-e-galax-8-gb-gddr6-128bit-36nsl8md6occ_1670960050_gg.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;