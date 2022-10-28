import React, { Component } from "react";
import InfoInput from "./InfoInput";

class EducationForm extends Component{

    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.delete(this.props.id);
    }

    render() {
        return (
            <div>
                <InfoInput
                    name='name'
                    label='School name: '
                    type='text'
                    cb={this.props.input}
                    id = {this.props.id}
                />
                <InfoInput
                    name='title'
                    label='Title: '
                    type="text"
                    cb={this.props.input}
                    id = {this.props.id}
                />
                <InfoInput
                    name='start'
                    label='Start date: '
                    type='date'
                    cb={this.props.input}
                    id = {this.props.id}
                />
                <InfoInput
                    name='end'
                    label='End date: '
                    type='date'
                    cb={this.props.input}
                    id = {this.props.id}
                />
                <button type="button" onClick={this.handleDelete}> delete </button>
            </div>
        )
    }
}

export default EducationForm;