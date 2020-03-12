/*
 * @Author: amujoe
 * @Date: 2020-02-07 15:21:57
 * @Description: file content
 */
import React, { Component } from 'react'
import { Menu } from 'antd';
// css
import './Sidebar.scss';

const { SubMenu } = Menu;

class Sidebar extends Component {

  /**
   * ------------ 生命周期 初始化  -------------
   * */ 
  constructor (props) {
    super(props)
    console.log('sidebar constructor')
    console.log('props', props)

    // 状态值
    this.state = {
      menu_list: [],
      current_user: null
    }
  }

  // 会接受参数
  componentWillReceiveProps(nextProps) {
    console.log('Sidebar componentWillReceiveProps 组件将接受 props. 此方法只调用于props引起的组件更新过程中, 参数nextProps是父组件传给当前组件的新props。')
    console.log('nextProps', nextProps)
  }

  /**
   * ------------ 生命周期 挂载  -------------
   * */ 
  componentWillMount() {
    console.log('Sidebar componentWillMount 在组件挂载到DOM前调用')
  }

  componentDidMount() {
    console.log('Sidebar componentDidMount 组件挂载到DOM后调用，且只会被调用一次')
  }

  /**
   * ------------ 生命周期 更新  -------------
   * */ 

  // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  shouldComponentUpdate(nextStates) { 
    console.log('Sidebar shouldComponentUpdate 用于判断组件数据更新, 返回false则当前组件更新停止')
    if(nextStates.num === this.state.num){
      return false
    }
    return true
  }

  componentWillUpdate() {
    console.log('Sidebar componentWillUpdate 组件准备更新.一般较少用')
  }

  componentDidUpdate() {
    console.log('Sidebar componentDidUpdate 组件更新')
  }

  /**
  * ------------ 生命周期 渲染  -------------
  * */ 

  render = () => {
    console.log('Sidebar render')

    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu
          key="sub1"
          title={"前端管理"}>
          <Menu.Item key="1">vue</Menu.Item>
          <Menu.Item key="2">react</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              后端文档
            </span>
          }
        >
          <Menu.Item key="11">react</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              数据库
            </span>
          }
        >
          <Menu.Item key="21">mysql</Menu.Item>
          <Menu.Item key="22">nosql</Menu.Item>
        </SubMenu>
      </Menu>
    );
  };
}

export default Sidebar;