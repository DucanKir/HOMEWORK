import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link} from 'react-router-dom'

import _ from 'lodash'
import 'bulma'
import './style.scss'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import WineIndex from './components/wines/Index'
import WineShow from './components/wines/Show'
import Home from './components/pages/Home'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/wines">Browse</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>

        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/wines" component={WineIndex} />
        <Route path="/wines/:id" component={WineShow} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </HashRouter>
    )
  }
  // constructor() {
  //   super()
  //   this.state = {
  //     searchTerm: '',
  //     sortTerm: 'name|asc'
  //   }
  // }
  //
  // componentDidMount() {
  //   fetch('https://winebored.herokuapp.com/wines')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ wines: data })
  //     })
  //   this.handleKeyUp = this.handleKeyUp.bind(this)
  //   this.handleChange = this.handleChange.bind(this)
  //   this.filterWines = this.filterWines.bind(this)
  // }
  //
  // handleKeyUp(e) {
  //   this.setState({ searchTerm: e.target.value })
  // }
  //
  // handleChange(e) {
  //   this.setState({ sortTerm: e.target.value })
  // }
  //
  // filterWines() {
  //   const re = new RegExp(this.state.searchTerm, 'i')
  //   const [field, order] = this.state.sortTerm.split('|')
  //
  //   const filterWines = _.filter(this.state.wines, wine => {
  //     return re.test(wine.name) || re.test(wine.nativeName)
  //   })
  //   const sortedCountries = _.orderBy(filterWines, [field], [order])
  //
  //   return sortedCountries
  // }
  // render(){
  //   if(!this.state.wines) return <h2>Loading...</h2>
  //   return (
  //     <section className="section">
  //       <div className="container">
  //         <div className="columns">
  //           <div className="column">
  //             <div className="field">
  //               <input placeholder="search" className="input" onKeyUp={this.handleKeyUp}/>
  //             </div>
  //           </div>
  //           <div className="column">
  //             <div className="field">
  //               <div className="select is-fullwidth">
  //                 <select onChange={this.handleChange}>
  //                   <option value="name|asc">Name A-Z</option>
  //                   <option value="name|desc">Name Z-A</option>
  //                   <option value="price|asc">Price Lo-Hi</option>
  //                   <option value="price|desc">Price Hi-Lo</option>
  //                 </select>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="columns is-multiline">
  //           {this.filterWines().map(wine =>
  //             <div className="column is-half-tablet is-one-quarter-desktop" key={wine._id}>
  //               <Card
  //                 name={wine.name}
  //                 origin={wine.origin}
  //                 image={wine.image}
  //                 tastingNotes={wine.tastingNotes}
  //                 grape={wine.grape}
  //                 abv={wine.abv}
  //                 price={wine.price}
  //               />
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)