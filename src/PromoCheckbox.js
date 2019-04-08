import React, { Component } from 'react';
import styled from 'styled-components';
import CheckableSquare from './CheckableSquare'
import CheckboxLabel from './CheckboxLabel'
import PriceLabel from './PriceLabel'

class PromoCheckbox  extends Component {

    render() {

        let text = null;
        if(this.props.promoText){
            text = <Text>
                {this.props.promoText}
            </Text>
        } else text = null;
        let price = null;
        if(this.props.price && this.props.currency){
            price = <PriceLabel price={this.props.price} currency={this.props.currency}  />
        }

        return (
            <Block onClick={this.props.select} data-number={this.props.dataNumber}>
                <CheckBox>
                    <CheckableSquare checked={this.props.checked}/>
                    <CheckboxLabel text={this.props.label}/>
                </CheckBox>
                {this.props.promo
                ? (
                        <PromoBlockOrange>
                            {text}
                            {price}
                        </PromoBlockOrange>
                    )
                 : (
                        <PromoBlock>
                            {text}
                            {price}
                        </PromoBlock>
                    )
                }
            </Block>
        );
    }
}

export default PromoCheckbox ;

const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    height: 45px;
    background-color: white;
        &:hover {
            background-color: #F9FAFB;
        }
`;
const CheckBox = styled.div`
    display: inline-flex;
    align-items: center;
`;
const PromoBlock = styled.div`
    display: inline-block;  
    color: #747474;
    font-size: 0.95rem;
    font-weight: 300;
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;
const PromoBlockOrange = styled.div`
    display: inline-block;  
    color: #F7CA5B;
    font-size: 0.95rem;
    font-weight: 500;
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;
const Text = styled.div`
    display: inline-block;
    font-size: 0.95rem;
    font-weight: 500;
    color: inherit;
`;