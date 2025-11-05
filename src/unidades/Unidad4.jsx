import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';
import InfoBlock from "../components/InfoBlock.jsx";

const Unidad4 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 4 – Virtualización y uso de máquinas virtuales</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Concepto de virtualización y su importancia en la informática moderna.</li>
            <li>Tipos de virtualización: hardware, software, almacenamiento y red.</li>
            <li>Qué es una máquina virtual y cómo funciona.</li>
            <li>Principales herramientas de virtualización: VirtualBox, VMware, Hyper-V.</li>
            <li>Creación y configuración básica de una máquina virtual.</li>
            <li>Uso de imágenes ISO e instalación de sistemas operativos virtualizados.</li>
            <li>Ventajas y limitaciones de la virtualización.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender el concepto de virtualización y su función dentro de la infraestructura tecnológica actual.</li>
            <li>Aprender a instalar y configurar máquinas virtuales.</li>
            <li>Entender la diferencia entre virtualización y emulación.</li>
            <li>Utilizar herramientas como VirtualBox para crear entornos de práctica y prueba.</li>
            <li>Preparar laboratorios seguros para experimentar con Linux, redes o configuraciones de servidor.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            La virtualización permite ejecutar varios sistemas operativos en un mismo equipo físico.  
            Gracias a esto, los técnicos pueden practicar configuraciones, probar sistemas, instalar software o simular redes sin afectar su computadora principal.
          </p>
          <ul className="unit-list">
            <li>Crear entornos de laboratorio para aprender Linux sin riesgo.</li>
            <li>Probar diferentes configuraciones de red o servidores.</li>
            <li>Practicar instalación de sistemas operativos o software sin modificar tu PC real.</li>
            <li>Optimizar recursos en empresas mediante servidores virtualizados.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">¿Qué es la virtualización?</h2>
          <p>
            La <strong>virtualización</strong> es una tecnología que permite ejecutar uno o más sistemas operativos dentro de otro, 
            como si fueran computadoras independientes.  
            Esto se logra gracias a un software llamado <strong>hipervisor</strong>.
          </p>
          <p>
            El hipervisor se encarga de repartir los recursos (CPU, memoria, disco, red) entre las máquinas virtuales, 
            garantizando que todas funcionen correctamente y sin interferir entre sí.
          </p>
          <InfoBlock content={<code>
{`[ Hardware real ]
        ↓
[ Hipervisor / VirtualBox ]
        ↓
[ Máquina Virtual 1 ]  → Linux
[ Máquina Virtual 2 ]  → Windows
[ Máquina Virtual 3 ]  → Servidor Ubuntu`}
          </code>} />
          <p>
            De esta manera, una sola computadora puede comportarse como varias a la vez.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Tipos de virtualización</h2>

          <h3 className="subsection-title">1. Virtualización de hardware</h3>
          <p>
            Consiste en ejecutar varios sistemas operativos sobre el mismo hardware físico.  
            Es la forma más común, usada por programas como VirtualBox o VMware.
          </p>

          <h3 className="subsection-title">2. Virtualización de software</h3>
          <p>
            Permite ejecutar programas aislados del sistema principal, evitando conflictos o errores.  
            Por ejemplo, contenedores como <strong>Docker</strong>.
          </p>

          <h3 className="subsection-title">3. Virtualización de red</h3>
          <p>
            Crea redes virtuales dentro de una máquina física, útiles para simular entornos empresariales o pruebas de seguridad.
          </p>

          <h3 className="subsection-title">4. Virtualización de almacenamiento</h3>
          <p>
            Agrupa diferentes discos o particiones en un solo recurso lógico, 
            facilitando la gestión y mejorando la eficiencia.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Herramientas de virtualización</h2>
          <p>Existen múltiples programas de virtualización, pero los más comunes en el ámbito educativo son:</p>
          <ul className="unit-list">
            <li><strong>VirtualBox:</strong> gratuito, de código abierto, ideal para aprender.</li>
            <li><strong>VMware Workstation:</strong> profesional, con más rendimiento.</li>
            <li><strong>Hyper-V:</strong> integrado en Windows 10/11 Pro.</li>
          </ul>
          <p>
            En este curso utilizaremos <strong>VirtualBox</strong>, 
            ya que permite crear máquinas Linux fácilmente y es compatible con todos los sistemas operativos.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Creación de una máquina virtual en VirtualBox</h2>
          <p>Pasos básicos para crear tu primer entorno virtual:</p>
          <ol className="unit-list decimal">
            <li>Abrí VirtualBox y seleccioná “Nueva”.</li>
            <li>Asigná un nombre (por ejemplo, <code>Linux-Prueba</code>).</li>
            <li>Elegí el tipo de sistema: <strong>Linux</strong> → <strong>Ubuntu (64-bit)</strong>.</li>
            <li>Define la cantidad de memoria RAM (recomendado: 2048 MB o más).</li>
            <li>Crea un disco virtual (20 GB o más).</li>
            <li>En el apartado de almacenamiento, seleccioná una <strong>imagen ISO</strong> del sistema operativo que desees instalar.</li>
            <li>Iniciá la máquina y seguí los pasos de instalación como si fuera un equipo real.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ventajas de la virtualización</h2>
          <ul className="unit-list">
            <li>Permite probar diferentes sistemas sin modificar el equipo real.</li>
            <li>Facilita la práctica de configuraciones avanzadas.</li>
            <li>Ahorra recursos: varios entornos en una sola PC.</li>
            <li>Ideal para educación, pruebas de red, servidores o seguridad.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Limitaciones y consejos</h2>
          <ul className="unit-list">
            <li>Las máquinas virtuales consumen mucha RAM y CPU.</li>
            <li>El rendimiento es menor que el de un sistema instalado directamente.</li>
            <li>Siempre asigná recursos razonables para no saturar tu equipo.</li>
            <li>Usá “instantáneas” para guardar estados antes de hacer pruebas arriesgadas.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Tu primera máquina virtual</h3>
          <ol className="unit-list decimal">
            <li>Descargá e instalá <strong>VirtualBox</strong>.</li>
            <li>Descargá una ISO de Ubuntu desde su sitio oficial.</li>
            <li>Creá una máquina virtual y completá la instalación.</li>
            <li>Explorá su escritorio y abrí la terminal para verificar el sistema con <code>uname -a</code>.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Instantáneas</h3>
          <ol className="unit-list decimal">
            <li>En tu máquina virtual, instalá un programa (por ejemplo, <code>htop</code>).</li>
            <li>Guardá una instantánea en VirtualBox.</li>
            <li>Desinstalá el programa y luego restaurá la instantánea.</li>
            <li>Observá cómo el sistema vuelve al estado anterior.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 4</h2>
          <p>
            En esta unidad aprendiste a usar la virtualización como herramienta de aprendizaje y práctica.  
            Ahora podés crear entornos seguros donde experimentar libremente con sistemas Linux, redes o servidores.
          </p>
          <p className="closing-quote">
            “Practicar en un entorno virtual es aprender sin miedo a romper nada.”
          </p>
          <Link to="/unidad5" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad4;
