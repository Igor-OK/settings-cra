import React, { Component } from 'react';
import styled from 'styled-components';
import TwoPointsScale from './TwoPointsScale';

class RangerScale extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: 1,
            to: 100,
            tickLeft: 10,
            tickRight: 90,
            type: '',
            startDistance: 1,
            diameter: 20,    // HARDCODE!!!!
            scaleLength: 220,  // HARDCODE!!!!
            target: null
        };
        this.clickToUnit = this.clickToUnit.bind(this);
        this.scaleClick = this.scaleClick.bind(this);
        this.slide = this.slide.bind(this);
        this.slideStart = this.slideStart.bind(this);
        this.slideEnd = this.slideEnd.bind(this);
    }
    componentDidMount() {
        this.setState({
            from: this.props.from,
            to: this.props.to,
            tickLeft: this.props.tickL,
            tickRight: this.props.tickR,
            type: this.props.type,
            startDistance: this.props.to - this.props.from,
        });
    }

    clickToUnit(e){
        console.log(e.currentTarget);
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
    }

    scaleClick(e) {
        const coord = this.clickToUnit(e);
        const clickPx = coord[0];
        const clickUnits = coord[1];
        const medianaPx = coord[2];
        // console.log(clickUnits, clickPx, medianaPx);

        if(clickPx > medianaPx){
            this.setState({
                tickRight: clickUnits
            })
        }
        else {
            this.setState({
                tickLeft: clickUnits
            })
        }
    }

    slideStart(e) {
        // console.log(e.currentTarget);
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
    }
    slide(e) {
        if(this.state.target){
            const coord = this.clickToUnit(e);
            const clickUnits = coord[1];

            if(this.state.target === 'left'){
                this.setState({
                    tickLeft: clickUnits
                })
            }
            if(this.state.target === 'right'){
                this.setState({
                    tickRight: clickUnits
                })
            }
        }
    }
    slideEnd(){
        this.setState({
            target: null
        })
    }

    render() {
        const unitsToPixels = this.state.scaleLength / this.state.startDistance;

        const start = Math.round((this.state.tickLeft - this.state.from) * unitsToPixels) ;
        const filled = Math.round((this.state.tickRight - this.state.tickLeft) * unitsToPixels);
        const end = this.state.scaleLength - start - filled;
        // console.log(start, filled, end);

        return (
            <ScaleBlock>
                <LeftText>от {this.state.tickLeft} мин</LeftText>
                <RightText>до {this.state.tickRight} мин</RightText>
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
`;
const RightText = styled.div`
    display: inline-block;
    width: 50%;  
    text-align: right; 
    font-size: 0.9rem; 
`;