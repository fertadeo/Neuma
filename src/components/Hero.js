import React from 'react';
import {Grid, Button, Box } from '@mui/material';
import  neuma  from '../../src/img/neuma.png';
import Whatsapp from './Whatsapp';

export const Hero = () => {
  return (
  
    <div> 
      <Grid container style={{marginTop:'60px'}}>
        <Grid 
          xs={6} 
          item>
          <Box>
            <img 
              src={neuma} 
              style={{width: '30vw', padding: 50}}
              alt='imagenNeuma'
            ></img>
          </Box>
        </Grid>
        <Grid 
          xs={6} 
          item
          styled={{justifyContent: 'center'}}
        >
          <Box style={{height:'490px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <h1> INICIA TU NUEVO CAMINO  </h1>
            <h3> Somos expertos en educación Holística y Musical </h3>
          <Box style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'30px'}}>
            <Button 
              variant='contained' 
              style={{color: 'white'}} 
                >Cursos
            </Button>
            <Button 
              variant='contained' 
              style={{color: 'white'}} 
                >Eventos
            </Button>
            <Whatsapp />
          </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
};
