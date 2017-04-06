import React, { Component } from 'react';
import Nav from './Nav';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Content/>
      </div>
    );
  }
}

export default App;
