import React, { useState } from "react";
import "./styles.css";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image"></div>

        <div className="login-form">
          <h2>Iniciar sesión</h2>
          <h4>Erianny Del Villar y Dahiana Jerez</h4>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="tu.email@ejemplo.com"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
                placeholder="********"
              />
            </div>

            <button type="submit" className="login-button">
              Iniciar sesión
            </button>
          </form>

          <div className="login-links">
            <a href="#">¿Olvidaste tu contraseña?</a>
            <a href="#">Crear una cuenta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
