import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ cartItems }) {
  return (
    <ul className="nav nav-fill">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Link nav muito mais longo
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Link
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

