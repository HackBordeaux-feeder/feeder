
import React, { Component } from 'react'
import axios from 'axios'
import cookies from 'js-cookie'

import './login.css'

class Login extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const data = {
      username: this.username.value,
      password: this.password.value
    }

    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/auth/login`, data)
    .then((response) => {
      cookies.set('token', response.token, { expires: 1 })
      this.props.handleLogin(response.user)
    })
    .catch(() => {
      this.setState({
        error: 'Error logging in'
      })
    })
  }

  render() {
    return (
      <div className="login__container">
        <h1 className="login__title">Feedr</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login__username" className="login__label">User name</label>
          <input id="login__username" ref={(ref) => this.username = ref} className="login__input"/>
          <label htmlFor="login__password" className="login__label">Password</label>
          <input id="login__password" ref={(ref) => this.password = ref} className="login__input" type="password" />
          <input className="login__submit" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
