import React from "react";
import InfoInput from "./InfoInput";

const BasicInfo = (props) =>  {

    return (
        <div id='basic-info'>
            <h2>Basic Information</h2>
            <div className="basic-input">
                <InfoInput
                    cb={props.cb}
                    type="text"
                    name='name'
                    label='Full name: '
                />
                <InfoInput
                    cb={props.cb}
                    type="email"
                    name='email'
                    label='Email: '
                />
                <InfoInput
                    cb={props.cb}
                    type="tel"
                    name='phone'
                    label='Phone: '
                    pattern = "+\d"
                    />
            </div>
        </div>
    );
}

export default BasicInfo;