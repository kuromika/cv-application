import React, { Component } from "react";
import uniqid from "uniqid";
import ExperienceForm from "./ExperienceForm";
class ExperienceInfo extends Component{

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleAdd() {
        this.props.add('experience',{
            company: '',
            position: '',
            tasks: '',
            start: '',
            end: '',
            id: uniqid()
        })
    }

    handleRemove(key) {
        this.props.remove('experience', key);
    }

    handleInput(name, value, id) {
        this.props.input('experience', name, value, id);
    }


    render() {
        const experience = [];
        this.props.data.forEach((exp) => {
            experience.push(
                <ExperienceForm
                    key={exp.id}
                    delete={this.handleRemove}
                    id={exp.id}
                    input={this.handleInput}
                />
            )
        })
        return (
            <div>
                <div id="experience-form-header">
                    <h2 >Experience</h2>
                    <button type="button" onClick={this.handleAdd}
                    className='add'> + </button>
                </div>
                {experience}
            </div>
        )
    }
}

export default ExperienceInfo;