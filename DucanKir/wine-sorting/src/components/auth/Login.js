import React from 'react'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()

    fetch('https://winebored.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if(res.status === 401) {
          this.setState({ error: 'Invalid credentials'})
          localStorage.removeItem('token')
        } else {
          res.json()
            .then(data => {
              localStorage.setItem('token', data.token)
              this.props.history.push('/wines')
            })
        }
      })
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="email@smth.com"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register
