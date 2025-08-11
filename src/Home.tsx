import React from 'react';
import logo from './assets/logo.jpeg';
import productos from './assets/productos.jpg';
import consejos from './assets/consejos.png';
import filosofia from './assets/filosofia.png';

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem',
    maxWidth: '1360px', 
    margin: '3rem auto',
  };

  const boxStyle = {
    flex: '1 1 420px', 
    padding: '3rem',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.35rem',
    lineHeight: '1.8',
    color: '#ffffff',
    backgroundColor: '#6c032d',
    borderRadius: '12px',
    boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <>
      <section style={{ textAlign: 'center', marginBottom: '5rem', marginTop: '5rem' }}>
        <h2 style={{ fontSize: '2.5 rem', color: '#ffffff' }}>
          Bienvenido a Daily Basics, {userName}!
        </h2>
      </section>

      <div style={containerStyle}>
        <section style={boxStyle}>
          <h2 style={{ marginBottom: '1.5rem' }}>Nuestros Productos</h2>
           <img
          src={productos}
          alt="productos"
          style={{ maxWidth: '280px', height: 'auto', margin: '0 auto 1rem' }}
        />
          <p>
            En Daily Basics encontrarás productos de alta calidad para el cuidado diario de la piel y el cabello, seleccionados cuidadosamente para ti.
          </p>
        </section>

        <section style={boxStyle}>
          <h2 style={{ marginBottom: '1.5rem' }}>Consejos de Belleza</h2>
           <img
          src={consejos}
          alt="consejos"
          style={{ maxWidth: '280px', height: 'auto', margin: '0 auto 1rem' }}
        />
          <p>
            Descubre tips y recomendaciones para mantener tu rutina simple y efectiva, destacando tu belleza natural con pequeños detalles cada día.
          </p>
        </section>

        <section style={boxStyle}>
          <h2 style={{ marginBottom: '1.5rem' }}>Nuestra Filosofía</h2>
           <img
          src={filosofia}
          alt="filosofia"
          style={{ maxWidth: '280px', height: 'auto', margin: '0 auto 1rem' }}
        />
          <p>
            Creemos que la belleza nace de la confianza y el cuidado constante. Nuestro compromiso es acompañarte en cada paso con productos y atención personalizada.
          </p>
          <div style={{ marginTop: 'auto', fontStyle: 'italic', textAlign: 'right', fontSize: '1.5rem' }}>
            — El equipo de Daily Basics
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
