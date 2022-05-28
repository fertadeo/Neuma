import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero'
import { Info } from './Info';
import { Services } from './Services';
// import { Events } from './Events';


export const Home = () => {
  return (
  <>
    <Navbar />
    <Hero />
    <Info />
    <Services />
    {/* <Events /> */}
  </>
  )
};

