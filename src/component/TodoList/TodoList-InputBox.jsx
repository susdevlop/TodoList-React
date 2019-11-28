import React, { Component } from 'react';

export class InputBox extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.inputRef = React.createRef()
    this.state = {
      title:''
    }
  }
  handleEnter(e){
    if(e.keyCode == 13){
      this.handleSubmit()
    }
  }
  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit(){
    let title = this.state.title
    let d = new Date()
    let addDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
    this.props.onHanldeSubmit(title,addDate)
    this.inputRef.current.focus()

  }
  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="请添加一个todo" value={this.state.title} onChange={this.handleChange} onKeyUp={this.handleEnter} ref={this.inputRef}/>
        <button onClick={this.handleSubmit}>添加</button>
      </React.Fragment>
    );
  }
}

export default InputBox;
