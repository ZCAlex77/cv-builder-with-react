import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import SchoolCard from './SchoolCard';

const EducationSection = ({ editForms, toggleEdit }) => {
  const exampleSchool = {
    name: 'School name',
    title: 'Title',
    subject: 'Subject',
    startDate: 'month year',
    endDate: 'month year',
  };

  const emptyFields = {
    name: '',
    title: '',
    subject: '',
    startDate: '',
    endDate: '',
  };

  let [schools, setSchools] = useState([exampleSchool]);
  let [fields, setFields] = useState(emptyFields);

  const handleCardDelete = (index) => {
    setSchools(schools.filter((school, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSchools(schools.concat({ ...fields }));
    setFields(emptyFields);
  };

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section id="education">
      <h1 className="section-title">
        <span>Education</span>
        <button className="edit" onClick={() => toggleEdit(1)}>
          <EditIcon />
        </button>
      </h1>
      <ul>
        {schools.map((school, index) => (
          <SchoolCard
            school={school}
            index={index}
            handleCardDelete={handleCardDelete}
            key={uuidv4()}
          />
        ))}
      </ul>
      {editForms[1] && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={fields.title}
            required
          />
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={fields.name}
            required
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={handleChange}
            value={fields.subject}
            required
          />
          <label htmlFor="startDate">Start date</label>
          <input
            type="text"
            name="startDate"
            id="startDate"
            onChange={handleChange}
            value={fields.startDate}
            required
          />
          <label htmlFor="endDate">End date</label>
          <input
            type="text"
            name="endDate"
            id="endDate"
            onChange={handleChange}
            value={fields.endDate}
            required
          />
          <input type="submit" value="Add" />
        </form>
      )}
    </section>
  );
};

export default EducationSection;
