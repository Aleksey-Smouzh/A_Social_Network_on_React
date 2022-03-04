import React from 'react'
import './Navbar.css';



function Navbar() {
  return (
    <div className='container_navbar'>

          <nav className='navbar_nav'>
              <ul className='navbar_ul'>
                  <li className='navbar_list'> <a href="/s">Your profile</a></li>
                  <li className='navbar_list'>  <a href="/s">Messages</a></li>
                  <li className='navbar_list'>  <a href="/s">News</a></li>
                  <li className='navbar_list'>  <a href="/s">Music</a></li>
                  <li className='navbar_list'>  <a href="/s">Settings</a></li>
              </ul>
          </nav>

    </div>
  )
}

export default Navbar