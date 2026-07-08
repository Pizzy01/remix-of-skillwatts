import { useState, useEffect } from "react";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isFinePointer) return null;

  return (
    <>
      {/* The trailing glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-64 h-64 -mt-32 -ml-32 bg-plasma/20 blur-[80px] rounded-full z-[100] transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)` }}
      />
      {/* The sharp dot */}
      <div
        className={`pointer-events-none fixed top-0 left-0 rounded-full z-[101] transition-all duration-200 ease-out border border-white/50 backdrop-blur-sm flex items-center justify-center ${
          isHovering ? "w-12 h-12 -mt-6 -ml-6 bg-white/10" : "w-4 h-4 -mt-2 -ml-2 bg-white"
        }`}
        style={{ transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)` }}
      />
    </>
  );
};
