import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';
import Code from "../components/Code.jsx";
import InfoBlock from "../components/InfoBlock.jsx";

const Unidad5 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 5 – Administración de discos, particiones y RAID</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Estructura física y lógica de los discos.</li>
            <li>Concepto de partición y tipos de particiones.</li>
            <li>Comandos para identificar, montar y formatear discos.</li>
            <li>Montaje de sistemas de archivos en Linux.</li>
            <li>Concepto de RAID y sus niveles (RAID 0, 1, 5, 10).</li>
            <li>Configuración básica de un RAID con herramientas de software.</li>
            <li>Ventajas, desventajas y aplicaciones de cada tipo de RAID.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender la estructura de almacenamiento en Linux y cómo gestionarla.</li>
            <li>Aprender a crear, montar y administrar particiones.</li>
            <li>Entender el concepto de RAID y su aplicación en entornos reales.</li>
            <li>Familiarizarse con comandos como <code>fdisk</code>, <code>lsblk</code>, <code>mount</code> y <code>mkfs</code>.</li>
            <li>Reconocer la importancia de la redundancia y la tolerancia a fallos.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            La administración de discos y particiones es fundamental en la informática profesional.  
            Estos conocimientos te permitirán configurar sistemas, gestionar servidores y proteger información crítica.
          </p>
          <ul className="unit-list">
            <li>Instalar sistemas operativos y definir sus particiones adecuadas.</li>
            <li>Montar discos externos o unidades de red.</li>
            <li>Configurar arreglos RAID para mejorar el rendimiento o la seguridad.</li>
            <li>Gestionar sistemas de archivos en entornos reales de trabajo.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Estructura de un disco</h2>
          <p>
            Un <strong>disco duro</strong> se divide en sectores y bloques donde se almacena la información.  
            Para poder usar un disco, primero debe ser <strong>particionado</strong> (dividido en secciones) y luego 
            <strong>formateado</strong> con un sistema de archivos (como EXT4, NTFS, FAT32, etc.).
          </p>
          <p>
            Una <strong>partición</strong> es como una “subdivisión” del disco.  
            Permite tener varios sistemas operativos o separar datos del sistema para mejorar la organización y la seguridad.
          </p>
          <InfoBlock content={<code>
{`[ Disco físico ]
 ├── Partición 1 → Sistema operativo
 ├── Partición 2 → Datos personales
 └── Partición 3 → Copias de seguridad`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Comandos útiles para administrar discos</h2>

          <h3 className="subsection-title">Ver discos conectados</h3>
          <Code code={<code>lsblk</code>} />
          <p>Muestra todos los discos y particiones del sistema, junto con sus puntos de montaje.</p>

          <h3 className="subsection-title">Ver información detallada</h3>
          <Code code={<code>sudo fdisk -l</code>} />
          <p>Lista las particiones y sus tamaños, tipos y sistemas de archivos.</p>

          <h3 className="subsection-title">Montar un disco manualmente</h3>
          <Code code={<code>{`sudo mount /dev/sdb1 /mnt/usb\nls /mnt/usb`}</code>} />
          <p>Esto monta la partición <code>/dev/sdb1</code> en la carpeta <code>/mnt/usb</code> para poder acceder a sus archivos.</p>

          <h3 className="subsection-title">Desmontar un disco</h3>
          <Code code={<code>sudo umount /mnt/usb</code>} />

          <h3 className="subsection-title">Formatear una partición</h3>
          <Code code={<code>sudo mkfs.ext4 /dev/sdb1</code>} />
          <p>Este comando crea un nuevo sistema de archivos EXT4 sobre la partición indicada.</p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Sistemas de archivos</h2>
          <p>
            Un <strong>sistema de archivos</strong> define cómo se organizan y almacenan los datos en un disco.  
            Algunos de los más comunes son:
          </p>
          <ul className="unit-list">
            <li><strong>EXT4:</strong> el más usado en Linux, rápido y estable.</li>
            <li><strong>NTFS:</strong> usado por Windows.</li>
            <li><strong>FAT32:</strong> compatible con la mayoría de los dispositivos.</li>
            <li><strong>XFS y Btrfs:</strong> avanzados, usados en servidores por su rendimiento.</li>
          </ul>
          <p>
            En Linux, cualquier disco o partición puede ser “montado” en un punto del sistema de archivos, 
            lo que significa que se integra a la estructura general del sistema.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">¿Qué es RAID?</h2>
          <p>
            RAID (<strong>Redundant Array of Independent Disks</strong>) es una tecnología que combina varios discos 
            para mejorar el rendimiento, la capacidad o la seguridad de los datos.
          </p>
          <p>
            Existen distintos niveles de RAID, cada uno con características diferentes.  
            A continuación se presentan los más importantes:
          </p>

          <h3 className="subsection-title">RAID 0 – Velocidad</h3>
          <p>
            Divide los datos entre dos o más discos, aumentando la velocidad de lectura y escritura.  
            Sin embargo, si uno falla, se pierden todos los datos.
          </p>
          <InfoBlock content={<code>
{`[ Disco 1 ] → Parte A
[ Disco 2 ] → Parte B
(Sin redundancia)`}
          </code>} />

          <h3 className="subsection-title">RAID 1 – Espejo</h3>
          <p>
            Copia los mismos datos en dos discos.  
            Si uno falla, el otro sigue funcionando.  
            Se usa para proteger información crítica.
          </p>
          <InfoBlock content={<code>
{`[ Disco 1 ] → Datos completos
[ Disco 2 ] → Copia exacta`}
          </code>} />

          <h3 className="subsection-title">RAID 5 – Rendimiento y seguridad</h3>
          <p>
            Combina velocidad y redundancia usando al menos tres discos.  
            Los datos y la información de paridad se distribuyen entre todos.
          </p>
          <InfoBlock content={<code>
{`[ Disco 1 ] → Datos + Paridad
[ Disco 2 ] → Datos + Paridad
[ Disco 3 ] → Datos + Paridad`}
          </code>} />

          <h3 className="subsection-title">RAID 10 – Rendimiento y respaldo</h3>
          <p>
            Combina RAID 0 y RAID 1, brindando velocidad y redundancia al mismo tiempo.  
            Requiere al menos cuatro discos.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Configuración básica de RAID por software</h2>
          <p>
            Linux permite crear arreglos RAID por software usando la herramienta <code>mdadm</code>.  
            Este tipo de RAID no requiere hardware especial.
          </p>
          <p>Ejemplo de creación de un RAID 1 con dos discos:</p>
          <Code code={<code>
{`sudo mdadm --create --verbose /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc`}
          </code>} />
          <p>Luego, podés verificar el estado con:</p>
          <Code code={<code>cat /proc/mdstat</code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicios prácticos</h2>

          <h3 className="subsection-title">Ejercicio 1: Explorando discos</h3>
          <ol className="unit-list decimal">
            <li>Abrí una terminal.</li>
            <li>Usá <code>lsblk</code> y <code>fdisk -l</code> para ver los discos disponibles.</li>
            <li>Identificá las particiones activas y sus puntos de montaje.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 2: Montar un disco externo</h3>
          <ol className="unit-list decimal">
            <li>Conectá una memoria USB.</li>
            <li>Usá <code>lsblk</code> para identificarla (por ejemplo, <code>/dev/sdb1</code>).</li>
            <li>Montala en <code>/mnt/usb</code> con <code>sudo mount /dev/sdb1 /mnt/usb</code>.</li>
            <li>Desmontala con <code>sudo umount /mnt/usb</code>.</li>
          </ol>

          <h3 className="subsection-title">Ejercicio 3: Simulación de RAID</h3>
          <ol className="unit-list decimal">
            <li>Usá discos virtuales en VirtualBox o archivos simulados.</li>
            <li>Creá un RAID 0 o 1 con <code>mdadm</code>.</li>
            <li>Verificá su estado y desmontalo correctamente.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre de la Unidad 5</h2>
          <p>
            En esta unidad aprendiste cómo se organiza el almacenamiento en Linux, cómo crear y montar particiones, 
            y cómo configurar arreglos RAID para mejorar el rendimiento o proteger la información.
          </p>
          <p className="closing-quote">
            “Entender los discos es entender la base física de todo sistema.”
          </p>
          <Link to="/unidad6" className="cta-button">
            Próxima Unidad
          </Link>
        </section>
      </div>
    </>
  );
};

export default Unidad5;
