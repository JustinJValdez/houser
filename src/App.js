import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Wizard from './component/Wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div className = "Header">
          <Header/>
        <div/>
        <div>
        <Dashboard/>
        </div>
        <div>
        <Wizard/>
        </div>
      </div>
    );
  }
}

export default App;
