/*
 * @Author: amujoe
 * @Date: 1985-10-26 16:15:00
 * @Description: file content
 */
import React, { Component } from 'react';
import { Button, Input, message } from 'antd';

import './login.scss';

class App extends Component {
  
  state = {
    account: "",
    passW: ""
  }

  // 账号
  accountChange = e => {
    this.setState({
      account: e.target.value
    })
  }

  // 密码
  passWord = e => {
    this.setState({
      passW: e.target.value
    })
  }

  // 登录
  saveInfo = () => {
    console.log('aaa')
    let account = this.state.account
    let psw = this.state.passW
    if (!account) {
      message.error("账号信息不能为空!")
      return false
    }
    if (!psw) {
      message.error("密码不能为空!")
      return false
    }
    if (account == "13260269999" && psw == "123456") {
      // 登录完成, 跳转首页
      this.props.history.push('index')
    } else {
      message.error('账号或密码不正确!')
    }
  }

  render() {
    const account = this.state.account
    const passW = this.state.passW
    return (
      <div className="login">
        <div className="login-box">
          <div className="title">BOSS 管理系统</div>
          <p>
            <Input type="text" size="large" placeholder="请输入账号" onChange={this.accountChange}/>
          </p>
          <p>
            <Input type="passWord" size="large" ref={(val) => this.psd = val} defaultValue="123" onChange={this.passWord} placeholder="请输入密码"/>
          </p>

          <Button type="primary" onClick={this.saveInfo} block>开启你的旅行</Button>
          <p>{account} - {passW}</p>
        </div>
      </div>
    );
  }
}

export default App;
