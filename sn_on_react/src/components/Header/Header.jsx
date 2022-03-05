import React from 'react'
import header from './Header.module.css';
// import logo from './logo.svg';

function Header() {
  return (
    <div className={header.container}>header
    
    {/* <img className={header.logo} src={logo} alt="cherry" /> */}
    
    <h1 className={header.title}>Pomme d`amour</h1>
    
    
    
    </div>
  )
}

export default Header