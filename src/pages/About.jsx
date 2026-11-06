import React from 'react';

function About() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80vh', 
      textAlign: 'center'
    }}>
      <h2>Sobre</h2>
      <p>Este é um projeto de gerenciamento de séries assistidas desenvolvido com React para a disciplina Desenvolvimento de Sistemas Frontend.</p>
      <p>Aqui você pode cadastrar, visualizar, editar e excluir séries assistidas.</p>
    </div>
  );
}

export default About;