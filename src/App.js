import { Component } from 'react';
import EducationSection from './components/EducationSection';
import './styles/index.css';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editForms: [false, false, false],
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(index) {
    this.setState({
      editForms: this.state.editForms.map((f, i) => (i === index ? !f : false)),
    });
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>CV BUILDER</h1>
        </header>
        <div className="cv">
          <AboutSection
            editForms={this.state.editForms}
            toggleEdit={this.toggleEdit}
          />
          <EducationSection
            editForms={this.state.editForms}
            toggleEdit={this.toggleEdit}
          />
          <WorkSection
            editForms={this.state.editForms}
            toggleEdit={this.toggleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
