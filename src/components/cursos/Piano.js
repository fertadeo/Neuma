import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Typography } from '@mui/material';

export const Piano = () => {
  return( <div>
     <Navbar />
     <Typography variant='h2'>
     Desde Piano 
     </Typography>
    
   <Link to="/">
    <button> Ir a Home   </button>
   </Link>

  </div>)
};
