import React from 'react';

function Header() {

  return (
    <header className="header">
      <div className="header__text">
        <h1 className="heading-primary u-margin-bottom-medium">
          <span className="heading-primary--main">Jan Patrick Palacio</span>
          <span className="heading-primary--sub">Software Engineer</span>
        </h1>
        <div className="navigation">
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item"><a href="#about">About</a></li>
              <li className="navigation__item"><a href="#experience">Experience</a></li>
              <li className="navigation__item"><a href="#projects">Projects</a></li>
              <li className="navigation__item"><a href="#contact">Contact&nbsp;Me</a></li>
              <li className="navigation__item"><a href="#">Resume</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;