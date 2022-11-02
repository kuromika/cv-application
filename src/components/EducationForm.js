import React from "react";
import InfoInput from "./InfoInput";

const EducationForm = (props) => {


    const handleDelete = () =>  {
        props.delete(props.id);
    }

    return (
        <div className="education form">
            <InfoInput
                name='name'
                label='School name: '
                type='text'
                cb={props.input}
                id = {props.id}
            />
            <InfoInput
                name='title'
                label='Title: '
                type="text"
                cb={props.input}
                id = {props.id}
            />
            <InfoInput
                name='start'
                label='Start date: '
                type='month'
                cb={props.input}
                id = {props.id}
            />
            <InfoInput
                name='end'
                label='End date: '
                type='month'
                cb={props.input}
                id = {props.id}
            />
            <button type="button" onClick={handleDelete}
                className='delete'
            > X </button>
        </div>
    )
}

export default EducationForm;