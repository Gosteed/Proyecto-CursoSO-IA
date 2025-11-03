import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';

const Unidad2 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 2 – Automatización con Bash y Scripting</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Qué es un script y para qué se utiliza en Linux.</li>
            <li>Introducción al lenguaje Bash.</li>
            <li>Variables, estructuras condicionales y bucles.</li>
            <li>Entrada y salida de datos.</li>
            <li>Creación y ejecución de scripts básicos.</li>
            <li>Automatización de tareas con <strong>cron</strong> y <strong>anacron</strong>.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender qué es un script y cómo funciona en el entorno Linux.</li>
            <li>Aprender a escribir, ejecutar y depurar scripts en Bash.</li>
            <li>Utilizar variables, operadores, condicionales y bucles para automatizar tareas.</li>
            <li>Implementar pequeñas automatizaciones con <code>cron</code> y <code>anacron</code>.</li>
            <li>Desarrollar pensamiento lógico y estructurado para resolver problemas con scripts.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            Aprender scripting es una de las habilidades más poderosas dentro del mundo Linux. 
            Con un script podés automatizar tareas repetitivas, ahorrar tiempo y reducir errores humanos.
          </p>
          <ul className="unit-list">
            <li>Realizar copias de seguridad automáticas de archivos o carpetas.</li>
            <li>Monitorear el uso del sistema (CPU, RAM, disco).</li>
            <li>Instalar o actualizar software de manera programada.</li>
            <li>Analizar registros (logs) del sistema o servidores.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">¿Qué es un script?</h2>
          <p>
            Un <strong>script</strong> es un conjunto de comandos escritos en un archivo de texto que el sistema ejecuta en orden, como si los escribiéramos uno por uno en la terminal. 
            El lenguaje que usaremos en esta unidad es <strong>Bash</strong> (Bourne Again Shell), el intérprete de comandos más común en Linux.
          </p>
          <p>
            Los scripts permiten <strong>automatizar</strong> procesos que normalmente requerirían múltiples pasos manuales. 
            Es una herramienta esencial para cualquier técnico o administrador de sistemas, ya que con unos pocos comandos se pueden realizar tareas complejas de forma automática.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Creación y ejecución de un script</h2>
          <p>
            Para crear un script, solo necesitás un editor de texto (como <code>nano</code> o <code>vim</code>) y permisos de ejecución.
          </p>
          <ol className="unit-list decimal">
            <li>Crea un nuevo archivo llamado <code>hola.sh</code>.</li>
            <li>Escribí el siguiente contenido:</li>
          </ol>
          <pre className="code-block">
            <code>
{`#!/bin/bash
echo "Hola, este es mi primer script en Bash!"`}
            </code>
          </pre>
          <ol className="unit-list decimal" start="3">
            <li>Guardá el archivo y dale permisos de ejecución:</li>
          </ol>
          <pre className="code-block">
            <code>chmod +x hola.sh</code>
          </pre>
          <ol className="unit-list decimal" start="4">
            <li>Ejecutalo con:</li>
          </ol>
          <pre className="code-block">
            <code>./hola.sh</code>
          </pre>
          <p>El sistema mostrará el mensaje en pantalla. ¡Tu primer script está funcionando!</p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Estructura básica de un script Bash</h2>
          <pre className="code-block">
            <code>
{`#!/bin/bash
# Esto es un comentario
# Las líneas que comienzan con # no se ejecutan

# Ejemplo de variables
nombre="Agustín"
echo "Hola $nombre"

# Ejemplo de condicional
if [ $nombre == "Agustín" ]; then
  echo "Bienvenido!"
else
  echo "Usuario desconocido"
fi

# Ejemplo de bucle for
for i in 1 2 3
do
  echo "Iteración número $i"
done`}
            </code>
          </pre>
          <p>
            En Bash, el símbolo <code>$</code> se usa para acceder al valor de una variable.  
            Las estructuras condicionales (<code>if</code>, <code>else</code>) y los bucles (<code>for</code>, <code>while</code>) permiten ejecutar acciones de forma controlada.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Variables y entrada de datos</h2>
          <p>
            Las <strong>variables</strong> almacenan información que se puede reutilizar. 
            Se definen sin espacios y se utilizan anteponiendo <code>$</code>.
          </p>
          <pre className="code-block">
            <code>
{`#!/bin/bash
usuario="alumno"
echo "Bienvenido $usuario"`}
            </code>
          </pre>
          <p>También podemos pedirle al usuario que ingrese un valor:</p>
          <pre className="code-block">
            <code>
{`#!/bin/bash
echo "¿Cuál es tu nombre?"
read nombre
echo "Hola $nombre, ¡bienvenido al mundo del scripting!"`}
            </code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Condicionales y bucles</h2>
          <p>
            Los condicionales permiten tomar decisiones, y los bucles repetir acciones.  
            Son la base de toda automatización.
          </p>
          <h3 className="subsection-title">Ejemplo de condicional:</h3>
          <pre className="code-block">
            <code>
{`#!/bin/bash
echo "Ingrese una contraseña:"
read pass
if [ $pass == "admin123" ]; then
  echo "Acceso permitido"
else
  echo "Acceso denegado"
fi`}
            </code>
          </pre>

          <h3 className="subsection-title">Ejemplo de bucle:</h3>
          <pre className="code-block">
            <code>
{`#!/bin/bash
for i in {1..5}
do
  echo "Este es el intento número $i"
done`}
            </code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Automatización con cron y anacron</h2>
          <p>
            En Linux, los servicios <code>cron</code> y <code>anacron</code> permiten programar tareas automáticas.  
            Por ejemplo, podés ejecutar un script todos los días a una hora determinada sin intervención humana.
          </p>

          <h3 className="subsection-title">Programar una tarea con cron</h3>
          <ol className="unit-list decimal">
            <li>Abrí el programador con <code>crontab -e</code>.</li>
            <li>Agregá una línea como la siguiente:</li>
          </ol>
          <pre className="code-block">
            <code>
{`0 8 * * * /home/alumno/scripts/backup.sh`}
            </code>
          </pre>
          <p>
            Esto ejecutará el script <code>backup.sh</code> todos los días a las <strong>08:00 hs</strong>.
          </p>

          <h3 className="subsection-title">¿Y qué hace anacron?</h3>
          <p>
            <strong>anacron</strong> cumple un rol similar, pero se usa en equipos que no permanecen encendidos todo el tiempo.  
            Si la computadora estaba apagada en el momento de la tarea, anacron la ejecutará al siguiente inicio.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Script de saludo</h3>
          <p>
            Crea un script que pida tu nombre y te salude de manera personalizada.  
            Ejemplo de salida:
          </p>
          <pre className="code-block"><code>Hola Agustín, que tengas un excelente día!</code></pre>

          <h3 className="subsection-title">Ejercicio 2: Comprobador de conexión</h3>
          <p>
            Crea un script que verifique si tenés conexión a Internet utilizando <code>ping</code>:
          </p>
          <pre className="code-block">
            <code>
{`#!/bin/bash
ping -c 1 google.com &> /dev/null
if [ $? -eq 0 ]; then
  echo "Conexión establecida"
else
  echo "No hay conexión a Internet"
fi`}
            </code>
          </pre>

          <h3 className="subsection-title">Ejercicio 3: Copia de seguridad automática</h3>
          <p>
            Escribí un script que copie el contenido de una carpeta a otra y lo programes con <code>cron</code> para ejecutarse cada día.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 2</h2>
          <p>
            En esta unidad aprendiste qué son los scripts, cómo escribirlos y cómo automatizar tareas dentro de Linux.  
            El scripting es una de las herramientas más valiosas de un técnico, 
            porque te permite ahorrar tiempo y controlar el sistema de forma inteligente y precisa.
          </p>
          <p className="closing-quote">
            “Automatizar no es solo programar, es enseñarle al sistema a trabajar por vos.”
          </p>
          <Link to="/unidad3" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad2;
