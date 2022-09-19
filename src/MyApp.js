import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cursos } from './components/cursos/Cursos'
import { Home } from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  '../src/myapp.css';
import { QuienesSomos } from './components/QuienesSomos';
import { Salud } from './components/Salud';
import { CoursesProvider } from './Context/CoursesProvider';
import { CoursePage } from './Context/CoursePage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#20C0B9'}
     
  }
})


const MyApp = () => {
  return ( 
    <CoursesProvider> 

  <ThemeProvider theme={theme}>  
    <BrowserRouter >
      <Routes >
        <Route path='/'element={<Home/>} />
        <Route path='/cursos'element={<Cursos/>} />
        <Route path='/Quienes%20somos'element={<QuienesSomos/>} />
        <Route path='/Profesionales%20de%20Salud'element={<Salud/>} />
        <Route path='/CoursePage'element={<CoursePage/>} />
        {/* <Route path='*'element={<Home/>} /> */}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
    
    </CoursesProvider>
  )
}

export default MyApp;