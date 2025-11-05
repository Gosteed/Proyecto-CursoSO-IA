import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import './styles/general.css'
import './styles/unidades.css'
import './styles/layout.css'
import './styles/navbar.css'
import { useEffect, useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"; // Usamos la clase principal
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
import ScrollToTop from "./components/ScrollToTop"; // 1. Importamos el nuevo componente
import PaginaNo from "./components/PaginaNo"
import Footer from "./components/Footer"


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

function App() {
  // 1. Creamos un estado para almacenar la sesión de chat.
  const [chatSession, setChatSession] = useState(null);

  // 2. Usamos useEffect para inicializar el chat UNA SOLA VEZ cuando la app carga.
  useEffect(() => {
    const initializeChat = async () => {
      const model = genAI.getGenerativeModel({ model:"gemini-2.5-flash" });
      
      // 3. Creamos la sesión de chat con un historial inicial para darle contexto y personalidad.
      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Hola. A partir de ahora, actuarás como un asistente experto en Sistemas Operativos Linux. Tu objetivo es ayudar a estudiantes de secundaria a entender los temas del curso. Responde de manera clara y didáctica." }],
          },
          {
            role: "model",
            parts: [{ text: "¡Entendido! Estoy listo para ayudar a los estudiantes con sus dudas sobre Sistemas Operativos Linux. ¿En qué puedo asistirles hoy?" }],
          },
        ],
      });
      setChatSession(chat);
    };
    initializeChat();
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
          {/* 4. Pasamos la sesión de chat completa al UnitLayout */}
          <Route element={<UnitLayout chat={chatSession} />}>
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
