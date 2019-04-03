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
                    type = {'period'}
                    from = {40}
                    to = {1600}
                    tickL = {80}
                    tickR = {1000}
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