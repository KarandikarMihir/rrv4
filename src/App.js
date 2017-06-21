import React from 'react'
import { BrowserRouter, Route, Redirect, Link, withRouter } from 'react-router-dom'

const authService = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  logout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <AuthButton />
        <li><Link to="/public">{'Public'}</Link></li>
        <li><Link to="/protected">{'Protected'}</Link></li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/protected" component={Protected} />
    </div>
  </BrowserRouter>
)

const AuthButton = withRouter(({ history }) => {
  return authService.isAuthenticated
  ?
    (
      <button
        onClick={() => authService.logout(() => history.push('/'))}
      >
        {'Log out'}
      </button>
    )
  :
    <div></div>
})

const ProtectedRoute = ({ path, component: Component }) => (
  <Route path={path} render={(props) => {
    return authService.isAuthenticated
      ?
        <Component />
      :
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
  }} />
)

const Public = () => <h1>{'Public'}</h1>
const Protected = () => <h1>{'Protected'}</h1>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    authService.login(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render() {
    console.log(this.props);
    const path = this.props.location.state.from.pathname || '/'
    if (this.state.redirectToReferrer) {
      return (
        <Redirect to={path} />
      )
    }
    return (
      <div>
        {'You\'re not logged in '}
        <button onClick={this.login}>{'Login'}</button>
      </div>
    )
  }
}

export default App
