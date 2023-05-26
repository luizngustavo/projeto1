import React from 'react';
import Products from './Produtos';

function PaginaInicial({ addToCart }) {
  return (
    <div>
      {/* Adicione o código do banner abaixo */}
      <div className="banner" style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://img.freepik.com/vetores-gratis/banner-de-contracao-do-metaverso-de-design-plano_23-2149422966.jpg?w=1480&t=st=1684972402~exp=1684973002~hmac=fab08547f466cd3428476f1b93fdb3ecedca402f6a6b42a88ac6ccef1a47faaf"
          alt="Banner"
          style={{ width: '1500px', height: '300px' }}
        />
      </div>
      <Products />
    </div>
  );
}

export default PaginaInicial;


