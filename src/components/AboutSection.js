import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';

const AboutSection = ({ editForms, toggleEdit }) => {
  const exampleInfo = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@email.com',
    tel: '0123 456 789',
  };

  let [info, setInfo] = useState(exampleInfo);
  let [fields, setFields] = useState(exampleInfo);

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInfo({ ...fields });
  };

  return (
    <section id="about">
      <h1 className="section-title">
        <span>About</span>
        <button className="edit" onClick={() => toggleEdit(0)}>
          <EditIcon />
        </button>
      </h1>
      <div>
        {<h1>{info.firstName + ' ' + info.lastName}</h1>}
        <p className="flex">
          <MailIcon />
          {<span>{info.email}</span>}
        </p>
        <p className="flex">
          <PhoneIcon />
          {<span>{info.tel}</span>}
        </p>
      </div>
      {editForms[0] && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={fields.firstName}
            required
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={fields.lastName}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={fields.email}
            required
          />
          <label htmlFor="tel">Phone number</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            onChange={handleChange}
            value={fields.tel}
            required
          />
          <input type="submit" value="Apply changes" />
        </form>
      )}
    </section>
  );
};

export default AboutSection;
