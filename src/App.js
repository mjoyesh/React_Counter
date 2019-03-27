import React, { Component } from 'react';
import './App.css';
import Counter from './Component/Counter';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      counter1 : 0,
      counter2 : 0,
      counter3 : 0
    }
  }

increment = (index) =>
  {
    const counter = `counter${index}`;
      this.setState({
        [counter]: this.state[counter] + 1
      });
  }

  decrement = (index) =>
  {
    const counter = `counter${index}`;
    this.setState({
      [counter] : this.state[counter] - 1
    });
  }

  increaseAll = () =>
  {
  //  const action = "increase";
    for (let index = 1; index <= 3; index++) {
      this.increment(index);
    }
  }

  decreaseAll = () =>
  {
  //  const action = "decrease";
    for (let index = 1; index <= 3; index++) {
      this.decrement(index);
    }
  }

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.counter1}
          action={this.state}
          index={1}
          increment={this.increment}
          decrement={this.decrement}
        />

        <Counter
          count={this.state.counter2}
          index={2}
          increment={this.increment}
          decrement={this.decrement}
        />

        <Counter
          count={this.state.counter3}
          index={3}
          increment={this.increment}
          decrement={this.decrement}
        />

         <input type="button" onClick={this.increaseAll} value="Increase All" /> 
         <input type="button" onClick={this.decreaseAll} value="Decrease All" /> 
      </div>
    );
  }
}

export default App;
