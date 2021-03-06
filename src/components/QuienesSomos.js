import React from 'react'
import { useMediaQuery } from '@mui/material';
import { Grid, Box } from '@mui/material'
import { Navbar } from './Navbar'
import { Footer } from './Footer';
import YoutubeEmbed from "./YoutubeEmbed";
import '../components/quienesSomos.css'




export const QuienesSomos = () => {
    return (
        <div>
            <Navbar/>
            <Grid
                container
                className='quienes-grid'
                style={{}}
            >
                <Grid
                    xs={6}
                    item
                >
                    <Box 
                    className='text-container' style={{marginTop:'15%', marginLeft:'10%', marginRight:'10%', fontSize:'1.3rem', maxWidth:'1200px' }}>
                        <h2> ¿Quiénes somos?</h2>
                        <p> Neuma Espacio Holístico fué fundado en el año 2019 por la Lic. Fga. Ledesma Daniela Belén, es un lugar pensado para el bienestar integral de las personas. <br/> La palabra Neuma significa soplo divino y a su vez designa a los signos que dieron inicio de la música escrita, lo que permitió la difusión de la misma. <br/> Por ello, Neuma está constituido por profesionales altamente formados y de gran calidad humana que trabajan de manera interdisciplinaria para lograr los mejores resultados en nuestros pacientes y estudiantes. <br/> <br/> <strong> Queremos que seas parte de Neuma para que puedas adquirir crecimiento personal y conocimientos que te ayudarán en tu salud y en tu profesión, deseamos inspirarte a ser mejor y a sentirte mejor. </strong> <br/><br/> Te invitamos a conocer todas las especialidades médicas tradicionales y holísticas que tenemos para vos: nutrición, fonoaudiología, psicología, terapias florales (flores de bach), registros akáshicos, yoga, reiki, musicoterapia y todos los cursos y talleres que tenemos.</p>
                        <h3> <strong> Te esperamos! </strong></h3>
                    </Box>
                </Grid>


                <Grid
                    xs={6}
                    item
                >

                    <Box className='video-container' style={{marginTop:'25%'}}>
                    <YoutubeEmbed embedId="ysAfHGstzTQ"  />
                    </Box>

                </Grid>



            </Grid>
            {/* <Footer /> */}
        </div>
    )
}




export default function App() {
  return (
    <div className="App">
     
    </div>
  );
}
