import React, { Component } from 'react';
class Counter extends Component
{
    constructor(props) 
    {
      super(props);
    }
  
    increment = (i) =>
    {
        this.props.increment(this.props.index);
    }
      
    decrement = (i) =>
    {
        this.props.decrement(this.props.index);
    }
      
    // componentWillReceiveProps(nextProps)
    // { 
    //   if(nextProps.action == "increase")
    //   {
    //     this.setState({
    //       count : this.props.count++,
    //     });
    //   }
    // }

    render() {
      return (
        <div>
          <button onClick={this.increment}>+</button>
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
        </div>
      );
    }
}   

export default Counter;