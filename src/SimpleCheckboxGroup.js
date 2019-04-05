import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleHeadCheckbox from './SimpleHeadCheckbox'
import SimpleCheckbox from './SimpleCheckbox'

class SimpleCheckboxGroup extends Component {
    constructor(props){
        super(props);
//todo state initialization from props
        this.state = {
            selectAll: false,
            properties: [
                {
                    label: 'Без пересадок',
                    checked: false
                },
                {
                    label: '1 пересадка',
                    checked: false
                },
                {
                    label: 'Без ночных пересадок',
                    checked: false
                },
                {
                    label: 'Без смены аэропорта',
                    checked: false
                },
            ]
        };
        this.selectAll = this.selectAll.bind(this);
    }

    selectAll(){
        const checked = !this.state.selectAll;
        let multiCheck =[];
        let flag=null;
        if (checked) flag = true
        else flag = false;
        for(let i=0; i < this.state.properties.length; i++){
            const prop = {checked: flag};
            multiCheck[i] = {};
            Object.assign(multiCheck[i], this.state.properties[i], prop);
        }

        this.setState({
            selectAll: checked,
            properties: multiCheck
        })
    }

    render() {
        return (
            <Group>
                <SimpleHeadCheckbox
                    checked={this.state.selectAll}
                    selectAll={this.selectAll}
                />
                {this.state.properties.map( (property, index)=>{
                    return (
                            <SimpleCheckbox
                                checked = {property.checked}
                                label = {property.label}
                                key={index}
                            />
                        )
                })}

            </Group>
        );
    }
}

export default SimpleCheckboxGroup;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`