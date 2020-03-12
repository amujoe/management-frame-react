/*
 * @Author: amujoe
 * @Date: 1985-10-26 16:15:00
 * @Description: file content
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

import { createStore } from 'redux'
import { connect } from "react-redux";
// import { store } from '../../redux/store';


// // 停止监听 state 更新
// unsubscribe()


// const Counter = ({value, onIncrement, onDecrement}) => (
//   <div>
//     <h1>{value}</h1>
//     <Button onClick={onIncrement}>点击加一</Button>
//     <Button onClick={onDecrement}>点击减一</Button>
//     <div><Link to="/login">跳转登录</Link></div>
//   </div>
// );

// 状态
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(reducer);

const init = store.getState();

console.log('init', init)


class Home extends Component {

///////---------------------------- 初始化

  constructor(props) {
    super(props)
    console.log('constructor 初始化')
    console.log('props', props)
    this.state = {
      num: 1
    }
  }

 ///////---------------------------- 挂载

  // 组件的挂载 Mounting
  componentWillMount() {
    console.log('componentWillMount 在组件挂载到DOM前调用')
  }

  componentDidMount() {
    console.log('componentDidMount 组件挂载到DOM后调用，且只会被调用一次')
  }


  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps 组件将接受 props. 此方法只调用于props引起的组件更新过程中, 参数nextProps是父组件传给当前组件的新props。')
    console.log('nextProps', nextProps)
  }

///////---------------------------- 更新

  // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  shouldComponentUpdate(nextStates) { 
    console.log('shouldComponentUpdate 用于判断组件数据更新, 返回false则当前组件更新停止')
    if(nextStates.num === this.state.num){
      return false
    }
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate 组件准备更新.一般较少用')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 组件更新')
  }

///////---------------------------- 卸载

  componentWillUnmount() {
    console.log('componentWillUnmount 组件卸载')
  }

  // 加
  onIncrement = () =>{
    console.log('加一')
    this.setState({
      num: this.state.num + 1
    })
  }

  // 减
  onDecrement = () => {
    console.log('减一')
    this.setState({
      num: this.state.num - 1
    })
  }

  render = () => {
    console.log('render')
    const num = this.state.num

    return (
      <div>
        数字<h1>{num}</h1>
        <Button onClick={this.onIncrement}>点击加一</Button>
        <Button onClick={this.onDecrement}>点击减一</Button>
        <div><Link to="/login">跳转登录</Link></div>

        <div className="m-t-30">
          <p>用户姓名:</p>
        </div>
      </div>
    );
  };
}

// store.subscribe(render);
export default connect(
  null,
)(Home);
