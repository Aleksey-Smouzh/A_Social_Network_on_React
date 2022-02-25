import React from 'react'
import './Navbar.css';



function Navbar() {
  return (
    <div className='container_navbar'>
    
    <nav className='navbar_nav'>
        <ul className='navbar_ul'>
        <li className='navbar_list'>Your profile</li>
        <li className='navbar_list'>Messages</li>
        <li className='navbar_list'>News</li>
        <li className='navbar_list'>Music</li>
        <li className='navbar_list'>Settings</li>
        </ul>
    </nav>
    
    </div>
  )
}

export default Navbar