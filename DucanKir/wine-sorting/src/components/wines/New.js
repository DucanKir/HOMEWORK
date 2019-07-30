import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class New extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value}
    const errors = { ...this.state.errors, [e.target.name]: ''}
    this.setState({ formData, errors})
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.post('https://winebored.herokuapp.com/wines', this.state.formData, {
      headers: {'Authorization': `Bearer ${token}`}
    })
      .then(() => this.props.history.push('/wines'))
      .catch(err => this.setState({errors: err.response.data.errors}))

  }

  render() {
    console.log("render")
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  placeholder="Wine name"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.name && <small className="help is-danger">{this.state.errors.name}</small>}
            </div>
            <div className="field">
              <label className="label">Origin</label>
              <div className="control">
                <input
                  className="input"
                  name="origin"
                  placeholder="eg: England"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.origin && <small className="help is-danger">{this.state.errors.origin}</small>}
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  name="image"
                  placeholder="https//..."
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.image && <small className="help is-danger">{this.state.errors.image}</small>}
            </div>
            <div className="field">
              <label className="label">tastingNotes</label>
              <div className="control">
                <textarea
                  className="input"
                  name="tastingNotes"
                  placeholder="tasty"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.tastingNotes && <small className="help is-danger">{this.state.errors.tastingNotes}</small>}
            </div>
            <div className="field">
              <label className="label">grape</label>
              <div className="control">
                <textarea
                  className="input"
                  name="grape"
                  placeholder="tasty"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.grape && <small className="help is-danger">{this.state.errors.grape}</small>}
            </div>
            <div className="field">
              <label className="label">price</label>
              <div className="control">
                <textarea
                  className="input"
                  name="price"
                  placeholder="tasty"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.price && <small className="help is-danger">{this.state.errors.price}</small>}
            </div>
            <div className="field">
              <label className="label">abv</label>
              <div className="control">
                <textarea
                  className="input"
                  name="abv"
                  placeholder="tasty"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.abv && <small className="help is-danger">{this.state.errors.abv}</small>}
            </div>

            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default New
