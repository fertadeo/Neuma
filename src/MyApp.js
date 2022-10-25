import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Cursos } from './components/cursos/Cursos'
import { Home } from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QuienesSomos } from './components/QuienesSomos';
import { Salud } from './components/Salud';
import { CoursesProvider } from './Context/CoursesProvider';
import  '../src/myapp.css';
import {Eneagrama} from './components/cursos/Eneagrama';
import { CursoParaActores } from './components/cursos/CursoParaActores';


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
        <Route path='/cursos/eneagrama'element={<Eneagrama/>} />
        <Route path='/cursos/actores'element={<CursoParaActores/>} />
        {/* <Route path='/*'element={<Navigate to="/" />}  /> */}

      </Routes>
    </BrowserRouter>
  </ThemeProvider>
    
    </CoursesProvider>
  )
}

export default MyApp;