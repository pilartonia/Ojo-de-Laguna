import './Navigation.css'
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  // Estado para controlar el menú
  const [isOpen, setIsOpen] = useState(false);  
  // Alternar entre abierto y cerrado
  const sideMenu = () => {
    setIsOpen(!isOpen);  
  }
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Cerrar el menú después de la navegación
  };
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
          <button className='button-close' onClick={sideMenu}>X</button>
          <ul>
            <li><a onClick={() => handleNavigation("/Home")}>Home</a></li>
            {/*<li><a onClick={() => navigate(`/Taller`)}>Talleres</a></li>*/}
            <li><a onClick={() => handleNavigation("/Tienda_virtual")} >Tienda Virtual</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navigation;


