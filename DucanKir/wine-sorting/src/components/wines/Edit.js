import React from 'react'
import axios from 'axios'

class Edit extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {

    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ formData: res.data}))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value}
    const errors = { ...this.state.errors, [e.target.name]: ''}
    this.setState({ formData, errors})
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()
    const wineId = this.props.match.params.id
    axios.put(`https://winebored.herokuapp.com/wines/${wineId}`, this.state.formData, {
      headers: {'Authorization': `Bearer ${token}`}
    })
      .then(() => this.props.history.push(`/wines/${wineId}`))
      .catch(err => this.setState({errors: err.response.data.errors}))

  }

  render() {
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
                  placeholder="eg: Cheddar"
                  onChange={this.handleChange}
                  value={this.state.formData.name || ''}
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
                  value={this.state.formData.origin || ''}
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
                  value={this.state.formData.image || ''}
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
                  value={this.state.formData.tastingNotes || ''}
                />
              </div>
              {this.state.errors.tastingNotes && <small className="help is-danger">{this.state.errors.tastingNotes}</small>}
            </div>

            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Edit
