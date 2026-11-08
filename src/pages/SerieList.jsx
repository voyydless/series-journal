import React, { useState } from 'react';
import SerieList from '../components/SerieList';

function ListSeries({ series, deleteSeries, editSeries }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSeries = series.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      marginTop: '40px' 
    }}>
      <input 
        type="text" 
        placeholder="Buscar série pelo título..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <SerieList 
        series={filteredSeries} 
        deleteSeries={deleteSeries} 
        editSeries={editSeries} 
      />
    </div>
  );
}

export default ListSeries;