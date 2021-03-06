import React, { Component } from 'react';
import styled from 'styled-components';


class SelectorArrow extends Component {

    render() {
        if (!this.props.active) return <Arrow/>
        else return <Arrow2/>
    }
};

export default SelectorArrow;

const Arrow = styled.div`
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #222426 transparent transparent transparent;
`;
const Arrow2 = styled.div`
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent #222426 transparent;
`;