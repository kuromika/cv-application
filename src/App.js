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
    this.handleEducationChange = this.handleEducationChange.bind(this);
  }

  handleBasicChange(name, value) {
    this.setState(prevState => ({
      basic: {
        ...prevState.basic,
        [name]: value,
      }
    }))
  }

  handleEducationChange(education) {
    this.setState({
      education: education
    })
  }


  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create CV</h1>
          <BasicInfo
            cb={this.handleBasicChange}
          />
          <EducationInfo
            education={this.state.education}
            change={this.handleEducationChange}
          />
          <ExperienceInfo />
          <button type="submit"> Preview </button>
        </form>
        {/* <DisplayCV
          name={this.state.basic.name}
          email={this.state.basic.email}
          phone={this.state.phone}
          education={this.state.education}
          experience={this.state.experience} /> */}
      </div>
    )
  }
}

export default App;
