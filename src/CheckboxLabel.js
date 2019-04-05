import React, { Component } from 'react';
import styled from 'styled-components';

class CheckboxLabel  extends Component {
    render() {
        return (
            <Text>
                {this.props.text}
            </Text>
        );
    }
}

export default CheckboxLabel ;

const Text = styled.span`
    font-size: 0.9rem;
    color: #484848;
    cursor: default;
`