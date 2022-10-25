import React from 'react';
import { Navbar } from '../Navbar';
import { Grid, Typography } from '@mui/material';
import Meditation from '../../img/actors.jpeg'
import './cursos.css'


 

 export const CursoParaActores = () => {
  return( <>
     <Navbar />
    
     <Grid container xl={12}
           display='flex'
     className='gridCurso'>

        <Grid item xl={8}> 
          
            <Typography variant='h3'>
            Curso de Canto para Actores
            </Typography>
    
       
     <Typography variant='p' className='p'> Practicas con la guia de un profesional en la materia </Typography>
   
        </Grid>
        <Grid item xl={4}
          className='gridcurso1'>
     <img className='imagenCurso' src={Meditation} alt='Meditation'/>

     
    </Grid>
    
       </Grid>

    
     


  </>)
};

