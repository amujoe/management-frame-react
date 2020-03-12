/*
 * @Author: amujoe
 * @Date: 2020-01-17 18:13:04
 * @Description: file content
 */

import { combineReducers } from 'redux'

// 菜单
function MENU(state = [], action) {
  switch (action.type) {
    case "SET_MENU_LIST":
      return action.text
    case "SET_HEADER_MENU":
      return action.text
    case "SET_CURRENT_HEADER_MENU":
      return action.text
    case "SET_SIDEBAR_MENU":
      return action.text
    default:
      return state
  }
}

// 个人信息
function USER(state = [], action) {
  switch (action.type) {
    case "SET_USER_INFO":
        return action.text
    default:
      return state
  }
}

const app = combineReducers({
  MENU,
  USER
})

export default app