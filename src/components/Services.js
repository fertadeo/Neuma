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
    style={{backgroundColor:'#20C0B9' , width:'100vw', height:'110vh',maxWidth:'100%' }}
    >

     <div> 

        <img 
        style={{width:'25vw', zIndex:'1' }}
        src={meditation}
        alt='meditation'
        className="meditation"
        >
        </img>
        <h3 style={{zIndex:'99'}}> Cursos Holístico</h3>
     </div>

      <img 
      style={{width:'25vw', margin:'1%'}}
       src={magicbowls}
       alt='meditation'
       className="meditation"
       >
         
      </img>

      <img 
      style={{width:'25%'}}
       src={pianist}
       alt='meditation'
       className="meditation"
       >
      </img>


    
      


    </Grid>
      
  </div>
  )
}