import React, { Component } from "react";
import InfoInput from "./InfoInput";

class BasicInfo extends Component {

   
    render() {
        return (
            <div id='basic-info'>
                <h2>Basic Information</h2>
                <div className="basic-input">
                    <InfoInput
                        cb={this.props.cb}
                        type="text"
                        name='name'
                        label= 'Full name: '
                    />
                    <InfoInput
                        cb={this.props.cb}
                        type="email"
                        name='email'
                        label= 'Email: '
                    />
                    <InfoInput
                        cb={this.props.cb}
                        type="phone"
                        name='phone'
                        label= 'Phone: '
                        />
                </div>
            </div>
        );
    }
}

export default BasicInfo;