import React from 'react';
import { Outlet } from 'react-router-dom';
import Respuesta from './Respuesta';
import '../styles/layout.css';

const UnitLayout = ({ content }) => {
  return (
    <div className="page-with-sidebar">
      <main className="main-content">
        <Outlet /> {/* Aquí se renderizará el componente de la unidad actual */}
      </main>
      <aside className="sidebar">
        <Respuesta content={content} />
      </aside>
    </div>
  );
};

export default UnitLayout;