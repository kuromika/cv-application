import React, { Component } from "react";

class InfoInput extends Component{

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    //cb is the inverse data flow callback to change the parent state.
    handleInputChange(e) {
        this.props.cb(e.target.name, e.target.value);
    }

    render() {
        return (

            <div>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type={this.props.type}
                        onChange={this.handleInputChange}
                        name={this.props.name}
                        id={this.props.name}>
                    </input>
            </div>
        )
    }
}

export default InfoInput;