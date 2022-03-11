import React from 'react';

function Header() {

  return (
    <header class="header">
      <div class="header__text">
        <h1 class="heading-primary u-margin-bottom-medium">
          <span class="heading-primary--main">Jan Patrick Palacio</span>
          <span class="heading-primary--sub">Software Engineer</span>
        </h1>
        <div class="header__nav">
          <a href="#about" class="nav-btn">About</a>
          <a href="#experience" class="nav-btn">Experience</a>
          <a href="#personal" class="nav-btn">Projects</a>
          <a href="#contact" class="nav-btn">Contact Me</a>
          <a href="#" class="nav-btn">Resume</a>
        </div>
      </div>
    </header>
  )
}

export default Header;