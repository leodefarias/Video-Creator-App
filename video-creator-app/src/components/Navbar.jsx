import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>Sobre</Link>
      <Link to="/contato" className={location.pathname === '/contato' ? 'active' : ''}>Contato</Link>
    </nav>
  );
};

export default Navbar;
