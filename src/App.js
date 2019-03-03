import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import Header from './components/Header';
import NavHeader from './components/NavHeader';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <NavHeader /> */}
          <Header />
        </header>

        <Landing />
        <Projects />
        {/* <About /> */}
      </div>
    );
  }
}

export default App;
