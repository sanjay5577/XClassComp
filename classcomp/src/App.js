import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countvalue: 0,
      
    };
  }

  handleCount=(e)=>{
    if(e.target.name ==="increment"){
      this.setState({countvalue:this.state.countvalue +1});
    }
    else{
      this.setState({countvalue:this.state.countvalue -1});
    }
  }


  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>
          Count: {this.state.countvalue}
        </p>
        <button name="increment" onClick={this.handleCount}>Increment</button>
        <button name="decrement" onClick={this.handleCount}>Decrement</button>
      </div>
    );
  }
}

export default App;