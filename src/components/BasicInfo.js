import React, { Component } from "react";
import InfoInput from "./InfoInput";

class BasicInfo extends Component {

   
    render() {
        const { namecb, emailcb, phonecb} = this.props;
        return (
            <div>
                <InfoInput
                    placeholder="Full name"
                    cb={namecb}
                    type="text"
                />
                <InfoInput
                    placeholder="Email"
                    cb={emailcb}
                    type="email"
                />
                <InfoInput
                    placeholder="Phone"
                    cb={phonecb}
                    type="phone" 
                    />
            </div>
        );
    }
}

export default BasicInfo;