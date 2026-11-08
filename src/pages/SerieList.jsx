import React from 'react';
import SerieList from '../components/SerieList';

function ListSeries() {
  const mockSeries = [
    {
      titulo: 'La Casa de Papel',
      temporadas: 3,
      dataLancamento: '2020-05-20',
      diretor: 'Álex Pina',
      produtora: 'Netflix',
      categoria: 'Drama',
      dataAssistido: '2021-05-10'
    },
    {
      titulo: 'Breaking Bad',
      temporadas: 5,
      dataLancamento: '2008-01-22',
      diretor: 'Vince Gilligan',
      produtora: 'Sony Pictures',
      categoria: 'Drama',
      dataAssistido: '2015-01-20'
    },
    {
      titulo: 'Friends',
      temporadas: 10,
      dataLancamento: '1994-09-22',
      diretor: 'Kevin S. Bright',
      produtora: 'Warner Bros',
      categoria: 'Comédia',
      dataAssistido: '2010-10-10'
    }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      marginTop: '40px' 
    }}>
      <SerieList series={mockSeries} />
    </div>
  );
}

export default ListSeries;