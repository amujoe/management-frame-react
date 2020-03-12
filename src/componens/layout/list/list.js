/*
 * @Author: amujoe
 * @Date: 2020-02-07 15:21:57
 * @Description: file content
 */
import React, { Component } from 'react'
import { Table, Tag, Pagination, Divider} from 'antd';
// import { store } from "../../../redux/store"
// css
import './list.scss';

class ListLog extends Component {

  /**
   * ------------ 生命周期 初始化  -------------
   * */ 
  constructor (props) {
    super(props)
    
    // 状态值
    this.state = {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '标签',
          dataIndex: 'tags',
          key: 'tags',
          render: tags => (
            <span>
              {
                tags.map(tag => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'loser') {
                    color = 'volcano';
                  }
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })
              }
            </span>
          )
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a href="###">Invite {record.name}</a>
              <Divider type="vertical" />
              <a href="###">Delete</a>
            </span>
          )
        },
      ],
      data: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
          tags: ['loser'],
        },
        {
          key: '23',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
          tags: ['cool', 'teacher'],
        },
      ],
    }
  }

  /**
   * ------------ 生命周期 挂载  -------------
   * */ 
  componentWillMount() {
    console.log('ListLog componentWillMount 在组件挂载到DOM前调用')
  }

  componentDidMount() {
    console.log('props', this.props)
    console.log('ListLog componentDidMount 组件挂载到DOM后调用，且只会被调用一次')
  }

  /**
   * ------------ 生命周期 更新  -------------
   * */ 

  // 会接受参数
  componentWillReceiveProps(nextProps) {
    console.log('ListLog componentWillReceiveProps 组件将接受 props. 此方法只调用于props引起的组件更新过程中, 参数nextProps是父组件传给当前组件的新props。')
  }

  // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  shouldComponentUpdate(nextStates) { 
    console.log('ListLog shouldComponentUpdate 用于判断组件数据更新, 返回false则当前组件更新停止')
    if(nextStates.num === this.state.num){
      return false
    }
    return true
  }

  componentWillUpdate() {
    console.log('ListLog componentWillUpdate 组件准备更新.一般较少用')
  }

  componentDidUpdate() {
    console.log('ListLog componentDidUpdate 组件更新')
  }

  /**
  * ------------ 生命周期 渲染  -------------
  * */ 

  render = () => {
    console.log('ListLog render')
    let columns = this.state.columns
    let data = this.state.data

    return (
      <div className="list-layout">
        <div className="list-search">
          这里是搜索
        </div>
        <div className="list-content">
          <div className="list-table">
            <Table columns={columns} dataSource={data} />
          </div>
          <div className="list-pagination">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    );
  };
}

export default ListLog;