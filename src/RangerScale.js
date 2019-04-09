import React, { Component } from 'react';
import styled from 'styled-components';
import TwoPointsScale from './TwoPointsScale';
import HourMinOutput from './HourMinOutput';

class RangerScale extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: 1,
            to: 100,
            tickLeft: 10,
            tickRight: 90,
            startDistance: 1,
            minDistance: 30,
            diameter: 20,    // HARDCODE!!!!
            scaleLength: 220,  // HARDCODE!!!!
            target: null
        };
    }
    componentDidMount() {
        this.setState({
            from: this.props.input.from,
            to: this.props.input.to,
            tickLeft: this.props.input.tickL,
            tickRight: this.props.input.tickR,
            startDistance: this.props.input.to - this.props.input.from,
            minDistance: this.props.input.minDis
        });
    }

    clickToUnit = (e) => {
        const medianaPx = ((this.state.tickRight - this.state.tickLeft)/2 + this.state.tickLeft - this.state.from) / this.state.startDistance * this.state.scaleLength;
        const bbox = e.currentTarget.getBoundingClientRect();
        let clickPx = e.clientX - bbox.left - this.state.diameter; //in px related to origin scale considerind half of diameter
        if (clickPx < -10) {clickPx = 0}
        else if (clickPx > this.state.scaleLength + 10) {clickPx = this.state.scaleLength}
        else {
            if (clickPx > medianaPx){
                clickPx -= this.state.diameter/2
            }
            else{
                clickPx += this.state.diameter/2
            }
        }
        // click X transformed to input units
        const clickUnits  = Math.round(clickPx * this.state.startDistance / this.state.scaleLength + this.state.from);
        return [clickPx, clickUnits, medianaPx]
    };

    scaleClick = (e) => {
        const coord = this.clickToUnit(e);
        const clickPx = coord[0];
        const clickUnits = coord[1];
        const medianaPx = coord[2];

//TODO if distance between ticks is less than diameter of ticks, and user want to do it even less
        if( (this.state.tickRight - this.state.tickLeft)< this.state.minDistance && clickUnits > this.state.tickLeft && clickUnits > this.state.tickRight) console.log('hi');
        if(clickPx > medianaPx){
            this.setState({
                tickRight:  Math.ceil(clickUnits/5)*5
            })
        }
        else {
            this.setState({
                tickLeft: Math.ceil(clickUnits/5)*5
            })
        }
    };

    slideStart = (e) => {
        if (e.currentTarget.classList.contains('tick-left')){
            this.setState({
                target: 'left'
            })
        }
        else if (e.currentTarget.classList.contains('tick-right')){
            this.setState({
                target: 'right'
            })
        }
    };

    slide = (e) => {
        if(this.state.target){
            const coord = this.clickToUnit(e);
            const clickUnits = coord[1];

//TODO check for min distance
            if( (this.state.tickRight - this.state.tickLeft) < this.state.minDistance) this.slideEnd();

            if(this.state.target === 'left'){
                this.setState({
                    tickLeft: Math.ceil(clickUnits/5)*5
                })
            }
            if(this.state.target === 'right'){
                this.setState({
                    tickRight: Math.ceil(clickUnits/5)*5
                })
            }
        }
    };

    slideEnd = () => {
        this.setState({
            target: null
        })
    };

    render() {
        const unitsToPixels = this.state.scaleLength / this.state.startDistance;
        const start = Math.round((this.state.tickLeft - this.state.from) * unitsToPixels);
        const end = Math.round((this.state.to - this.state.tickRight) * unitsToPixels);
        const filled = this.state.scaleLength - start - end;

        return (
            <ScaleBlock>
                <LeftText>от <HourMinOutput min={this.state.tickLeft} /></LeftText>
                <RightText>до <HourMinOutput min={this.state.tickRight} /></RightText>
                <TwoPointsScale
                    click={this.scaleClick}
                    mDown={this.slideStart}
                    mMove={this.slide}
                    mUp={this.slideEnd}
                    emptyStart={start}
                    fullFilled={filled}
                    emptyEnd={end}
                    diameter={this.state.diameter}
                />
            </ScaleBlock>
        );
    }
}

export default RangerScale;

const ScaleBlock = styled.div`
    min-height: 50px;
`;
const LeftText = styled.div`
    display: inline-block;
    width: 50%;  
    text-align: left;  
    font-size: 0.9rem;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;
const RightText = styled.div`
    display: inline-block;
    width: 50%;  
    text-align: right; 
    font-size: 0.9rem; 
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;