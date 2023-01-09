import React from 'react';
import logo from './source/FooterLogo.jpg';
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <img alt='logo' src={logo} />
      <div className='Navigation'>
        <h1>
          Navigation
        </h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">menu</a></li>
          <li><a href="/reservation">Resercation</a></li>
        </ul>
      </div>
      <div className='Contact'>
        <h1>
          Contact
        </h1>
        <ul>
          <li><a href="/address">Address</a></li>
          <li><a href="/phonenumber">Phone Number</a></li>
          <li><a href="/email">Email</a></li>
        </ul>
      </div>
      <div className='SocialMedia'>
        <h1 className='SocialMedia'>
          Social Media
        </h1>
        <ul>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/twiiter">Twiiter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
