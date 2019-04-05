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

    activation(){
        this.setState({
            active : !this.state.active
        })
    }

    render() {
        if(this.props.headAlign === 'left'){
            return (
                <BigBorder>
                    <BorderLeft onClick = {this.activation}>
                        <SelectorText text={this.props.header} />
                        <SelectorArrow active = {this.state.active} />
                    </BorderLeft>
                    {!this.state.active? null : <SelectorBody align={this.props.bodyAlign}> {this.props.children} </SelectorBody>}
                </BigBorder>
            );
        } else if(this.props.headAlign === 'right'){
            return (
                <BigBorder>
                    <BorderRight onClick = {this.activation}>
                        <SelectorText text={this.props.header} />
                        <SelectorArrow active = {this.state.active} />
                    </BorderRight>
                    {!this.state.active? null : <SelectorBody align={this.props.bodyAlign}> {this.props.children} </SelectorBody>}
                </BigBorder>
            );
        }

    }
}

export default CustomAlignSelector;

const BigBorder = styled.div`
  width: 280px;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
//todo floats in this compnent applied to head align

const BorderLeft = styled.div`
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
  float: left;
`;
const BorderRight = styled.div`
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
  float: right;
`;