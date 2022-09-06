import React, { useState } from 'react';
import EducationSection from './components/EducationSection';
import './styles/index.css';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';

const App = () => {
  let [editForms, setEditForms] = useState([false, false, false]);

  const toggleEdit = (index) => {
    setEditForms(editForms.map((f, i) => (i === index ? !f : false)));
  };

  return (
    <div className="app">
      <header>
        <h1>CV BUILDER</h1>
      </header>
      <div className="cv">
        <AboutSection editForms={editForms} toggleEdit={toggleEdit} />
        <EducationSection editForms={editForms} toggleEdit={toggleEdit} />
        <WorkSection editForms={editForms} toggleEdit={toggleEdit} />
      </div>
    </div>
  );
};

export default App;
