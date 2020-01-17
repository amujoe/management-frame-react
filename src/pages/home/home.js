/*
 * @Author: amujoe
 * @Date: 1985-10-26 16:15:00
 * @Description: file content
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { Link} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>
        <p>
          欢迎您来到 react 世界
        </p>
        <p>
          路由添加成功
        </p> 
        <Button>无用</Button>
        <Link to="/login">跳转登录</Link>
      </div>
    );
  }
}

export default App;
