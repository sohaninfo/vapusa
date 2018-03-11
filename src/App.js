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
          <h1>Awesome!</h1>
          <Contents />
        </p>
      </div>
    );
  }
}

  var divStyle = {
        width: '50%'
    }
class Contents extends Component {
  render() {
  
    return (
      <div style={divStyle}>
      <VirtualSelect />
      </div>
    );
  }
}

var options = ['one', 'two', 'three'  ]
var defaultOption = 'one'

class SelectDropdown extends Component {
  
  render() {
    return (
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
    );
  }
}

var vOptions = [  { value: 'Stanford University', label: 'Stanford' }, { value: 'Cambridge University', label: 'Cambridge' }];
class VirtualSelect extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  render() {

    return (
      <Select
        name="university"
        value={this.state.selectValue}
        options={vOptions}
        onChange={(selectValue) => this.setState({ selectValue })}
    />
        );
  }
}

/*class CustomInput extends Component {
  render() {
    var searchNames = ['Sydney', 'Melbourne', 'Brisbane', 
    'Adelaide', 'Perth', 'Hobart'];
    return (
      
<DropdownInput 
    options={searchNames}
    defaultValue={this.props.initialValue}
    menuClassName='dropdown-input'
    onSelect={this.handleSelectName}
    placeholder='Search...'
/>
    );
  }
}*/



export default App;
