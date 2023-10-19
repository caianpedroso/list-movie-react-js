import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoviesList } from './pages/App/Movies';
import { DetailMovie } from './pages/App/Movies/Detail';
function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="movie/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
