import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaSpa } from 'react-icons/fa';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (

    <>
      <nav className='navbar'>

        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
       ZEGETECH
            <FaSpa className='FaSpa' />
             </Link>
            

          <Link
                to='/sign-in' href="/home"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
              
              </Link>
              {button && <Button to="sign-in" href="/home" type="button" className='btn btn-danger'>Login </Button>} 
              <Link
                to='/sign-up' href="/home"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
              
              </Link>
              {button && <Button href="/home" type="button" className='btn btn-danger'>Register </Button>} 
            
          {/* <Button href="/home" variant="btn-success">SIGN UP<FaUser /></Button> */}
          <div className='menu-icon' onClick={handleClick}>
         
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

        
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
        

            </li>
           
           
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/bills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Zegetech
              </Link>
            </li>
            
          </ul>
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;
