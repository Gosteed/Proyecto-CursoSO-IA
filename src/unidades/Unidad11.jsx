import React from "react";
import { Link } from 'react-router-dom';
import '../styles/unidades.css';
import Code from "../components/Code.jsx";

const Unidad11 = () => {
  return (
    <>
      <div className="unit-container">
        <h1 className="unit-title">Unidad 11 – Análisis de datos con Python y cierre del curso</h1>

        <section className="unit-section">
          <h2 className="section-title">Contenidos</h2>
          <ul className="unit-list">
            <li>Introducción al análisis de datos.</li>
            <li>Python como herramienta de análisis.</li>
            <li>Uso de Google Colab para trabajar en la nube.</li>
            <li>Librerías: <strong>Pandas</strong> y <strong>Matplotlib</strong>.</li>
            <li>Creación y manejo de <strong>DataFrames</strong>.</li>
            <li>Limpieza, filtrado y análisis estadístico básico.</li>
            <li>Visualización de datos mediante gráficos.</li>
            <li>Integración con los demás conocimientos del curso.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Objetivos</h2>
          <ul className="unit-list">
            <li>Comprender el proceso completo de análisis de datos.</li>
            <li>Usar Python para manipular, limpiar y representar información.</li>
            <li>Aprender a usar herramientas modernas como Google Colab y Pandas.</li>
            <li>Aplicar gráficos y estadísticas para tomar decisiones basadas en datos.</li>
            <li>Integrar estos conocimientos con la administración y monitoreo de sistemas.</li>
          </ul>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Aplicaciones prácticas</h2>
          <p>
            El análisis de datos con Python se aplica en todas las áreas de la informática:
            desde la administración de servidores y el monitoreo de redes hasta el control de rendimiento, el análisis de registros
            y la presentación de resultados técnicos. 
            Aprender a interpretar los datos te convierte en un técnico más completo, capaz de analizar, optimizar y anticipar problemas.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">¿Por qué Python?</h2>
          <p>
            Python combina facilidad de uso con un enorme ecosistema de librerías científicas. 
            Su sintaxis clara permite enfocarse en el análisis sin complicarse con detalles de programación.
            Además, herramientas como <strong>Google Colab</strong> hacen posible trabajar desde cualquier dispositivo
            sin instalar nada, ideal para el ámbito educativo y profesional.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Primeros pasos en Google Colab</h2>
          <ol className="unit-list decimal">
            <li>Ingresá a <a href="https://colab.research.google.com" target="_blank" rel="noopener noreferrer">Google Colab</a>.</li>
            <li>Creá un nuevo cuaderno (“New Notebook”).</li>
            <li>Ejecutá este código para probar tu entorno:</li>
          </ol>

          <Code code={<code language="Python">
{`import pandas as pd
import matplotlib.pyplot as plt

print("Entorno de trabajo configurado correctamente!")`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Creando tu primer DataFrame</h2>
          <p>
            Un <strong>DataFrame</strong> es una estructura de tabla donde cada columna tiene un nombre y cada fila representa un registro.  
            Es la base del análisis de datos en Python.
          </p>

          <Code code={<code language="Python">
{`import pandas as pd

data = {
  "Alumno": ["Ana", "Luis", "Sofía", "Mateo", "Carla"],
  "Edad": [15, 16, 15, 17, 16],
  "Nota": [8, 7, 9, 6, 10]
}

df = pd.DataFrame(data)
print(df)`}
          </code>} />

          <p>
            Este ejemplo crea una pequeña base de datos con alumnos, edades y notas. 
            A partir de aquí se pueden realizar todo tipo de cálculos, filtros o gráficos.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Exploración de datos</h2>
          <p>Usá los siguientes comandos para analizar el contenido del DataFrame:</p>

          <Code code={<code language="Python">
{`df.head()       # Muestra las primeras filas
df.info()        # Tipos de datos y cantidad de registros
df.describe()    # Estadísticas básicas`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Filtrado, limpieza y estadísticas</h2>
          <Code code={<code language="Python">
{`# Filtrar alumnos con nota mayor o igual a 8
aprobados = df[df["Nota"] >= 8]

# Calcular promedio de notas
promedio = df["Nota"].mean()
print("Promedio general:", promedio)

# Detectar nulos
df.isnull().sum()`}
          </code>} />
          <p>
            En un análisis real, estos pasos ayudan a limpiar los datos y detectar errores antes de sacar conclusiones.
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Visualización con Matplotlib</h2>
          <p>
            Visualizar los datos te permite comprender rápidamente las tendencias.  
            En el ejemplo del curso, se usan gráficos de barras para representar notas:
          </p>
          <Code code={<code language="Python">
{`import matplotlib.pyplot as plt

plt.bar(df["Alumno"], df["Nota"], color="skyblue")
plt.title("Notas de los alumnos")
plt.xlabel("Alumno")
plt.ylabel("Nota")
plt.show()`}
          </code>} />
        </section>

        <section className="unit-section">
          <h2 className="section-title">Ejercicio integrador</h2>
          <p>
            En este ejercicio vas a aplicar todo lo aprendido del curso:
          </p>
          <ol className="unit-list decimal">
            <li>Usá <strong>Google Colab</strong> y creá un DataFrame con datos de tu elección (puede ser asistencia, notas, o uso de recursos).</li>
            <li>Explorá y limpiá los datos (eliminá nulos, convertí tipos).</li>
            <li>Aplicá estadísticas básicas (<code>.mean()</code>, <code>.max()</code>, <code>.value_counts()</code>).</li>
            <li>Generá un gráfico que resuma los resultados.</li>
            <li>Guardá el cuaderno en tu Google Drive y compartilo.</li>
          </ol>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Reflexión final del curso</h2>
          <p>
            Con esta unidad llegaste al final del recorrido del curso de <strong>Laboratorio de Sistemas Informáticos</strong>.  
            A lo largo de las once unidades, recorriste todos los pilares que componen el trabajo técnico en informática:
          </p>

          <ul className="unit-list">
            <li>Dominio del entorno Linux y la terminal.</li>
            <li>Administración de archivos, discos y redes.</li>
            <li>Virtualización y entornos de prueba.</li>
            <li>Automatización mediante scripts.</li>
            <li>Gestión de servicios y seguridad informática.</li>
            <li>Y finalmente, análisis de datos con Python.</li>
          </ul>

          <p>
            Este último módulo te muestra que la informática no termina en la configuración, sino en la interpretación de la información.
            Los sistemas generan datos, y el técnico moderno debe saber leerlos para mejorar el rendimiento, 
            anticipar fallos y tomar decisiones basadas en evidencia.
          </p>
          <p className="closing-quote">
            “Saber usar un sistema es útil. Saber entender lo que el sistema te dice, es poder.”
          </p>
        </section>

        <section className="unit-section">
          <h2 className="section-title">Cierre y felicitaciones</h2>
          <p>
            Felicitaciones por haber completado el curso completo 🎓  
            A partir de aquí, podés seguir profundizando en áreas como:
          </p>
          <ul className="unit-list">
            <li>Administración avanzada de sistemas Linux.</li>
            <li>Ciberseguridad y protección de redes.</li>
            <li>Desarrollo de scripts profesionales en Bash o Python.</li>
            <li>Análisis de datos con inteligencia artificial.</li>
          </ul>

          <p>
            Este curso te brindó una base sólida y moderna para cualquier carrera técnica o profesional en informática.
            Lo importante no es solo saber ejecutar comandos, sino <strong>entender cómo funciona el sistema y usarlo con propósito</strong>.
          </p>

          <Link to="/" className="cta-button">Volver al Inicio</Link>
        </section>
      </div>
    </>
  );
};

export default Unidad11;
