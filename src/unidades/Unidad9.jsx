import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';

const Unidad9 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 9 – Administración y monitoreo del sistema</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Concepto de administración de sistemas en Linux.</li>
            <li>Gestión de procesos y servicios del sistema.</li>
            <li>Monitoreo de rendimiento: CPU, memoria y disco.</li>
            <li>Comandos avanzados de administración: <code>top</code>, <code>ps</code>, <code>htop</code>, <code>df</code>, <code>du</code>.</li>
            <li>Uso de logs del sistema (<code>/var/log</code>).</li>
            <li>Gestión de servicios con <code>systemctl</code>.</li>
            <li>Automatización de tareas con <code>cron</code> y <code>at</code>.</li>
            <li>Buenas prácticas de mantenimiento preventivo.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender el rol del administrador de sistemas.</li>
            <li>Aprender a monitorear recursos y procesos en tiempo real.</li>
            <li>Gestionar servicios y tareas programadas en Linux.</li>
            <li>Interpretar registros del sistema para detectar errores o alertas.</li>
            <li>Aplicar rutinas de mantenimiento preventivo y correctivo.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            Esta unidad te permitirá operar Linux de forma profesional, controlando su rendimiento y asegurando su funcionamiento continuo.  
            Los conocimientos de monitoreo son esenciales en servidores, entornos de red y sistemas críticos.
          </p>
          <ul className="unit-list">
            <li>Supervisar el rendimiento del sistema y prevenir fallas.</li>
            <li>Administrar servicios y procesos en ejecución.</li>
            <li>Automatizar tareas de mantenimiento o respaldo.</li>
            <li>Analizar logs para resolver problemas o detectar ataques.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Administración de procesos</h2>
          <p>
            Un <strong>proceso</strong> es cualquier programa o servicio que se ejecuta en el sistema.  
            En Linux, todo proceso tiene un identificador único llamado <strong>PID</strong> (Process ID).
          </p>
          <p>
            Podés listar los procesos activos con:
          </p>
          <pre className="code-block"><code>ps aux</code></pre>
          <p>
            Este comando muestra todos los procesos en ejecución junto con su usuario, consumo de CPU y memoria.
          </p>

          <h3 className="subsection-title">Monitoreo en tiempo real</h3>
          <pre className="code-block"><code>top</code></pre>
          <p>
            Muestra los procesos activos en tiempo real.  
            Para una versión más visual, podés usar <code>htop</code> (requiere instalación previa con <code>sudo apt install htop</code>).
          </p>
          <pre className="code-block"><code>htop</code></pre>

          <h3 className="subsection-title">Finalizar procesos</h3>
          <p>
            Si un programa deja de responder, podés finalizarlo usando su PID:
          </p>
          <pre className="code-block"><code>sudo kill 1234</code></pre>
          <p>
            También podés usar <code>killall nombre_proceso</code> para cerrar todos los procesos con ese nombre.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Monitoreo de recursos del sistema</h2>

          <h3 className="subsection-title">Ver uso de disco</h3>
          <pre className="code-block"><code>df -h</code></pre>
          <p>Muestra el uso del espacio en disco de cada partición.</p>

          <h3 className="subsection-title">Ver tamaño de carpetas</h3>
          <pre className="code-block"><code>du -sh /home/alumno</code></pre>
          <p>Indica el tamaño total de una carpeta específica.</p>

          <h3 className="subsection-title">Ver uso de memoria</h3>
          <pre className="code-block"><code>free -h</code></pre>
          <p>Muestra cuánta memoria RAM está en uso y cuánto queda disponible.</p>

          <h3 className="subsection-title">Monitoreo en entorno gráfico</h3>
          <p>
            Muchas distribuciones incluyen herramientas visuales como “Monitor del sistema”, 
            donde se pueden ver los recursos de CPU, RAM, red y disco de manera sencilla.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Gestión de servicios con systemctl</h2>
          <p>
            En los sistemas modernos basados en <strong>systemd</strong>, los servicios se administran mediante <code>systemctl</code>.
          </p>
          <ul className="unit-list">
            <li><code>systemctl status servicio</code> → Verifica el estado de un servicio.</li>
            <li><code>sudo systemctl start servicio</code> → Inicia un servicio.</li>
            <li><code>sudo systemctl stop servicio</code> → Detiene un servicio.</li>
            <li><code>sudo systemctl enable servicio</code> → Activa el inicio automático al arrancar el sistema.</li>
          </ul>

          <pre className="code-block">
            <code>
{`sudo systemctl status ssh
sudo systemctl restart network-manager`}
            </code>
          </pre>
          <p>
            Con esto podés controlar servicios como el servidor SSH, el gestor de red o el servidor web Apache.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Logs del sistema</h2>
          <p>
            Los <strong>logs</strong> son registros donde el sistema almacena eventos, errores y advertencias.  
            Analizarlos permite detectar problemas o intentos de acceso no autorizados.
          </p>
          <ul className="unit-list">
            <li><code>/var/log/syslog</code>: eventos generales del sistema.</li>
            <li><code>/var/log/auth.log</code>: registros de accesos y autenticaciones.</li>
            <li><code>/var/log/dmesg</code>: mensajes del arranque y del kernel.</li>
          </ul>
          <p>Para visualizar los logs:</p>
          <pre className="code-block"><code>sudo tail -f /var/log/syslog</code></pre>
          <p>El parámetro <code>-f</code> permite seguir los eventos en tiempo real.</p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Tareas programadas: cron y at</h2>
          <p>
            En Linux, las tareas pueden programarse para ejecutarse automáticamente con <code>cron</code> o <code>at</code>.
          </p>

          <h3 className="subsection-title">cron – Tareas periódicas</h3>
          <pre className="code-block">
            <code>
{`crontab -e
# Formato: minuto hora día mes día_semana comando
0 2 * * * /home/alumno/backup.sh`}
            </code>
          </pre>
          <p>
            Este ejemplo ejecuta el script <code>backup.sh</code> todos los días a las 2:00 AM.
          </p>

          <h3 className="subsection-title">at – Tareas puntuales</h3>
          <pre className="code-block">
            <code>
{`at 14:30
> echo "Backup iniciado" >> /home/alumno/log.txt
> Ctrl + D`}
            </code>
          </pre>
          <p>
            Ejecuta una tarea única a la hora especificada.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Mantenimiento preventivo</h2>
          <p>
            El mantenimiento regular evita fallos y mantiene el sistema estable.  
            Algunas prácticas recomendadas:
          </p>
          <ul className="unit-list">
            <li>Actualizar el sistema frecuentemente con <code>sudo apt update && sudo apt upgrade</code>.</li>
            <li>Eliminar archivos temporales y cachés innecesarios.</li>
            <li>Verificar el uso de disco y realizar backups periódicos.</li>
            <li>Monitorear logs y revisar errores recurrentes.</li>
            <li>Supervisar la temperatura y el estado del hardware.</li>
          </ul>
          <pre className="code-block">
            <code>sudo apt autoremove && sudo apt clean</code>
          </pre>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Monitoreo básico</h3>
          <ol className="unit-list decimal">
            <li>Abrí la terminal y ejecutá <code>top</code>.</li>
            <li>Identificá los procesos con mayor consumo de CPU y memoria.</li>
            <li>Usá <code>kill</code> para finalizar uno de prueba.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Revisar logs</h3>
          <ol className="unit-list decimal">
            <li>Usá <code>sudo tail -n 20 /var/log/syslog</code> para ver los últimos eventos.</li>
            <li>Intentá iniciar sesión incorrectamente y revisá <code>/var/log/auth.log</code>.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 3: Automatizar una tarea</h3>
          <ol className="unit-list decimal">
            <li>Creá un script <code>backup.sh</code> que comprima tu carpeta personal.</li>
            <li>Programalo con <code>crontab</code> para que se ejecute cada día a las 12:00.</li>
            <li>Verificá su ejecución revisando el archivo generado.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 9</h2>
          <p>
            En esta unidad aprendiste a monitorear y mantener un sistema Linux en funcionamiento óptimo, 
            comprendiendo cómo gestionar procesos, servicios y tareas automatizadas.  
            Estos conocimientos son esenciales para desempeñarte como administrador de sistemas.
          </p>
          <p className="closing-quote">
            “Un sistema bien administrado no es el que nunca falla, sino el que siempre se recupera.”
          </p>
          <Link to="/unidad10" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad9;
