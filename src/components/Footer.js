import React from 'react';
import logo from './source/FooterLogo.jpg';
function Footer() {
  return (
    <div>
      <img alt='logo' src={logo}/>
      <h1>
      Navigation
      </h1>
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">menu</a></li>
          <li><a href="/reservation">Resercation</a></li>
          <li><a href="/order">Order online</a></li>
          <li><a href="/LOGIN">Login</a></li>
        </ul>
      <h1>
      Contact
      </h1>
      <ul>
          <li><a href="/address">Address</a></li>
          <li><a href="/phonenumber">Phone Number</a></li>
          <li><a href="/email">Email</a></li>
        </ul>
      <h1>
      Social Media
      </h1>
      <ul>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/twiiter">Twiiter</a></li>
      </ul> 
    </div>
  );
}

export default Footer;
