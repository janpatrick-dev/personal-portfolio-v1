import React from 'react';
import Card from '../card/Card';

function Work() {

  return (
    <section class="section-projects" id="projects">
      <h2 class="heading-secondary u-margin-bottom-medium">Work&nbsp;Projects</h2>
      <div class="projects">
        <Card 
            iconSrc="../img/rabbit-arcade.jpg"
            title="Rabbit Arcade" 
            description="Rabbit Arcade is a digital version of physical arcades like TimeZone, Power Station, Tom's World, Chuck E. Cheese, Nickelmania, and others. Built with Android Studio and Java." 
            skills={['Android Studio', 'Java']}
            links={[
              {url: 'https://play.google.com/store/apps/details?id=com.rabbitarcade&hl=en&gl=US', iconType: 'gp'}
            ]} />
        <Card 
            iconSrc="../img/flying-baby.jpg"
            title="Flying Baby" 
            description="Flying Baby is a fun game to test your tap skills. Simply tap, tappity tap, tap on your screen to fly up, avoid obstacles, or collect power ups. Built with Unity C#." 
            skills={['Unity', 'C#']}
            links={[
              {url: 'https://play.google.com/store/apps/details?id=com.rabbitarcade.flyingbaby&hl=en&gl=US', iconType: 'gp'}
            ]} />
        <Card 
            iconSrc="../img/dwv.jpg"
            title="Double Win Vegas Slots" 
            description="Double Win Vegas is a FREE online multiplayer casino game where you play with people from all over the world." 
            skills={['Unity', 'C#']}
            links={[
              {url: 'https://play.google.com/store/apps/details?id=ppl.unity.cubeslots&hl=en&gl=US', iconType: 'gp'},
              {url: 'https://apps.apple.com/us/app/double-win-vegas-casino-slots/id1056430196', iconType: 'ios'}
            ]} />
      </div>
    </section>
  );
}

export default Work;