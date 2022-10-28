import React, { Component } from "react";

class InfoInput extends Component{

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    //cb is the inverse data flow callback to change the parent state.
    handleInputChange(e) {
        this.props.cb(e.target.name, e.target.value, this.props.id);
    }

    render() {
        return (

            <div className="info-input">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type={this.props.type}
                        onChange={this.handleInputChange}
                    name={this.props.name}
                    required
                        >
                    </input>
            </div>
        )
    }
}

export default InfoInput;