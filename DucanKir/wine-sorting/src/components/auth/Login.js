import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const formData = {...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('https://winebored.herokuapp.com/login', this.state.formData)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(() => {
        Auth.removeToken()
        this.setState({error: 'Invalid credentials'})
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
