import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Bio from './components/Bio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Landing />
          <Bio />
        </header>
      </div>
    );
  }
}

export default App;
