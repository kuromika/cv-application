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
                    name='school'
                    label='School name: '
                    type='text'
                />
                <InfoInput
                    name='title'
                    label='Title: '
                    type="text"
                />
                <InfoInput
                    name='start'
                    label='Start date: '
                    type='date'
                />
                <InfoInput
                    name='end'
                    label='End date: '
                    type='date'
                />
                <button type="button" onClick={this.handleDelete}> delete </button>
            </div>
        )
    }
}

export default EducationForm;