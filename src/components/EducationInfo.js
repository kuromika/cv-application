import React, { Component } from "react";
import InfoInput from "./InfoInput";

class EducationInfo extends Component{

    render() {
        return (
            //callbacks are pending
            <div>
                <h2>Education</h2>
                <button type="button"> add </button>
                <div>
                    <InfoInput
                        name='school'
                        label='School name: '
                        type='text'
                    />
                    <InfoInput
                        name='title'
                        label='Title: '
                        type="text"
                    />
                    <InfoInput
                        name='start'
                        label='Start date: '
                        type='date'
                    />
                    <InfoInput
                        name='end'
                        label='End date: '
                        type='date'
                    />
                    <button type="button"> delete </button>
                </div>
            </div>
        )
    }
}

export default EducationInfo;