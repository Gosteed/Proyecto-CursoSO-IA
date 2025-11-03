import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import './styles/general.css'
import './styles/unidades.css'
import './styles/layout.css'
import './styles/navbar.css'
import {  useEffect, useState } from "react"
import { GoogleGenAI } from "@google/genai";
import SobreNosotros from "./components/SobreNosotros"
import Unidad1 from "./unidades/Unidad1";
import Unidad2 from "./unidades/Unidad2";
import Unidad3 from "./unidades/Unidad3";
import Unidad4 from "./unidades/Unidad4";  
import Unidad5 from "./unidades/Unidad5";
import Unidad6 from "./unidades/Unidad6";
import Unidad7 from "./unidades/Unidad7";
import Unidad8 from "./unidades/Unidad8";
import Unidad9 from "./unidades/Unidad9";
import Unidad10 from "./unidades/Unidad10";
import UnitLayout from "./components/UnitLayout";
import Respuesta from "./components/Respuesta"
import ScrollToTop from "./components/ScrollToTop"; // 1. Importamos el nuevo componente
import PaginaNo from "./components/PaginaNo"
import Footer from "./components/Footer"


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

const object = {
        model: "gemini-2.5-flash",
        contents: "Hola, hablame de los agujeros negros",
        config: {
            systemInstruction: "Eres un estudiante secundario deprimido que responde con un tono sarcástico y pesimista.",
          }      
        }


function App() {

  const [content, setContent] = useState("");

  useEffect(() => {

    const fetchAI = async () => {
      const response = await ai.models.generateContentStream(object);

      for await (const chunk of response) {
        setContent((x) => x + chunk.text);
      }
    };
    fetchAI();

  }, []);


  return(
    <>
      <BrowserRouter>
        <ScrollToTop /> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />

          {/* Rutas que usan el layout con la barra lateral de IA */}
          <Route element={<UnitLayout content={content} />}>
            <Route path="/unidad1" element={<Unidad1/>}/>
            <Route path="/unidad2" element={<Unidad2/>}/>
            <Route path="/unidad3" element={<Unidad3/>}/>
            <Route path="/unidad4" element={<Unidad4/>}/>
            <Route path="/unidad5" element={<Unidad5/>}/>
            <Route path="/unidad6" element={<Unidad6/>}/>
            <Route path="/unidad7" element={<Unidad7/>}/>
            <Route path="/unidad8" element={<Unidad8/>}/>
            <Route path="/unidad9" element={<Unidad9/>}/>
            <Route path="/unidad10" element={<Unidad10/>}/>
          </Route>

          <Route path="*" element={<PaginaNo />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
