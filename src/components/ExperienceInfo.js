import React, { Component } from "react";
import InfoInput from "./InfoInput";

class ExperienceInfo extends Component{

    render() {
        return (
            <div>
                <div>
                    <h2>Experience</h2>
                    <button type="button"> add </button>
                </div>
                <div>
                    <InfoInput
                        name='company'
                        type='text'
                        label='Company: '
                    />
                    <InfoInput
                        name='position'
                        type='text'
                        label='Position: '
                    />
                    <InfoInput
                        name='tasks'
                        type='text'
                        label='Tasks: '
                    />
                    <InfoInput
                        name='start'
                        type='date'
                        label='Start date: '
                    />
                    <InfoInput
                        name='end'
                        type="date"
                        label='End date'
                    />
                </div>
            </div>
        )
    }
}

export default ExperienceInfo;