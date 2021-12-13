import React, { Component } from "react";
import Product from "../Product/Product";

class Products extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       last: {},
       listaProductos: []
    }
  }
  


  createProduct = () => {
     //const name = "naranja";
     //const price = "1"
    const name = prompt("Introduce Producto");
    const price = prompt("Introduce tu precio");
    this.setState({last:{name, price}})
    this.state.listaProductos.push({name, price}) // Modifica el estado ultimo añadido.
    // alert(`Producto ${name} con precio ${price}€ creado.`);
   };
  deleteAllProduct = () => { 
    alert("Borrado")
  };

  



  render() {
    const data = [
      { name: "Huevos", price: "3.90", supplier: "La casa loli" },
      { name: "Patatas", price: "4.50" },
      { name: "Tostada", price: "1.50" },
      { name: "Cafe", price: "1.20" },
      { name: "Monster", price: "2.30" }
    ]
    const {name, price} = this.state.last

    return <div>
      <p>
        <Product info={data[0]} />
        <Product info={data[1]} />
        <Product info={data[2]} />
        <Product info={data[3]} />
        <Product info={data[4]} />

        <button onClick={this.createProduct}>Crear</button>
        <button onClick={this.deleteAllProduct}>Borrar</button>
        <h5>Ultimo elemento creado: {name} con precio {price}€</h5>
      </p>
    </div>;
  }
}

export default Products;
