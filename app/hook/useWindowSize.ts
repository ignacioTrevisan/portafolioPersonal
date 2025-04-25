import { useState, useEffect } from 'react';

// Hook para detectar el tamaño de la pantalla
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Handler para llamar cuando cambia el tamaño de la ventana
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Agregar listener para el evento resize
    window.addEventListener("resize", handleResize);
    
    // Llamar al handler inmediatamente para establecer el tamaño inicial
    handleResize();
    
    // Eliminar el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array vacío significa que este efecto se ejecuta una vez al montar y limpiar al desmontar

  return windowSize;
}

// Hook para posición del mouse (mejorado para rendimiento)
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const updatePosition = (e: MouseEvent) => {
      // Desacoplar la actualización del estado para mejorar el rendimiento
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 5); // Pequeño throttle para mejorar rendimiento
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      clearTimeout(timeoutId);
    };
  }, []);
  
  return position;
}

// Hook para la posición de scroll
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);
  
  return scrollPosition;
}

// Hook para detectar dispositivos móviles
export function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    // Comprobar en la carga inicial
    checkDevice();
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkDevice);
    
    // Limpiar
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet };
}