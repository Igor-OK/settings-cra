import React, { Component } from 'react';
import styled from 'styled-components';

class SelectorText extends Component {
    render() {
        let text='';
        if(this.props.text.length < 23){
            text = this.props.text
        } else {
            text = this.props.text.slice(0,23)+'... '
        }
        return (
            <Text>
                {text}
            </Text>
        );
    }
}

export default SelectorText;

const Text = styled.p`
  display: inline-block;
  font-size: 0.9rem;
  margin: 0 5px 0 0;
  text-align: left;
  white-space: nowrap;
`;