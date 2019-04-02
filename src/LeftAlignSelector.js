import React, { Component } from 'react';
import SelectorText from './SelectorText.js'
import styled from 'styled-components';

const Border = styled.div`
  display: inline-block;
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
            </Border>
        );
    }
}

export default LeftAlignSelector;