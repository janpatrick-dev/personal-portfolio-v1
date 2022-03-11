import React from 'react';

function About() {

  return (
    <section class="section-about" id="about">
      <h2 class="heading-secondary u-margin-bottom-medium">About&nbsp;Me</h2>
      <div class="about-me flex__about-me">
        <div class="about-me__text-container">
          <p class="paragraph u-margin-right-large flex__basis-50 flex__no-grow">
            <span class="about-me__text about-me__text--1">
              My name is Patrick and I enjoy programming and video games! I have been working as a professional for almost 4 years.
              My passion in programming started back in 2012 when I started college. 
            </span>
            <span class="about-me__text about-me__text--2">
              My goal is to have an opportunity to work at a company that can 
              make use of my skills and experience and support me to skyrocket my growth in the tech industry.
            </span>
            <span class="about-me__text about-me__text--3">These are the technologies I’ve been learning recently:</span>
          </p>
          <ul class="about-me__skills">
            <li class="about-me__skill-item">JavaScript (ES6)</li>
            <li class="about-me__skill-item">React</li>
            <li class="about-me__skill-item">HTML5 / CSS5</li>
            <li class="about-me__skill-item">Sass</li>
          </ul>
        </div>
        <div class="about-me__photo flex__no-grow"></div>
      </div>
    </section>
  );
}

export default About;