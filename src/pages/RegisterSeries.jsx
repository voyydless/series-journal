import React from 'react';
import SerieForm from '../components/SerieForm';

function RegisterSeries() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80dvh' 
    }}>
      <SerieForm />
    </div>
  );
}

export default RegisterSeries;