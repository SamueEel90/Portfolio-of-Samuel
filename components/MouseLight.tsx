'use client';

import { useEffect, useState } from 'react';

export default function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition duration-100"
      style={{
        background: `radial-gradient(700px at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 90%)`,
      }}
    />
  );
}
