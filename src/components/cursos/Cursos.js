import React from 'react'
import { Grid, Stack } from '@mui/material'
import { Divider } from '@mui/material'
import { Navbar } from '../Navbar'
import Meditation from '../../img/meditation1.jpg'
import './cursos.module.css'

export const Cursos = () => {
  return (
    <div>
        <Navbar />
        <Grid 
            container
            direction='column'
            xs={12}
            alignItems='center'
            style={{marginTop:'90px', fontSize:'1.5rem'}}
        > 
        
            <h2>  Neuma tiene cursos para vos! </h2> 

            <Stack 
                spacing={2}
                className='imgStack'  
                direction= 'row'
                divider={<Divider orientation="vertical" flexItem />}
                  >
              <img  
                src={ Meditation }
                alt='Meditation'
                style={{width:'20%'}}
              />
             
              <img  
                src={ Meditation }
                alt='Meditation'
                style={{width:'20%'}}
              />
             
              <img  
                src={ Meditation }
                alt='Meditation'
                style={{width:'20%'}}
              />
             
            </Stack>
        </Grid>
    </div>
  )
}
