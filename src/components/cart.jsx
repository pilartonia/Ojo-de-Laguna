import TiendaVirtual from "../App";
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const Cart = () =>{
    const vaciarAlCarrito = () => {
        setCarrito([]);
      };
    
    const eliminarDelCarrito = (productoId) => {
        const index = carrito.findIndex(item => item.id === productoId);
        if (index !== -1) {
          const nuevoCarrito = [...carrito];
          nuevoCarrito.splice(index, 1);
          setCarrito(nuevoCarrito);
        }
      };
 return(   
    <div className="carrito">
      <h2>Carrito</h2>
      <div className="boton-agregar">
        <span>{carrito.length} artículos</span>
        <button className='boton-eliminar' onClick={vaciarAlCarrito}>Vaciar</button>
      </div>
      <ul>
        {carrito.map((item, index) => (
          <div key={index} className="carrito-item">
            <img 
              src={item.imagen} 
              alt={item.nombre} 
              className="carrito-item-imagen"
            />
            <span>{item.nombre} - ${item.precio}</span>
            <button className='boton-eliminar' 
            onClick={() => eliminarDelCarrito(item.id)}
            >Eliminar</button>
          </div>
        ))}
      </ul>
      <p className="carrito-total">
        Total: ${carrito.reduce((sum, item) => sum + item.precio, 0)}
      </p>
    </div>
   );
}


export default Cart;