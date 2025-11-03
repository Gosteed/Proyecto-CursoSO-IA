import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';

const Unidad1 = () => {
    return <>
    <div className="unit-container">
        <h1 className="unit-title">Unidad 1 – Introducción a Linux y la Terminal</h1>

        <section className="unit-section">
            <h2 className="section-title">Contenidos</h2>
            <ul className="unit-list">
            <li>Qué es un sistema operativo y qué hace Linux diferente de los demás.</li>
            <li>Partes internas de Linux: <strong>Kernel</strong>, <strong>Shell</strong> y <strong>Aplicaciones</strong>.</li>
            <li>Qué es la <strong>Terminal</strong> y por qué es tan poderosa.</li>
            <li>Cómo se organiza el sistema de archivos en Linux.</li>
            <li>Principales <strong>comandos básicos</strong> para moverte, crear, copiar y eliminar archivos.</li>
            <li>Prácticas iniciales para ganar confianza en la línea de comandos.</li>
            </ul>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Objetivos</h2>
            <ul className="unit-list">
            <li>Comprender qué es Linux, cómo está compuesto internamente y por qué es tan utilizado.</li>
            <li>Entender el concepto de <strong>sistema de archivos jerárquico</strong> y las rutas absolutas y relativas.</li>
            <li>Usar la <strong>terminal</strong> para ejecutar comandos básicos con soltura.</li>
            <li>Manipular archivos y carpetas: crearlos, moverlos, copiarlos y borrarlos.</li>
            <li>Interpretar la estructura de los comandos y su funcionamiento.</li>
            </ul>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Aplicaciones prácticas</h2>
            <p>
            Este es el primer paso en el camino de todo técnico o administrador de sistemas. Dominar estos conceptos te permitirá:
            </p>
            <ul className="unit-list">
            <li>Configurar y mantener sistemas Linux reales, tanto locales como remotos.</li>
            <li>Entender cómo interactúan las aplicaciones con el sistema operativo.</li>
            <li>Prepararte para automatizar tareas mediante <strong>scripts Bash</strong>.</li>
            <li>Sentar bases sólidas para trabajar en redes, servidores y seguridad informática.</li>
            </ul>
        </section>

        <section className="unit-section">
            <h2 className="section-title">¿Qué es Linux?</h2>
            <p>
            Linux es un <strong>sistema operativo libre y de código abierto</strong> creado por Linus Torvalds en 1991. 
            Su código fuente es público y puede ser modificado y distribuido libremente, lo que ha dado lugar a miles de distribuciones como Ubuntu, Debian, Fedora o Arch.
            </p>
            <p>
            A diferencia de otros sistemas, Linux no pertenece a una empresa, sino a una comunidad mundial de desarrolladores. 
            Esto lo convierte en un sistema <strong>seguro, estable y eficiente</strong>, usado en todo tipo de entornos:
            </p>
            <ul className="unit-list">
            <li><strong>Servidores web:</strong> más del 90% de Internet funciona sobre Linux.</li>
            <li><strong>Supercomputadoras</strong> y centros de datos.</li>
            <li><strong>Android:</strong> basado en el kernel de Linux.</li>
            <li><strong>Equipos embebidos e IoT:</strong> routers, sistemas de red, dispositivos inteligentes.</li>
            </ul>
            <p>
            En resumen, Linux no es solo un sistema operativo más, sino <strong>la base de la infraestructura tecnológica moderna</strong>.
            </p>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Las tres partes principales de Linux</h2>
            <p>Para entender cómo funciona Linux, debemos conocer sus tres componentes fundamentales:</p>

            <h3 className="subsection-title">1️ Kernel</h3>
            <p>
            El <strong>Kernel</strong> (núcleo) es el corazón del sistema. Se encarga de comunicarse directamente con el hardware, 
            administrando la memoria, el procesador, los dispositivos y los procesos. 
            Es quien decide cómo se ejecutan las tareas y cómo se reparten los recursos.
            </p>

            <h3 className="subsection-title">2️ Shell</h3>
            <p>
            El <strong>Shell</strong> es el intérprete de comandos. Traduce lo que escribimos en la terminal en instrucciones que el kernel entiende. 
            El más usado es <strong>Bash</strong> (Bourne Again Shell), que nos permite ejecutar comandos, crear scripts y automatizar tareas.
            </p>

            <h3 className="subsection-title">3️ Aplicaciones</h3>
            <p>
            Encima del shell se encuentran las <strong>aplicaciones</strong>: navegadores, editores, herramientas gráficas, etc. 
            Todas interactúan con el sistema a través del kernel, directa o indirectamente.
            </p>

            <pre className="code-block">
            <code>
        {`[ Usuario ]
            ↓
        [ Shell / Terminal ]
            ↓
        [ Kernel ]
            ↓
        [ Hardware ]`}
            </code>
            </pre>
        </section>

        <section className="unit-section">
            <h2 className="section-title">La Terminal: tu puente con el sistema</h2>
            <p>
            La <strong>terminal</strong> es la herramienta principal para comunicarse con Linux. 
            A través de ella enviamos comandos al shell, que los interpreta y ejecuta. 
            En lugar de usar clics o menús, usamos texto: más rápido, preciso y flexible.
            </p>
            <p>
            Aprender a usar la terminal te da un control total sobre el sistema: instalar software, configurar redes, analizar errores y mucho más.
            </p>
            <p>
            En palabras simples: <strong>la terminal no te limita, te libera.</strong>
            </p>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Estructura del sistema de archivos</h2>
            <p>
            Linux organiza toda su información en una estructura de árbol. Todo comienza en la carpeta raíz <code>/</code> 
            y a partir de allí se ramifican las demás carpetas del sistema.
            </p>

            <pre className="code-block">
            <code>
        {`/
        ├── bin      → Comandos básicos del sistema
        ├── etc      → Archivos de configuración
        ├── home     → Carpetas personales de los usuarios
        ├── var      → Archivos temporales y logs
        ├── usr      → Programas y librerías de usuario
        └── tmp      → Archivos temporales`}
            </code>
            </pre>

            <p>
            En Linux <strong>todo es un archivo</strong>: los discos, las impresoras, los procesos e incluso la memoria. 
            Esta idea unifica el sistema y simplifica su administración.
            </p>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Carpeta personal del usuario</h2>
            <p>
            Cada usuario tiene su propio espacio dentro de <code>/home</code>. 
            Si tu usuario se llama <code>alumno</code>, tu carpeta será <code>/home/alumno</code>. 
            Allí podés crear documentos, programas y configuraciones sin afectar a otros usuarios.
            </p>
            <p>
            En la terminal, esta carpeta se representa con <code>~</code> (tilde). 
            Por ejemplo, <code>cd ~</code> te lleva directamente a tu directorio personal.
            </p>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Comandos básicos</h2>

            <h3 className="subsection-title">pwd — Print Working Directory</h3>
            <p>Muestra la ruta completa de la carpeta actual.</p>
            <pre className="code-block"><code>pwd</code></pre>

            <h3 className="subsection-title">ls — Listar contenido</h3>
            <p>Muestra los archivos y carpetas del directorio actual.</p>
            <pre className="code-block"><code>ls -l   # detalles<br/>ls -a   # muestra ocultos</code></pre>

            <h3 className="subsection-title">cd — Cambiar de directorio</h3>
            <pre className="code-block"><code>cd /etc<br/>cd ~<br/>cd ..</code></pre>

            <h3 className="subsection-title">mkdir — Crear carpetas</h3>
            <pre className="code-block"><code>mkdir proyectos<br/>mkdir -p trabajos/2025/informes</code></pre>

            <h3 className="subsection-title">cat — Ver contenido de archivos</h3>
            <pre className="code-block"><code>cat notas.txt<br/>cat parte1.txt parte2.txt &gt; completo.txt</code></pre>

            <h3 className="subsection-title">cp / mv — Copiar o mover archivos</h3>
            <pre className="code-block"><code>cp documento.txt copia.txt<br/>mv copia.txt informe.txt</code></pre>

            <h3 className="subsection-title">rm — Eliminar archivos</h3>
            <pre className="code-block"><code>rm archivo.txt<br/>rm -r carpeta<br/>rm -rf carpeta  # elimina sin preguntar</code></pre>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Estructura general de comandos</h2>
            <p>
            Todos los comandos siguen el mismo formato:
            </p>
            <pre className="code-block">
            <code>comando [opciones] [argumentos]</code>
            </pre>
            <p>Ejemplo:</p>
            <pre className="code-block">
            <code>ls -l /home/alumno</code>
            </pre>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Ejercicios prácticos</h2>

            <h3 className="subsection-title">Ejercicio 1: Navegación básica</h3>
            <ol className="unit-list decimal">
            <li>Abrí la terminal.</li>
            <li>Escribí <code>pwd</code> y observá la ruta.</li>
            <li>Movete entre carpetas con <code>cd</code>, <code>cd ..</code> y <code>cd ~</code>.</li>
            <li>Listá los archivos con <code>ls -la</code>.</li>
            </ol>

            <h3 className="subsection-title">Ejercicio 2: Gestión de archivos</h3>
            <ol className="unit-list decimal">
            <li>Crea una carpeta <code>practicas</code> con <code>mkdir</code>.</li>
            <li>Entrá en ella con <code>cd practicas</code>.</li>
            <li>Crea un archivo con <code>echo "Hola Linux" &gt; hola.txt</code>.</li>
            <li>Mostrá su contenido con <code>cat hola.txt</code>.</li>
            <li>Copialo con <code>cp hola.txt copia/</code>.</li>
            <li>Eliminá el original con <code>rm hola.txt</code>.</li>
            </ol>
        </section>

        <section className="unit-section">
            <h2 className="section-title">Cierre de la Unidad 1</h2>
            <p>
            En esta unidad comprendiste cómo está formado Linux, cómo funciona su estructura interna y cómo usar la terminal 
            para moverte y manipular archivos. Estos conocimientos son la base del curso y te preparan para 
            <strong>automatizar tareas con Bash</strong> en la próxima unidad.
            </p>
            <p className="closing-quote">
            Dominar la terminal no es solo aprender comandos: es aprender a pensar como el sistema.
            </p>
            <Link to="/unidad2" className="cta-button">
            Proxima Unidad
            </Link>
        </section>
     </div>
    </>;
}

export default Unidad1;