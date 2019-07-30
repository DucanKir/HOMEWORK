import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import _ from 'lodash'
import axios from 'axios'

class WineIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      wines: [],
      searchTerm: '',
      sortTerm: 'name|asc'
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterWines = this.filterWines.bind(this)

  }

  componentDidMount() {
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data}))
    

  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleChange(e) {
    this.setState({ sortTerm: e.target.value })
  }

  filterWines() {
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')

    const filterWines = _.filter(this.state.wines, wine => {
      return re.test(wine.name) || re.test(wine.nativeName)
    })
    const sortedWines = _.orderBy(filterWines, [field], [order])

    return sortedWines
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="column">
            <div className="field">
              <input placeholder="search" className="input" onKeyUp={this.handleKeyUp}/>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="select is-fullwidth">
                <select onChange={this.handleChange}>
                  <option value="name|asc">Name A-Z</option>
                  <option value="name|desc">Name Z-A</option>
                  <option value="price|asc">Price Lo-Hi</option>
                  <option value="price|desc">Price Hi-Lo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container">

          <div className="columns is-multiline">
            {this.filterWines().map(wine =>
              <div
                key={wine._id}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Link to={`/wines/${wine._id}`}>
                  <Card
                    name={wine.name}
                    image={wine.image}
                    origin={wine.origin}
                    tastingNotes={wine.tastingNotes}
                    grape={wine.grape}
                    abv={wine.abv}
                    price={wine.price}
                  />
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
