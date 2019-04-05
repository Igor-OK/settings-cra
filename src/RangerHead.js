import React, { Component } from 'react';
import styled from 'styled-components';

class RangerHead extends Component {
    render() {
        return (
            <HeadText>
                {this.props.text}
            </HeadText>
        );
    }
}

export default RangerHead;

const HeadText = styled.p`
    color: #8D8D8D;
    text-align: left;
    font-size: 0.9rem;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: default;
`