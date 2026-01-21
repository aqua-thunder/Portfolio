import React from "react";
import { useEffect, useRef } from "react";

const Cursor = () => {
    const cursorRef = useRef(null);

    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const speed = 0.03; // 👈 lower = smoother (0.05–0.1)

    useEffect(() => {
        const cursor = cursorRef.current;

        const move = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", move);

        const animate = () => {
            // smooth interpolation
            pos.current.x += (mouse.current.x - pos.current.x) * speed;
            pos.current.y += (mouse.current.y - pos.current.y) * speed;

            cursor.style.transform = `
        translate3d(
          ${pos.current.x.toFixed(2)}px,
          ${pos.current.y.toFixed(2)}px,
          0
        ) translate(-50%, -50%)
      `;

            requestAnimationFrame(animate);
        };

        // initialize position to prevent jump
        pos.current.x = window.innerWidth / 2;
        pos.current.y = window.innerHeight / 2;

        animate();

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#00ff88]/80 pointer-events-none z-[9999]"
        />
    );
};

export default Cursor;
