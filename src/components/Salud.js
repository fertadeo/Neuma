import React from 'react'
import { Grid, Box, Card } from '@mui/material'
import {Navbar} from './Navbar'
import Daniela from '../img/fono-daniela-ledesma.jpeg'
import Melisa from '../img/nutri-melisa-rivadero.jpeg'
import Adriana from '../img/psico-adriana-tenorio.jpeg'
import Irene from '../img/reiki-Irene-Siriczman.jpeg'
import Alejandra from '../img/flores-maria-alejandra-petri.jpeg'
import '../myapp.css'
import { Footer } from './Footer'
import BackToTop from './BackToTopAnchor'




const profesionales = [
    {id: 1, 
     speciality: 'Fonoaudiología',
     name:'Daniela Ledesma',
     title: 'Licenciada en fonoaudiología (UNC) - profesora de canto lírico y popular (UPC)',
     description:'Ledesma Daniela Belén es Licenciada en fonoaudiología especializada en el área de voz',
     avatar:  Daniela ,

    }, 
    {id: 2, 
        speciality: 'Nutrición',
        name:'Melisa Rivadero',
        title: 'Licenciada en nutrición (UNC) - Coach nutricional.',
        description:'Melisa Rivadero es Licenciada en nutrición, tiene un abordaje holístico de la persona buscando el bienestar del mismo no solamente el permitirle bajar de peso. Asociada con profesores de educación física permite que su trabajo sea integral y completo. Sus sesiones no solo incluye la consulta sino también ideas saludables para tus comidas con recetarios realizados por ella misma. Además dicta talleres y cursos en Neuma Espacio Holístico para complementar y aunar los conocimientos brindados en las sesiones. Atención online de pacientes adolescentes y adultos.',
        avatar:  Melisa ,
   
       },
    {id: 3, 
        speciality: 'Psicología',
        name:' Adriana Tenorio',
        title: 'Licenciada en nutrición (UNC) - Coach nutricional.',
        description:'La psicología holística facilita una visión amplia e integral del ser humano, contemplando los conflictos emocionales y las alteraciones psicológicas a los que estos conllevan. De tal  manera,  nuestro trabajo se centra en enfocar el  conflicto, buscando en el mismo, una oportunidad de crecimiento  personal y autoconocimiento. El tratamiento ofrece una perspectiva integradora del ser humano, permitiéndonos ver cada una de las dimensiones que integran al ser, como es,  la mente, el cuerpo y el espíritu. El principal objetivo es que la persona pueda equilibrar estas dimensiones cuando se ven alteradas por acontecimientos internos y externos de su presente, o por padecimientos subjetivos que tienen que ver con su pasado. Poder integrar, implica  madurar y evolucionar personalmente, para el bienestar general e integridad del ser. Atención online de pacientes adolescentes y adultos.',
        avatar:  Adriana ,
   
       },
    {id: 4, 
        speciality: 'Reiki',
        name:' Irene Siriczman',
        title: '',
        description:'',
        avatar:  Irene ,
   
       },
    {id: 5, 
        speciality: 'Terapia Floral ( Flores de Bach )',
        name:'Alejandra Petri',
        title: '',
        description:'',
        avatar:  Alejandra ,
   
       },
]

export const Salud = () => {
  return (
    <div>
        
        <Navbar />
        <Grid 
        container
        className='salud-portrait'
        style={{marginTop:'60px', backgroundColor:'#0BB6AE'}}
        >
            <BackToTop />
            <Grid 
            item
            xs={12}
            display='flex'
            alignItems='center'
            justifyContent='center'
            style={{fontSize:'2rem', color:'white'}}
            >
                <h1> Nuestros Profesionales    </h1>
                

            </Grid>



        </Grid>
            
            {profesionales.map(salud => {
                return (
                    
                    <Grid 
                contained
                direction='column'
            >
                <Box
                xs={12} 
                container
                style={{display:'flex', justifyContent:'space-around', margin:'5%'}}
                key={salud.id}
                direction='column'
                >
                    <Card
                    elevation={6}
                    direction='row'
                    style={{width:'100%', display:'flex', padding:'10px', paddingLeft:'10%', justifyContent:'space-between', fontSize:'1.3rem'}}> 
                    <div>

                    <h2> {salud.speciality} </h2>
                    <p> {salud.title} </p>
                    </div>
                    <img 
                        src={salud.avatar} 
                        alt='avatar'
                        style={{width:'180px', maxHeight:'300px', objectFit:'cover', borderRadius:'10%'}}
                    ></img>
                    </Card>


                </Box>

                
            </Grid>

                )

            })}
            
            <Footer />
    </div>
  )
}
