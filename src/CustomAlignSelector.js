import React, { Component } from 'react';
import SelectorText from './SelectorText';
import SelectorArrow from './SelectorArrow';
import SelectorBody from './SelectorBody'
import styled from 'styled-components';

class CustomAlignSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        };
        this.activation = this.activation.bind(this);
    }

    activation(e){
        this.setState({
            active : !this.state.active
        })
    }

    render() {
        return (
            <BigBorder>
                <Border onClick = {this.activation}>
                    <SelectorText text={'Пересадки'} />
                    <SelectorArrow active = {this.state.active} />
                </Border>
                {!this.state.active? null : <SelectorBody />}
            </BigBorder>
        );
    }
}

export default CustomAlignSelector;

const BigBorder = styled.div`
  width: 280px;
  display: inline-flex;
  flex-direction: column;
`

const Border = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between; 
  padding: 10px;
  position: relative;
  border: 1px solid lightgrey;
  background-color: white;
  height: 15px;
  max-width: 140px;
  cursor: pointer;
`;