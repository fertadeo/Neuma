import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero'
import { Info } from './Info';
import { Services } from './Services';
import { Footer } from './Footer';


export const Home = () => {
  return (
  <>
    <Navbar />
    <Hero />
    <Info />
    <Services />
    <Footer />
  </>
  )
};

