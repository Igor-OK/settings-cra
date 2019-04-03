import React, { Component } from 'react';
import './App.css';
import CustomAlignSelector from './CustomAlignSelector.js';

class App extends Component {

  render() {
    return (
      <div className="App">
          <CustomAlignSelector side = "left" />
      </div>
    );
  }
}

export default App;
