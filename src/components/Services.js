import { Grid, Button } from '@mui/material';
import React from 'react';
import meditation from '../img/meditation1.jpg';
import magicbowls from '../img/magicbowls1.jpg';
import pianist from '../img/pianist1.jpg';
import '../myapp.css';




export const Services = () => {
  return ( 
   <div>

    <Grid 
    container 
    justifyContent='center'
    alignItems='center'
    
    style={{backgroundColor:'#20C0B9' , width:'100vw', height:'100vh',maxWidth:'100%', display:'flex' }}
    >

<div className='servicesImg'> 

        <img 
        style={{width:'25vw'}}
        src={meditation}
        alt='meditation'
        >
        </img>
        <Button variant='outlined' size='large'> Ver más </Button>
        
</div>
   
<div className='servicesImg'> 

      <img 
      style={{width:'25vw', margin:'1%'}}
      src={magicbowls}
      alt='cuencos'
      >
         
      </img>
   <Button variant='outlined' size='large'> Ver más </Button>
</div>

<div className='servicesImg'> 
      <img 
      style={{width:'25vw'}}
       src={pianist}
       alt='meditation'
       >
      </img>
      <Button variant='outlined' size='large'> Ver más </Button>
</div>

    
      


    </Grid>
      
  </div>
  )
}