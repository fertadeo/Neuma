import React from 'react';
import { Navbar } from '../Navbar';
import { Grid, Typography, Button } from '@mui/material';
import meditation1 from '../../img/IntroAlEneagrama.jpg'
import './cursos.css'



 

 export const Eneagrama = () => {
  return( <>
     <Navbar />
    
     <Grid container xl={12}
           display='flex'
     className='gridCurso'>

        <Grid item xl={8}> 
          
            <Typography variant='h3'>
            Eneagrama
            </Typography>
            <Typography variant='p'>
            Disertante: Ledesma José Hugo
            </Typography>
    
       
     <div className='descripcionCurso'>
      <p> El eneagrama es un mapa del comportamiento humano. Un sistema dinámico que permite comprender la personalidad. Constituye una vía de trabajo interior para el crecimiento personal.</p>
      <ul>
         <li>Aprender conocimientos básicos sobre eneagrama.</li>
         <li>Conocer los eneatipos y sus cualidades.</li>
         <li>Comprender sobre los centros de inteligencia y de qué manera el eneagrama puede ayudar a mejorar la unión de los mismos.</li>
         <li>Poner en práctica el eneagrama con uno mismo y con los demás.</li>
      </ul>

      <p> <strong>Modalidad:</strong> Online <br/> <strong> Duración:</strong>  3 meses. <br/> <strong>Costo:</strong> 3 cuotas de $4000 o 1 de $11.000 (Incluye material digitalizado, certificación y clases en vivo). </p>
      
     </div>

     <Button variant='contained' size='large' > Ver más </Button>
   
        </Grid>
        <Grid item xl={4}
          className='gridcurso1'>
     <img className='imagenCurso' src={meditation1} alt='Meditation'/>
    </Grid>
    
       </Grid>

    
     


  </>)
};

