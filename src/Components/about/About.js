import React from 'react';

function About() {

  return (
    <section className="section-about" id="about">
      <h2 className="heading-secondary u-margin-bottom-medium">About&nbsp;Me</h2>
      <div className="about-me">
        <div className="about-me__text-container">
          <p className="paragraph">
            <span className="about-me__text">
              My name is Patrick and I enjoy programming and video games! I'm a Software Engineer with 4+ years experience specializing in the frontend development, android mobile application, and game development.
              {/* Interested in solving challenging tasks and learning new technologies and tools when needed.  */}
            </span>
            <span className="about-me__text">
              Seeking a challenging and rewarding opportunity to use and grow my software engineering skills. Interested in learning new technologies and tools when needed.
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