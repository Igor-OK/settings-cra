import React, { Component } from 'react';
import styled from 'styled-components';


class CheckableSquare  extends Component {
    render() {
        if (!this.props.checked){
            return (<Square />)
        }
        else return (<CheckedSquare />);
    }
}

export default CheckableSquare ;

const Square = styled.div`
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid #3CC2CD;
    background-color: white;
    margin-right: 10px;
`;
const CheckedSquare = styled.div`
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid #3CC2CD;
    background-color: #3CC2CD;
    margin-right: 10px;
      &:before {
        content: " ";
        display: inline-block;
        width: 8px;
        height: 4px;
        border-bottom: 2px solid white;
        border-left: 2px solid white;
        transform: translateY(-6px) rotate(-45deg)
    }
`;