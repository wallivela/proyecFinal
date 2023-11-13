import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Formulario from './components/Formulario/Formulario';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [selectedZona, setSelectedZona] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al endpoint /tablas del backend para obtener datos
    axios.get('http://localhost:3000/tablas')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos del backend:', error);
      });
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleMenuSelect = (zona) => {
    setSelectedZona(zona);
  };

  const handleFormSubmit = (puntuaciones) => {
    // Lógica para enviar las puntuaciones al backend
    console.log("Puntuaciones enviadas al backend:", puntuaciones);
  };

  return (
    <div className='app'>
      {user ? (
        <>
          <Menu user={user} onMenuSelect={handleMenuSelect} />
          {selectedZona && <Formulario zona={selectedZona} onSubmit={handleFormSubmit} />}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}

      {/* Muestra los datos obtenidos del backend */}
      <ul>
        {data.map(item => (
          <li key={item.zona}>{item.zona}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
