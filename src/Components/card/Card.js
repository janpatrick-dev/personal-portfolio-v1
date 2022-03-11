import React from 'react';
import CardLink from '../card/CardLink'
import CardSkill from '../card/CardSkill'

function Card(props) {

  return (
    <div class="card">
      <div class="card__top-content u-margin-bottom-medium">
        {props.iconSrc ? <img src={props.iconSrc} alt="Project" class="card__image" /> : null }
        <h3 class="heading-tertiary">
          <span class="card__title">{props.title}</span> 
        </h3>
        <p class="card__description">{props.description}</p>
      </div>
      <div class="card__bottom-content">
        <div class="card__skills">
          {props.skills ? props.skills.map(skill => <CardSkill skill={skill} />) : null}
        </div>
        <div class="card__links">
          {props.links ? props.links.map(link => <CardLink url={link.url} iconType={link.iconType} />) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;