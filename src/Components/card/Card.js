import React from 'react';
import CardLink from '../card/CardLink'
import CardSkill from '../card/CardSkill'

function Card(props) {

  function handleCardPress(e) {
    window.open(props.links[0].url, "_blank");
  }

  return (
    <div className="card" onClick={handleCardPress}>
      <div className="card__top-content u-margin-bottom-medium">
        {props.iconSrc ? <img src={props.iconSrc} alt="Project" className="card__image" /> : null }
        <h3 className="heading-tertiary">
          <span className="card__title">{props.title}</span> 
        </h3>
        <p className="card__description">{props.description}</p>
      </div>
      <div className="card__bottom-content">
        <div className="card__skills">
          {props.skills ? props.skills.map((skill, i) => <CardSkill key={i} skill={skill} />) : null}
        </div>
        <div className="card__links">
          {props.links ? props.links.map((link, i) => <CardLink key={i} url={link.url} iconType={link.iconType} />) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;