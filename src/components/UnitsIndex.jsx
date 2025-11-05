import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/UnitsIndex.css';

const units = [
  { path: '/unidad1', title: 'U1: Intro a Linux' },
  { path: '/unidad2', title: 'U2: Scripting Bash' },
  { path: '/unidad3', title: 'U3: Usuarios y Permisos' },
  { path: '/unidad4', title: 'U4: Virtualización' },
  { path: '/unidad5', title: 'U5: Discos y RAID' },
  { path: '/unidad6', title: 'U6: Redes en Linux' },
  { path: '/unidad7', title: 'U7: Seguridad' },
  { path: '/unidad8', title: 'U8: Scripting Avanzado' },
  { path: '/unidad9', title: 'U9: Monitoreo' },
  { path: '/unidad10', title: 'U10: Servidores' },
  { path: '/unidad11', title: 'U11: Análisis de Datos' },
];

const UnitsIndex = () => {
  const location = useLocation();

  return (
    <nav className="units-index">
      <ul>
        {units.map((unit) => (
          <li key={unit.path}>
            <Link 
              to={unit.path} 
              className={location.pathname === unit.path ? 'active' : ''}
            >
              {unit.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UnitsIndex;