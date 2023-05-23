import React from 'react';

function Nav({ cartItems }) {
  return (
    <ul className="nav nav-fill">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link nav muito mais longo
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Carrinho ({cartItems.length})
        </a>
      </li>
    </ul>
  );
}

export default Nav;
