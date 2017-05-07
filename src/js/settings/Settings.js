import React, { Component } from 'react'
import axios from 'axios'
// import cookies from 'js-cookie'
import CSSModules from 'react-css-modules';

import styles from './Settings.css'

class Settings extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.state = {
      service: 'Facebook',
      option: '',
      facebookUser: '',
      facebookPass: '',
    }
  }

  handleServiceChange(event) {
    console.log(event.target.value)
    this.setState({service: event.target.value});
  }
  handleDelete(id){
    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/deleteOption`, id, { withCredentials: true })
  }
  handleSubmit (e) {
    e.preventDefault()
    const data = {
      service: this.state.service,
      option: this.state.option
    }
    const data2 = {
      fb_username: this.state.facebookUser,
      fb_password: this.state.facebookPass
    }
    if(this.state.facebookUser && this.state.facebookPass !== ''){
      axios.put(`${process.env.API_URL || 'http://localhost:5000'}/fbcredentials`, data2, { withCredentials: true })
    }
    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/subscribe`, data, { withCredentials: true })
    .then((response) => {
      // check if it has updated correctly?
      this.setState({option: ''})
    })
    .catch(() => {
      this.setState({
        error: 'Error logging in'
      })
    })
  }

  handleOptionChange(event) {
   this.setState({option: event.target.value});
 }
 handleUserChange(event) {
  this.setState({facebookUser: event.target.value});
 }
 handlePassChange(event) {
  this.setState({facebookPass: event.target.value});
 }

  renderOptions () {
    const service = this.state.service
    if (service === 'Facebook') {
      return (
        <div>
          <label style={{color: 'black'}} htmlFor="facebook__user" styleName="settings__label">Facebook Credentials</label><br/>
          <input placeholder="Your user" id="facebook__user" value={this.state.facebookUser} styleName="settings__input" onChange={this.handleUserChange}/>
          <input placeholder="Your password" id="facebook_password" value={this.state.facebookPass} type='password' styleName="settings__input" onChange={this.handlePassChange}/><br/>
          <label htmlFor="settings__option" styleName="settings__label">Url of the person/group/page you want to follow</label>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/>
          <input styleName="settings__submit" type="submit" value="Save" />
          <ul>
          {this.props.user.options.filter((u) => {
            return (u.service === 'Facebook')}).map((a) => {
                return(<li key={a.id}>{a.option}<input type='submit' value='Delete' onChange={this.handleDelete(a.id)}/></li>)
            })
          }
          </ul>
        </div>
      )
    } else if (service === "Twitter") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Twitter username</label>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/>
          <input styleName="settings__submit" type="submit" value="Add Source" />
        </div>
      )
    } else if (service === "Medium") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Medium username</label>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/>
          <input styleName="settings__submit" type="submit" value="Add Source" />
        </div>
      )
    }
  }

  render() {
    return (
      <div styleName="settings__container">
        <h1 styleName="settings__title">Add new feeds!</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="settings__source" styleName="settings__label">Select the source of the feed</label>
          <select styleName="source__select" id="settings__source" onChange={this.handleServiceChange}>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Medium">Medium</option>
          </select>
          {this.renderOptions()}
        </form>
      </div>
    );
  }
}

export default CSSModules(Settings, styles, {allowMultiple:true});;
