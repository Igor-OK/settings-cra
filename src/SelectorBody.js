import React, { Component } from 'react';
import TwoPointsRanger from './TwoPointsRanger.js';
import styled from 'styled-components';

class SelectorBody extends Component {
    render() {
        return (
            <Body>
                <TwoPointsRanger />
            </Body>
        );
    }
}

export default SelectorBody;

const Body = styled.div`
    display: inline-block;
    position: static;
    margin-top: 10px;
    min-height: 100px;
    width: 280px;
    background-color: #ffffff;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 0px 3px 20px -10px rgba(128,128,128,0.75);
     &:before {
        content: " ";
        display: inline-block;
        background-color: white;
        border-width: 1px;
        border-style: solid none none solid;
        border-color: lightgrey;
        width: 7px;
        height: 7px;
        transform: translate(-111px, -12px) rotate(45deg);
      }
  
`;