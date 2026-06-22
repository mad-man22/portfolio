import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

export default function AnimeGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<{ columns: number; rows: number }>({ columns: 25, rows: 14 });
  const [totalCells, setTotalCells] = useState(0);

  useEffect(() => {
    const calculateGrid = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      
      // Dynamic column count based on viewport width
      let cols = 25;
      if (width < 600) cols = 15;
      else if (width < 1000) cols = 20;
      
      const rows = 14;
      gridRef.current = { columns: cols, rows };
      setTotalCells(cols * rows);
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const handleCellClick = (index: number) => {
    animate('.grid-line', {
      scale: [0.5, 1.8, 1],
      rotate: '+=360',
      backgroundColor: ['rgba(148, 163, 184, 0.25)', '#00f2fe', '#4facfe', 'rgba(148, 163, 184, 0.15)'],
      duration: 1200,
      ease: 'outQuad',
      delay: stagger(60, {
        grid: [gridRef.current.columns, gridRef.current.rows],
        from: index
      })
    });
  };

  // Run a default center ripple on mount to introduce the grid
  useEffect(() => {
    if (totalCells > 0) {
      const centerIndex = Math.floor(totalCells / 2);
      const timer = setTimeout(() => {
        handleCellClick(centerIndex);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [totalCells]);

  return (
    <div
      ref={containerRef}
      className="anime-grid-container"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridRef.current.columns}, 1fr)`,
        gridTemplateRows: `repeat(${gridRef.current.rows}, 1fr)`
      }}
    >
      {Array.from({ length: totalCells }).map((_, idx) => (
        <div
          key={idx}
          className="anime-grid-cell"
          onClick={() => handleCellClick(idx)}
        >
          <span className="grid-line" />
        </div>
      ))}
    </div>
  );
}
