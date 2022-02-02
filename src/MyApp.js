import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cursos } from './components/Cursos';
import { Piano } from './components/cursos/Piano';
import { Home } from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  '../src/myapp.css';


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
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default MyApp;