import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      party: 0,
      emoji: '😍',
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { feedback, party, emoji } = this.state;
    return (
      <div className="app">
        <Header />
  
        <main className="app-main">
          <section className="app-left">
            <Form emoji={emoji} party={party} feedback={feedback} updateInput={this.updateInput} />
          </section>
          <section className="app-right">
            <Preview emoji={emoji} party={party} feedback={feedback} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
