import React from 'react';
import { Paper, Grid, Button } from '@mui/material';
import  neuma  from '../../src/img/neuma.png';



export const Hero = () => {
  return <div>
     <Paper 
      elevation={8} 
      style={{height: '100vh'}} 
     > 
    <Grid container>

     <Grid 
     xs={6}>

      <img 
        src={neuma} 
        style={{width: '40vw', padding: 20,   }}></img>
      
      </Grid>
    
    <Grid xs={6}>
     
    <div> 
      <h1> INICIA TU NUEVO CAMINO  </h1>
      <h3> Somos expertos en educación Holística y Musical </h3>
    </div>

    <Button variant='contained'> Cursos </Button>
    <Button variant='contained'> Eventos </Button>

    </Grid>
    </Grid>
    
    


     </Paper>
  </div>;
};
