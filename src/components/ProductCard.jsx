import React from 'react';
import App from '../App'; 
import TiendaVirtual from './cart';

const ProductCard = ({ producto, onAgregarAlCarrito }) => {
  return (
    <div className="producto-card">
      <img 
        src={producto.imagen} 
        alt={producto.categoria} 
        className="producto-imagen"
      />
      <h2 className="producto-nombre">{producto.categoria}</h2>
      <p className="producto-precio">${producto.precio}</p>
      <button
        onClick={() => onAgregarAlCarrito(producto)}
        className="boton-agregar"
      >
        Agregar al carrito
      </button>
    </div>
  );
};


export default ProductCard;