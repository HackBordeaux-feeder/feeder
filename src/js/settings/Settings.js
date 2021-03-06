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
      facebookPass: ''
    }
  }

  handleServiceChange(event) {
    console.log(event.target.value)
    this.setState({service: event.target.value});
  }
  handleDelete(e, id){
    e.preventDefault()
    this.props.handleOptionsChange(this.props.user.options.filter((option)=>(
      option.id !== id
    )))
    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/deleteOption`, {id:id}, { withCredentials: true })
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
    if(this.state.option !== ''){
      axios.post(`${process.env.API_URL || 'http://localhost:5000'}/subscribe`, data, { withCredentials: true })
      .then((response) => {
        this.props.handleOptionsChange([...this.props.user.options, {id: response.data.id, service: data.service, option: data.option}])
        // check if it has updated correctly?
        this.setState({option: ''})
      })
      .catch(() => {
        this.setState({
          error: 'Error logging in'
        })
      })
    }
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
          <label htmlFor="facebook__user" styleName="settings__label">Facebook Credentials</label><br/>
          <div>
            <input placeholder="Username" id="facebook__user" value={this.state.facebookUser} styleName="settings__input" onChange={this.handleUserChange}/>
            <input placeholder="Password" id="facebook_password" value={this.state.facebookPass} type='password' styleName="settings__input" onChange={this.handlePassChange}/><br/>
          </div>
          <label htmlFor="settings__option" styleName="settings__label">Url of the person/group/page you want to follow</label>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/><br/>
          <input styleName="settings__submit" type="submit" value="Save" />
          <ul>
          {this.props.user.options.filter((u) => {
            return (u.service === 'Facebook')}).map((a) => {
                return(<label>
                  <li key={a.id}>{a.option}<input style={{visibility:'hidden'}} type='submit' value='' onClick={(e) => {this.handleDelete(e, a.id)}}/>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                          </svg>
                        </li>
                </label>)
            })
          }
          </ul>
        </div>
      )
    } else if (service === "Twitter") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Twitter username</label><br/>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/><br/>
          <input styleName="settings__submit" type="submit" value="Add Source" />
          <ul>
          {this.props.user.options.filter((u) => {
            return (u.service === 'Twitter')}).map((a) => {
                return(<label>
                  <li key={a.id}>{a.option}<input style={{visibility:'hidden'}} type='submit' value='' onClick={(e) => {this.handleDelete(e, a.id)}}/>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                          </svg>
                        </li>
                </label>)
            })
          }
          </ul>
        </div>
      )
    } else if (service === "Medium") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Medium username</label><br/>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/><br/>
          <input styleName="settings__submit" type="submit" value="Add Source" />
          <ul>
          {this.props.user.options.filter((u) => {
            return (u.service === 'Medium')}).map((a) => {
                return(
                      <label>
                        <li key={a.id}>{a.option}<input style={{visibility:'hidden'}} type='submit' value='' onClick={(e) => {this.handleDelete(e, a.id)}}/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                                  <path d="M0 0h24v24H0V0z" fill="none"/>
                                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
                                  <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                              </li>
                      </label>
                )
            })
          }
          </ul>
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
