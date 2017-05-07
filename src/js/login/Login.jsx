
import React, { Component } from 'react'
import axios from 'axios'
import cookies from 'js-cookie'
import CSSModules from 'react-css-modules';

import styles from './login.css'

class Login extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      error: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const data = {
      username: this.username.value,
      password: this.password.value
    }

    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/auth/login`, data)
    .then((response) => {
      cookies.set('token', response.data.token, { expires: 1 })
      this.props.handleLogin(response.data.user)
    })
    .catch(() => {
      this.setState({
        error: 'Error logging in'
      })
    })
  }

  render() {
    return (
      <div styleName="login__container">
        <h1 styleName="login__title">Feedr</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login__username" styleName="login__label">User name</label>
          <input id="login__username" ref={(ref) => this.username = ref} styleName="login__input"/>
          <label htmlFor="login__password" styleName="login__label">Password</label>
          <input id="login__password" ref={(ref) => this.password = ref} styleName="login__input" type="password" />
          <input styleName="login__submit" type="submit" value="Login" />
          <button onClick={this.props.handleSignup}>Sign up</button>
          {this.state.error}
        </form>
      </div>
    );
  }
}

export default CSSModules(Login, styles, {allowMultiple:true});
