import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
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
        <EducationInfo />
        <ExperienceInfo />
        
      </div>
    )
  }
}

export default App;
