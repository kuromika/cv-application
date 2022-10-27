import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
class App extends Component{

  constructor() {
    super();
    this.state = {
      basic: {
        name: '',
        email: '',
        phone: '',
      },
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange(name) {
    this.setState({
      basic: {
        name: name,
        email: this.state.basic.email,
        phone: this.state.basic.phone
      }
    })
  }

  handleEmailChange(email) {
    this.setState({
      basic: {
        name: this.state.basic.name,
        email: email,
        phone: this.state.basic.phone
      }
    })
  }

  handlePhoneChange(phone) {
    this.setState({
      basic: {
        name: this.state.basic.name,
        email: this.state.basic.email,
        phone: phone
      }
    })
  }


  render() {
    return (
      <div>
        <h1>Create CV</h1>
        <BasicInfo
          namecb={this.handleNameChange}
          emailcb={this.handleEmailChange}
          phonecb={this.handlePhoneChange}
          />
      </div>
    )
  }
}

export default App;
