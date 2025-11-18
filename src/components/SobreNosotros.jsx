import React from 'react'
import '../styles/home.css'; // Reutilizamos los estilos del home
import backgroundGif from '../assets/tormentadefacha.jpg'; // Reutilizamos el fondo del home

const SobreNosotros = () => {
  return (
    <>
      <div className="home-container">
        <header className="home-header" style={{ backgroundImage: `url(${backgroundGif})`, height: '100vh' }}>
          <h1 className="home-header-title">Sobre Nosotros</h1>
          <p className="home-header-subtitle">
            Conocé al equipo detrás de este proyecto educativo.
          </p>
        </header>

        <div className="home-content">
          <section className="home-section">
            <h2 className="section-title">Nuestro Origen</h2>
            <p>
              Somos tres estudiantes del <strong>Instituto Tecnológico Florentino Ameghino (ITFA)</strong>. 
              Esta página fue creada como un proyecto integrador para las materias de <strong>Laboratorio de Sistemas Operativos</strong> y <strong>Laboratorio de Aplicaciones</strong>.
            </p>
            <p>
              Nuestro objetivo fue combinar los conocimientos técnicos de administración de sistemas con el desarrollo de una aplicación web moderna y funcional, 
              creando una herramienta educativa que sea útil tanto para nosotros como para futuros estudiantes.
            </p>
          </section>

          <section className="home-section">
            <h2 className="section-title">Integrantes del Equipo</h2>
            <div className="home-grid">
              <div className="grid-item">
                <h3>Maximo Leonel Bustos</h3>
                <p>Encargado de la integración con la API de Gemini, la lógica del chat de IA y la gestión del estado de la aplicación.</p>
              </div>
              <div className="grid-item">
                <h3>Agustin Emil Giardino</h3>
                <p>Responsable del diseño de la interfaz, la experiencia de usuario, la maquetación de los componentes en React. y armado del chat de IA tanto en su logica como en su interfaz</p>              </div>
              <div className="grid-item">
                <h3>Federico Ariel Arce</h3>
                <p>A cargo de la investigación, redacción y estructuración de todo el contenido teórico y práctico de las unidades del curso.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SobreNosotros