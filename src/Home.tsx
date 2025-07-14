import React from "react";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>¡Bienvenido, {userName}!</h1>
      <p>Esta es tu página de inicio.</p>
    </div>
  );
};

export default Home;