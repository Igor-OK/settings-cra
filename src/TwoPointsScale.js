import React, { Component } from 'react';
import styled from 'styled-components';

class TwoPointsScale extends Component {
    render() {

        const deltaLeftTick = this.props.emptyStart / (this.props.emptyStart + this.props.fullFilled) * this.props.diameter;
        const deltaRightTick = this.props.fullFilled / (this.props.fullFilled + this.props.emptyEnd) * this.props.diameter;

        // console.log(deltaLeftTick, deltaRightTick)

        return (
            <Scale className="scale" onClick={this.props.click}>
                <LeftTick
                    style = {{left: (this.props.emptyStart - deltaLeftTick) + '%'}}
                />
                <RightTick
                    style = {{left: (this.props.emptyStart + this.props.fullFilled - deltaRightTick)+'%'}}
                />
                <ScaleLine>
                    <EmptyStart
                        style = {{width: this.props.emptyStart+'%'}}
                    />
                    <Fullfilled
                        style = {{width: this.props.fullFilled+'%'}}
                    />
                    <EmptyEnd
                        style = {{width: this.props.emptyEnd+'%'}}
                    />
                </ScaleLine>
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
    position: absolute;
    display: block; 
    height: 5px;
    width: 100%;
    z-index: 50;
    box-sizing: border-box;
    border-right: 1px solid white;
    border-left: 1px solid white;
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