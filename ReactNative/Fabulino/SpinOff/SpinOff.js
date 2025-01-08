import { useEffect, useState } from 'react';

const useSpinner = (animationRef, duration = 1200, onEnd) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (animationRef.current) {
      // Iniciar la animación
      animationRef.current.play();

      // Detener la animación después de la duración especificada
      const timer = setTimeout(() => {
        if (animationRef.current) {
          animationRef.current.pause();
        }
        setVisible(false); // Ocultar la animación
        if (onEnd) {
          onEnd(); // Llamar a la función de callback cuando la animación termine
        }
      }, duration);

      // Limpiar el temporizador cuando el componente se desmonte
      return () => clearTimeout(timer);
    }
  }, [animationRef, duration, onEnd]);

  return visible;
};

export default useSpinner;