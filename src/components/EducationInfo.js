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
        this.props.add('education', {
            name: '',
            title: '',
            start: '',
            end: '',
            id: uniqid()
        })
    }

    handleRemove(key) {
        this.props.remove('education', key);
    }

    handleInput(name, value, id) {
        this.props.input('education', name, value, id);
    }

    render() {

        const education = [];
        this.props.data.forEach((school) => {
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