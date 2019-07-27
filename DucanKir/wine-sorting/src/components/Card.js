import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="title is-5">{props.name}</div>
      </div>
      <div className="card-image">
        <figure className="image ">
          <img src={props.image} alt={props.name} />
        </figure>
      </div>
      <div className="media-content">
        <p className="subtitle is-6">Origin: {props.origin}</p>
        <p className="subtitle is-6">{props.tastingNotes}</p>
        <p className="subtitle is-6">Grape: {props.grape}</p>
        <p className="subtitle is-6">ABV: {props.abv}%</p>
        <p className="subtitle is-6">£{props.price}</p>
      </div>
    </div>
  )
}

export default Card
