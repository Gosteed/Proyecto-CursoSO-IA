import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    const navigate = useNavigate();

  return (
    <nav>
      <div className="der">
        <div className="logo" onClick={() => navigate("/")}>
          <img src="src\assets\logo.png" alt="logo" />
        </div>
        <ul>
          <li onClick={() => navigate("/respuesta")}>Cursada</li>
          <li onClick={() => navigate("/sobreNosotros")}>Sobre Nosotros</li>
          <li onClick={() => navigate("/respuesta")}>Respuesta AI</li>
        </ul>
      </div>
      <div className="der"></div>
    </nav>
  )
}

export default Navbar