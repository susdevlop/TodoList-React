import React, { Component } from 'react';
import TodoListUl from '@/component/TodoList/TodoList-ul'

class Done extends Component{
  constructor(){
    super()
    this.state = {
      isComplated : false
    }
  }

  render(){
    return <TodoListUl {...this.props} isComplated={false}/>
  }
}

export default Done;
