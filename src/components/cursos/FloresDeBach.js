import { Grid } from '@mui/material'
import React from 'react'
import flores from '../../img/flores-de-bach.jpeg'
import { Navbar } from '../Navbar'



export default function FloresDeBach() {
  return ( 
    <div> 
      <Grid 
      container
      direction='column'
      style={{}} >
        <Navbar />
          <img src={flores} alt='flores de bach' / >
        
      </Grid>    
    </div>
  )
}
