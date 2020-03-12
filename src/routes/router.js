/*
 * @Author: amujoe
 * @Date: 2020-01-16 16:39:15
 * @Description: file content
 */
import React, { Component} from 'react'
// BrowserRouter or HashRouter
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Index from "../pages/index/Index"
// import NoPage from "../pages/base/NoPage"
import Login from "../pages/login/Login"
import Layout from "../pages/layout/Layout"


class RouterClass extends Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/Layout" component={Layout} />
            <Route path="/index" component={Index} />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default RouterClass