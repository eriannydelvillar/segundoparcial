import React from 'react';
import logo from './assets/logo.jpeg';

const About: React.FC = () => {
  return (
    <section
      style={{
        padding: '3rem',
        maxWidth: '900px',
        margin: '3rem auto',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.25rem',
        lineHeight: '1.8',
        color: '#ffffff',
        backgroundColor: '#6c032d',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)', // un poco de sombra para destacar
      }}
    >
      <img
        src={logo}
        alt="Logo de la empresa"
        style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '240px', height: 'auto' }}
      />
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1.5rem' }}>
        Sobre Nosotros
      </h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Somos una pequeña empresa apasionada por el maquillaje y la belleza. Nuestra misión es realzar la
        confianza y la belleza natural de cada persona a través de productos de alta calidad y un servicio cercano y personalizado.
      </p>
      <p style={{ marginBottom: '1.5rem' }}>
        Fundada en el corazón de la comunidad local, creemos que el maquillaje es una forma de expresión y un aliado para sentirse bien
        todos los días. Trabajamos con marcas seleccionadas que comparten nuestros valores de cuidado, ética y respeto por la piel.
      </p>
      <p style={{ marginBottom: '1.5rem' }}>
        Gracias por confiar en nosotros para acompañarte en tu rutina de belleza. ¡Estamos aquí para ayudarte a brillar!
      </p>
      <div
        style={{
          marginTop: '3rem',
          fontStyle: 'italic',
          textAlign: 'right',
          fontSize: '1.5rem',
        }}
      >
        — El equipo de Daily Basics
      </div>
    </section>
  );
};

export default About;
