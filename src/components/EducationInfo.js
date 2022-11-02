import React from "react";
import uniqid from 'uniqid';
import EducationForm from "./EducationForm";

const EducationInfo = (props) => {

    const handleAdd = () =>  {
        props.add('education', {
            name: '',
            title: '',
            start: '',
            end: '',
            id: uniqid()
        })
    }

    const handleRemove = (key) =>  {
        props.remove('education', key);
    }

    const handleInput = (name, value, id) =>  {
        props.input('education', name, value, id);
    }   

    const education = [];
    props.data.forEach((school) => {
        education.push(
            <EducationForm
                key={school.id}
                delete={handleRemove}
                id={school.id}
                input={handleInput}
            />
        )
    })
    return (
        <div id="education-info">
            <div id="education-form-header">
                <h2>Education</h2>
                <button type="button" onClick={handleAdd} className='add'> + </button>
            </div>
            {education}
        </div>
    )
}

export default EducationInfo;   