import React from "react";
import DataDisplay from "./DataDisplay";

const DisplayCV = (props) => {

    let className = 'display ';
    if (!props.display) {
        className += 'hidden';
    }

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
                <DataDisplay data={props.education}></DataDisplay>
            </div>

            <div>
                <h3>Experience</h3>
                <hr></hr>
                <DataDisplay data={props.experience}></DataDisplay>
            </div>
            <button type="button"
                onClick={props.alternate}
                className='display-button'>Edit</button>
        </div>
    )
}

export default DisplayCV;