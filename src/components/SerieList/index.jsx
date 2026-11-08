import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SerieList({ series, deleteSeries, editSeries }) {
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData(item);
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    editSeries(editingId, editFormData);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Lista de séries</h2>
      
      <div style={{ margin: '20px auto 0', textAlign: 'left', maxWidth: '900px', width: '100%' }}>
        {series.length === 0 && <p style={{ textAlign: 'center' }}>Nenhuma série encontrada.</p>}
        
        {series.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              borderBottom: '1px solid #ddd', 
              padding: '15px 0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between'
            }}
          >
            
            {editingId === item.id ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', flex: 1, paddingRight: '20px' }}>
                <input type="text" name="title" value={editFormData.title} onChange={handleEditChange} placeholder="Título" />
                <input type="number" name="seasons" value={editFormData.seasons} onChange={handleEditChange} placeholder="Temporadas" style={{ width: '50px' }} />
                <input type="date" name="releaseDate" value={editFormData.releaseDate} onChange={handleEditChange} />
                <input type="text" name="director" value={editFormData.director} onChange={handleEditChange} placeholder="Diretor" />
                <input type="text" name="studio" value={editFormData.studio} onChange={handleEditChange} placeholder="Produtora" />
                <input type="text" name="category" value={editFormData.category} onChange={handleEditChange} placeholder="Categoria" style={{ width: '80px' }} />
                <input type="date" name="watchDate" value={editFormData.watchDate} onChange={handleEditChange} />
              </div>
            ) : (
              <span style={{ paddingRight: '20px' }}>
                - {item.title} - {item.seasons} temporadas - {item.releaseDate} - {item.director} - {item.studio} - {item.category} - {item.watchDate}
              </span>
            )}
            
            <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
              {editingId === item.id ? (
                <>
                  <button onClick={handleSave}>Salvar</button>
                  <button onClick={handleCancel}>Cancelar</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditClick(item)}>Editar</button>
                  <button onClick={() => deleteSeries(item.id)}>Excluir</button>
                </>
              )}
            </div>

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