function Nav() {
  return (
    
          <div className="card" >
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Setores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
    
  );
}

export default Nav;