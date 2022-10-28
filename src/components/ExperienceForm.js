import React, { Component } from "react";
import InfoInput from "./InfoInput";

class ExperienceForm extends Component{

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.delete(this.props.id)
    }

    render() {
        return (
             <div>
                <InfoInput
                    name='company'
                    type='text'
                    label='Company: '
                    id={this.props.id}
                    cb ={this.props.input}
                />
                <InfoInput
                    name='position'
                    type='text'
                    label='Position: '
                    id={this.props.id}
                    cb = {this.props.input}
                />
                <InfoInput
                    name='tasks'
                    type='text'
                    label='Tasks: '
                    id={this.props.id}
                    cb = {this.props.input}
                />
                <InfoInput
                    name='start'
                    type='date'
                    label='Start date: '
                    id={this.props.id}
                    cb = {this.props.input}
                />
                <InfoInput
                    name='end'
                    type="date"
                    label='End date'
                    id={this.props.id}
                    cb = {this.props.input}
                />
                <button type="button" onClick={this.handleDelete}> delete </button>
            </div>
        )
    }
}

export default ExperienceForm;