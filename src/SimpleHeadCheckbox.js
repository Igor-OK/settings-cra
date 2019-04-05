import React, { Component } from 'react';
import styled from 'styled-components';
import CheckableSquare from './CheckableSquare'
import CheckboxLabel from './CheckboxLabel'

class SimpleHeadCheckbox  extends Component {
    render() {
        return (
            <Block onClick={this.props.selectAll}>
                {/*//accept checked: true/false, onclick,*/}
                <CheckableSquare checked={this.props.checked}/>
                <CheckboxLabel text={'Все'}/>
            </Block>
        );
    }
}

export default SimpleHeadCheckbox ;

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