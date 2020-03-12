/*
 * @Author: amujoe
 * @Date: 2020-03-12 19:16:46
 * @Description: file content
 */
import React, { Component } from 'react';
import ListLayout from '../../componens/layout/list/list';
import { store } from '../../redux/store'


class FrontendList extends Component {

  /**
   * ------------ 生命周期 初始化  -------------
   * */ 
  constructor (props) {
    super(props)

    // 状态值
    this.state = {
      props,
      menu_list: [],
      current_user: null
    }
  }

  // 会接受参数
  componentWillReceiveProps(nextProps) {
    console.log('FrontendList componentWillReceiveProps 组件将接受 props. 此方法只调用于props引起的组件更新过程中, 参数nextProps是父组件传给当前组件的新props。')
    console.log('nextProps', nextProps)
  }

  /**
   * ------------ 生命周期 挂载  -------------
   * */ 
  componentWillMount() {
    console.log('FrontendList componentWillMount 在组件挂载到DOM前调用')
  }

  componentDidMount() {
    console.log('FrontendList componentDidMount 组件挂载到DOM后调用，且只会被调用一次')
  }

  /**
   * ------------ 生命周期 更新  -------------
   * */ 

  // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  shouldComponentUpdate(nextStates) { 
    console.log('list shouldComponentUpdate 用于判断组件数据更新, 返回false则当前组件更新停止')
    if(nextStates.num === this.state.num){
      return false
    }
    return true
  }

  componentWillUpdate() {
    console.log('FrontendList componentWillUpdate 组件准备更新.一般较少用')
  }

  componentDidUpdate() {
    console.log('FrontendList componentDidUpdate 组件更新')
  }

  /**
  * ------------ 生命周期 渲染  -------------
  * */ 

  render = () => {
    console.log('Layout render')

    return (
      <ListLayout></ListLayout>
    );
  };
}


// store.subscribe(render);
export default FrontendList;