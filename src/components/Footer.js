import { Grid } from '@mui/material'
import React from 'react'


export const Footer = () => {
  return (
    <div>
        <Grid className='footer-container'
              container 
              xs={12}
              direction='row'
              style={{width:'100%', height:'20%', backgroundColor:'#20C0B9', marginTop:'20%' }}
        >
        <h1> Desde el footer! </h1>


        </Grid>
    </div>
  )
}
