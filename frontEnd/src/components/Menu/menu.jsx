// menu.jsx
import React from 'react';

const Menu = ({ user, onMenuSelect }) => {
  return (
    <div className="menu-container">
      <p>Bienvenido, {user.nombre}</p>
      <select onChange={(e) => onMenuSelect(e.target.value)}>
        <option value="zona1">Zona 1</option>
        {/* Agrega más opciones según las zonas de tu base de datos */}
      </select>
    </div>
  );
};

export default Menu;
