import React, { useState } from'react';
import './App.css';
import Form from './Components/Form';
import SkillsList from './Components/SkillsList';


function App() {
  // State stuff
  const [inputText, setInputText] = useState("");
  const [skills, setSkills] = useState([]);

  // Functions

  return (
    <div className="App">
      <div className='app-container'>
        <h1 className='app-name'>Level Up App</h1>
        <Form 
          inputText={inputText}
          setInputText={setInputText}
          skills={skills}
          setSkills={setSkills}
        />
      
        <SkillsList
          skills={skills}
          setSkills={setSkills}
        />
      </div>
      
    </div>
  );
}

export default App;
