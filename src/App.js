import React, { Component } from 'react';
import './App.css';
import LeftAlignSelector from './LeftAlignSelector.js';



class App extends Component {



  render() {
    return (
      <div className="App">
          <LeftAlignSelector>
            Hello
          </LeftAlignSelector>
      </div>
    );
  }
}

export default App;
