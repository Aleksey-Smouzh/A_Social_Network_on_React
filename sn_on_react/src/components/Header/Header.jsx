import React from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.module.css";
// import logo from './logo.svg';

function Header(props) {
  return (
    <header className={header.container}>
      header
      {/* <img className={header.logo} src={logo} alt="cherry" /> */}
      <h1 className={header.title}>Pomme d`amour</h1>
    <div className={header.login}>
      {props.isAuth ? props.login  
      : <NavLink to={'/login'}>LOGIN</NavLink>}
    </div>
    </header>
  );
}

export default Header;
