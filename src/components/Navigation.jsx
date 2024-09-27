import './Navigation.css'
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';

const Navigation = () => {
  // Estado para controlar el menú
  const [isOpen, setIsOpen] = useState(false);  
  // Alternar entre abierto y cerrado
  const sideMenu = () => {
    setIsOpen(!isOpen);  
  }
  return (
    <header>
        <img src="/src/img/Mesa de trabajo 1 (1).png" alt="logo"/>
        <a href="#" onClick={sideMenu}>
          <GiHamburgerMenu  
            color="#1F316F"
            size="5rem" 
          />
        </a>
        {/* Menú lateral */}
        <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/App">Home</a></li>
            {/*<li><a href="/Taller">Talleres</a></li>*/}
            <li><a href="/Tienda_Virtual">Tienda Virtual</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navigation;


