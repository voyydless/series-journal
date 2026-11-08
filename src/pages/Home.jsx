import React from 'react';

function HomePage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80dvh',
      textAlign: 'center'
    }}>
      <h1>Página Inicial</h1>
      <h2>Bem-vindo ao Series Journal!</h2>
      <p>Gerencie séries assistidas de uma forma fácil e intuitiva.</p>
    </div>
  );
}

export default HomePage;