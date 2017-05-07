
import React, { Component } from 'react';
import cookies from 'js-cookie'

// Components
import Feeder from './Feeder'
import Login from './js/login/Login'

// CSS
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.generateContent = this.generateContent.bind(this)
    
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
        <div className="topNav">
          <ul>
            <li className="feed"><a href="">Feed</a></li>
            <li className="settings"><a className="active" href="#">Settings</a></li>
          </ul>
        </div>
       {/* <div className="content" style={{marginTop: "40px"}}> */}
         {this.generateContent()}
       {/* </div> */}
      </div>
    );
  }
}

export default App;
