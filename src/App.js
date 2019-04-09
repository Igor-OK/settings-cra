import React, { Component } from 'react';
import './App.css';
import CustomAlignSelector from './CustomAlignSelector.js';
import CheckboxGroup from "./CheckboxGroup";
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
      dataForCheckboxGroup_1: {
        selectAll: false,
        properties: [
          {
            type: 'simple',
            label: 'Без пересадок',
            checked: false
          },
          {
            type: 'simple',
            label: '1 пересадка',
            checked: false
          },
          {
            type: 'simple',
            label: 'Без ночных пересадок',
            checked: false
          },
          {
            type: 'simple',
            label: 'Без смены аэропорта',
            checked: false
          }
        ]
      },
      dataForCheckboxGroup_2: {
        selectAll: true,
        properties: [
          {
            type: 'promo',
            label: 'Oneworld',
            checked: false,
            promoText: 'Только',
            price: null,
            currency: null,
            promo: true
          },
          {
            type: 'promo',
            label: 'SkyTeam',
            checked: false,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },
          {
            type: 'promo',
            label: 'Star Alliance',
            checked: false,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },

        ]
      },
      dataForCheckboxGroup_3: {
        selectAll: true,
        properties: [
          {
            type: 'promo',
            label: 'Жуковский',
            checked: true,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },
          {
            type: 'promo',
            label: 'Домодедово',
            checked: true,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },
          {
            type: 'promo',
            label: 'Внуково',
            checked: true,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },
          {
            type: 'promo',
            label: 'Шереметьево',
            checked: true,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },

        ]
      },
      dataForCheckboxGroup_4: {
        selectAll: true,
        properties: [
          {
            type: 'promo',
            label: 'Хитроу',
            checked: true,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },
          {
            type: 'promo',
            label: 'Гатвик',
            checked: true,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          },
          {
            type: 'promo',
            label: 'Лондон-Сити',
            checked: true,
            promoText: '',
            price: 21621,
            currency: 'rub',
            promo: false
          }
        ]
      }

    }
  }

  render() {
    return (
      <div className="App">
          <CustomAlignSelector bodyAlign = {'left'} headAlign={'left'} header = {'Пересадки'} type={'single'}>
              <CheckboxGroup checkboxOptions={this.state.dataForCheckboxGroup_1}/>
              <TwoPointsRanger rangeInput={this.state.dataForTwoPointsRanger} />
          </CustomAlignSelector>

          <CustomAlignSelector bodyAlign={'center'} headAlign={'right'} header={'Альянсы'} type={'single'}>
              <CheckboxGroup checkboxOptions={this.state.dataForCheckboxGroup_2}/>
          </CustomAlignSelector>

          <CustomAlignSelector bodyAlign={'left'} headAlign={'left'} header={'Время отправления и прибытия'} type={'double'}>
              <TwoPointsRanger rangeInput={this.state.dataForTwoPointsRanger} />
              <TwoPointsRanger rangeInput={this.state.dataForTwoPointsRanger} />
          </CustomAlignSelector>

          <CustomAlignSelector bodyAlign={'right'} headAlign={'right'} header={'Аэропорты'} type={'double'}>
            <CheckboxGroup checkboxOptions={this.state.dataForCheckboxGroup_3}/>
            <CheckboxGroup checkboxOptions={this.state.dataForCheckboxGroup_4}/>
          </CustomAlignSelector>

      </div>
    );
  }
}

export default App;
