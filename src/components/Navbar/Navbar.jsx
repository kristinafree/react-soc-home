import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3'
//     'active': 'Baksndakdn_actv'
// }

// let c1 = 'item';
// let c2 = 'active';
// 'item active'
// let classes = c1 + "" + c2;
// let classesNew = `${s.item} ${c2}`;

const Navbar = () => {
    return (
        <nav className = {s.nav}> 
          <div className = {s.item}>
            <NavLink to = "/profile" activeClassName = {s.activeLink}>Profile</NavLink>
          </div>
          <div className = {`${s.item} ${s.active}`}>
            <NavLink to = "/dialogs" activeClassName = {s.activeLink}>Messages</NavLink>
          </div>
          <div className = {`${s.item} ${s.active}`}>
            <NavLink to = "/users" activeClassName = {s.activeLink}>Users</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to = "/news" activeClassName = {s.activeLink}>News</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to = "/music" activeClassName = {s.activeLink}>Music</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to = "/setting" activeClassName = {s.activeLink}>Settings</NavLink>
          </div>
      </nav>
)}

export default Navbar;