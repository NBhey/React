import React from "react";
class ExampleMethodLifeCycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      console.log('constructor');
    }
  
    componentDidMount() {
      console.log('componentDidMount');
      this.timer = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 10000);
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate');
      return nextState.count % 2 === 0; // Обновляем только чётные числа
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate');
    }
  
    componentWillUnmount() {
      console.log('componentWillUnmount');
      clearInterval(this.timer);
    }
  
    render() {
      console.log('render');
      return <div>{this.state.count}</div>;
    }
  }

  export default ExampleMethodLifeCycle;