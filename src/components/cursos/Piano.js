import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';

export const Piano = () => {
  return( <div>
     <Navbar />
      Desde Piano 
   <Link to="/">
    <button> Ir a Home   </button>
   </Link>

  </div>)
};
