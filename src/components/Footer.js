import React from 'react'
import { Grid } from '@mui/material'
import Instagram from '../img/IconInstagram.png'
import  Facebook  from '../img/IconFacebookIcon.png'
import  YouTube  from '../img/IconYoutube.png'

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
              item xs={6} md={6}
              style={{padding:'5%'}}>
            <p > Neuma Espacio Holístico | 2022 </p>
            </Grid>
            <Grid 
            item xs={6} md={6}
            style={{}}>
            <p> Seguinos en nuestras redes</p>
          <a href='https://www.instagram.com/neuma_holistico/' 
             target='_blank'
             rel='noopener noreferrer'
             > 
          <img 
            src= { Instagram }
            style={{width:'5.5%', marginLeft:'40px'}}
            alt= 'Instagram'
            ></img>   
          </a>
            
            <a href='https://www.facebook.com/neuma.holistico.9' 
            target='_blank'
            rel='noopener noreferrer'
            >
              <img src= { Facebook }
              style={{width:'5%', marginLeft:'40px'}}
              alt= 'Facebook'
              >

              </img>
            </a>
            
            
            <a href='https://www.youtube.com/channel/UC2HgAZeE3XENQvuJ9bY-O6w' 
               target='_blank'
               rel='noopener noreferrer'
               >
              <img 
              src= { YouTube }
              style={{width:'5%', marginLeft:'40px', borderRadius: '25px'}}
              alt= 'YouTube'
              >

              </img>
            </a>

            </Grid>

        
        
          </Grid>
       
       

       
      
         
            
        
        
        
       


    </div>
  )
}
