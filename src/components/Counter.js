import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first:0
      }
      //this.increment=this.increment.bind(this)
    }
    
    increment() {
        this.setState({
            first: this.state.first+1
        })
        console.log(this.state.first);
        

    }

  render() {
    return (
      <div>
         <div>COUNT --   {this.state.first}</div>
         <button onClick={() =>this.increment()}>Increment</button>
      </div>
    )
  }

}
export default Counter;