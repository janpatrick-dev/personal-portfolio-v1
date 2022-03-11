import React from 'react';
import ExperienceDescription from './ExperienceDescription';

function ExperienceItem(props) {

  return (
    <div class="experience__content u-margin-bottom-large">
      <div class="experience__role-details">
        <h3 class="heading-tertiary">
          <span class="experience__role-title">{props.jobTitle}</span>
          <span class="experience__company">{props.company}</span>
          <span class="experience__duration">{props.duration}</span>
        </h3>
      </div>
      <div class="experience__role-description">
        <ul class="experience__description-list">
          {props.workDone.map(workDescription => <ExperienceDescription workDescription={workDescription} />)}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;