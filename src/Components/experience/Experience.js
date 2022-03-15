import React from 'react';
import ExperienceItem from './ExperienceItem';

function Experience() {

  return (
    <section className="section-experience" id="experience">
      <h2 className="heading-secondary u-margin-bottom-medium">Experience</h2>
      <ExperienceItem 
        jobTitle="Software Engineer" 
        company="Mad Underground" 
        duration="January 2020 - Present"
        workDone={[
          "Develop a mobile application called the “Rabbit Arcade” using Android Studio and Java",
          "Translate design from Adobe XD to android app using Android Studio and XML",
          "Develop a game called the “Flying Baby” using Unity C# to be played by the users of the Rabbit Arcade app",
          "Create a developer app using Android Studio to be used by the game developers to test and make their game call our scoring endpoint"
        ]} />
      <ExperienceItem 
        jobTitle="Software Engineer" 
        company="Anino Inc." 
        duration="April 2018 - January 2020"
        workDone={[
          "Developed major features on the frontend side: In-game leaderboards, Subscription, Milestone Rewards",
          "Maintained major features of the project using Unity C#",
          "Communicated with engineers, designers, producers, and artists on a daily basis"
        ]} />
      <ExperienceItem 
        jobTitle="Software Engineer Intern" 
        company="Anino Inc." 
        duration="August 2017 - March 2018"
        workDone={[
          "Developed new slot machines and features",
          "Minor bug fixing",
          "Maintained minor features of the project using Unity C#"
        ]} />
    </section>
  );
}

export default Experience;