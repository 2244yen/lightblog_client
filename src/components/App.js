import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../routes'
import Layout from './Layout'
import authenticate from '../routes/authenticate'

class App extends React.Component {
  renderRoutes (routes) {
    let result = '';
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          component={route.path === '/editor' ? authenticate(route.component) : route.component}
          exact={route.exact}
        />
      })
    }
    return result;
  }

  render () {
    return (
      <Router>
        <Switch>
          <Layout>
            { this.renderRoutes(routes) }
          </Layout>
        </Switch>
      </Router>
    )
  }
}

export default App