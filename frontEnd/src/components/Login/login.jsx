// Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí deberías agregar la lógica para autenticar al usuario en el backend
    // y obtener la información del usuario si las credenciales son válidas.
    try {
      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        onLogin(user);
      } else {
        // Manejar caso de credenciales incorrectas u otros errores
        console.error('Credenciales incorrectas o error en la autenticación');
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error al intentar autenticar al usuario', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
