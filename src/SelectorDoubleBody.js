import React, { Component } from 'react';
import styled from 'styled-components';

class SelectorDoubleBody extends Component {

    //TODO ASK ABOUT CHILDREN[1] - is it correct form of condition or not

    render() {

        let column_1=[];
        let column_2=[];
        for (let i = 1; i <= this.props.children[1].length; i++){
            if(i % 2 === 0)
                column_2.push(this.props.children[1][i - 1])
            else
                column_1.push(this.props.children[1][i - 1])
        }

        if(this.props.align === 'left' && this.props.active){
            return(
                <Body>
                    <LeftArrow />
                    <SideBlock>
                        {column_1}
                    </SideBlock>
                    <VerticalLine />
                    <SideBlock>
                        {column_2}
                    </SideBlock>
                </Body>
            )
        } else if(this.props.align === 'left' && !this.props.active){
            return(
                <BodyHidden>
                    <LeftArrow />
                    <SideBlock>
                        {column_1}
                    </SideBlock>
                    <VerticalLine />
                    <SideBlock>
                        {column_2}
                    </SideBlock>
                </BodyHidden>
            )
        }
        else if (this.props.align === 'right' && this.props.active){
            return (
                <Body>
                    <RightArrow />
                    <SideBlock>
                        {column_1}
                    </SideBlock>
                    <VerticalLine />
                    <SideBlock>
                        {column_2}
                    </SideBlock>
                </Body>
            );
        } else if (this.props.align === 'right' && !this.props.active){
            return (
                <BodyHidden>
                    <RightArrow />
                    <SideBlock>
                        {column_1}
                    </SideBlock>
                    <VerticalLine />
                    <SideBlock>
                        {column_2}
                    </SideBlock>
                </BodyHidden>
            );
        } else if(this.props.active){
            return (
                <Body>
                    <CenterArrow />
                    <SideBlock>
                        {column_1}
                    </SideBlock>
                    <VerticalLine />
                    <SideBlock>
                        {column_2}
                    </SideBlock>
                </Body>
            );
        }
        else {
            return (
                <BodyHidden>
                    <CenterArrow />
                    <SideBlock>
                        {column_1}
                    </SideBlock>
                    <VerticalLine />
                    <SideBlock>
                        {column_2}
                    </SideBlock>
                </BodyHidden>
            );
        }
    }
}

export default SelectorDoubleBody;

const Body = styled.div`
    display: inline-flex;

    flex-direction: row;
    position: static;
    margin-top: 10px;
    min-height: 100px;
    width: 565px;
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
const SideBlock = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 280px;
`;
const VerticalLine = styled.div`
    display: inline-block;
    width: 1px;
    border-left: 1px solid lightgrey;
`;
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
    transform: translate(30px, -5px) rotate(45deg);
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
    transform: translate(277px, -5px) rotate(45deg);
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
    transform: translate(525px, -5px) rotate(45deg);
`;