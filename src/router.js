import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import * as Page from 'pages';
import { MoviesList } from './pages/App/Movies'
function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
