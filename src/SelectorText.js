import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  display: inline-block;
  font-size: 0.9rem;
  margin: 0;
  text-align: left;
`;

class SelectorText extends Component {
    render() {
        return (
            <Text>
                {this.props.text}
            </Text>
        );
    }
}

export default SelectorText;