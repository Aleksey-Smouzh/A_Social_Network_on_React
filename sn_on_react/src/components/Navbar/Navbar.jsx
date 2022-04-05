import React from 'react'
import { NavLink } from 'react-router-dom';
import navbar from './Navbar.module.css';

function Navbar() {
  return (
    <div className={navbar.container}>

          <nav className={navbar.nav}>
              <ul className={navbar.ul}>
                  <li className={navbar.list}><NavLink to="/profile">Your profile</NavLink></li>
                  <li className={navbar.list}><NavLink to="/dialogs">Messages</NavLink></li>
                  <li className={navbar.list}><NavLink to="/news">News</NavLink></li>
                  <li className={navbar.list}><NavLink to="/music">Music</NavLink></li>
                  <li className={navbar.list}><NavLink to="/users"> Find a User</NavLink></li>
                  <li className={navbar.list}><NavLink to="/settings">Settings</NavLink></li>
              </ul>
          </nav>
    </div>
  )
}

export default Navbar