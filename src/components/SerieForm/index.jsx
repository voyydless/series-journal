import React, { useState } from 'react';

function SerieForm() {
  const [formData, setFormData] = useState({
    titulo: '',
    temporadas: '',
    dataLancamento: '',
    diretor: '',
    produtora: '',
    categoria: '',
    dataAssistido: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Cadastrar séries</h2>
      <form 
        onSubmit={handleSubmit} 
        style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}
      >
        <div>
          <label>Título:</label>
          <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
        </div>
        <div>
          <label>Número de Temporadas:</label>
          <input type="number" name="temporadas" value={formData.temporadas} onChange={handleChange} required />
        </div>
        <div>
          <label>Data de Lançamento da Temporada:</label>
          <input type="date" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} required />
        </div>
        <div>
          <label>Diretor:</label>
          <input type="text" name="diretor" value={formData.diretor} onChange={handleChange} required />
        </div>
        <div>
          <label>Produtora:</label>
          <input type="text" name="produtora" value={formData.produtora} onChange={handleChange} required />
        </div>
        <div>
          <label>Categoria:</label>
          <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} required />
        </div>
        <div>
          <label>Data em que assistiu:</label>
          <input type="date" name="dataAssistido" value={formData.dataAssistido} onChange={handleChange} required />
        </div>
        <div style={{ alignSelf: 'center', marginTop: '10px' }}>
          <button type="submit">Cadastrar Série</button>
        </div>
      </form>
    </div>
  );
}

export default SerieForm;