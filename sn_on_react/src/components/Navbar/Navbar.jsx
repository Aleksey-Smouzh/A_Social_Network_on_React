import React from 'react'
import navbar from './Navbar.module.css';



function Navbar() {
  return (
    <div className={navbar.container}>

          <nav className={navbar.nav}>
              <ul className={navbar.ul}>
                  <li className={navbar.list}> <a href="/profile">Your profile</a></li>
                  <li className={navbar.list}>  <a href="/dialogs">Messages</a></li>
                  <li className={navbar.list}>  <a href="/news">News</a></li>
                  <li className={navbar.list}>  <a href="/music">Music</a></li>
                  <li className={navbar.list}>  <a href="/settings">Settings</a></li>
              </ul>
          </nav>

    </div>
  )
}

export default Navbar