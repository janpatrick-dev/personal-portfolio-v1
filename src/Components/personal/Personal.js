import React from 'react';
import Card from '../card/Card';

function Personal() {

  return (
    <section className="section-personal" id="projects">
      <h2 className="heading-secondary u-margin-bottom-medium">Personal&nbsp;Projects</h2>
      <div className="personal">
        <Card title="Google Keep Clone" 
              description="A clone of the Google Keep application. Built with React." 
              skills={['React', 'MongoDB', 'Express', 'Node.js', 'SCSS']}
              links={[
                {url: 'https://keep-mern.netlify.app/', iconType: 'external'},
                {url: 'https://github.com/janpatrick-dev/google-keep-clone', iconType: 'github'}
              ]} />
        <Card title="Personal Portfolio V1" 
              description="My first personal online portfolio. Built with React." 
              skills={['React', 'SCSS']}
              links={[
                {url: 'https://www.janpatrickpalacio.com/', iconType: 'external'},
                {url: 'https://github.com/janpatrick-dev/personal-portfolio-v1', iconType: 'github'}
              ]} />
      </div>
    </section>
  );
}

export default Personal;