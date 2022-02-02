import React from 'react';
import { Grid } from '@mui/material';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';




const infoIcon = [
    {
        id: 1, 
        icon: icon1 ,
        title: 'Estudia de manera online'
    },
    {
        id: 2, 
        icon:  icon2,
        title: 'Elegí el curso que más te guste'
    },{
        id: 3, 
        icon:  icon3,
        title: 'Registra tus datos vía mail'
    },{
        id: 4, 
        icon:  icon4,
        title: 'Accedé al curso en el momento que quieras'
    },{
        id: 5, 
        icon:  icon5,
        title: 'Si tu curso es online en vivo, recibirás el link de la clase'
    },{
        id: 6, 
        icon:  icon6,
        title: 'Al terminar el curso, se emitirá un certificado a tu nombre'
    },
]

export const Info = () => {
    return (
        <Grid 
            container
            style={{ height: '500px' }}
        >
            {infoIcon.map(info => {
                
                return (
                    <Grid 
                    xs={4}
                    item
                    key={info.id}
                    >
                        <div
                        style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', padding:'3rem'}}>
                            <img 
                                src={info.icon} 
                                alt='icons'
                                style={{width:'50%'}}
                            ></img>
                            <h2 style={{textTransform:'uppercase', fontSize: '20px', textAlign:'center'}}>{info.title}</h2>
                        </div>
                    </Grid>
                )
            })}
        </Grid>
)}
