import React from 'react'
import { Grid } from '@mui/material'
import Instagram from '../img/IconInstagram.png'


export const Footer = () => {
  return (
    <div>
        {/* <Grid className='footer-container'
              container
              xs={12}
              md={6}
              
              >
          
          <div style={{width:'40%', alignItems:'center', justifyContent:'space-between', marginLeft:'5%', fontSize:'1rem'}}>
            */}

            <Grid 
              container 
              spacing={2}
              style={{backgroundColor:'#20C0B9', display:'flex', alignItems:'center', justifyContent:'space-around', color:'white', fontSize:'1.3rem' }}
              >
            <Grid 
              item xs={6} md={6}>
            <p > Neuma Espacio Holístico | 2022 </p>
            </Grid>
            <Grid 
            item xs={6} md={6}
            style={{}}>
            <p> Seguinos en nuestras redes</p>
          <a href='https://www.instagram.com/neuma_holistico/' target='_blank'> 
          <img 
            src= { Instagram }
            style={{width:'5%', marginLeft:'40px'}}
            ></img>   
          </a>
            </Grid>

        
        
          </Grid>
       
       

       
      
         
            
        
        
        
       


    </div>
  )
}
