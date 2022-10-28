import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import DisplayCV from "./components/DisplayCV";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import './styles/style.css';
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
      experience: [],
      display: false,
    };
    this.handleBasicChange = this.handleBasicChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.alternateDisplay = this.alternateDisplay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleExperienceChange(experience) {
    this.setState({
      experience: experience
    })
  }


  alternateDisplay() {
    this.setState(prevState => ({
      display: !prevState.display
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.alternateDisplay();
  }

  render() {
    let className = '';
    if (this.state.display) {
      className += 'hidden';
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} id='form' className={className}>
          <h1>Create CV</h1>
          <BasicInfo
            cb={this.handleBasicChange}
          />
          <EducationInfo
            education={this.state.education}
            change={this.handleEducationChange}
          />
          <ExperienceInfo
            experience={this.state.experience}
            change={this.handleExperienceChange}
          />
          <button type="submit"> Preview </button>
        </form>
        <DisplayCV
          name={this.state.basic.name}
          email={this.state.basic.email}
          phone={this.state.basic.phone}
          education={this.state.education}
          experience={this.state.experience}
          display={this.state.display}
          alternate={this.alternateDisplay} />
      </div>
    )
  }
}

export default App;
