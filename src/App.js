import React, { Component } from 'react';
import axios from "axios"
import './App.css';
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import Header from "./components/Header"
import Product from "./components/Product"


class App extends Component {
  constructor() {
    super();

    this.state= {
      inventoryList: [],
      selectedProduct: ""
    }
    this.setSelected = this.setSelected.bind(this)
  }

  componentDidMount = () => {
    console.log('Main component mounted!')
    axios.get("/api/inventory").then(res => {
      console.log("---------Internal API Response", res)
      this.setState({
        inventoryList: res.data
      })
    })
  }

  setSelected = (data) => {
    this.setState({
      selectedProduct: data
    })
  }

 render() {
    return (
      <div className="App">
        <Dashboard items={this.state.inventoryList} get={this.componentDidMount}><Product setSelected={this.setSelected}/></Dashboard>
        <Header />
        <div><Form get={this.componentDidMount} selected={this.state.selectedProduct}/></div>
      </div>
    );
  }
}

export default App;
