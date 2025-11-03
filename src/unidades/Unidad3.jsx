import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';

const Unidad3 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 3 – Gestión de usuarios, grupos y permisos en Linux</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Concepto de usuarios y grupos en Linux.</li>
            <li>Creación, modificación y eliminación de usuarios.</li>
            <li>Gestión de grupos y asignación de usuarios.</li>
            <li>Permisos de archivos y directorios.</li>
            <li>Propietario, grupo y otros usuarios.</li>
            <li>Códigos numéricos y simbólicos de permisos.</li>
            <li>Comandos esenciales: <code>adduser</code>, <code>groupadd</code>, <code>chmod</code>, <code>chown</code>, <code>chgrp</code>.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender cómo se administra el acceso de usuarios en Linux.</li>
            <li>Crear, modificar y eliminar cuentas de usuario y grupos.</li>
            <li>Aplicar correctamente los permisos de lectura, escritura y ejecución.</li>
            <li>Usar los comandos básicos de gestión de usuarios y archivos.</li>
            <li>Fortalecer la seguridad y la organización del sistema mediante permisos.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            La gestión de usuarios y permisos es fundamental en cualquier sistema operativo, 
            especialmente en entornos compartidos o servidores.  
            Saber administrar usuarios y proteger archivos asegura que cada persona tenga acceso solo a lo que le corresponde.
          </p>
          <ul className="unit-list">
            <li>Configurar equipos con varios usuarios.</li>
            <li>Controlar el acceso a recursos y directorios.</li>
            <li>Administrar grupos de trabajo o departamentos.</li>
            <li>Prevenir accesos no autorizados y proteger la información.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Usuarios y grupos en Linux</h2>
          <p>
            En Linux, <strong>cada usuario</strong> tiene su propia cuenta, con su carpeta personal, configuraciones y permisos.  
            Además, los usuarios pueden pertenecer a uno o varios <strong>grupos</strong>, que sirven para organizar y gestionar permisos de forma colectiva.
          </p>
          <p>
            Por ejemplo, en una escuela, se podría tener un grupo <code>alumnos</code> y otro <code>profesores</code>.  
            Así, todos los integrantes del grupo <code>profesores</code> podrían acceder a ciertas carpetas que los <code>alumnos</code> no.
          </p>
          <p>
            Esta estructura hace que Linux sea extremadamente seguro y ordenado, 
            ya que todo lo que sucede en el sistema está asociado a un usuario.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Archivos importantes del sistema</h2>
          <ul className="unit-list">
            <li><code>/etc/passwd</code>: contiene la lista de usuarios del sistema y sus datos básicos.</li>
            <li><code>/etc/group</code>: almacena los grupos y los usuarios que pertenecen a cada uno.</li>
            <li><code>/etc/shadow</code>: guarda las contraseñas cifradas de los usuarios.</li>
          </ul>
          <p>
            Estos archivos son críticos para el funcionamiento del sistema.  
            Solo el administrador (<code>root</code>) puede modificarlos directamente.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Creación y gestión de usuarios</h2>

          <h3 className="subsection-title">Crear un nuevo usuario</h3>
          <pre className="code-block">
            <code>sudo adduser juan</code>
          </pre>
          <p>
            Este comando crea un usuario llamado <code>juan</code>, solicita una contraseña 
            y crea su carpeta personal en <code>/home/juan</code>.
          </p>

          <h3 className="subsection-title">Eliminar un usuario</h3>
          <pre className="code-block">
            <code>sudo deluser juan</code>
          </pre>
          <p>
            Si querés eliminar también su carpeta personal, usá:
          </p>
          <pre className="code-block">
            <code>sudo deluser --remove-home juan</code>
          </pre>

          <h3 className="subsection-title">Modificar un usuario</h3>
          <p>Para cambiar el nombre, el grupo o la carpeta de un usuario:</p>
          <pre className="code-block">
            <code>sudo usermod -d /nuevohome/juan juan</code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Gestión de grupos</h2>
          <p>
            Los <strong>grupos</strong> permiten asignar permisos a varios usuarios al mismo tiempo.  
            En lugar de configurar a cada persona, simplemente se agregan al grupo que corresponda.
          </p>

          <h3 className="subsection-title">Crear un grupo</h3>
          <pre className="code-block">
            <code>sudo groupadd profesores</code>
          </pre>

          <h3 className="subsection-title">Agregar un usuario a un grupo</h3>
          <pre className="code-block">
            <code>sudo usermod -aG profesores juan</code>
          </pre>

          <h3 className="subsection-title">Listar los grupos de un usuario</h3>
          <pre className="code-block">
            <code>groups juan</code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Permisos en archivos y carpetas</h2>
          <p>
            Cada archivo o carpeta en Linux tiene un <strong>propietario</strong> y un <strong>grupo</strong>.  
            Además, define qué puede hacer cada tipo de usuario: leer, escribir o ejecutar.
          </p>

          <pre className="code-block">
            <code>
{`-rw-r--r-- 1 juan profesores 1024 abr 15 10:00 documento.txt`}
            </code>
          </pre>

          <p>Desglosemos este ejemplo:</p>
          <ul className="unit-list">
            <li><code>-</code> → indica que es un archivo (si fuera una carpeta, sería <code>d</code>).</li>
            <li><code>rw-</code> → permisos del propietario: puede leer y escribir.</li>
            <li><code>r--</code> → permisos del grupo: solo lectura.</li>
            <li><code>r--</code> → permisos de otros usuarios: solo lectura.</li>
          </ul>

          <p>
            En resumen: <code>r</code> (read) = leer, <code>w</code> (write) = escribir, <code>x</code> (execute) = ejecutar.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cambiar permisos, propietario y grupo</h2>

          <h3 className="subsection-title">Cambiar permisos con chmod</h3>
          <pre className="code-block">
            <code>chmod 755 script.sh</code>
          </pre>
          <p>
            Este comando asigna permisos de lectura, escritura y ejecución al propietario, 
            y solo lectura y ejecución al grupo y a los demás.
          </p>

          <p>También puede hacerse de forma simbólica:</p>
          <pre className="code-block">
            <code>chmod u+x archivo.txt</code>
          </pre>
          <p>
            En este caso, <code>u</code> (user) gana permiso de ejecución sobre el archivo.
          </p>

          <h3 className="subsection-title">Cambiar propietario con chown</h3>
          <pre className="code-block">
            <code>sudo chown juan archivo.txt</code>
          </pre>

          <h3 className="subsection-title">Cambiar grupo con chgrp</h3>
          <pre className="code-block">
            <code>sudo chgrp profesores archivo.txt</code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Crear un usuario y grupo</h3>
          <ol className="unit-list decimal">
            <li>Crea un usuario llamado <code>alumno</code>.</li>
            <li>Crea un grupo llamado <code>curso2025</code>.</li>
            <li>Agregá al usuario <code>alumno</code> al grupo <code>curso2025</code>.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Modificar permisos</h3>
          <ol className="unit-list decimal">
            <li>Crea un archivo llamado <code>prueba.txt</code> con <code>touch</code>.</li>
            <li>Usá <code>chmod</code> para darle permisos de ejecución solo al propietario.</li>
            <li>Verificá los permisos con <code>ls -l</code>.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 3: Cambiar propietario y grupo</h3>
          <ol className="unit-list decimal">
            <li>Crea un usuario <code>juan</code> y un grupo <code>profesores</code>.</li>
            <li>Usá <code>chown</code> y <code>chgrp</code> para asignarles un archivo.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 3</h2>
          <p>
            En esta unidad aprendiste a gestionar usuarios, grupos y permisos, 
            comprendiendo cómo Linux controla el acceso a sus recursos.  
            Este conocimiento es clave para la seguridad y la organización del sistema.
          </p>
          <p className="closing-quote">
            “En Linux, cada permiso cuenta: conocerlos es tener el control.”
          </p>
          <Link to="/unidad4" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad3;
