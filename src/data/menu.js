/*
 * @Author: amujoe
 * @Date: 2020-02-07 17:51:03
 * @Description: file content
 */
const menu_list = [
    {
      "cname": "首页",
      "ename": "index",
      "description": "is_show 是否在菜单中展示",
      "is_show": true,
      "subset": []
    },
    {
      "cname": "文章管理",
      "ename": "article",
      "description": "文章",
      "is_show": true,
      "subset": [
        {
          "cname": "前端文章",
          "ename": "frontend",
          "description": "前端文章",
          "is_show": true,
          "subset": []
        },
        {
          "cname": "后端文章",
          "ename": "backend",
          "description": "后端",
          "is_show": true,
          "subset": []
        },
        {
          "cname": "数据",
          "ename": "database",
          "description": "前端文章",
          "is_show": true,
          "subset": []
        }
      ]
    },
    {
      "cname": "关于阿木",
      "ename": "about",
      "description": "关于",
      "is_show": true,
      "subset": [
        {
          "cname": "个人博客",
          "ename": "blog",
          "description": "前端文章",
          "is_show": true,
          "subset": []
        },
        {
          "cname": "个人履历",
          "ename": "resume",
          "description": "个人简历",
          "is_show": true,
          "subset": []
        },]
    },
    {
      "cname": "设置",
      "ename": "setting",
      "description": "设置账号",
      "is_show": true,
      "subset": []
    }
  ]

export default menu_list;