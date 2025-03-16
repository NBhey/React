import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.props = props;

    this.increment = this.increment.bind(this)
  }
 
  increment(){
    if(this.state.count === 10){
        return
    }
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () =>  {
    if(this.state.count === 0){
        return
    }
    
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

export default Counter;
