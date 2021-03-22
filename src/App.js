import React, { Component } from 'react';

class App extends Component{
  state = {
    message:'hello world, 第一个react demo'
  }
  render(){
    const {message} = this.state
    return (
      <div>{message}</div>
    )
  }
}

export default App