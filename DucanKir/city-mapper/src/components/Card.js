import React from 'react'

const Card = (props) => {
  return (
    <div className="column is-one-quarter-desktop is-half-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{props.name}</div>
        </div>
        <div className="card-content">
          <p className="title is-4">{props.status}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
