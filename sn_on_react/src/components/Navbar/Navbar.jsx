import React from 'react'
import navbar from './Navbar.module.css';



function Navbar() {
  return (
    <div className={navbar.container}>

          <nav className={navbar.nav}>
              <ul className={navbar.ul}>
                  <li className={navbar.list}> <a href="/Profile">Your profile</a></li>
                  <li className={navbar.list}>  <a href="/Dialogs">Messages</a></li>
                  <li className={navbar.list}>  <a href="/s">News</a></li>
                  <li className={navbar.list}>  <a href="/s">Music</a></li>
                  <li className={navbar.list}>  <a href="/s">Settings</a></li>
              </ul>
          </nav>

    </div>
  )
}

export default Navbar