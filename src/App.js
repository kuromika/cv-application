import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import DisplayCV from "./components/DisplayCV";
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
      education: [],
      experience: []
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
        <form >
          <h1>Create CV</h1>
          <BasicInfo
            cb={this.handleBasicChange}
          />
          <EducationInfo />
          <ExperienceInfo />
          <button type="submit"> Preview </button>
        </form>
        <DisplayCV education={[]} experience={[]} />
      </div>
    )
  }
}

export default App;
