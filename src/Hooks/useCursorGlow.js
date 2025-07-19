import { useEffect } from 'react';

const useCursorGlow = () => {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');

    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(65, 105, 225, 0.18), transparent 40%)`;
       
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export default useCursorGlow;
