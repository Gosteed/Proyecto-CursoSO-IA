import React, { useState } from 'react';
import styled from 'styled-components';

const Code = ({code}) => {
  const [copyStatus, setCopyStatus] = useState('Copy');

  const handleCopy = async () => {
    let textToCopy = '';
    // Si 'code' es un elemento React (como <code>...</code>)
    if (React.isValidElement(code) && code.type === 'code') {
      textToCopy = code.props.children;
      // Si los hijos son un array (ej. con <br/>), unirlos
      if (Array.isArray(textToCopy)) {
        textToCopy = textToCopy.join('');
      }
      // Reemplazar <br/> por saltos de línea reales para el portapapeles
      textToCopy = textToCopy.replace(/<br\s*\/?>/g, '\n');
    } else if (typeof code === 'string') {
      // Si 'code' es directamente un string
      textToCopy = code;
    } else {
      console.warn("Unexpected type for 'code' prop in Code component:", code);
      setCopyStatus('Error');
      setTimeout(() => setCopyStatus('Copy'), 2000);
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus('Copy'), 2000);
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card">
          <div className="header">
            <p className="title">{code?.props?.language || 'Bash'}</p>
            <button className="copy" onClick={handleCopy}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
              </svg>
              <span>{copyStatus}</span>
            </button>
          </div>
          <div className="footer">
            <pre className="code-content">{code}</pre>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container * {
    padding: 0;
    margin: 0;
  }

  .card {
    min-width: 300px;
    width: fit-content;
    height: fit-content;
    background-color: #1c1c1dff;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 40px 1fr;
  }

  .card .header {
    display: flex;
    align-items: center;
    position: relative;
  }
  .card .header .title {
    color: #d4d4d4ff;
    font-size: 13px;
    padding: 2px 12px;
  }
  .card .header .copy {
    display: flex;
    align-items: center;
    position: absolute;
    background: transparent;
    border: none;
    top: 61%;
    right: 1px;
    transform: translate(-50%, -50%);
    color: rgb(100, 116, 139);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 100;
  }
  .card .header .copy:hover {
    color: rgb(148, 163, 184);
  }
  .card .header .copy span {
    margin-left: 5px; /* Espacio entre el icono y el texto */
    font-size: 12px;
    font-weight: 500;
    color: inherit; /* Hereda el color del botón */
  }


  .card .header::after {
    content: "";
    position: absolute;
    width: 22%;
    height: 1px;
    background-color: #fcfefdff;
    bottom: 0;
  }

  .card .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px;
  }

  .card .footer .code-content {
    color: #17c43cff;
    white-space: pre-wrap; /* La clave está aquí */
    word-wrap: break-word; /* Asegura que el texto largo se ajuste */
    font-family: 'Courier New', Courier, monospace; /* Mejora la apariencia del código */
  }`;

export default Code;
