
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
