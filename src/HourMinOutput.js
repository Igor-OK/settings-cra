import React, { Component } from 'react';
import styled from 'styled-components';

class HourMinOutput extends Component {

    render() {
        const time = this.props.min;
        const hours = Math.floor(time/60);
        const minutes = time - hours*60;

        let hoursString = '';
        let minutesString = '';

        if(hours){
            hoursString = hours + '  ч '
        } else {
            hoursString = ''
        }
        if(minutes){
            minutesString = minutes + ' мин'
        } else {
            minutesString = ''
        }


        return (
            <Title>
                {hoursString}
                {minutesString}
            </Title>
        );
    }
}

export default HourMinOutput;

const Title = styled.span`
    font-size: 0.9rem;
`