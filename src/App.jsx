import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import RegisterSeries from './pages/RegisterSeries';
import About from './pages/About';
import ListSeries from './pages/SerieList';

function App() {
  const [series, setSeries] = useState([
    { id: 1, title: 'La Casa de Papel', seasons: 3, releaseDate: '2020-05-20', director: 'Álex Pina', studio: 'Netflix', category: 'Drama', watchDate: '2021-05-10' },
    { id: 2, title: 'Breaking Bad', seasons: 5, releaseDate: '2008-01-22', director: 'Vince Gilligan', studio: 'Sony Pictures', category: 'Drama', watchDate: '2015-01-20' },
    { id: 3, title: 'Friends', seasons: 10, releaseDate: '1994-09-22', director: 'Kevin S. Bright', studio: 'Warner Bros', category: 'Comédia', watchDate: '2010-10-10' }
  ]);

  const addSeries = (newSeries) => {
    setSeries([...series, { ...newSeries, id: Date.now() }]);
  };

  const deleteSeries = (id) => {
    setSeries(series.filter(item => item.id !== id));
  };

  const editSeries = (id, updatedSeries) => {
    setSeries(series.map(item => item.id === id ? updatedSeries : item));
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<RegisterSeries addSeries={addSeries} />} />
        <Route path="/sobre" element={<About />}/>
        <Route path="/lista" element={<ListSeries series={series} deleteSeries={deleteSeries} editSeries={editSeries} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;