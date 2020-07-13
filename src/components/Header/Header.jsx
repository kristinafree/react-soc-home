import React from 'react';
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Header = (props) => {
    return (
    <>
    <header className = {s.header}>
      <img src = {logo} />
      <div className = {s.loginBlock}>
          {props.isAuth 
          ? <div>{props.login} - <button onClick = {props.logout}>Log out</button></div>
            : <NavLink to = {'/login'}>LOGO</NavLink> }
      </div>
    </header>
    </>
)}

export default Header;