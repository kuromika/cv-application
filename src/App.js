import React, { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import DisplayCV from "./components/DisplayCV";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import './styles/style.css';

const App = () => {

  const [basic, setBasic] = useState({ name: '', email: '', phone: '' });
  const [data, setData] = useState({education: [], experience: []});
  const [display, setDisplay] = useState(false);

  const handleBasicChange = (name, value) => {
    setBasic({
      ...basic,
      [name]: value
    });
  }

  const handleAdd = (attr, val) => {
    setData({
      ...data,
      [attr]: data[attr].concat(val)
    });
  }

  const handleRemove = (attr, key) =>  {
    setData({
      ...data,
      [attr]: data[attr].filter(element => element.id !== key)
    });
  }
  
  const handleInput = (attr, name, value, id) =>  {
    setData({
      ...data,
      [attr]: data[attr].map(
        element => element.id === id ? { ...element, [name]: value } : element)
    });
  }

  const alternateDisplay = () =>  {
    setDisplay(!display);
  }

  const handleSubmit = (e) =>  {
    e.preventDefault();
    alternateDisplay();
  }

  let className = '';
  if (display) {
    className += 'hidden';
  }
  return (
    <div id='content'>
      <form onSubmit={handleSubmit}  className={className}>
        <h1>Create CV</h1>
        <BasicInfo
          cb={handleBasicChange}
        />
        <EducationInfo
          add={handleAdd}
          remove={handleRemove}
          input = {handleInput}
          data = {data.education}
        />
        <ExperienceInfo
          add={handleAdd}
          remove={handleRemove}
          input = {handleInput}
          data = {data.experience}
        />
        <button type="submit" id="submit" className="display-button"> Submit </button>
      </form>
      <DisplayCV
        name={basic.name}
        email={basic.email}
        phone={basic.phone}
        education={data.education}
        experience={data.experience}
        display={display}
        alternate={alternateDisplay} />
    </div>
  )
}

export default App;
