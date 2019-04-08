import React, { Component } from 'react';
import styled from 'styled-components';

class PriceLabel  extends Component {

    render() {
        // price goodlooking style (with spaces)
        const price = this.props.price.toString();
        let cutePrice =[];
        for (let i = price.length-1; i>=0; i--){
            if (price.length-1-i === 2 || price.length-i === 5 || price.length-i === 8){
                cutePrice[i] = ' ' + price[i];
            } else {
                cutePrice[i] = price[i];
            }
        }

        // currency sign defining
        let currency = '';
        if (this.props.currency === 'rub') currency = <span> &#8381;</span>;
        if (this.props.currency === 'usd') currency = <span>  &#x24;</span>;
        if (this.props.currency === 'eur') currency = <span>  &#8364;</span> ;

        return (
            <Block >
                <Price>
                    {cutePrice}
                </Price>
                <CurrencySign>
                    {currency}
                </CurrencySign>
            </Block>
        );
    }
}

export default PriceLabel ;

const Block = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    cursor: default;
    margin-left: 5px;
`;
const Price = styled.div`
    display: inline-block;  
    color: inherit;
    font-size: 0.95rem;
    font-weight: inherit;
`;
const CurrencySign = styled.div`
    display: inline-block;
    font-size: 0.85rem;
    color: inherit;
    opacity: 0.7;
    margin-left: 5px;
`;
