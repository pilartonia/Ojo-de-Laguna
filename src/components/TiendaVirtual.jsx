import React, { useState } from 'react';
import App from '../App'; 
import ProductCard from './ProductCard';
import Select from 'react-select'

const TiendaVirtual = ({ productos, carrito, agregarAlCarrito, vaciarAlCarrito, eliminarDelCarrito }) => {
    const [busqueda, setBusqueda] = useState("");

    const productosFiltrados =
      productos.filter(producto =>
      producto.categoria.includes(busqueda));

    const options =[
        {value:"Bordados cartográficos", label:"Bordados cartográficos"},
        {value:"Dibujo", label: "Dibujo"},
        {value:"Fotografías performance", label:"Fotografías performance"},
        {value:"Estampas de grabado", label:"Estampas de grabado"}
    ];

  return (
      <div className="container">
          <h1>Tienda Virtual</h1>
          <div >
            <Select className="buscador-input" 
            options={options}
             onChange={(e) => {
                const categoriaSeleccionada = (e.value);
                setBusqueda(categoriaSeleccionada);
                }}>
            </Select>         
          </div>

          <div className="productos-grid">
              { productosFiltrados.map((producto) => (
                  <ProductCard
                      key={producto.id}
                      producto={producto}
                      onAgregarAlCarrito={agregarAlCarrito}
                  />
               )) }
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
              <button className='boton-agregar'>Pagar</button>
          </div>
      </div>
  );
};


export default TiendaVirtual;