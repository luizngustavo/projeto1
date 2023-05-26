import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ cartItems }) {
  return (
    <ul className="nav nav-fill navbar-dark bg-black mb-2">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Página Inicial
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/produtos">
          Produtos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/carrinho">
          Carrinho ({cartItems.length})
        </Link>
      </li>
    </ul>
  );
}

export default Nav;


