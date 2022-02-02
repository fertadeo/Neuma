import React from 'react';
import { Paper, Grid, Button } from '@mui/material';
import  neuma  from '../../src/img/neuma.png';
import Whatsapp from './Whatsapp';
import { Info } from './Info';




export const Hero = () => {
  return <div>
     <Paper 
        elevation={0} 
        style={{height: 300}} 
     > 
    <Grid container>

     <Grid 
      xs={6} 
      item>

      <img 
        src={neuma} 
        style={{width: '40vw', padding: 20}}></img>
      
      </Grid>
    
    <Grid 
      xs={6} 
      item>
     
    <div className='hero-title'>

      <h1> INICIA TU NUEVO CAMINO  </h1>
      <h3> Somos expertos en educación Holística y Musical </h3>
      <div className='hero-buttons'>

        <Button variant='contained' style={{color: 'white'}} > Cursos </Button>
        <Button variant='contained' style={{color: 'white'}} > Eventos </Button>
        <Whatsapp />
        
      </div>

    </div>

    </Grid>
    </Grid>
    
    


     </Paper>

    <Info />

  </div>



};
