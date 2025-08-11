import React from 'react';

import rareBeautyLipstick from './assets/RareBeautyLipstick.jpeg';
import pixiBlush from './assets/PixiBlush.jpeg';
import coloniaBathBodyWorks from './assets/ColoniaBathandBodyWorks.jpeg';
import ampollasCentella from './assets/AmpollasCentella.jpeg';
import centellaDuo from './assets/CentellaDuo.jpeg';
import rareBeautyBlush from './assets/RareBeautyBlush.jpeg';
import mediCube from './assets/MediCube.jpeg';
import coloniaYCremaDeHombre from './assets/ColoniayCremaDeHombre.jpeg';
import coloniaVacationVibe from './assets/ColoniaVacationVibe.jpeg';

const images = [
  { src: rareBeautyLipstick, title: 'Rare Beauty Lipstick' },
  { src: pixiBlush, title: 'Pixi Blush' },
  { src: coloniaBathBodyWorks, title: 'Colonia Bath and Body Works' },
  { src: ampollasCentella, title: 'Ampollas Centella' },
  { src: centellaDuo, title: 'Centella Duo' },
  { src: rareBeautyBlush, title: 'Rare Beauty Blush' },
  { src: mediCube, title: 'MediCube' },
  { src: coloniaYCremaDeHombre, title: 'Colonia y Crema de Hombre' },
  { src: coloniaVacationVibe, title: 'Colonia Vacation Vibe' },
];

const Gallery: React.FC = () => {
  return (
    <section
      style={{
        padding: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '12px',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#f9f5f6ff' }}>Galería</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {images.map(({ src, title }) => (
          <div key={title} style={{ textAlign: 'center' }}>
            <img
              src={src}
              alt={title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 6px rgba(247, 244, 244, 1)' }}
            />
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
