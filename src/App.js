
import React, { Component } from 'react';
import cookies from 'js-cookie'

// Components
import Feeder from './Feeder'
import Login from './js/login/Login'

class App extends Component {
  constructor (props) {
    super(props)
    
    this.generateContent = this.generateContent.bind(this)
  }

  generateContent () {
    const token = cookies.get('token')

    if (token) {
      return <Feeder token={token} />
    } else {
      return <Login />
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
