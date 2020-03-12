/*
 * @Author: amujoe
 * @Date: 2020-01-16 16:39:15
 * @Description: file content
 */
import React, { Component} from 'react'

import {HashRouter,Route,Switch} from 'react-router-dom';

import Home from "../pages/home/home"
import Login from "../pages/login/Login"
import Layout from "../pages/layout/Layout"


class Router extends Component {
  render () {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/Layout" component={Layout} />
            <Route path="/index" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}


export default Router