import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'


import 'bulma'
import './style.scss'


import Register from './components/auth/Register'
import Login from './components/auth/Login'
import WineIndex from './components/wines/Index'
import WineShow from './components/wines/Show'
import Home from './components/pages/Home'
import New from './components/wines/New'
import Edit from './components/wines/Edit'
import Navbar from './components/common/Navbar'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/wines/:id/edit" component={Edit} />
          <Route path="/wine/new" component={New} />
          <Route path="/wines/:id" component={WineShow} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/wines" component={WineIndex} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
