import React from "react";
import { Link } from "react-router-dom";
import logo from "./logos.png";

interface NavbarProps {
  onLogout: () => void;
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, userName }) => {
  return (
    <nav className="navba-left">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="username"> {userName}</span>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        <Link to="/">Sobre Nosotros</Link>
         <Link to="/">Galeria</Link>
        </li>
        <li>
          <button onClick={onLogout}>Cerrar sesion</button>
        </li>
      </ul>
      <div className="navbar-user">
        <span>Welcome, {userName}</span>
      </div>
    </nav>
  );
};

export default Navbar;