import React from 'react';
import { Grid } from '@mui/material';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
// import icon3 from '../img/icon3.png';
// import icon4 from '../img/icon4.png';
// import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';




const infoIcon = [
    {
        id: 1, 
        icon: icon1 ,
        title: 'Tomá cursos online y presenciales'
    },
    {
        id: 2, 
        icon:  icon6,
        title: 'Reservá tu turno con nuestros profesionales de Salud'
    },{
        id: 3, 
        icon:  icon2,
        title: 'Dejanos tu consulta vía whatsapp'
    },
]

export const Info = () => {
    return (
        <Grid 
            container
            
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
                                style={{width:'30%'}}
                            ></img>
                            <h2 style={{textTransform:'uppercase', fontSize: '20px', textAlign:'center'}}>{info.title}</h2>
                        </div>
                    </Grid>
                )
            })}
        </Grid>
)}
