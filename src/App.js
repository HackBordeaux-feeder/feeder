import React, { Component } from 'react';
import cookies from 'js-cookie'
import CSSModules from 'react-css-modules';
import axios from 'axios'

// Components
import Feeder from './Feeder'
import Settings from './js/settings/Settings'
import Login from './js/login/Login'
import Signup from './js/signup/Signup'

// CSS
import styles from './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.generateContent = this.generateContent.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)

    const token = cookies.get('token')
    if (token) {
      axios.get(`${process.env.API_URL || 'http://localhost:5000'}/user/${token}`)
      .then((response) => {
        this.setState({ user: response.data })
      })
      .catch(() => {
        this.handleLogout()
      })
    }

    this.state = {
      user: null,
      route: "feed"
    }
  }

  handleLogin (user) {
    this.setState({ user })
  }

  handleRouteChange (route) {
    this.setState({ route })
  }

  handleLogout () {
    cookies.remove('token')
    this.setState({user: null})
  }

  addMenu() {
    const token = cookies.get('token')
    const user = this.state.user

      if ((token || user)) {
        return (
          <ul>
            <li styleName="feed"><a styleName={this.state.route === 'feed' ? 'active' : ''} href="#" onClick={() => this.handleRouteChange('feed')}>Feed</a></li>
            <li styleName="settings"><a styleName={this.state.route === 'settings' ? 'active' : ''} href="#" onClick={() => this.handleRouteChange('settings')}>Settings</a></li>
            <li styleName="logout" onClick={()=>this.handleLogout()}><a>Logout</a></li>
          </ul>
        )
      }
  }

  generateContent () {
    const token = cookies.get('token')
    const user = this.state.user

    if ((token || user) && this.state.route === "feed") {
      return <Feeder token={token} user={user} />
    } else if ((token || user) && this.state.route === "settings") {
      return <Settings token={token} user={user} />
    } else if (this.state.route === "signup") {
      return (
        <Signup
          handleLogin={this.handleLogin}
          handleSignup={(e) => { e.preventDefault(); this.setState({ route: 'signup' }) }}
          handleBack={(e) => { e.preventDefault(); this.setState({ route: 'login' }) }}
        />
      )
    } else {
      return (
        <Login
          handleLogin={this.handleLogin}
          handleSignup={(e) => { e.preventDefault(); this.setState({ route: 'signup' }) }}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <div styleName="topNav">
            {this.addMenu()}
        </div>
       {/* <div styleName="content" style={{marginTop: "40px"}}> */}
         {this.generateContent()}
       {/* </div> */}
      </div>
    );
  }
}

export default CSSModules(App, styles, {allowMultiple:true});;
