import React from 'react'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const errors = { ...this.state.errors, [e.target.name]: ''}
    this.setState({ [e.target.name]: e.target.value, errors})
  }

  handleSubmit(e) {
    e.preventDefault()

    fetch('https://winebored.herokuapp.com/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if(res.status === 422) {
          res.json()
            .then(data => this.setState({ errors: data.errors}))
        } else {
          this.props.history.push('/login')
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
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            </div>
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
              {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
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
              {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="••••••••"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
            </div>

            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register
