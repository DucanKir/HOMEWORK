import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Card from './components/Card'

class App extends React.Component {

  constructor() {
    super()
    this.state = {lines: []}
  }

  componentDidMount() {
    fetch('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => res.json())
      .then(data => {
        this.setState({ lines: data })
      })
    setInterval(() =>
      fetch('https://api.tfl.gov.uk/line/mode/tube/status')
        .then(res => res.json())
        .then(data => {
          this.setState({ lines: data })
        })
    , 300000)

  }

  render() {
    return (
      <div className="columns is-multiline">
        {this.state.lines.map(line =>
          <Card
            key = {line.name}
            name = {line.name}
            status = {line.lineStatuses[0].statusSeverityDescription}
          />
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
