/*
 * @Author: amujoe
 * @Date: 2020-01-17 18:12:42
 * @Description: file content
 */

export function setUserInfo(text) {
  return { type: "SET_USER_INFO", text }
}

export function setMenuList(text) {
  return { type: "SET_MENU_LIST", text }
}

export function setHeaderMenu(text) {
  return { type: "SET_HEADER_MENU", text }
}

export function setCurrentHeaderMenu(text) {
  return { type: "SET_CURRENT_HEADER_MENU", text }
}

export function setSidebarMenu(text) {
  return { type: "SET_SIDEBAR_MENU", text }
}