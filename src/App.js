import React, { Component } from "react";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      basic: {
        name: '',
        email: '',
        phone: '',
      },
    }
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
      </div>
    )
  }
}

export default App;
