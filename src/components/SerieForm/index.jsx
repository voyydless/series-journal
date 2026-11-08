import React, { useState } from 'react';

function SerieForm({ addSeries }) {
  const initialState = {
    title: '', seasons: '', releaseDate: '', director: '', studio: '', category: '', watchDate: ''
  };
  
  const [formData, setFormData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    if (!formData.title.trim() || !formData.director.trim() || !formData.studio.trim()) {
      setErrorMsg('Os campos de texto não podem estar vazios ou conter apenas espaços.');
      return;
    }

    if (Number(formData.seasons) <= 0) {
      setErrorMsg('O número de temporadas deve ser maior que zero.');
      return;
    }

    addSeries(formData);
    setSuccessMsg('Série cadastrada com sucesso!');
    setFormData(initialState); 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Cadastrar séries</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
        <div>
          <label>Título:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Número de Temporadas:</label>
          <input type="number" name="seasons" value={formData.seasons} onChange={handleChange} required />
        </div>
        <div>
          <label>Data de Lançamento da Temporada:</label>
          <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Diretor:</label>
          <input type="text" name="director" value={formData.director} onChange={handleChange} required />
        </div>
        <div>
          <label>Produtora:</label>
          <input type="text" name="studio" value={formData.studio} onChange={handleChange} required />
        </div>
        <div>
          <label>Categoria:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Data em que assistiu:</label>
          <input type="date" name="watchDate" value={formData.watchDate} onChange={handleChange} required />
        </div>
        
        <div style={{ alignSelf: 'center', marginTop: '10px' }}>
          <button type="submit">Cadastrar Série</button>
        </div>
      </form>

      <div style={{ minHeight: '40px', marginTop: '15px', display: 'flex', justifyContent: 'center', width: '100%' }}>
        {errorMsg && (
          <div style={{ backgroundColor: '#aa3f33', color: 'white', padding: '10px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div style={{ backgroundColor: '#3aa538', color: 'white', padding: '10px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
            {successMsg}
          </div>
        )}
      </div>
    </div>
  );
}

export default SerieForm;