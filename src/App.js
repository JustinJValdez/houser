import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import route from './route';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
          <div />

          <br />

          <div className="Dashboard">
          
          </div>

          <br />
          <div>

          </div>
        </div>
        {route}
      </div>
    );
  }
}

export default App;
