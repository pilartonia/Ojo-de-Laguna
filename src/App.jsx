import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import TiendaVirtual from './components/cart';

const App = ()=>{
  const [carrito, setCarrito] = useState([]);
  const productos = [
    { id: 1, categoria:"Estampas de grabado", precio: 20, imagen: 'https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/420140619_2105782749820407_672121779835543126_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEQCZiCTBeTAxIgI98fwfmdmRecGU2Kb4mZF5wZTYpviSzm_uXDHZBE5tzT53dsTds&_nc_ohc=YgRoTn9NTxgQ7kNvgGfP6x8&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AD_WRk5ctPpSUoo-DPLVyJE&oh=00_AYACwAuOGqoL9egcgTSg0V0w--vHc5ox-k3DiH5YD1AqxA&oe=66F0EB5F' },
    { id: 2, categoria: "Estampas de grabado", precio: 20, imagen: 'https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/358394517_160811067007136_2624315555054405611_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEg9ug2iBwGyebml6OhVyIyygOQcTRJGXPKA5BxNEkZc7H-erLoXWnjm3gWvaBuT4I&_nc_ohc=F-pAcjgaplIQ7kNvgEa44wp&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AVVUsumujSUabDgPG16ZO3g&oh=00_AYA9GozHVQz6NKeGxnTxv2OROkbW5Qn0IZsBeAZTlKYD7A&oe=66F0E096' },
    { id: 3, categoria:"Bordado cartográfico", precio: 20, imagen: 'https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/351114908_110829558699473_9109119919934868435_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG9Rrc4Raimqr3YZuFZwxKuZBmEk9qsis9kGYST2qyKz233KMVwDjnSH9YLKlWUJew&_nc_ohc=0a13PAvrAXUQ7kNvgFyBccu&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AfooN3gmNRJ0ABb7_tEBLf1&oh=00_AYB02VNcPVgAVXJF5DsE9jzfT-4otx2J7DR92Hark4-T6w&oe=66F0D2D3' }
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
    <TiendaVirtual
    carrito={carrito}
    setCarrito={setCarrito}
    agregarAlCarrito={agregarAlCarrito}
    eliminarDelCarrito={eliminarDelCarrito}
    vaciarAlCarrito={vaciarAlCarrito}
    productos={productos}  
    />
  )
}

export default App;