import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Wizard from './component/Wizard/Wizard';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <div className = "Header">
          <Header/>
        <div/>
        <br/>
        <div className = "Dashboard">
        
        </div>
        <br/>
        <div>
        
        </div>
      </div>
      </div>
    );
  }
}

export default App;
