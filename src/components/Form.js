import React, { Component } from  'react';
import axios from 'axios'
//You can make a separate, specific .css style file and import it here

export default class Form extends Component {

    constructor (props) {
        super(props);

        this.state = {
            userInputURL: "",
            userInputName: "",
            userInputPrice: "",
            selectedProduct: this.props.selected,
            userIsEditing: false
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.selected !== prevProps.selected) {
            this.setState({
                userInputURL: this.props.selected.item_url,
                userInputName: this.props.selected.name,
                userInputPrice: this.props.selected.price,
                userIsEditing: !this.state.userIsEditing
            })
        }
    }
    makeChangeURL = (e) => {
        this.setState({
            userInputURL: e
        })
    }
    makeChangeName = (e) => {
        this.setState({
            userInputName: e
        })
    }
    makeChangePrice = (e) => {
        this.setState({
            userInputPrice: e
        })
    }
    eraseUserInput = () => {
        this.setState({
            userInputURL: "",
            userInputName: "",
            userInputPrice: ""
        })
    }
    clicky = () => {
        this.addProduct()
        this.eraseUserInput()
        this.props.get()
    }
    addProduct = () => {
        axios.post('/api/product', { name: this.state.userInputName, price: Number(this.state.userInputPrice), image_url: this.state.userInputURL}).then(res => {
        })
        this.props.get()
    }
    updateProduct = () => {
        axios.put('/api/product', {id: this.state.selectedProduct.id, name: this.state.selectedProduct.name, price: this.state.selectedProduct.price, image_url: this.state.selectedProduct.image_url}).then(res => {
        })
        this.props.get()
    }
    // Use other funtions with axios.put, axios.post, and axios.delete to manipulate data from the backend
    render () {
        return(
            <div>
                {this.state.userInputURL ? <img width="400" src={this.state.userInputURL} alt=""/> : <img width="400" src="http://marinerescuetechnologies.com/crm/_product_imgs/nopicture.jpg"/>}
                <div>Image URL:</div>
                <input type="text" onChange={(e => this.makeChangeURL(e.target.value))} placeholder="Image URL" value={this.state.userInputURL}/>
                <div>Product Name:</div>
                <input type="text" onChange={(e => this.makeChangeName(e.target.value))} placeholder="Product Name" value={this.state.userInputName}/>
                <div>Price:</div>
                <input type="number" min="0" onChange={(e => this.makeChangePrice(e.target.value))} placeholder="Price" value={this.state.userInputPrice}/>
                <div><button onClick={this.eraseUserInput}>Cancel</button></div>
                {this.state.userIsEditing ? <button onClick={this.clicky}>Save Changes</button> : <button onClick={this.clicky}>Add to Inventory</button>}
            </div>
        )
    }
}

// This function is stateful because a constructor was used to store data