import React, { useEffect, useState, useRef } from "react";

const Speedometer = ({ width = 300, height = 150 }) => {
  const [speed, setSpeed] = useState(0);       // Current displayed speed
  const targetSpeed = useRef(0);               // Target speed from backend
  const direction = useRef(1);                 // For rocking effect

  // Poll backend every 2 seconds
  useEffect(() => {
    const fetchSpeed = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_URL;

        const res = await fetch(`${API_BASE}/speed`);
        const data = await res.json();
        targetSpeed.current = data.speed;
      } catch (err) {
        console.error("Failed to fetch speed:", err);
      }
    };
    fetchSpeed();
    const interval = setInterval(fetchSpeed, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate needle
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setSpeed(prev => {
        const diff = targetSpeed.current - prev;

        // Move toward target if far
        if (Math.abs(diff) > 0.5) return prev + diff * 0.1;

        // Rocking effect
        return prev + 0.3 * direction.current;
      });
      // Flip direction every frame for subtle swing
      direction.current *= -1;

      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Map speed (0-100) → angle (-90° to 90°)
  const angle = (speed / 100) * 180 - 90;

  // Helper for color zones
  const getZoneColor = value => {
    if (value < 50) return "#22c55e"; // green
    if (value < 75) return "#facc15"; // yellow
    return "#ef4444";                 // red
  };

  return (
    <div style={{ width, height }} className="relative">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        {/* Background semicircle zones */}
        <path d="M10 90 A90 90 0 0 1 100 10" stroke="#22c55e" strokeWidth="10" fill="none" />
        <path d="M100 10 A90 90 0 0 1 190 90" stroke="#155dfa69" strokeWidth="10" fill="none" />
        <path d="M145 55 A45 45 0 0 1 155 90" stroke="#ef4444" strokeWidth="10" fill="none" />

        {/* Needle */}
        <line
          x1="100"
          y1="90"
          x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
          y2={90 + 80 * Math.sin((angle * Math.PI) / 180)}
          stroke="#06b6d4"  // cyan-400
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center circle */}
        <circle cx="100" cy="90" r="5" fill="#06b6d4" />
      </svg>

      {/* Speed label */}
      <div className="absolute w-full text-center text-cyan-400 font-bold -bottom-2">
        {Math.round(speed)}%
      </div>
    </div>
  );
};

export default Speedometer;
