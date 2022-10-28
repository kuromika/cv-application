import React, { Component } from "react";
import uniqid from 'uniqid';
import EducationForm from "./EducationForm";

class EducationInfo extends Component{

    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
    }
    

    handleAdd() {

        this.props.change(this.props.education.concat({
            name: '',
            title: '',
            start: new Date(),
            end: new Date(),
            id: uniqid()
        }))
    }

    render() {

        const education = [];
        this.props.education.forEach((school) => {
            education.push(
                <EducationForm key={school.id} />
            )
        })
        return (
            //callbacks are pending
            <div>
                <div>
                    <h2>Education</h2>
                    <button type="button" onClick={this.handleAdd}> add </button>
                </div>
                {education}
            </div>
        )
    }
}

export default EducationInfo;