import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cursos } from './components/cursos/Cursos'
import { Piano } from './components/cursos/Piano';
import { Home } from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FloresDeBach from './components/cursos/FloresDeBach';
import  '../src/myapp.css';
import { QuienesSomos } from './components/QuienesSomos';


const theme = createTheme({
  palette: {
    primary: {
      main: '#20C0B9'}
     
  }
})


const MyApp = () => {
  return ( 
  <ThemeProvider theme={theme}>  
    <BrowserRouter >
      <Routes >
        <Route path='/'element={<Home/>} />
        <Route path='/cursos'element={<Cursos/>} />
        <Route path='/cursos/piano'element={<Piano/>} />
        <Route path='/cursos/floresdebach'element={<FloresDeBach/>} />
        <Route path='/Quienes%20somos'element={<QuienesSomos/>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default MyApp;