import React from 'react'
import * as Router from 'react-router-dom'
// 安装了react-router-dom，npm会解析并安装上述依赖包。可以看到，其中包括react-router。
// router. hashrouter&route&link  **path*component
import cssobj from '@/css/TodoList'
import { InputBox ,Doing , Done } from '@/component/TodoList/TodoList'


console.log(Router);
let lijson = [
  {
  "id": 0,
  "title": "zero",
  "time" : "2019-11-28 19:1:33",
  "completed": false
  },
  {
  "id": 1,
  "title": "one",
  "time" : "2019-11-28 19:1:22",
  "completed": false
  },
  {
  "id": 2,
  "title": "two",
  "time" : "2019-11-28 19:2:22",
  "completed": true
  },
  {
  "id": 3,
  "title": "three",
  "time" : "2019-11-28 19:3:22",
  "completed": false
  },
]

export default class App extends React.Component{
  constructor(){
    super()
    this.OnHandleComplated = this.OnHandleComplated.bind(this)
    this.OnHandleDeleted = this.OnHandleDeleted.bind(this)
    this.onHanldeSubmit = this.onHanldeSubmit.bind(this)
    this.state = {
      todoListMsg : lijson,
      onHanldeSubmit : this.onHanldeSubmit,
      OnHandleDeleted : this.OnHandleDeleted,
      OnHandleComplated : this.OnHandleComplated
    }
  }

  onHanldeSubmit(title,date){
    let newTodo = {
      "id" : this.state.todoListMsg.length+1,
      "title" : title,
      "time" : date,
      "completed" : false,
    }
    let [...newTodoList] = this.state.todoListMsg
    newTodoList.push(newTodo)
    this.setState({
      todoListMsg : newTodoList
    })
  }

  OnHandleDeleted(e){
    let [...newTodoList] = this.state.todoListMsg
    newTodoList.forEach((item,index) => {
      if(item.id===e){
        newTodoList.splice(index,1)
      }
    });
    this.setState({
      todoListMsg : newTodoList
    })
  }

  OnHandleComplated(e){
    let [...newTodoList] = this.state.todoListMsg
    newTodoList.forEach((item,index) => {
      if(item.id===e){
        newTodoList[index].completed = newTodoList[index].completed !=true ? true : false
      }
    });
    this.setState({
      todoListMsg : newTodoList
    })
  }
  
  render(){
    return <Router.HashRouter>
      <div className={cssobj.container}>
        <div className={cssobj.header}>
          <div className={cssobj.title}>TodoList</div>
          <span className={cssobj.inputBox}>
            <InputBox onHanldeSubmit={this.onHanldeSubmit} />
          </span>
        </div>
        <hr/>
        <div className={cssobj.routelink}>
          <div className={cssobj.link}>
            <Router.NavLink to="/doing" activeClassName={cssobj.selected}> 正在进行</Router.NavLink> &emsp;
          </div>
          <div className={cssobj.link}>
            <Router.NavLink to="/done" activeClassName={cssobj.selected}>已完成</Router.NavLink>
          </div>
        </div>
        <Router.Switch>
          <Router.Route exact path="/">
            <Doing {...this.state}/>
          </Router.Route>
          <Router.Route path="/doing">
            <Doing {...this.state}/>
          </Router.Route>
          <Router.Route path="/done">
            <Done {...this.state}/>
          </Router.Route>
        </Router.Switch>
      </div>
    </Router.HashRouter>
  }
}