import React from "react";
import uniqid from 'uniqid';

const DisplayCV = (props) => {

    const formatDate = (date) =>  {
        const alpha = date.split('-');
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return `${months[+alpha[1]-1]}, ${alpha[0]}`
    }

    let className = 'display ';
    if (!props.display) {
        className += 'hidden';
    }

    const education = [];
    props.education.forEach((school) => {
        education.push(
            <div key={uniqid()} className='info'>
                <div className="header">
                    <h4>{school.name}</h4>
                    <span> {formatDate(school.start)} - {formatDate(school.end)}</span>
                </div>
                <h5>{school.title}</h5>
            </div>
        )
    })

    const experience = [];
    props.experience.forEach((job) => {
        experience.push(
            <div key={uniqid()} className='info'>
                <div className="header">
                    <h4>{job.position}</h4>
                    <span>{formatDate(job.start)} - {formatDate(job.end)}</span>
                </div>
                <h5>{job.company}</h5>
                <p>{job.tasks}</p>
            </div>
        )
    })

    return (
        <div className={className}>
            <div id="cv-basic">
                <h1>{props.name}</h1>
                <div>
                    <h2>{props.phone}</h2>
                    <h2>{props.email}</h2>
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
            <button type="button"
                onClick={props.alternate}
                className='display-button'>Edit</button>
        </div>
    )
}

export default DisplayCV;