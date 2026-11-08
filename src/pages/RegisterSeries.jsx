import React from 'react';
import SerieForm from '../components/SerieForm';

function RegisterSeries({ addSeries }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80dvh' }}>
      <SerieForm addSeries={addSeries} />
    </div>
  );
}

export default RegisterSeries;