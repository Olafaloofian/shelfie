import React, { Component } from  'react';
import axios from 'axios'
import Product from "./Product"
//You can make a separate, specific .css style file and import it here

export default class Dashboard extends Component {
    constructor () {
        super();

        this.state = {
        }
    }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then(res => {
            console.log(res)
        })
        this.props.get()
    }

    render () {
        console.log('-------------dashboard props', this.props)
        return(
            <div>
                {this.props.items.map((e, i) => {
                    return(
                        <div key={i}>
                            <Product
                                data={this.props.items[i]}
                                image={this.props.items[i].image_url}
                                name={this.props.items[i].name}
                                price={this.props.items[i].price}
                                id={this.props.items[i].id}
                                delete={this.deleteProduct} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
// This function is stateful because a constructor was used to store data