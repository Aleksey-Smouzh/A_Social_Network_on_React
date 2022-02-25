import React from 'react'
import './Header.css';
import logo from '../Image/logo.svg';

function Header() {
  return (
    <div className='container_header'>header
    
    <img className='header_logo' src={logo} alt="cherry" />
    
    <h1 className="header_title">Pomme d`amour</h1>
    
    
    
    </div>
  )
}

export default Header