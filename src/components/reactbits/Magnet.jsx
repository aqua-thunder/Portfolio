import React from 'react';
import  { useState, useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 120,
  disabled = false,
  magnetStrength = 8, // lower = stronger pull
  smoothness = 0.15,  // 0.05–0.25 (higher = faster follow)
  activeTransition = "transform 0.1s ease-out",
  inactiveTransition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const magnetRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const animate = () => {
      setPosition(prev => {
        const dx = target.current.x - prev.x;
        const dy = target.current.y - prev.y;

        return {
          x: prev.x + dx * smoothness,
          y: prev.y + dy * smoothness
        };
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleMouseMove = e => {
      if (!magnetRef.current) return;

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;

        target.current = { x: offsetX, y: offsetY };
      } else {
        setIsActive(false);
        target.current = { x: 0, y: 0 };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [padding, disabled, magnetStrength, smoothness]);

  const transitionStyle = isActive
    ? activeTransition
    : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
