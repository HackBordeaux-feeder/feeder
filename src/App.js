import React, { Component } from 'react';
import cookies from 'js-cookie'
import CSSModules from 'react-css-modules';

// Components
import Feeder from './Feeder'
import Login from './js/login/Login'

// CSS
import styles from './App.css'

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
        <div styleName="topNav">
          <ul>
            <li styleName="feed"><a href="">Feed</a></li>
            <li styleName="settings"><a styleName="active" href="#">Settings</a></li>
          </ul>
        </div>
       {/* <div styleName="content" style={{marginTop: "40px"}}> */}
         {this.generateContent()}
       {/* </div> */}
      </div>
    );
  }
}

export default CSSModules(App, styles, {allowMultiple:true});;
