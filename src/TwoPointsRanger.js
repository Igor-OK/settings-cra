import React, { Component } from 'react';
import styled from 'styled-components';
import RangerHead from "./RangerHead";
import RangerScale from "./RangerScale";

class TwoPointsRanger extends Component {
    render() {
        return (
            <Body>
                <RangerHead text = {'Длительность пересадки'} />
                <RangerScale
                    input = {this.props.rangeInput}
                />
            </Body>
        );
    }
}

export default TwoPointsRanger;

const Body = styled.div`
    height: 100px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`