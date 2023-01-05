import React from 'react';
import logo from './source/Logo.png'
function Nav() {
  return (
    <div>
      <img alt="logo" src={logo}/>
      <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/menu">menu</a></li>
          <li><a href="/reservation">RESERVATION</a></li>
          <li><a href="/order">ORDER ONLINE</a></li>
          <li><a href="/LOGIN">LOGIN</a></li>
        </ul>
    </div>
  );
}

export default Nav;
