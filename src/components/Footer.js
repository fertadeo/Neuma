import React from 'react'
import { Grid } from '@mui/material'
import { Box, width } from '@mui/system'
import Instagram from '../img/instagram.png'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <div>
        <Grid className='footer-container'
              container
              xs={12}
              style={{width:'100%', backgroundColor:'#20C0B9', display:'flex', alignItems:'center', justifyContent:'space-around', color:'white', fontSize:'1.3rem' }}
        >
        
        <Box 
        item
        style={{padding:'20px', }}
        > 
        <p > Neuma Espacio Holístico | 2022 </p>
        
        </Box>
        <Box 
        item
        style={{padding:'20px', color:'black', fontSize:'1.3' }}
        >
          <p> Seguinos en</p>
          <a href='https://www.instagram.com/neuma_holistico/' target='_blank'> 
          <img 
            src= { Instagram }
            style={{width:'10%'}}
            ></img>   
          </a> 
        
        
        
        </Box>


        </Grid>
    </div>
  )
}
