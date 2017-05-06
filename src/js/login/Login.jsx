
import React, { Component } from 'react'

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
    
    console.log('Hey there, are you done? this is the user secret data', data)
  }

  render() {
    return (
      <div className="login__container">
        <h1 className="login__title">Feedr</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="login__username" className="login__label">User name</label>
          <input id="login__username" ref={(ref) => this.username = ref} className="login__input"/>
          <label for="login__password" className="login__label">Password</label>
          <input id="login__password" ref={(ref) => this.password = ref} className="login__input" type="password" />
          <input className="login__submit" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
