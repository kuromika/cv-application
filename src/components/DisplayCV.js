import React, { Component } from "react";
import uniqid from 'uniqid';

class DisplayCV extends Component{

    render() {
        const education = [];
        this.props.education.forEach((school) => {
            education.push(
                <div key={uniqid()}>
                    <div>
                        <h4>{school.name}</h4>
                        <span>from {school.start} to {school.end}</span>
                    </div>
                    <h5>{school.title}</h5>
                </div>
            )
        })

        const experience = [];
        this.props.experience.forEach((job) => {
            experience.push(
                <div key={uniqid()}>
                    <div>
                        <h4>{job.position}</h4>
                        <span>{job.start} - {job.end}</span>
                    </div>
                    <h5>{job.company}</h5>
                    <p>{job.tasks}</p>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <h1>{this.props.name}</h1>
                    <div>
                        <h2>{this.props.phone}</h2>
                        <h2>{this.props.email}</h2>
                    </div>
                </div>

                <div>
                    <h3>Education</h3>
                    <hr></hr>
                    {education}
                </div>

                <div>
                    <h3>Experience</h3>
                    <hr></hr>
                    {experience}
                </div>
                <button type="button">Edit</button>
            </div>
        )
    }
}

export default DisplayCV;