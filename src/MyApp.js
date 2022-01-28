import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cursos } from './components/Cursos';
import { Piano } from './components/cursos/Piano';
import { Home } from './components/Home';




 const MyApp = () => {
  return (
       <BrowserRouter >
    <Routes >
        <Route path='/'element={<Home/>} />
        <Route path='/cursos'element={<Cursos/>} />
        <Route path='/cursos/piano'element={<Piano/>} />
    </Routes>

  </BrowserRouter>)
};

export default MyApp;