import React from 'react';
import ExperienceDescription from './ExperienceDescription';

function ExperienceItem(props) {

  return (
    <div className="experience__content u-margin-bottom-large">
      <div className="experience__role-details">
        <h3 className="heading-tertiary">
          <span className="experience__role-title">{props.jobTitle}</span>
          <span className="experience__company">{props.company}</span>
          <span className="experience__duration">{props.duration}</span>
        </h3>
      </div>
      <div className="experience__role-description">
        <ul className="experience__description-list">
          {props.workDone.map((workDescription, i) => <ExperienceDescription key={i} workDescription={workDescription} />)}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;