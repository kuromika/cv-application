import React from "react";
import uniqid from "uniqid";
import ExperienceForm from "./ExperienceForm";


const ExperienceInfo = (props) => {

    const handleAdd = () =>  {
        props.add('experience',{
            company: '',
            position: '',
            tasks: '',
            start: '',
            end: '',
            id: uniqid()
        })
    }

    const handleRemove = (key) =>  {
        props.remove('experience', key);
    }

    const handleInput = (name, value, id) => {
        props.input('experience', name, value, id);
    }


    const experience = [];
    props.data.forEach((exp) => {
        experience.push(
            <ExperienceForm
                key={exp.id}
                delete={handleRemove}
                id={exp.id}
                input={handleInput}
            />
        )
    })

    return (
        <div>
            <div id="experience-form-header">
                <h2 >Experience</h2>
                <button type="button" onClick={handleAdd}
                className='add'> + </button>
            </div>
            {experience}
        </div>
    )
}

export default ExperienceInfo;