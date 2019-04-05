import React, { Component } from 'react';
import styled from 'styled-components';
import CheckableSquare from './CheckableSquare'
import CheckboxLabel from './CheckboxLabel'

class SimpleCheckbox  extends Component {
    render() {
        return (
            <Block>
                {/*//accept checked: true/false, onclick,*/}
                <CheckableSquare checked={this.props.checked}/>
                <CheckboxLabel text={this.props.label}/>
            </Block>
        );
    }
}

export default SimpleCheckbox ;

const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    height: 45px;
    background-color: white;
        &:hover {
            background-color: #F9FAFB;
        }
`