import React, { Component } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';

export default class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    });
  }

  render() {
    return (
      <section id="about">
        <h1 className="section-title">
          <span>About</span>
          <button className="edit" onClick={() => this.props.toggleEdit(0)}>
            <EditIcon />
          </button>
        </h1>
        <div>
          {(this.state.firstName && (
            <h1>{this.state.firstName + ' ' + this.state.lastName}</h1>
          )) || <h1>John Doe</h1>}

          <p className="flex">
            <MailIcon />
            {(this.state.email && <span>{this.state.email}</span>) || (
              <span>example@email.com</span>
            )}
          </p>
          <p className="flex">
            <PhoneIcon />
            {(this.state.phone && <span>{this.state.phone}</span>) || (
              <span>0123 456 789</span>
            )}
          </p>
        </div>
        {this.props.editForms[0] && (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" id="firstName" required />
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" id="lastName" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="phone">Phone number</label>
            <input type="tel" name="phone" id="phone" required />
            <input type="submit" value="Add section" />
          </form>
        )}
      </section>
    );
  }
}
