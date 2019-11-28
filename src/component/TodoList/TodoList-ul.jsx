import React, { Component } from 'react';
import cssobj from '@/css/TodoList'

class TodoListUl extends Component {
  constructor(){
    super()
    this.handleComplated = this.handleComplated.bind(this)
    this.handleDeleted = this.handleDeleted.bind(this)
    this.liFilter = this.liFilter.bind(this)
  }

  liFilter(key){
    // 对数组中完成和未完成进行筛选
    return key.filter((item)=>{
      return item.completed!=this.props.isComplated
    })
  }
  handleDeleted(e){
    // 执行删除
    this.props.OnHandleDeleted(e)
  }
  handleComplated(e){
    // 执行完成
    this.props.OnHandleComplated(e)
  }


  render() {
    let [...sortList] = this.props.todoListMsg
    // 进行时间排序
    let sortedList = this.liFilter(sortList).sort((a,b)=>{
      return a.time < b.time?1:-1
    })
    // 生成li
    let ToDoListLi = sortedList.map((item)=>{
      return <li key={item.id} className={cssobj.todoli}>
        <div className={cssobj.limsg}>
          <input type="checkbox" onClick={()=>this.handleComplated(item.id)}/>
          {item.title} &emsp;&emsp; 
        </div>
        <div className={cssobj.lidel}>
          add time:{item.time}
          <button onClick={()=>this.handleDeleted(item.id)}>del</button>
        </div>
      </li>
    })

    return <React.Fragment>
      <ul className={cssobj.todoul}>
        {ToDoListLi}
      </ul>
    </React.Fragment>
  }
}



export default TodoListUl;
