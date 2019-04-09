import React, { Component } from 'react';
import styled from 'styled-components';

class SelectorBody extends Component {

    render() {

        if(this.props.align === 'left' && this.props.active){
            return(
                <Body>
                    <LeftArrow />
                    {this.props.children}
                </Body>
            )
        } else if(this.props.align === 'left' && !this.props.active){
            return(
                <BodyHidden>
                    <LeftArrow />
                    {this.props.children}
                </BodyHidden>
            )
        } else if (this.props.align === 'right' && this.props.active){
            return (
                <Body>
                    <RightArrow />
                    {this.props.children}
                </Body>
            );
        }
        else if (this.props.align === 'right' && !this.props.active){
            return (
                <BodyHidden>
                    <RightArrow />
                    {this.props.children}
                </BodyHidden>
            );
        }  else if (this.props.active) {
            return (
                <Body>
                    <CenterArrow />
                    {this.props.children}
                </Body>
            );
        } else {
            return (
                <BodyHidden>
                    <CenterArrow />
                    {this.props.children}
                </BodyHidden>
            );
        }


    }
}

export default SelectorBody;

const Body = styled.div`
    display: inline-block;
    position: static;
    margin-top: 10px;
    min-height: 100px;
    width: 280px;
    overflow: hidden;
    background-color: #ffffff;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 0px 3px 20px -10px rgba(128,128,128,0.75);
      }
`;
const BodyHidden = styled.div`
    display: none;
`
const LeftArrow = styled.div`
    position: absolute;
    display: inline-block; 
    background-color: white;
    border-width: 1px;
    border-style: solid none none solid;
    border-color: lightgrey;
    width: 7px;
    height: 7px;
    z-index: 1;
    transform: translate(-111px, -5px) rotate(45deg);
`;
const CenterArrow = styled.div`
    position: absolute;
    display: inline-block; 
    background-color: white;
    border-width: 1px;
    border-style: solid none none solid;
    border-color: lightgrey;
    width: 7px;
    height: 7px;
    z-index: 1;
    transform: translate(-10px, -5px) rotate(45deg);
`;
const RightArrow = styled.div`
    position: absolute;
    display: inline-block; 
    background-color: white;
    border-width: 1px;
    border-style: solid none none solid;
    border-color: lightgrey;
    width: 7px;
    height: 7px;
    z-index: 1;
    transform: translate(100px, -5px) rotate(45deg);
`;