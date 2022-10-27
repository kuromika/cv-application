import React, { Component } from "react";

class InfoInput extends Component{

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    //cb is the inverse data flow callback to change the parent state.
    handleInputChange(e) {
        this.props.cb(e.target.value);
    }

    render() {
        return (
            <input type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.handleInputChange}>
            </input>
        )
    }
}

export default InfoInput;