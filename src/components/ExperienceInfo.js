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
        this.props.change(this.props.experience.concat({
            company: '',
            position: '',
            tasks: '',
            start: '',
            end: '',
            id: uniqid()
        }))
    }

    handleRemove(key) {
        this.props.change(this.props.experience.filter(exp => exp.id !== key));
    }

    handleInput(name, value, id) {
        this.props.change(this.props.experience.map(exp =>
            exp.id === id ? { ...exp, [name]: value } : exp)
        )
    }


    render() {
        const experience = [];
        this.props.experience.forEach((exp) => {
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
                <div>
                    <h2>Experience</h2>
                    <button type="button" onClick={this.handleAdd}> add </button>
                </div>
                {experience}
            </div>
        )
    }
}

export default ExperienceInfo;