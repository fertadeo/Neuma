import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';


export const Cursos = () => {
  return <div>
    <Navbar/>
      Desde Cursos
     <Link to='/'>
        <button> Volver a Home </button>
     </Link>

     <Link to='/cursos/piano'>
        <button> Ir a Piano  </button>
     </Link>
  </div>
};
