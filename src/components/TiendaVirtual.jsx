import React, { useState } from 'react';
import App from '../App'; 
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TiendaVirtual = ({ productos, carrito, agregarAlCarrito, vaciarAlCarrito, eliminarDelCarrito }) => {
    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter(producto =>
      producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
    );

  return (
      <div className="container">
          <h1>Tienda Virtual</h1>
          <div >
            <select onChange={(e) => handleOnchange(e.target.value)} className="buscador-input">
                <option value="">Todas las Categorías</option>
                <option value="Estampas de grabado" onClick={()=>{productosFiltrados(value)}}>Estampas de grabado</option>
                <option value="Bordados cartográficos" onClick={()=>{productosFiltrados(value)}}>Bordado cartográfico</option>
                <option value="Dibujos" onClick={()=>{productosFiltrados(value)}}>Dibujos</option>
                <option value="Fotografías performance" onClick={()=>{productosFiltrados(value)}}>Fotografías performance</option>
            </select>         
          </div>

          <div className="productos-grid">
              {productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
                  <ProductCard
                      key={producto.id}
                      producto={producto}
                      onAgregarAlCarrito={agregarAlCarrito}
                  />
              )) : (
                  <p> No se encontraron registros </p>
              )}
          </div>

          <div className="carrito">
              <h2>Carrito</h2>
              <div className="carrito-resumen">
                  <span>{carrito.length} artículos</span>
                  <button className='boton-vaciar' onClick={vaciarAlCarrito}>Vaciar</button>
              </div>
              <ul>
                  {carrito.map((item, index) => (
                      <div key={index} className="carrito-item">
                          <img
                              src={item.src}
                              alt={item.categoria}
                              className="carrito-item-imagen"
                          />
                          <span>{item.categoria} - ${item.precio}</span>
                          <button className='boton-eliminar' onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                      </div>
                  ))}
              </ul>
              <p className="carrito-total">
                  Total: ${carrito.reduce((sum, item) => sum + item.precio, 0)}
              </p>
          </div>
      </div>
  );
};


export default TiendaVirtual;