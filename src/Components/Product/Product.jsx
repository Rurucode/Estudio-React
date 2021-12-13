import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  // rconst para crear esta estructura.
  constructor(props) {
    super(props)
  
    this.state = {
      supplier: this.props.info.supplier || "Empresa Falsa SA"
       
    }
  }
  
  render() {
    const {name, price} = this.props.info
    return (
      <div>
        <p>{name} tiene un precio de {price}, Proveedor: {this.state.supplier}</p>
      </div>
    );
  }
}

export default Product;