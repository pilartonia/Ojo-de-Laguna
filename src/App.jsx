import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import TiendaVirtual from './components/cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PaperDraw from './components/PaperDraw';
import Cartografy from './components/Cartografy';

const App = ()=>{
  const [carrito, setCarrito] = useState([]);
  const productos = [
    { id: 1, categoria:"Dibujo", precio: 20, imagen: "Gato.jpg", src:"/src/img/Gato.jpg"},
    { id: 2, categoria: "Estampas de grabado", precio: 20, imagen: "Estampado Hoja.jpg", src:"/src/img/Estampado Hoja.jpg" },
    { id: 3, categoria:"Dibujo", precio: 20, imagen: "Dibujo.jpg", src:"/src/img/Dibujo.jpg" },
    { id: 4, categoria:"Dibujo", precio: 20, imagen: "pajaro.jpg", src:"/src/img/pajaro.jpg" }
  ];
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
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
    <>
    <Navigation/>
      <Header/>
      <PaperDraw/>
      <Cartografy/>
      
      <TiendaVirtual
      carrito={carrito}
      setCarrito={setCarrito}
      agregarAlCarrito={agregarAlCarrito}
      eliminarDelCarrito={eliminarDelCarrito}
      vaciarAlCarrito={vaciarAlCarrito}
      productos={productos}  
      />
      <Footer/>
    </>
  )
}

export default App;