import React from 'react';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive';
import './Landing.css';
import Callout from '../components/Callout';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import LandingFooter from '../components/LandingFooter';

function Landing(props) {
  return (
    <div>
      <Header />
      <Archive />
      <Callout />
      <Gallery />
      <Contact />
      <LandingFooter />
    </div>
  )
};

export default Landing;