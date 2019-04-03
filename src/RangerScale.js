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
            startDistance: 0,
            currentDistance: 0,
            diameter: 22*100/260    // tickRadius/length (in %)  HARDCODE!!!!
        };
        this.scaleClick = this.scaleClick.bind(this);
    }
    componentDidMount() {
        this.setState({
            from: this.props.from,
            to: this.props.to,
            tickLeft: this.props.tickL,
            tickRight: this.props.tickR,
            type: this.props.type,
            startDistance: this.props.to - this.props.from,
            currentDistance: this.props.to - this.props.from
        });
    }

    scaleClick(e) {
        e.stopPropagation();
        if (e.target.classList.contains('scale')) console.log(' !!!!!! ');
        console.log(e.target);
        // console.log(e);
        let bbox = e.target.getBoundingClientRect();
        let clickXinside = e.clientX - bbox.left;
        // console.log('x от края докмента',e.clientX);
        // console.log('х от края элемента',clickXinside);

        const mediana = ((this.state.tickRight - this.state.tickLeft)/2 + this.state.tickLeft - this.state.from) / this.state.startDistance *100;
        if(clickXinside*100/260 > mediana){
            // console.log('RIGHT');
            this.setState({
                tickRight: clickXinside * this.state.startDistance / 260
            })
        }
        else {
            // console.log('LEFT');
            this.setState({
                tickLeft: clickXinside * this.state.startDistance / 260
            })
        }
    }

    render() {

        const start = this.state.tickLeft / (this.state.to - this.state.from) * 100;
        const filled = (this.state.tickRight - this.state.tickLeft) / (this.state.to - this.state.from) * 100;
        const end = 100 - start - filled;
        // console.log(start, filled);

        return (
            <ScaleBlock>
                <LeftText>от {this.state.tickLeft} мин</LeftText>
                <RightText>до {this.state.tickRight} мин</RightText>
                <TwoPointsScale
                    click={this.scaleClick}
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