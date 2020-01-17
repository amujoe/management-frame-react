/*
 * @Author: amujoe
 * @Date: 1985-10-26 16:15:00
 * @Description: file content
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {

  showLogin = ()  => {
    console.log('showlogin')
    import('./pages/login/login')
      .then( msg => {
        console.log('msg', msg.msg)
      })
      .catch(err => {
        console.log('err', err)
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            欢迎来到 React 世界
          </p>
          <button onClick={this.showLogin}>Load</button>
          <Button type="default" click="showLogin">开启你的旅行</Button>
        </header>
      </div>
    );
  }
}

export default App;
