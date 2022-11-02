import React from "react";
import InfoInput from "./InfoInput";

const ExperienceForm = (props) => {


    const handleDelete = () =>  {
        props.delete(props.id)
    }

    return (
            <div className="experience form">
            <InfoInput
                name='company'
                type='text'
                label='Company: '
                id={props.id}
                cb ={props.input}
            />
            <InfoInput
                name='position'
                type='text'
                label='Position: '
                id={props.id}
                cb = {props.input}
            />
            <InfoInput
                name='tasks'
                type='text'
                label='Tasks: '
                id={props.id}
                cb = {props.input}
            />
            <InfoInput
                name='start'
                type='month'
                label='Start date: '
                id={props.id}
                cb = {props.input}
            />
            <InfoInput
                name='end'
                type="month"
                label='End date'
                id={props.id}
                cb = {props.input}
            />
            <button type="button"
                onClick={handleDelete}
                className='delete'
            > X </button>
        </div>
    )
}

export default ExperienceForm;