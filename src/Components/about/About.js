import React from 'react';

function About() {

  return (
    <section className="section-about" id="about">
      <h2 className="heading-secondary u-margin-bottom-medium">About&nbsp;Me</h2>
      <div className="about-me">
        <div className="about-me__text-container">
          <p className="paragraph">
            <span className="about-me__text">
              My name is Patrick and I enjoy programming and video games! I have been working as a professional for almost 4 years.
              My passion in programming started back in 2012 when I started college. 
            </span>
            <span className="about-me__text">
              My goal is to have an opportunity to work at a company that can 
              make use of my skills and experience and support me to skyrocket my growth in the tech industry.
            </span>
            <span className="about-me__text">These are the technologies I’ve been learning recently:</span>
          </p>
          <ul className="about-me__skills">
            <li className="about-me__skill-item">JavaScript (ES6)</li>
            <li className="about-me__skill-item">React</li>
            <li className="about-me__skill-item">HTML5 / CSS5</li>
            <li className="about-me__skill-item">Sass</li>
          </ul>
        </div>
        <div className="about-me__photo"></div>
      </div>
    </section>
  );
}

export default About;