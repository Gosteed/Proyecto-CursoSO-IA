import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';

const Unidad7 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 7 – Seguridad informática, phishing y buenas prácticas</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Concepto de seguridad informática y su importancia.</li>
            <li>Principales amenazas: malware, ransomware, phishing y ataques de ingeniería social.</li>
            <li>Medidas preventivas y buenas prácticas de seguridad.</li>
            <li>Herramientas de protección en sistemas Linux.</li>
            <li>Autenticación, contraseñas seguras y manejo de permisos.</li>
            <li>Copias de seguridad y recuperación de datos.</li>
            <li>Seguridad en la navegación y correo electrónico.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender los conceptos fundamentales de la seguridad informática.</li>
            <li>Reconocer los principales tipos de ataques y amenazas.</li>
            <li>Aprender a prevenir y responder ante situaciones de riesgo.</li>
            <li>Aplicar buenas prácticas de seguridad en el uso diario de sistemas y redes.</li>
            <li>Implementar medidas básicas de protección en Linux y otros entornos.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            La seguridad informática es una de las áreas más importantes dentro de la tecnología actual.  
            Aprender a proteger datos, sistemas y redes no solo evita pérdidas de información, sino que también 
            previene ataques que pueden afectar a usuarios y organizaciones.
          </p>
          <ul className="unit-list">
            <li>Detectar intentos de phishing o engaños por correo.</li>
            <li>Configurar sistemas seguros en Linux.</li>
            <li>Aplicar políticas de contraseñas y copias de seguridad.</li>
            <li>Analizar y reconocer comportamientos sospechosos en la red.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">¿Qué es la seguridad informática?</h2>
          <p>
            La <strong>seguridad informática</strong> se encarga de proteger los sistemas, redes y datos frente a accesos no autorizados, 
            daños o robos de información.  
            Su objetivo es mantener tres principios fundamentales:
          </p>
          <ul className="unit-list">
            <li><strong>Confidencialidad:</strong> solo las personas autorizadas pueden acceder a la información.</li>
            <li><strong>Integridad:</strong> los datos no pueden ser alterados sin autorización.</li>
            <li><strong>Disponibilidad:</strong> la información debe estar accesible cuando se necesite.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Principales amenazas informáticas</h2>

          <h3 className="subsection-title">Malware</h3>
          <p>
            Es cualquier tipo de software malicioso diseñado para dañar o infiltrarse en un sistema.  
            Incluye virus, troyanos, gusanos y spyware.
          </p>

          <h3 className="subsection-title">Ransomware</h3>
          <p>
            Bloquea los archivos del usuario y exige un pago (rescate) para liberarlos.  
            La mejor defensa son las copias de seguridad y la precaución al descargar archivos.
          </p>

          <h3 className="subsection-title">Phishing</h3>
          <p>
            Es una técnica de engaño que busca obtener datos personales (como contraseñas o información bancaria) 
            simulando ser una entidad confiable, como un banco o servicio conocido.
          </p>
          <pre className="code-block">
            <code>
{`Ejemplo de phishing:
"Estimado usuario, su cuenta será suspendida. Inicie sesión aquí para verificar sus datos: www.banco-falso.com"`}
            </code>
          </pre>

          <h3 className="subsection-title">Ingeniería social</h3>
          <p>
            Consiste en manipular a las personas para que revelen información o realicen acciones que comprometen la seguridad.  
            A menudo combina engaños, confianza o presión psicológica.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Buenas prácticas de seguridad</h2>
          <ul className="unit-list">
            <li>Usar contraseñas fuertes y únicas para cada cuenta.</li>
            <li>No hacer clic en enlaces o archivos sospechosos.</li>
            <li>Actualizar regularmente el sistema y los programas.</li>
            <li>Evitar redes Wi-Fi públicas sin protección.</li>
            <li>Realizar copias de seguridad frecuentes.</li>
            <li>Configurar correctamente los permisos de usuario.</li>
          </ul>

          <h3 className="subsection-title">Ejemplo de contraseña segura</h3>
          <pre className="code-block">
            <code>Qx!9aF2@rZb1</code>
          </pre>
          <p>
            Combina mayúsculas, minúsculas, números y símbolos.  
            Evitá palabras comunes o datos personales.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Herramientas de seguridad en Linux</h2>
          <p>
            Linux cuenta con potentes herramientas para reforzar la seguridad del sistema.  
            Algunas de las más utilizadas son:
          </p>
          <ul className="unit-list">
            <li><strong>ufw:</strong> cortafuegos simple para controlar el tráfico de red.</li>
            <li><strong>fail2ban:</strong> bloquea intentos de acceso repetidos o sospechosos.</li>
            <li><strong>clamav:</strong> antivirus de código abierto.</li>
            <li><strong>sudo:</strong> ejecuta comandos administrativos de forma controlada.</li>
          </ul>

          <h3 className="subsection-title">Ejemplos prácticos</h3>
          <pre className="code-block">
            <code>
{`sudo ufw enable
sudo ufw status
sudo apt install clamav
clamscan --infected --recursive /home`}
            </code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Copias de seguridad</h2>
          <p>
            Una de las defensas más importantes contra pérdidas o ataques es realizar <strong>backups</strong> (copias de seguridad).  
            Estas pueden hacerse manualmente o con herramientas automáticas.
          </p>
          <pre className="code-block">
            <code>
{`# Copia de seguridad simple
tar -cvzf backup-home.tar.gz /home/alumno`}
            </code>
          </pre>
          <p>
            Guardar los respaldos en un disco externo o en la nube garantiza que, ante cualquier problema, la información pueda recuperarse.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Seguridad en la navegación y correo</h2>
          <p>
            Muchos ataques comienzan con un simple clic en un enlace o correo fraudulento.  
            Por eso, es importante seguir estas recomendaciones:
          </p>
          <ul className="unit-list">
            <li>Verificar siempre la dirección del sitio antes de ingresar datos personales.</li>
            <li>No responder a correos que pidan contraseñas o información bancaria.</li>
            <li>Usar navegadores actualizados y con bloqueadores de contenido malicioso.</li>
            <li>Utilizar conexiones seguras (HTTPS).</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Detectar phishing</h3>
          <ol className="unit-list decimal">
            <li>Busca ejemplos reales de correos falsos en Internet (sin abrir enlaces).</li>
            <li>Identificá qué señales los delatan (errores de ortografía, dominios falsos, urgencias sospechosas).</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Configurar un firewall</h3>
          <ol className="unit-list decimal">
            <li>Activá el firewall con <code>sudo ufw enable</code>.</li>
            <li>Bloqueá un puerto específico: <code>sudo ufw deny 23</code>.</li>
            <li>Permití conexiones SSH: <code>sudo ufw allow 22</code>.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 3: Crear una copia de seguridad</h3>
          <ol className="unit-list decimal">
            <li>Creá una carpeta llamada <code>backup</code> en tu directorio personal.</li>
            <li>Copiá tus documentos dentro con <code>cp -r ~/Documentos ~/backup</code>.</li>
            <li>Comprimí la copia con <code>tar -cvzf respaldo.tar.gz ~/backup</code>.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 7</h2>
          <p>
            En esta unidad aprendiste a identificar los riesgos informáticos más comunes y aplicar medidas 
            para proteger sistemas y datos.  
            Comprender la seguridad es esencial para todo técnico en informática.
          </p>
          <p className="closing-quote">
            “La mejor defensa no es un antivirus: es el conocimiento.”
          </p>
          <Link to="/unidad8" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad7;
