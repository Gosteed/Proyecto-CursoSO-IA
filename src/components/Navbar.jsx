import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    const navigate = useNavigate();

  return (
    <nav>
      <div className="navbar-main">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src="src\assets\logo.png" alt="logo" />
        </div>
        <ul>
          <li onClick={() => navigate("/unidad1")}>Cursada</li>
          <li onClick={() => navigate("/sobreNosotros")}>Sobre Nosotros</li>
        </ul>
      </div>
      <div className="navbar-secondary"></div>
    </nav>
  )
}

export default Navbar