import { useEffect, useRef } from 'react';

type Point = { x: number; y: number; age: number };

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let x = targetX;
    let y = targetY;
    let visible = false;
    const points: Point[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;
    };
    const leave = () => { visible = false; };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;

      if (visible) {
        const last = points.at(-1);
        if (!last || Math.hypot(last.x - x, last.y - y) > 12) points.push({ x, y, age: 0 });
      }
      points.forEach((point) => { point.age += 1; });
      while (points.length > 18 || (points[0]?.age ?? 0) > 48) points.shift();

      for (let i = 1; i < points.length; i += 1) {
        const point = points[i];
        const previous = points[i - 1];
        if (!point || !previous) continue;
        const alpha = Math.max(0, (1 - point.age / 48) * 0.22);
        context.strokeStyle = `rgba(255,106,0,${alpha})`;
        context.lineWidth = 0.75;
        context.beginPath();
        context.moveTo(previous.x, previous.y);
        context.lineTo(point.x, point.y);
        context.stroke();

        if (i > 2 && i % 3 === 0) {
          const connected = points[i - 3];
          if (!connected) continue;
          context.beginPath();
          context.moveTo(connected.x, connected.y);
          context.lineTo(point.x, point.y);
          context.stroke();
        }
      }

      if (visible) {
        context.shadowColor = 'rgba(255,106,0,0.9)';
        context.shadowBlur = 16;
        context.fillStyle = 'rgb(255,106,0)';
        context.beginPath();
        context.arc(x, y, 7, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]" />;
}