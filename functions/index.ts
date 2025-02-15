// functions/index.ts
export const updateGlow = (
    latestCoords: React.MutableRefObject<{ x: number; y: number } | null>,
    element: React.RefObject<HTMLDivElement>,
    frameId: React.MutableRefObject<number | null>,
  ) => {
    if (latestCoords.current && element.current) {
      element.current.style.setProperty("--glow-x", `${latestCoords.current.x}px`);
      element.current.style.setProperty("--glow-y", `${latestCoords.current.y}px`);
      frameId.current = null;
    }
  };

  export const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    latestCoords: React.MutableRefObject<{ x: number; y: number } | null>,
    frameId: React.MutableRefObject<number | null>,
    updateGlowCallback: () => void,
  ) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    latestCoords.current = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    if (!frameId.current) {
      frameId.current = requestAnimationFrame(updateGlowCallback);
    }
  };

  export const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.removeProperty("--glow-x");
    e.currentTarget.style.removeProperty("--glow-y");
  };
