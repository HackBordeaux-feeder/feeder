
import React, { Component } from 'react';
import cookies from 'js-cookie'

// Components
import Feeder from './Feeder'
import Login from './js/login/Login'

class App extends Component {
  constructor (props) {
    super(props)
    
    this.generateContent = this.generateContent.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    
    this.state = {
      user: null
    }
  }
  
  handleLogin (user) {
    this.setState({ user })
  }

  generateContent () {
    const token = cookies.get('token')
    const user = this.state.user

    if (token || user) {
      return <Feeder token={token} user={user} />
    } else {
      return <Login handleLogin={this.handleLogin} />
    }
  }

  render() {
    return (
      <div>
        {this.generateContent()}
      </div>
    );
  }
}

export default App;
