import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
      
     
      <h1>Welcome to online Payment site</h1>
      <p>You can register and send money to each other or pay for your goods and services.
</p>
    
      <div className='hero-btns'>
      
        <Link to="/Products.js" className="btn btn-primary">
        <Button
          href='Products.js'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick="location.href = 'Products.js'"
        >
          Read more 
        </Button>
        </Link>
      </div>
  
    </div>
  );
}

export default HeroSection;
