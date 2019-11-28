import React, { Component } from 'react';
import TodoListUl from '@/component/TodoList/TodoList-ul'

class Doing extends Component{
  constructor(){
    super()
    this.state = {
      isComplated : true,
    }
  }

  render(){
    return <TodoListUl {...this.props} isComplated={true}/>
  }
}
export default Doing;
