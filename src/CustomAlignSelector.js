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
                <BigBorderLeft>
                    <Border onClick = {this.activation}>
                        <SelectorText text={this.props.header} />
                        <SelectorArrow active = {this.state.active} />
                    </Border>
                    {!this.state.active? null : <SelectorBody align={this.props.bodyAlign}> {this.props.children} </SelectorBody>}
                </BigBorderLeft>
            );
        } else if(this.props.headAlign === 'right'){
            return (
                <BigBorderRight>
                    <Border onClick = {this.activation}>
                        <SelectorText text={this.props.header} />
                        <SelectorArrow active = {this.state.active} />
                    </Border>
                    {!this.state.active? null : <SelectorBody align={this.props.bodyAlign}> {this.props.children} </SelectorBody>}
                </BigBorderRight>
            );
        }

    }
}

export default CustomAlignSelector;

const BigBorderLeft = styled.div`
  width: 280px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
const BigBorderRight = styled.div`
  width: 280px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
`;
const Border = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between; 
  padding: 10px;
  position: relative;
  border: 1px solid lightgrey;
  background-color: white;
  height: 15px;
  width: 140px;
  cursor: pointer;
`;
