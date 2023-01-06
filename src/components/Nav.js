import React from 'react';
import logo from './source/Logo.png';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <img alt="logo" src={logo} className="logo" />
      <ul className="link">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/menu">MENU</a></li>
          <li><a href="/reservation">RESERVATION</a></li>
          <li><a href="/order">ORDER ONLINE</a></li>
          <li><a href="/LOGIN">LOGIN</a></li>
        </ul>
    </nav>
  );
}

export default Nav;