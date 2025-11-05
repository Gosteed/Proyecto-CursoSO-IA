import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';
import Code from "../components/Code.jsx";
import InfoBlock from "../components/InfoBlock.jsx";

const Unidad10 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 10 – Servidores y servicios en red (SSH, FTP, Apache)</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Concepto de servidor y cliente en una red.</li>
            <li>Funcionamiento básico de los servicios SSH, FTP y Apache.</li>
            <li>Instalación y configuración de un servidor SSH.</li>
            <li>Transferencia de archivos mediante FTP y SFTP.</li>
            <li>Instalación y configuración inicial de un servidor web Apache.</li>
            <li>Gestión de servicios de red con <code>systemctl</code>.</li>
            <li>Buenas prácticas de seguridad en servidores.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender el concepto de servidor y su función en la infraestructura de red.</li>
            <li>Aprender a instalar y configurar servicios de red esenciales en Linux.</li>
            <li>Usar SSH para conectarse de forma remota a otros equipos.</li>
            <li>Transferir archivos de manera segura mediante FTP y SFTP.</li>
            <li>Montar un servidor web básico con Apache y servir contenido HTML.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            Esta unidad te permitirá operar servidores y servicios reales, fundamentales para cualquier técnico o administrador de sistemas.  
            Aprenderás a conectarte a otros equipos, transferir archivos, y publicar páginas web.
          </p>
          <ul className="unit-list">
            <li>Conectarte de forma remota a un servidor Linux mediante SSH.</li>
            <li>Administrar archivos en otro equipo con SFTP.</li>
            <li>Crear un entorno web local para probar proyectos.</li>
            <li>Aprender los principios básicos detrás del hosting y los servicios de Internet.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Concepto de servidor y cliente</h2>
          <p>
            En una red, un <strong>servidor</strong> es una computadora que ofrece servicios o recursos, 
            mientras que un <strong>cliente</strong> es quien los utiliza.  
            Por ejemplo, cuando accedés a una página web, tu navegador es el cliente, 
            y el servidor web (por ejemplo, Apache) te envía el contenido.
          </p>

          <InfoBlock content={<code>
{`[ Cliente ] ⇄ [ Servidor ]
Navegador   ⇄ Apache Web Server
Terminal SSH ⇄ Servidor remoto`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">SSH: conexión remota segura</h2>
          <p>
            <strong>SSH (Secure Shell)</strong> es un protocolo que permite conectarse de manera segura a otro equipo a través de la red.  
            Toda la comunicación se cifra, garantizando privacidad y autenticidad.
          </p>

          <h3 className="subsection-title">Instalación del servidor SSH</h3>
          <Code code={<code>sudo apt install openssh-server</code>} />

          <h3 className="subsection-title">Verificación del servicio</h3>
          <Code code={<code>sudo systemctl status ssh</code>} />

          <h3 className="subsection-title">Conexión desde otro equipo</h3>
          <Code code={<code>ssh usuario@ip_del_servidor</code>} />
          <p>
            Por ejemplo: <code>ssh alumno@192.168.1.10</code>  
            Si la conexión es exitosa, tendrás acceso remoto a la terminal del otro equipo.
          </p>

          <h3 className="subsection-title">Copiar archivos mediante SSH</h3>
          <Code code={<code>scp documento.txt alumno@192.168.1.10:/home/alumno/</code>} />
          <p>
            Este comando transfiere archivos de forma segura mediante el protocolo SCP (basado en SSH).
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">FTP y SFTP</h2>
          <p>
            El protocolo <strong>FTP (File Transfer Protocol)</strong> permite transferir archivos entre computadoras en una red.  
            Sin embargo, FTP no cifra los datos, por lo que su versión segura (<strong>SFTP</strong>) es más recomendable, 
            ya que utiliza SSH como base.
          </p>

          <h3 className="subsection-title">Instalar un servidor FTP</h3>
          <Code code={<code>sudo apt install vsftpd</code>} />

          <h3 className="subsection-title">Iniciar y habilitar el servicio</h3>
          <Code code={<code>{`sudo systemctl start vsftpd\nsudo systemctl enable vsftpd`}</code>} />

          <h3 className="subsection-title">Conectarse al servidor</h3>
          <Code code={<code>ftp 192.168.1.10</code>} />

          <p>
            Para mayor seguridad, usá:
          </p>
          <Code code={<code>sftp alumno@192.168.1.10</code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Servidor web Apache</h2>
          <p>
            <strong>Apache</strong> es el servidor web más utilizado del mundo.  
            Permite alojar y publicar páginas web HTML desde tu propio equipo o servidor.
          </p>

          <h3 className="subsection-title">Instalación de Apache</h3>
          <Code code={<code>sudo apt install apache2</code>} />

          <h3 className="subsection-title">Comprobar el servicio</h3>
          <Code code={<code>sudo systemctl status apache2</code>} />

          <p>
            Una vez instalado, abrí tu navegador y escribí <code>http://localhost</code>.  
            Si todo está bien, verás la página de bienvenida de Apache.
          </p>

          <h3 className="subsection-title">Tu primera página web</h3>
          <p>
            El contenido por defecto de Apache se guarda en:
          </p>
          <InfoBlock content={<code>/var/www/html</code>} />
          <p>
            Podés crear tu propia página reemplazando el archivo <code>index.html</code> por uno personalizado.
          </p>
          <Code code={<code>sudo nano /var/www/html/index.html</code>} />

          <p>
            Luego, guardá los cambios y actualizá la página en el navegador.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Buenas prácticas de seguridad</h2>
          <ul className="unit-list">
            <li>Usar contraseñas seguras o autenticación por claves SSH.</li>
            <li>Deshabilitar el acceso root directo por SSH.</li>
            <li>Mantener los servicios actualizados.</li>
            <li>Usar firewalls para limitar accesos externos.</li>
            <li>Verificar los logs en <code>/var/log/auth.log</code> o <code>/var/log/apache2/</code>.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Servidor SSH</h3>
          <ol className="unit-list decimal">
            <li>Instalá y activá el servicio <code>ssh</code>.</li>
            <li>Conectate desde otro equipo o desde la misma máquina usando <code>ssh usuario@localhost</code>.</li>
            <li>Verificá los intentos de conexión con <code>sudo tail -f /var/log/auth.log</code>.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Transferencia de archivos</h3>
          <ol className="unit-list decimal">
            <li>Usá <code>scp</code> o <code>sftp</code> para copiar un archivo de prueba.</li>
            <li>Verificá que el archivo se haya copiado correctamente en el destino.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 3: Tu primer sitio web</h3>
          <ol className="unit-list decimal">
            <li>Instalá Apache.</li>
            <li>Reemplazá el archivo <code>/var/www/html/index.html</code> por una página creada por vos.</li>
            <li>Accedé desde tu navegador a <code>http://localhost</code>.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 10</h2>
          <p>
            En esta unidad comprendiste el rol fundamental de los servidores dentro de una red 
            y aprendiste a configurar servicios esenciales como SSH, FTP y Apache.  
            Con estos conocimientos ya podés administrar entornos reales de conexión, transferencia y publicación de información.
          </p>
          <p className="closing-quote">
            “El poder de un técnico no está en su computadora, sino en los servidores que puede controlar.”
          </p>
          <Link to="/unidad11" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad10;
