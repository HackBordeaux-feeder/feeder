
import React, { Component } from 'react'
import axios from 'axios'
import CSSModules from 'react-css-modules'

import styles from '../login/login.css'

class Signup extends Component {
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
      user_name: this.username.value,
      password: this.password.value,
      email: this.email.value,
    }

    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/auth/signup`, data)
    .then((response) => {
      this.props.handleSignup()
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
          <label htmlFor="login__email" styleName="login__label">Email</label>
          <input id="login__email" ref={(ref) => this.email = ref} styleName="login__input"/>
          <label htmlFor="login__password" styleName="login__label">Password</label>
          <input id="login__password" ref={(ref) => this.password = ref} styleName="login__input" type="password" />
          <input styleName="login__submit" type="submit" value="Register" />
          <button onClick={this.props.handleBack}>Back</button>
          {this.state.error}
        </form>
      </div>
    );
  }
}

export default CSSModules(Signup, styles, {allowMultiple:true});
