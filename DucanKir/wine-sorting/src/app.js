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
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
