import React from 'react';
import Card from '../card/Card';

function Personal() {

  return (
    <section class="section-personal" id="personal">
      <h2 class="heading-secondary u-margin-bottom-medium">Personal&nbsp;Projects</h2>
      <div class="personal">
        <Card title="Weather App" 
              description="A simple weather app using OpenWeather API. Built with React." 
              skills={['React', 'SCSS', '3rd Party API']}
              links={[
                {url: 'https://weather-app-pat.netlify.app/', iconType: 'external'},
                {url: 'https://github.com/janpatrick-dev/weather-app', iconType: 'github'},
                {url: 'https://trello.com/b/8tHsPhCg/weather-app', iconType: 'trello'}
              ]} />
        <Card title="Google Keep Clone" 
              description="A clone of the Google Keep application. Built with React." 
              skills={['React', 'MongoDB', 'Express', 'Node.js', 'SCSS']}
              links={[
                {url: 'https://keep-mern.netlify.app/', iconType: 'external'},
                {url: 'https://github.com/janpatrick-dev/google-keep-clone', iconType: 'github'}
              ]} />
        <Card title="Personal Portfolio V1" 
              description="My first personal online portfolio. Built with HTML &amp; SCSS." 
              skills={['React', 'SCSS']}
              links={[
                {url: '#', iconType: 'external'},
                {url: 'https://github.com/janpatrick-dev/portfolio-v1', iconType: 'github'}
              ]} />
      </div>
    </section>
  );
}

export default Personal;