import React from "react";

function InfoInput(props){

    //cb is the inverse data flow callback to change the parent state.
    const handleInputChange = (e) => {
        props.cb(e.target.name, e.target.value, props.id);
    }

    return (
        <div className="info-input">
            <label htmlFor={props.name}>{props.label}</label>
                <input type={props.type}
                    onChange={handleInputChange}
                    name={props.name}
                    required
                    >
                </input>
        </div>
    )
}

export default InfoInput;