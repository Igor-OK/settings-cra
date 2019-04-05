import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleHeadCheckbox from './SimpleHeadCheckbox'
import SimpleCheckbox from './SimpleCheckbox'

class SimpleCheckboxGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectAll: false,
            properties: []
        };
        this.selectAll = this.selectAll.bind(this);
        this.select = this.select.bind(this);
    }

    componentDidMount() {
        this.setState({
            selectAll: this.props.checkboxOptions.selectAll,
            properties: this.props.checkboxOptions.properties
        })
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

    select(e){
        const number = parseInt(e.currentTarget.getAttribute('data-number'));
        const currentActivity = this.state.properties[number].checked;
        const newActivity = !currentActivity;
        let multiCheck =[];
        let full = true;

        for (let i=0; i < this.state.properties.length; i++){
            const prop = {checked: newActivity};
            multiCheck[i] = {};
            if (i === number){
                Object.assign(multiCheck[i], this.state.properties[i], prop);
                full = multiCheck[i].checked ? full : false
            } else {
                Object.assign(multiCheck[i], this.state.properties[i]);
                full = multiCheck[i].checked ? full : false
            }
        }

        if(newActivity){
            if(full) {
                this.setState({
                    selectAll: true,
                    properties: multiCheck
                })
            } else {
                this.setState({
                    properties: multiCheck
                })
            }
        } else {
            this.setState({
                selectAll: false,
                properties: multiCheck
            })
        }
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
                                select = {this.select}
                                key={index}
                                dataNumber={index}
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