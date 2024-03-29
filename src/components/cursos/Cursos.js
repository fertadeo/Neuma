import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import { Navbar } from '../Navbar'
import Yoga from '../../img/meditation1.jpg'
import Actors from '../../img/actors.jpeg'
import Voice from '../../img/voice.jpeg'
import Singer from '../../img/singer.jpeg'
import IntroAlEneagrama from '../../img/IntroAlEneagrama.jpg'
import { Link } from 'react-router-dom';




const InfoCursos = [
  {id: 1,
   img: Yoga , 
   name: 'Yoga',
   subtitle: 'Para todo público ',
   pageName: 'eneagrama',
   description: '',
   price: 'AR $3000 '
  }, 
  {id: 2,
    img: Actors , 
    name: 'Tu voz sos vos',
    subtitle: ' Curso para Actores ',
    pageName: 'eneagrama',
    description: ' ',
    price: 'AR $3000 '
   },
   {id: 3,
    img: Singer , 
    name: 'Tu voz sos vos',
    subtitle: ' Curso para Cantantes ',
    pageName: 'eneagrama',
    description: ' ',
    price: 'AR $3000 '
   }, 
   {id: 4,
    img: Voice , 
    name: 'Tu voz sos vos',
    subtitle: 'Curso para Locutores',
    pageName: 'eneagrama',
    description: ' ',
    price: 'AR $3000 '
   }, 
   {id: 5,
    img:  IntroAlEneagrama , 
    name: 'Introducción al Eneagrama',
    pageName: 'eneagrama',
    subtitle: '',
    description: ' ',
    price: 'AR $3000 '
   }
  

]




 export const Cursos = () => {
   return (
     <div>
         <Navbar />
         <Grid 
             container
             xl={12}
             alignItems='center'
             justifyContent='center'
           style={{marginTop:'90px', fontSize:'1.5rem'}}
        > 
                    <h2>  Conocé los cursos que Neuma tiene para vos </h2> 

                    <Grid
                   container
                   direction='row'
                   spacing={3}
                   xs={12}
                
                   
                   
                   >  
             {
               InfoCursos.map(cursos => {
                 return(
                     
                    
                     < Grid 
                          item 
                          className='cursos-container'
                          xs={12} sm={6} md={4} lg={3} xl={2}

                     >   
                        <Card 
                        className='cursos-card'
                        sx={{maxWidth: 345, maxHeight:500 }}
                        >
                          <CardMedia
                              component="img"
                               
                              alt={cursos.name}
                              height="260"
                              image={ cursos.img }
                              key={cursos.id}
                              />
                              <hr/>
                          <CardContent>
                          <Typography variant='h6' color='primary' style={{marginLeft:'50px'}} >
                                {cursos.price}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            {cursos.name}
                            </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {cursos.subtitle}
                            </Typography>
                          <Typography variant="body2" color="text.secondary">
                              {cursos.description}
                             
                    </Typography>
                  </CardContent>
                  <CardActions>
                  
                    <Button variant='contained' size='large' onClick={InfoCursos.pageName} > Ver más </Button>
                    <Link to={`/cursos/${InfoCursos.pageName}`  } className="btn btn-primary">Ver mas</Link>
                  
                  </CardActions>
                  
                </Card>
                              </Grid>  
              
              
              )
            })
            
          } 

          </Grid>

           
        </Grid>
     </div>
   )
 }


