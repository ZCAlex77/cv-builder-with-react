import { Component } from 'react';
import GeneralSection from './components/GeneralSection';
import './styles/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editForms: [false],
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
          <GeneralSection
            editForms={this.state.editForms}
            toggleEdit={this.toggleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
