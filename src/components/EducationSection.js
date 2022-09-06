import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import SchoolCard from './SchoolCard';

export default class EducationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        school: '',
        subject: '',
        startDate: '',
        endDate: '',
      },
      items: [
        {
          school: 'School name',
          title: 'Title',
          subject: 'Subject',
          startDate: 'month year',
          endDate: 'month year',
        },
      ],
    };

    this.handleCardDelete = this.handleCardDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCardDelete(index) {
    this.setState({
      fields: this.state.fields,
      items: this.state.items.filter((item, i) => i !== index),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newSchool = this.state.fields;

    this.setState({
      items: this.state.items.concat({
        ...newSchool,
      }),
      fields: {
        title: '',
        school: '',
        subject: '',
        startDate: '',
        endDate: '',
      },
    });
  }

  handleChange(event) {
    let target = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [target.name]: event.target.value,
      },
    });
  }

  render() {
    return (
      <section id="education">
        <h1 className="section-title">
          <span>Education</span>
          <button className="edit" onClick={() => this.props.toggleEdit(1)}>
            <EditIcon />
          </button>
        </h1>
        <ul>
          {this.state.items.map((item, index) => (
            <SchoolCard
              item={item}
              index={index}
              handleCardDelete={this.handleCardDelete}
              key={uuidv4()}
            />
          ))}
        </ul>
        {this.props.editForms[1] && (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="ed-title">Title</label>
            <input
              type="text"
              name="title"
              id="ed-title"
              onChange={this.handleChange}
              value={this.state.fields.title}
              required
            />
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              id="school"
              onChange={this.handleChange}
              value={this.state.fields.school}
              required
            />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="startDate">Start date</label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              onChange={this.handleChange}
              value={this.state.fields.startDate}
              required
            />
            <label htmlFor="endDate">End date</label>
            <input
              type="text"
              name="endDate"
              id="endDate"
              onChange={this.handleChange}
              value={this.state.fields.endDate}
              required
            />
            <input type="submit" value="Add" />
          </form>
        )}
      </section>
    );
  }
}
