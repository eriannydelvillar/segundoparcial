import React from 'react';
import logo from './assets/logo.jpeg';

const Contact: React.FC = () => {
  const usuarios = {
    instagram: '@dailybasics',
    twitter: '@dailybasics',
    facebook: 'DailyBasics',
  };

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
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        textAlign: 'center',
      }}
    >
      <img
        src={logo}
        alt="Logo de la empresa"
        style={{ display: 'block', margin: '0 auto 2rem', maxWidth: '240px', height: 'auto' }}
      />

      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Redes Sociales</h1>

      <p style={{ marginBottom: '1.5rem' }}>
        Instagram: <strong>{usuarios.instagram}</strong>
      </p>
      <p style={{ marginBottom: '1.5rem' }}>
        Twitter: <strong>{usuarios.twitter}</strong>
      </p>
      <p style={{ marginBottom: '1.5rem' }}>
        Facebook: <strong>{usuarios.facebook}</strong>
      </p>
    </section>
  );
};

export default Contact;
