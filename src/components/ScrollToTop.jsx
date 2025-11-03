import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extrae el "pathname" (ej. "/unidad2") del objeto de ubicación actual.
  const { pathname } = useLocation();

  // Este efecto se ejecuta cada vez que el "pathname" cambia.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada en la pantalla.
};

export default ScrollToTop;