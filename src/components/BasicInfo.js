import React, { Component } from "react";
import InfoInput from "./InfoInput";

class BasicInfo extends Component {

   
    render() {
        return (
            <div>
                <InfoInput
                    placeholder="Full name"
                    cb={this.props.cb}
                    type="text"
                    name = 'name'
                />
                <InfoInput
                    placeholder="Email"
                    cb={this.props.cb}
                    type="email"
                    name = 'email'
                />
                <InfoInput
                    placeholder="Phone"
                    cb={this.props.cb}
                    type="phone" 
                    name = 'phone'
                    />
            </div>
        );
    }
}

export default BasicInfo;