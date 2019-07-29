import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

class WineIndex extends React.Component {
  constructor() {
    super()

    this.state = { wines: [] }
  }

  componentDidMount() {
    fetch('https://winebored.herokuapp.com/wines')
      .then(res => res.json())
      .then(data => this.setState({ wines: data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.wines.map(wine =>
              <div
                key={wine._id}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Link to={`/wines/${wine._id}`}>
                  <Card name={wine.name} image={wine.image} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default WineIndex
