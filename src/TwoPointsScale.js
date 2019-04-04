import React, { Component } from 'react';
import styled from 'styled-components';

class TwoPointsScale extends Component {
    render() {
        return (
            <Scale
                className="scale"
                onClick={this.props.click}
                onMouseMove = {this.props.mMove}
                onMouseUp = {this.props.mUp}
                onMouseLeave = {this.props.mUp}
            >
                <LeftTick
                    className={'tick-left'}
                    style = {{left: (this.props.emptyStart ) + 'px'}}
                    onMouseDown = {this.props.mDown}
                    onMouseUp = {this.props.mUp}
                />
                <RightTick
                    className={'tick-right'}
                    style = {{left: (this.props.emptyStart + this.props.fullFilled + this.props.diameter)+'px'}}
                    onMouseDown = {this.props.mDown}
                    onMouseUp = {this.props.mUp}
                />
                <SideLine />
                <ScaleLine>
                    <EmptyStart
                        style = {{width: this.props.emptyStart+'px'}}
                    />
                    <Fullfilled
                        style = {{width: this.props.fullFilled+'px'}}
                    />
                    <EmptyEnd
                        style = {{width: this.props.emptyEnd+'px'}}
                    />
                </ScaleLine>
                <SideLine />
            </Scale>
        );
    }
}

export default TwoPointsScale;

const Scale = styled.div`
    margin-top: 10px;
    height: 22px;
    position: relative;
    cursor: pointer;
`;
const LeftTick = styled.div`
    display: inline-block;
    position: absolute;
 opacity: 0.5;
    width: 20px;  
    height: 20px;
    top: 1px;
    border: 1px solid #3CC2CD;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 60;
`;
const RightTick = styled.div`
    display: inline-block;
    position: absolute;
 opacity: 0.5;
    width: 20px;  
    height: 20px;
    top: 1px;
    border: 1px solid #3CC2CD;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 55;
`;
const ScaleLine = styled.div`
    display: inline-block; 
    height: 5px;
    width: 220px;
    z-index: 50;
`;
const SideLine = styled.div`
    display: inline-block;
    background-color: #E0E0E0;
    width: 20px;
    height: 5px;
`;
const EmptyStart = styled.div`
    display: inline-block;
    background-color: #E0E0E0;
    width: 10%;
    height: 100%;
`;
const Fullfilled = styled.div`
    display: inline-block;
    background-color: #3CC2CD;
    width: 80%;
    height: 100%;
`;
const EmptyEnd = styled.div`
    display: inline-block;
    background-color: #E0E0E0;
    width: 10%;
    height: 100%;
`;