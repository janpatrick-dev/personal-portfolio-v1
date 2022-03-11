import React from 'react';

function Experience() {

  return (
    <section class="section-experience" id="experience">
      <h2 class="heading-secondary u-margin-bottom-medium">Experience</h2>
      <div class="experience__content u-margin-bottom-large">
        <div class="experience__role-details">
          <h3 class="heading-tertiary">
            <span class="experience__role-title">Software Engineer</span>
            <span class="experience__company">Mad Underground</span>
            <span class="experience__duration">January 2020 - Present</span>
          </h3>
        </div>
        <div class="experience__role-description">
          <ul class="experience__description-list">
            <li class="experience__description-item">Developed a mobile application called the “Rabbit Arcade” using Android Studio and Java</li>
            <li class="experience__description-item">Translated design from Adobe XD to android app using Android Studio and XML</li>
            <li class="experience__description-item">Developed a game called the “Flying Baby” using Unity C# to be played by the users of the Rabbit Arcade app </li>
            <li class="experience__description-item">Created a developer app using Unity C# to be used by the game developers to test and make their game call our scoring endpoint </li>
          </ul>
        </div>
      </div>
  
      <div class="experience__content u-margin-bottom-large">
        <div class="experience__role-details">
          <h3 class="heading-tertiary">
            <span class="experience__role-title">Software Engineer</span>
            <span class="experience__company">Anino Inc.</span>
            <span class="experience__duration">April 2018 - January 2020</span>
          </h3>
        </div>
        <div class="experience__role-description">
          <ul class="experience__description-list">
            <li class="experience__description-item">Developed major features on the frontend side: In-game leaderboards, Subscription, Milestone Rewards</li>
            <li class="experience__description-item">Maintained major features of the project using Unity C#</li>
            <li class="experience__description-item">Communicate with engineers, designers, producers, and artists on a daily basis</li>
          </ul>
        </div>
      </div>

      <div class="experience__content">
        <div class="experience__role-details">
          <h3 class="heading-tertiary">
            <span class="experience__role-title">Software Engineer Intern</span>
            <span class="experience__company">Anino Inc.</span>
            <span class="experience__duration">August 2017 - March 2018</span>
          </h3>
        </div>
        <div class="experience__role-description">
          <ul class="experience__description-list">
            <li class="experience__description-item">Developed new slot machines and features</li>
            <li class="experience__description-item">Minor bug fixing</li>
            <li class="experience__description-item">Maintained minor features of the project using Unity C#</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;