import React from 'react';
import { Grid } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import EmailIcon from '@mui/icons-material/Email';
import StayCurrentLandscapeIcon from '@mui/icons-material/StayCurrentLandscape';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DuoIcon from '@mui/icons-material/Duo';
import SendIcon from '@mui/icons-material/Send';





const infoIcon = [
    {
        id: 1, 
        icon: 'AccountBalanceIcon' ,
        title: 'Estudia de manera online'
    },
    {
        id: 2, 
        icon:  'ComputerIcon',
        title: 'Elegí el curso que más te guste'
    },{
        id: 3, 
        icon:  'EmailIcon',
        title: 'Registra tus datos vía mail'
    },{
        id: 4, 
        icon:  'StayCurrentLandscapeIcon',
        title: 'Accedé al curso en el momento que quieras'
    },{
        id: 5, 
        icon:  'DuoIcon',
        title: 'Si tu curso es online en vivo, recibirás el link de la clase'
    },{
        id: 6, 
        icon:  'SendIcon',
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
                    style={{justifyContent:'center'}}
                    xs={4}
                    item
                    key={info.id}
                    >
                        <div>
                            <div>{info.icon}</div>
                            <div>{info.title}</div>
                        </div>
                    </Grid>
                )
            })}
        </Grid>
)}
