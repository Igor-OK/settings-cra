import React, { Component } from 'react';
import SelectorText from './SelectorText.js'
import SelectorArrow from './SelectorArrow.js'
import styled from 'styled-components';

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
`;

class LeftAlignSelector extends Component {
    render() {
        return (
            <Border>
                <SelectorText text={'Gjcflrf'} />
                <SelectorArrow />
            </Border>
        );
    }
}

export default LeftAlignSelector;