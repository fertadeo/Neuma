import { Grid } from '@mui/material';
import React from 'react';
import meditation from '../img/meditation1.jpg';
import magicbowls from '../img/magicbowls1.jpg';
import pianist from '../img/pianist1.jpg';





export const Services = () => {
  return ( 
   <div>

    <Grid 
    container 
    justifyContent='center'
    alignItems='center'
    style={{backgroundColor:'#20C0B9', width:'100vw', height:'110vh',maxWidth:'100%' }}
    >

      <img 
      style={{width:'33vw', height: '95vh', objectFit:'cover'}}
       src={meditation}
       alt='meditation'
       className="meditation"
       >
      </img>

      <img 
      style={{width:'32vw', height: '95vh'}}
       src={magicbowls}
       alt='meditation'
       className="meditation"
       >
      </img>

      <img 
      style={{width:'33%', height: '95vh'}}
       src={pianist}
       alt='meditation'
       className="meditation"
       >
      </img>


    
      


    </Grid>
      
  </div>
  )
}