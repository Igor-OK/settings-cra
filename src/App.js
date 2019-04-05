import React, { Component } from 'react';
import './App.css';
import CustomAlignSelector from './CustomAlignSelector.js';
import SimpleCheckboxGroup from "./SimpleCheckboxGroup";
import TwoPointsRanger from "./TwoPointsRanger";

//TODO CHECING FOR DATA + PROPTYPES IN EMBED COMPONENTS

//TODO  ONUNMOUNT IN NESTED STATEFULL COMPONENT

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataForTwoPointsRanger: {
        from : 100,
        to : 1000,
        tickL : 200,
        tickR : 900,
        minDis : 300
      },
      dataForSimpleCheckboxGroup: {
        selectAll: false,
        properties: [
          {
            label: 'Без пересадок',
            checked: false
          },
          {
            label: '1 пересадка',
            checked: false
          },
          {
            label: 'Без ночных пересадок',
            checked: false
          },
          {
            label: 'Без смены аэропорта',
            checked: false
          },
        ]
      }
    }
  }

  render() {
    return (
      <div className="App">
          <CustomAlignSelector bodyAlign = {'left'} headAlign={'left'} header = {'Пересадки'}>
              <SimpleCheckboxGroup checkboxOptions={this.state.dataForSimpleCheckboxGroup}/>
              <TwoPointsRanger rangeInput={this.state.dataForTwoPointsRanger} />
          </CustomAlignSelector>

          <CustomAlignSelector bodyAlign={'center'} headAlign={'right'} header={'Альянсы'}/>
      </div>
    );
  }
}

export default App;
