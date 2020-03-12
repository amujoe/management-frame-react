/*
 * @Author: amujoe
 * @Date: 2020-02-07 15:21:57
 * @Description: file content
 */
import React, { Component } from 'react'
// import { browserHistory } from 'react-router';
import { Menu } from 'antd';
import { store } from "../../../redux/store"
// css
import './HeaderMenu.scss';

// const { SubMenu } = Menu;

class HeaderMenu extends Component {

  /**
   * ------------ 生命周期 初始化  -------------
   * */ 
  constructor (props) {
    super(props)
    // console.log('name', this.props.location.pathname)
    // console.log('browserHistory', browserHistory.getCurrentLocation().pathname)
    console.log('hrader store', store.getState())
    let menu_list = store.getState().MENU
    let header_menu_list = []
    let current_header_menu = null
    // let url = this.props
    // console.log('url', url)

    // 格式化 top menu
    menu_list.forEach(m => {
      if(m.is_show) {
        let obj = {
          "cname": m.cname,
          "ename": m.ename,
          "description": m.description,
          "is_show": m.is_show,
        }
        header_menu_list.push(obj)
      }
    })
    current_header_menu = header_menu_list[0]
    // this.props.setHeaderMenu(header_menu_list)
    // this.props.setCurrentHeaderMenu(current_header_menu)
    console.log('current_header_menu', current_header_menu)
    // 状态值
    this.state = {
      header_menu_list: header_menu_list,
      current_menu: null,
      current_user: null
    }
  }

  /**
   * ------------ 生命周期 挂载  -------------
   * */ 
  componentWillMount() {
    console.log('HeaderMenu componentWillMount 在组件挂载到DOM前调用')
  }

  componentDidMount() {
    console.log('props-menu', this.props)
    console.log('HeaderMenu componentDidMount 组件挂载到DOM后调用，且只会被调用一次')
  }

  /**
   * ------------ 生命周期 更新  -------------
   * */ 

  // 会接受参数
  componentWillReceiveProps(nextProps) {
    console.log('HeaderMenu componentWillReceiveProps 组件将接受 props. 此方法只调用于props引起的组件更新过程中, 参数nextProps是父组件传给当前组件的新props。')
    console.log('nextProps', nextProps)
  }

  // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  shouldComponentUpdate(nextStates) { 
    console.log('HeaderMenu shouldComponentUpdate 用于判断组件数据更新, 返回false则当前组件更新停止')
    if(nextStates.num === this.state.num){
      return false
    }
    return true
  }

  componentWillUpdate() {
    console.log('HeaderMenu componentWillUpdate 组件准备更新.一般较少用')
  }

  componentDidUpdate() {
    console.log('HeaderMenu componentDidUpdate 组件更新')
  }

  /**
  * ------------ 生命周期 渲染  -------------
  * */ 

  render = () => {
    console.log('HeaderMenu render')
    let menu_list = this.state.header_menu_list

    return (
      <div className="header-menu">
        <div className="header-left">
          <div className="title font-18 m-r-20">管理后台</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              {
                menu_list.map((menu, index) => {
                  return <Menu.Item key={index}>{menu.cname}</Menu.Item>
                })
              }
            </Menu>
          </div>
        <div className="header-right">
          <span>左木子</span>
          <span>退出</span>
        </div>
      </div>
    );
  };
}

export default HeaderMenu;