import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import route from './route';




class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <body>
          {route}
          </body>
      </div>
    );
  }
}

export default App;
