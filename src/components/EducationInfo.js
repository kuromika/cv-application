import React, { Component } from "react";
import uniqid from 'uniqid';
import EducationForm from "./EducationForm";

class EducationInfo extends Component{

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    

    handleAdd() {
        this.props.change(this.props.education.concat({
            name: '',
            title: '',
            start: '',
            end: '',
            id: uniqid()
        }))
    }

    handleRemove(key) {
        this.props.change(this.props.education.filter(edu => edu.id !== key));
    }

    handleInput(name, value, id) {
        this.props.change(this.props.education.map(edu =>
            edu.id === id ? { ...edu, [name]: value } : edu
            )
        )
    }

    render() {

        const education = [];
        this.props.education.forEach((school) => {
            education.push(
                <EducationForm
                    key={school.id}
                    delete={this.handleRemove}
                    id={school.id}
                    input={this.handleInput}
                />
            )
        })
        return (
            //callbacks are pending
            <div id="education-info">
                <div id="education-form-header">
                    <h2>Education</h2>
                    <button type="button" onClick={this.handleAdd} className='add'> + </button>
                </div>
                {education}
            </div>
        )
    }
}

export default EducationInfo;