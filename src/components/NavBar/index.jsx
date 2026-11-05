import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cadastrar">Cadastrar Séries</Link></li>
        <li><Link to="/lista">Lista de Séries</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;