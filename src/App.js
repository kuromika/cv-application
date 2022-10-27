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
    this.handleBasicChange = this.handleBasicChange.bind(this);
  }

  handleBasicChange(name, value) {
    this.setState(prevState => ({
      basic: {
        ...prevState.basic,
        [name]: value,
      }
    }))
  }


  render() {
    return (
      <div>
        <h1>Create CV</h1>
        <BasicInfo
          cb={this.handleBasicChange}
          />
      </div>
    )
  }
}

export default App;
