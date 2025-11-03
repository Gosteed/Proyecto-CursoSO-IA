import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';

const Unidad6 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 6 – Redes y configuración básica en Linux</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Conceptos básicos de redes informáticas.</li>
            <li>Direcciones IP, máscaras de subred y puerta de enlace.</li>
            <li>Comandos esenciales para el diagnóstico de red.</li>
            <li>Configuración manual y automática de red (DHCP).</li>
            <li>Uso de herramientas de red: <code>ping</code>, <code>ifconfig</code>, <code>ip</code>, <code>netstat</code>, <code>traceroute</code>.</li>
            <li>Conexión remota mediante <strong>SSH</strong>.</li>
            <li>Archivos de configuración de red en Linux.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender cómo se comunican los equipos dentro de una red.</li>
            <li>Identificar y configurar direcciones IP y parámetros básicos de red.</li>
            <li>Utilizar comandos de red para diagnosticar problemas de conectividad.</li>
            <li>Conectarse a otros sistemas mediante SSH.</li>
            <li>Reconocer los archivos de configuración y herramientas utilizadas en Linux para redes.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            Los conocimientos de redes son esenciales para cualquier técnico informático.  
            Permiten conectar computadoras, compartir información y diagnosticar fallas de comunicación.  
            En entornos empresariales o domésticos, dominar estos conceptos es indispensable.
          </p>
          <ul className="unit-list">
            <li>Configurar redes locales (LAN) o conexiones Wi-Fi.</li>
            <li>Resolver problemas de conexión o acceso a Internet.</li>
            <li>Administrar equipos de forma remota mediante SSH.</li>
            <li>Comprender la infraestructura de red detrás de servicios y servidores.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Conceptos básicos de red</h2>
          <p>
            Una <strong>red</strong> es un conjunto de dispositivos conectados entre sí que comparten recursos e información.  
            Los equipos se comunican utilizando protocolos, siendo el principal el <strong>TCP/IP</strong>.
          </p>
          <ul className="unit-list">
            <li><strong>IP (Internet Protocol):</strong> identifica de forma única a cada equipo en una red.</li>
            <li><strong>Máscara de subred:</strong> define qué parte de la IP pertenece a la red y cuál al dispositivo.</li>
            <li><strong>Puerta de enlace (Gateway):</strong> permite salir de la red local hacia Internet.</li>
          </ul>

          <pre className="code-block">
            <code>
{`Ejemplo de configuración:
IP: 192.168.1.10
Máscara: 255.255.255.0
Puerta de enlace: 192.168.1.1`}
            </code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Comandos de red en Linux</h2>

          <h3 className="subsection-title">ifconfig / ip</h3>
          <p>
            Muestra o configura los parámetros de red del sistema.  
            Aunque <code>ifconfig</code> sigue siendo común, el comando moderno es <code>ip</code>.
          </p>
          <pre className="code-block">
            <code>
{`ifconfig
ip addr show`}
            </code>
          </pre>

          <h3 className="subsection-title">ping</h3>
          <p>Verifica la conectividad con otro equipo de la red.</p>
          <pre className="code-block"><code>ping 8.8.8.8</code></pre>

          <h3 className="subsection-title">netstat</h3>
          <p>Muestra conexiones de red activas, puertos abiertos y estadísticas.</p>
          <pre className="code-block"><code>netstat -tuln</code></pre>

          <h3 className="subsection-title">traceroute</h3>
          <p>Permite rastrear la ruta que sigue un paquete hasta su destino.</p>
          <pre className="code-block"><code>traceroute www.google.com</code></pre>

          <h3 className="subsection-title">nslookup</h3>
          <p>Consulta servidores DNS para resolver nombres de dominio.</p>
          <pre className="code-block"><code>nslookup openai.com</code></pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Configuración manual de red</h2>
          <p>
            En sistemas Linux, la red puede configurarse de manera manual editando archivos o con comandos.  
            A continuación se muestra un ejemplo de configuración estática:
          </p>

          <pre className="code-block">
            <code>
{`sudo nano /etc/network/interfaces

auto eth0
iface eth0 inet static
  address 192.168.1.20
  netmask 255.255.255.0
  gateway 192.168.1.1
  dns-nameservers 8.8.8.8`}
            </code>
          </pre>
          <p>Luego de editar, se reinicia la red con:</p>
          <pre className="code-block"><code>sudo systemctl restart networking</code></pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Configuración automática (DHCP)</h2>
          <p>
            En la mayoría de los entornos, las IP se asignan automáticamente mediante un servidor <strong>DHCP</strong> (Dynamic Host Configuration Protocol).  
            Este servicio entrega direcciones IP dinámicas sin necesidad de configuración manual.
          </p>
          <pre className="code-block">
            <code>
{`iface eth0 inet dhcp`}
            </code>
          </pre>
          <p>
            Esta opción se utiliza, por ejemplo, en redes domésticas o instituciones donde todos los equipos obtienen 
            su configuración automáticamente al conectarse.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Conexión remota mediante SSH</h2>
          <p>
            SSH (<strong>Secure Shell</strong>) permite conectarse a otro equipo Linux de manera segura a través de la red.  
            Es una herramienta esencial para la administración remota de sistemas.
          </p>
          <pre className="code-block">
            <code>ssh usuario@192.168.1.10</code>
          </pre>
          <p>
            Si el equipo remoto tiene configurado el servicio <code>sshd</code>, 
            podrás acceder a su terminal como si estuvieras físicamente en él.
          </p>
          <p>Para salir de la sesión SSH, simplemente escribí <code>exit</code>.</p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Archivos importantes de configuración de red</h2>
          <ul className="unit-list">
            <li><code>/etc/network/interfaces</code>: configuración de interfaces de red (en distribuciones basadas en Debian).</li>
            <li><code>/etc/resolv.conf</code>: contiene los servidores DNS.</li>
            <li><code>/etc/hosts</code>: define asociaciones locales entre IP y nombres de host.</li>
            <li><code>/etc/hostname</code>: guarda el nombre del equipo en la red.</li>
          </ul>
          <p>
            Editar estos archivos requiere privilegios de superusuario (<code>sudo</code>).
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Verificar conexión</h3>
          <ol className="unit-list decimal">
            <li>Ejecutá <code>ping 8.8.8.8</code> para comprobar si tenés conexión a Internet.</li>
            <li>Usá <code>ping www.google.com</code> para probar la resolución DNS.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Ver tu IP y red</h3>
          <ol className="unit-list decimal">
            <li>Usá <code>ip addr show</code> o <code>ifconfig</code> para ver tu dirección IP.</li>
            <li>Identificá la interfaz activa (por ejemplo, <code>eth0</code> o <code>wlan0</code>).</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 3: Conexión remota</h3>
          <ol className="unit-list decimal">
            <li>Instalá el servicio SSH con <code>sudo apt install openssh-server</code>.</li>
            <li>Desde otro equipo, conectate con <code>ssh usuario@ip_del_equipo</code>.</li>
            <li>Probá transferir un archivo con <code>scp archivo.txt usuario@ip:/home/usuario</code>.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 6</h2>
          <p>
            En esta unidad aprendiste los fundamentos de las redes y cómo configurarlas en Linux.  
            Ahora podés diagnosticar conexiones, administrar interfaces y acceder remotamente a otros sistemas.
          </p>
          <p className="closing-quote">
            “Comprender las redes es abrir la puerta a la comunicación entre máquinas.”
          </p>
          <Link to="/unidad7" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad6;
