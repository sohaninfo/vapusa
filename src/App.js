import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//var DropdownInput = require('react-dropdown-input');
import Dropdown from 'react-dropdown'
import Select from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
//import DropdownInput from 'react-dropdown-input';
//import Title, { flushTitle } from 'react-title-component'
import TodoApp from './ToDo.js'
import Home from './components/Home.js'
var Text = require('react-format-text');


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">VAPUSA</h1>
        </header>
        <p className="App-intro">
          <Contents />
        </p>
      </div>
    );
  }
}

class Contents extends Component {
  render() {
  
    return (
      <Home/>
    );
  }
}







export default App;
