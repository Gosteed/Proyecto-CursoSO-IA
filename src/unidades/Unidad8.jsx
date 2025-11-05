import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';
import Code from "../components/Code.jsx";

const Unidad8 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 8 – Automatización avanzada y scripting con Bash</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Repaso de conceptos básicos de Bash y shell scripting.</li>
            <li>Variables, estructuras de control y bucles.</li>
            <li>Automatización de tareas del sistema.</li>
            <li>Interacción con archivos, usuarios y procesos.</li>
            <li>Parámetros, argumentos y funciones en scripts.</li>
            <li>Permisos de ejecución y depuración de scripts.</li>
            <li>Ejemplos prácticos y ejercicios guiados.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Dominar la creación y ejecución de scripts en Bash.</li>
            <li>Comprender cómo automatizar tareas repetitivas.</li>
            <li>Aplicar estructuras lógicas para crear programas de línea de comandos.</li>
            <li>Gestionar variables, condiciones y bucles para resolver problemas reales.</li>
            <li>Crear herramientas personalizadas para administración de sistemas Linux.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            La automatización mediante Bash permite ahorrar tiempo, evitar errores humanos y ejecutar tareas complejas con un solo comando.  
            Los administradores de sistemas, programadores y técnicos usan scripts todos los días para gestionar servidores, 
            monitorear sistemas o procesar grandes volúmenes de datos.
          </p>
          <ul className="unit-list">
            <li>Automatizar copias de seguridad o limpieza de carpetas.</li>
            <li>Configurar usuarios o permisos en masa.</li>
            <li>Monitorear recursos del sistema.</li>
            <li>Instalar o actualizar programas automáticamente.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Repaso: ¿Qué es un script Bash?</h2>
          <p>
            Un <strong>script Bash</strong> es un archivo de texto que contiene una serie de comandos que el sistema ejecuta secuencialmente.  
            Es como darle al sistema una lista de tareas para realizar automáticamente.
          </p>
          <Code code={<code>
{`#!/bin/bash
echo "Hola, este es mi primer script!"
date`}
          </code>} />
          <p>
            Para ejecutar el script, primero debés darle permisos y luego correrlo:
          </p>
          <Code code={<code>
{`chmod +x script.sh
./script.sh`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Variables y lectura de datos</h2>
          <p>
            Las <strong>variables</strong> permiten guardar valores que luego pueden usarse dentro del script.  
            También es posible pedir datos al usuario mediante <code>read</code>.
          </p>

          <Code code={<code>
{`#!/bin/bash
nombre="Agustín"
echo "Hola $nombre, bienvenido a Bash!"

echo "¿Cuál es tu lenguaje favorito?"
read lenguaje
echo "Excelente elección: $lenguaje"`}
          </code>} />
          <p>
            En Bash no se usan espacios al asignar variables (<code>nombre="valor"</code>).
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Condicionales (if, else, elif)</h2>
          <p>
            Los condicionales permiten tomar decisiones según una condición.  
            En Bash, la sintaxis básica es:
          </p>

          <Code code={<code>
{`if [ condición ]; then
  comando_si_verdadero
else
  comando_si_falso
fi`}
          </code>} />

          <p>Ejemplo práctico:</p>
          <Code code={<code>
{`#!/bin/bash
echo "Ingrese su edad:"
read edad

if [ $edad -ge 18 ]; then
  echo "Sos mayor de edad."
else
  echo "Sos menor de edad."
fi`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Bucles: for y while</h2>

          <h3 className="subsection-title">for</h3>
          <p>
            El bucle <code>for</code> repite una acción una cantidad determinada de veces.
          </p>
          <Code code={<code>
{`for i in 1 2 3 4 5
do
  echo "Iteración número $i"
done`}
          </code>} />

          <h3 className="subsection-title">while</h3>
          <p>
            El bucle <code>while</code> se ejecuta mientras la condición sea verdadera.
          </p>
          <Code code={<code>
{`contador=1
while [ $contador -le 5 ]
do
  echo "Contador: $contador"
  contador=$((contador+1))
done`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Funciones en Bash</h2>
          <p>
            Las <strong>funciones</strong> permiten organizar el código en bloques reutilizables.  
            Se definen una vez y pueden llamarse varias veces dentro del script.
          </p>
          <Code code={<code>
{`saludo() {
  echo "Hola $1, bienvenido!"
}

saludo "Alumno"
saludo "Profesor"`}
          </code>} />
          <p>
            El parámetro <code>$1</code> representa el primer argumento pasado a la función.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejemplos de automatización real</h2>

          <h3 className="subsection-title">Script 1: Copia de seguridad automática</h3>
          <Code code={<code>
{`#!/bin/bash
fecha=$(date +%Y-%m-%d)
origen="/home/alumno/Documentos"
destino="/home/alumno/Backup"

tar -czf $destino/backup-$fecha.tar.gz $origen
echo "Backup realizado exitosamente el $fecha"`}
          </code>} />

          <h3 className="subsection-title">Script 2: Monitoreo de uso de disco</h3>
          <Code code={<code>
{`#!/bin/bash
uso=$(df -h / | awk 'NR==2 {print $5}' | tr -d '%')
if [ $uso -ge 80 ]; then
  echo "ALERTA: el disco está al $uso% de su capacidad!"
else
  echo "El uso del disco es normal ($uso%)."
fi`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Permisos y ejecución</h2>
          <p>
            Recordá que los scripts deben tener permisos de ejecución para poder ser ejecutados.  
            Para ello usá:
          </p>
          <Code code={<code>chmod +x mi_script.sh</code>} />
          <p>Y luego se ejecutan con:</p>
          <Code code={<code>./mi_script.sh</code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Depuración y errores</h2>
          <p>
            Si tu script no funciona como esperabas, podés ejecutarlo en modo depuración:
          </p>
          <Code code={<code>bash -x mi_script.sh</code>} />
          <p>
            Esto mostrará línea por línea qué está ejecutando el sistema, ayudando a encontrar errores de sintaxis o lógica.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Script de saludo</h3>
          <ol className="unit-list decimal">
            <li>Creá un archivo <code>saludo.sh</code>.</li>
            <li>Pedí al usuario su nombre con <code>read</code>.</li>
            <li>Mostrá un saludo personalizado en pantalla.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Verificar conexión a Internet</h3>
          <ol className="unit-list decimal">
            <li>Creá un script que ejecute <code>ping -c 1 8.8.8.8</code>.</li>
            <li>Si el resultado es exitoso, mostrará “Conexión establecida”.</li>
            <li>De lo contrario, mostrará “Sin conexión”.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 3: Backup automático</h3>
          <ol className="unit-list decimal">
            <li>Creá un script que genere un archivo comprimido con el contenido de tu carpeta <code>Documentos</code>.</li>
            <li>Guardalo en una carpeta <code>Backup</code> dentro de tu home.</li>
            <li>Agregá un mensaje de confirmación al finalizar.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 8</h2>
          <p>
            En esta unidad aprendiste a crear y ejecutar scripts Bash, comprender estructuras lógicas y 
            automatizar tareas reales del sistema.  
            Estos conocimientos te permiten crear herramientas personalizadas y optimizar tu trabajo diario.
          </p>
          <p className="closing-quote">
            “Automatizar no es hacer menos: es hacer más con inteligencia.”
          </p>
          <Link to="/unidad9" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad8;
