import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css'
import backgroundGif from '../assets/fondo-header-home.gif'; // 1. Importa el GIF

const Home = () => {
  return (
    <>
      <div className="p-8 text-gray-200 leading-relaxed space-y-10">
        {/* 2. Aplica el estilo en línea para el fondo */}
        <header className="header text-center space-y-3" style={{ backgroundImage: `url(${backgroundGif})` }}>
          <h1 className="text-4xl font-bold text-blue-400">Laboratorio de Sistemas Operativos</h1>
          <p className="text-lg text-gray-300 italic">
            “Aprendé a entender, dominar y crear con los sistemas que mueven el mundo.”
          </p>
        </header>
          <div className="content">
            <section className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300">Bienvenido al curso</h2>
              <p>
                Este sitio fue creado para acompañarte en el aprendizaje de <strong>Laboratorio de Sistemas Informáticos</strong>, 
                una materia clave dentro de la formación técnica en informática. 
                A lo largo de este curso vas a aprender, de manera práctica y progresiva, cómo funcionan los sistemas Linux, 
                cómo automatizar tareas, administrar redes, implementar servidores y proteger sistemas frente a amenazas informáticas.
              </p>
              <p>
                Cada unidad está pensada como un módulo independiente pero conectado con los anteriores, 
                de modo que puedas avanzar a tu propio ritmo y comprender no solo el “cómo”, sino también el “por qué” detrás de cada herramienta. 
                La idea es que termines este curso sintiéndote capaz de desenvolverte con soltura en entornos Linux y comprender la lógica de los sistemas modernos.
              </p>
            </section>

            {/* Contenedor Flex para Objetivo y Metodología */}
            <div className="controw">
              <section className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-300">🎯 Objetivo general</h2>
                <p>
                  El objetivo de este sitio es ofrecerte una <strong>experiencia educativa completa</strong> que combine teoría, práctica y ejemplos reales. 
                  Queremos que no solo memorices comandos o conceptos, sino que realmente entiendas cómo funcionan los sistemas y qué rol cumplen dentro de la informática.
                </p>
                <ul className="list-disc ml-6">
                  <li>Comprender la estructura interna de los sistemas operativos Linux.</li>
                  <li>Dominar el uso de la terminal y los comandos esenciales.</li>
                  <li>Aprender a crear y ejecutar scripts para automatizar tareas.</li>
                  <li>Conocer conceptos de redes, servidores, seguridad y virtualización.</li>
                  <li>Aplicar buenas prácticas de administración y defensa informática.</li>
                </ul>
              </section>

              <section className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-300">📚 Metodología</h2>
                <p>
                  Cada unidad está estructurada para que puedas aprender paso a paso:
                </p>
                <ul className="list-decimal ml-6">
                  <li><strong>Explicación teórica:</strong> conceptos claros, sin tecnicismos innecesarios.</li>
                  <li><strong>Ejemplos prácticos:</strong> comandos, scripts y simulaciones reales.</li>
                  <li><strong>Actividades guiadas:</strong> ejercicios para afianzar el aprendizaje.</li>
                  <li><strong>Aplicaciones prácticas:</strong> cómo usar lo aprendido en proyectos reales.</li>
                </ul>
                <p>
                  Todo el contenido está escrito con un enfoque didáctico, pensado para estudiantes de escuelas técnicas, 
                  principiantes en Linux o entusiastas de la informática que quieran fortalecer sus conocimientos.
                </p>
              </section>
            </div>

            <section className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300">🚀 ¿Qué vas a poder lograr?</h2>
              <p>
                Al finalizar el curso vas a ser capaz de comprender y trabajar con sistemas Linux, 
                realizar tareas de administración, automatización y diagnóstico, 
                entender los principios de seguridad informática y desenvolverte con confianza dentro de entornos técnicos.
              </p>
              <p>
                Todo esto te servirá no solo dentro del ámbito escolar, sino también como base sólida 
                para carreras como <strong>ciberseguridad</strong>, <strong>administración de servidores</strong> o <strong>desarrollo de software</strong>.
              </p>
            </section>

            <section className="text-center space-y-3 mt-10">
              <h2 className="text-2xl font-semibold text-blue-300">🧩 ¿Listo para comenzar?</h2>
              <p>
                Iniciá tu recorrido con la <strong>Unidad 1 – Introducción a Linux y la Terminal</strong>, 
                donde vas a descubrir el corazón del sistema y aprender a dominar la terminal paso a paso.
              </p>
              <Link to="/unidad1" className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Comenzar curso →
              </Link>
            </section> 
          </div>
      </div>
    </>
  )
}

export default Home