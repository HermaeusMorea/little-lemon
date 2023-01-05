import React from 'react';
import logo from "./source/Logo.png";
function MetaTags() {
  return (
    <div>
      <meta name="description" content="little lemon restaurant page"/>
      <meta name="og:title" content="little lemon-a family owned Mediterranean restaurant"/>
      <meta name="og:description" content="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
      <meta name="og:image" content={logo}/>
    </div>
  );
}

export default MetaTags;
