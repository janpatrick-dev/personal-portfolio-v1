import React from 'react';
import Card from '../card/Card';

function Personal() {

  return (
    <section className="section-personal" id="projects">
      <h2 className="heading-secondary u-margin-bottom-medium">Personal&nbsp;Projects</h2>
      <div className="personal">
        <Card 
          title="The Book Keeper"
          description="The Book Keeper is a user-friendly book organizer app that allows you to add, 
          update, and delete books in your collection. Keep track of your reading progress by updating 
          the read status of each book. Stay organized and easily manage your personal library with this 
          app. Built using MERN stack." 
          skills={['React', 'MongoDB', 'Express', 'Node.js', 'SCSS']}
          links={[
            {url: 'https://the-book-keeper.netlify.app/', iconType: 'external'},
            {url: 'https://github.com/janpatrick-dev/the-book-keeper/', iconType: 'github'}
          ]} 
        />
        <Card 
          title="Google Keep Clone" 
          description="A clone of the Google Keep application. Built using MERN stack." 
          skills={['React', 'MongoDB', 'Express', 'Node.js', 'SCSS']}
          links={[
            {url: 'https://keep-mern.netlify.app/', iconType: 'external'},
            {url: 'https://github.com/janpatrick-dev/google-keep-clone', iconType: 'github'}
          ]} 
        />
        <Card 
          title="Personal Portfolio V1" 
          description="My first personal online portfolio. Built with React." 
          skills={['React', 'SCSS']}
          links={[
            {url: 'https://www.janpatrickpalacio.com/', iconType: 'external'},
            {url: 'https://github.com/janpatrick-dev/personal-portfolio-v1', iconType: 'github'}
          ]} 
        />
      </div>
    </section>
  );
}

export default Personal;