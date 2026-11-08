import React from 'react';
import { Link } from 'react-router-dom';

function SerieList({ series }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Lista de séries</h2>
      
      <div style={{ display: 'inline-block', textAlign: 'left', marginTop: '20px' }}>
        {series.map((serie, index) => (
          <div 
            key={index} 
            style={{ 
              borderBottom: '1px solid #ddd', 
              padding: '15px 0', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px' 
            }}
          >
            <span>
              - {serie.titulo} - {serie.temporadas} temporadas - {serie.dataLancamento} - {serie.diretor} - {serie.produtora} - {serie.categoria} - {serie.dataAssistido}
            </span>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link to="/cadastrar">
          <button>Cadastrar nova série</button>
        </Link>
      </div>
    </div>
  );
}

export default SerieList;