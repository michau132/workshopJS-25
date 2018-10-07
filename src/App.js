import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Description from './components/description';
import List from './components/questions/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Description/>
        <List/>
      </div>
    );
  }
}

export default App;
