import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero'
import { Info } from './Info';
import { Cursos } from './Cursos';


export const Home = () => {
  return (
  <>
    <Navbar />
    <Hero />
    <Info />
    <Cursos />
  </>
  )
};

