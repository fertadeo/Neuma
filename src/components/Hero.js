import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import neuma from '../../src/img/neuma.png';
import circle from '../../src/img/circle.png';
import Whatsapp from './Whatsapp';
import BackToTop from './BackToTopAnchor';
import '../myapp.css'


export const Hero = () => {
  return (

    <div>
      <Grid container style={{ marginTop: '60px' }}>
        <Grid
          xs={12} sm={12} md={6}
          item>
          <Box className='circle-container'>
            <img
              src={circle}
              className="circle"
              alt='circle transition'
            />
            <img
              src={neuma}
              // style={{ width: '35vw', padding: 50 }}
              className="heroImg"
              alt='imagenNeuma'
            ></img>
          </Box>
        </Grid>
        <Grid
          xs={12} sm={12} md={6}
          item
          styled={{ justifyContent: 'center' }}
        >
          <BackToTop />
          <Box 
            item
        
            className='Hero_title'
            style={{display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h1 style={{ color: '#0BB6AE', fontSize: '2.5rem' }}> 
              Yo elijo bienestar, yo elijo crecer, yo elijo Neuma  
              </h1>
              <h2> Te invitamos a ser parte de Neuma Holístico </h2>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '80px' }}>
              {/* <Button 
              variant='contained' 
              style={{color: 'white'}} 
                > Neuma Cursos
            </Button> 
             <Button 
              variant='contained' 
              style={{color: 'white'}} 
                >Neuma Salud
            </Button>  */}
            </Box>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '5rem' }}>
            <Whatsapp />


          </Box>
        </Grid>
      </Grid>
    </div>
  )
};
