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
    this.alternateDisplay = this.alternateDisplay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleBasicChange(name, value) {
    this.setState(prevState => ({
      basic: {
        ...prevState.basic,
        [name]: value,
      }
    }))
  }

  handleAdd(attr,val) {
    this.setState(prevState => ({
      [attr]: [...prevState[attr]].concat(val)
    }))
  }

  handleRemove(attr, key) {
    this.setState(prevState => ({
      [attr]: prevState[attr].filter(edu => edu.id !== key)
    }));
  }
  
  handleInput(attr, name, value, id) {
    this.setState(prevState => ({
      [attr]: prevState[attr].map(
        edu => edu.id === id ? {...edu, [name] : value} : edu
      )
    }))
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
      <div id='content'>
        <form onSubmit={this.handleSubmit}  className={className}>
          <h1>Create CV</h1>
          <BasicInfo
            cb={this.handleBasicChange}
          />
          <EducationInfo
            add={this.handleAdd}
            remove={this.handleRemove}
            input = {this.handleInput}
            data = {this.state.education}
          />
          <ExperienceInfo
            add={this.handleAdd}
            remove={this.handleRemove}
            input = {this.handleInput}
            data = {this.state.experience}
          />
          <button type="submit" id="submit" className="display-button"> Submit </button>
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
