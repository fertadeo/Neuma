import React from 'react';
import {Grid, Button, Box } from '@mui/material';
import  neuma  from '../../src/img/neuma.png';
import circle from '../../src/img/circle.png';
import Whatsapp from './Whatsapp';


export const Hero = () => {
  return (
  
    <div> 
      <Grid container style={{marginTop:'60px'}}>
        <Grid 
          xs={6} 
          item>
          <Box className='circle-container'>
            <img
              src={circle}
              className="circle"
              alt='circle transition'
            />
            <img 
              src={neuma} 
              style={{width: '45vw', padding: 50}}
              alt='imagenNeuma'
            ></img>
          </Box>
        </Grid>
        <Grid 
          xs={6} 
          item
          styled={{justifyContent: 'center'}}
        >
          <Box style={{height:'490px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1> INICIA TU NUEVO CAMINO  </h1>
            <h2> Somos expertos en educación Holística y Musical </h2>
          <Box style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'100px'}}>
            {/* <Button 
              variant='contained' 
              style={{color: 'white'}} 
                >Cursos
            </Button> */}
            {/* <Button 
              variant='contained' 
              style={{color: 'white'}} 
                >Eventos
            </Button> */}
          </Box>
          </Box>
          <Box style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '5rem'}}>
              <Whatsapp />

          </Box>
        </Grid>
      </Grid>
    </div>
  )
};
