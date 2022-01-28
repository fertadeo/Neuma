import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';


export const Home = () => {
  return <div>
       <Navbar />

       <Link to='/cursos'>
       
       <button> Ir a cursos </button>
       </Link>
  </div>
};

