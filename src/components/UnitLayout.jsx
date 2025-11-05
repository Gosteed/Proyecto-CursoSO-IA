import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.css'; // Asegúrate de que los estilos para el chat estén aquí
import Code from './Code'; // 1. Importamos el componente Code
import UnitsIndex from './UnitsIndex'; // Importamos el nuevo índice

// Componente para renderizar mensajes con formato (maneja saltos de línea)
const Message = ({ role, text }) => {
  const isModel = role === 'model';

  // Expresión regular para encontrar bloques de código ```lenguaje ... ```
  const codeBlockRegex = /```(\w+)?\n([\s\S]+?)\n```/g;
  const parts = text.split(codeBlockRegex);

  return (
    <div className={`message ${isModel ? 'model-message' : 'user-message'}`}>
      {parts.map((part, index) => {
        // El resultado de split() con una regex con grupos de captura es:
        // [texto, lenguaje, código, texto, lenguaje, código, ...]
        if (index % 3 === 1) { // Es el lenguaje del bloque de código
          const language = part || 'bash'; // Si no se especifica lenguaje, usamos bash por defecto
          const codeContent = parts[index + 1];
          // Pasamos el código envuelto en un elemento <code> como espera el componente Code.jsx
          return <Code key={index} code={<code language={language}>{codeContent}</code>} />;
        }
        if (index % 3 === 2) { // Es el contenido del bloque de código, ya lo procesamos
          return null;
        }
        // Es texto plano
        return <p key={index} style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{part}</p>;
      })}
    </div>
  );
};

const UnitLayout = ({ chat }) => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  // Efecto para obtener el historial inicial del chat cuando se carga
  useEffect(() => {
    const getInitialHistory = async () => {
      if (chat) {
        const history = await chat.getHistory();
        const initialMessages = history.map(item => ({
          role: item.role,
          text: item.parts.map(part => part.text).join('')
        }));
        // Quitamos los mensajes de sistema para no mostrarlos en el chat UI
        setMessages(initialMessages.slice(2)); 
      }
    };
    getInitialHistory();
  }, [chat]); // Se ejecuta cada vez que el objeto `chat` cambia

  // Efecto para hacer scroll hacia abajo cuando llegan nuevos mensajes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || !chat || isLoading) return;

    setIsLoading(true);
    const userMessage = { role: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');

    try {
      const result = await chat.sendMessageStream(userInput);
      
      let modelResponse = '';
      // Agrega un mensaje vacío para el modelo que se irá actualizando
      setMessages(prev => [...prev, { role: 'model', text: '...' }]);

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        modelResponse += chunkText;
        // Actualiza el último mensaje (el del modelo) en el estado
        setMessages(prev => prev.map((msg, index) => 
            index === prev.length - 1 ? { ...msg, text: modelResponse } : msg
        ));
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, ocurrió un error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-with-sidebar">
      <UnitsIndex /> {/* 2. Añadimos el índice de unidades */}
      <main className="main-content">
        <Outlet /> {/* Aquí se renderizará el contenido de cada unidad */}
      </main>
      <aside className="sidebar">
        <h2>ITFA IA</h2>
        <div className="chat-container" ref={chatContainerRef}>
          {messages.map((msg, index) => (
            <Message key={index} role={msg.role} text={msg.text} />
          ))}
          {isLoading && messages[messages.length - 1]?.role === 'user' && <Message role="model" text="..." />}
        </div>
        <form className="chat-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={chat ? "Pregúntame algo..." : "Cargando IA..."}
            disabled={!chat || isLoading}
          />
          <button type="submit" disabled={!chat || isLoading}>Enviar</button>
        </form>
      </aside>
    </div>
  );
};

export default UnitLayout;
