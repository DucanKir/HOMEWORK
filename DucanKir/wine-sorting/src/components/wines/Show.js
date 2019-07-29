import React from 'react'

class WineShow extends React.Component {
  constructor() {
    super()

    this.state = {
      wine: {}
    }
  }

  componentDidMount() {

    fetch(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => this.setState({ wine: data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-2">{this.state.wine.name}</h1>
          <h2 className="subtitle is-4">{this.state.wine.origin}</h2>

          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.wine.image} alt={this.state.wine.name} />
              </figure>
            </div>
            <div className="column">
              <p>{this.state.wine.tastingNotes}</p>
            </div>
            <div className="media-content">
              <p className="subtitle is-6">Grape: {this.state.wine.grape}</p>
              <p className="subtitle is-6">ABV: {this.state.wine.abv}%</p>
              <p className="subtitle is-6">£{this.state.wine.price}</p>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default WineShow
