import React, { Component } from 'react';
import axios from "axios"
import './App.css';

class App extends Component {
  constructor() {
    this.setState= {
      state= ""
    }
  }
  componentDidMount() {
    axios.get("/api/test").then(res =>  {
      this.setState({
        state: res.data
      })
    })
 }  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.state}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
