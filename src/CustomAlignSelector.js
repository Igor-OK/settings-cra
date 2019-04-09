import React, { Component } from 'react';
import SelectorText from './SelectorText';
import SelectorArrow from './SelectorArrow';
import SelectorBody from './SelectorBody'
import styled from 'styled-components';
import SelectorDoubleBody from "./SelectorDoubleBody";

class CustomAlignSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        };
    }

    activation = () => {
        this.setState({
            active : !this.state.active
        })
    }

    render() {

        let body = null;
        if(this.props.type === 'double'){
            body = <SelectorDoubleBody align={this.props.bodyAlign} active={this.state.active}> {this.props.children} </SelectorDoubleBody>;
        } else {
            body = <SelectorBody align={this.props.bodyAlign} active={this.state.active}> {this.props.children} </SelectorBody>
        }

        if(this.props.headAlign === 'left'){
            return (
                <BigBorderLeft>
                    <Border onClick = {this.activation}>
                        <SelectorText text={this.props.header} />
                        <SelectorArrow active = {this.state.active} />
                    </Border>
                    {body}
                </BigBorderLeft>
            );
        } else if(this.props.headAlign === 'right'){
            return (
                <BigBorderRight>
                    <Border onClick = {this.activation}>
                        <SelectorText text={this.props.header} />
                        <SelectorArrow active = {this.state.active} />
                    </Border>
                    {body}
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
  margin-bottom: 40px;
`;
const BigBorderRight = styled.div`
  width: 280px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
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
  min-width: 140px;
  max-width: 225px;
  cursor: pointer;
`;
