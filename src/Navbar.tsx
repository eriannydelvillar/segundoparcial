import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onLogout: () => void;
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, userName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="username">{userName}</span>
      </div>

      <h4>Erianny Del Villar y Dahiana Jerez</h4>

      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Administrar Productos</Link>
        </li>
        <li>
          <Link to="/About">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/gallery">Galería</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <button onClick={onLogout} className="logout-button">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
