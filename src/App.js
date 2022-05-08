import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0
  }

  plusClick = () => {
    this.setState((oldState) => {
      return ({
        counter: oldState.counter + 1
      })
    })
  }

  minusClick = () => {
    this.setState((oldState) => {
      return ({
        counter: oldState.counter - 1
      })
    })
  }

  render = () => {
    return (
      <div>
        <button onClick={this.minusClick}>
          -
        </button>
        <button>
          {this.state.counter}
        </button>
        <button onClick={this.plusClick}>
          +
        </button>
      </div>
    );
  }
}

export default App;
