/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface EmailTemplateProps {
  firstName: string;
  logoUrl: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  logoUrl,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
      <img src={logoUrl} alt="Logo" style={{ width: '100px', margin: '0 auto', display: 'block' }} />
      <h1 style={{ fontSize: '24px', color: '#333' }}>¡Hola, {firstName}!</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Estamos emocionados de tenerte aquí. Haz clic en el botón de abajo para descubrir más.
      </p>
      <a
        href="https://www.example.com"
        style={{
          display: 'inline-block',
          backgroundColor: '#f89b3f',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '16px',
        }}
      >
        Ver más
      </a>
    </div>
  </div>
);
