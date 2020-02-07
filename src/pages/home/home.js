/*
 * @Author: amujoe
 * @Date: 1985-10-26 16:15:00
 * @Description: file content
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { Link} from "react-router-dom";
// import { store } from '../../redux/store';
import { createStore } from 'redux'

// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters,
//   setUserInfo
// } from '../../redux/actions'


// // 打印初始状态
// console.log("12" , store.getState())


// // 每次 state 更新时，打印日志
// // 注意 subscribe() 返回一个函数用来注销监听器
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// // 发起一系列 action
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(setUserInfo("amujoe"))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// // 停止监听 state 更新
// unsubscribe()

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <Button onClick={onIncrement}>点击加一</Button>
    <Button onClick={onDecrement}>点击减一</Button>
    <div><Link to="/login">跳转登录</Link></div>
  </div>
);

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(reducer);



class App extends Component {

  render = () => {
    return (<Counter value = {2} 
      onIncrement = {() => store.dispatch({type: "INCREMENT"})}
      onDecrement = {() => store.dispatch({type: "DECREMENT"})}></Counter>);
  };
}

// store.subscribe(render);
export default App;
