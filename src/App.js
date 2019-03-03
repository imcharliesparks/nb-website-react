import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Landing />
          <Projects />
          {/* <About /> */}
        </header>
      </div>
    );
  }
}

export default App;
