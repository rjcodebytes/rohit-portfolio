'use client'

import { useEffect, useState } from 'react';
import './loader.css'; // We'll create this CSS file next

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader-wrapper" className={isLoaded ? 'loaded' : ''}>
      <div id="loader">
        <svg width="800" height="100">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="100"
          >
            Rohit Jatti
          </text>
        </svg>
      </div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
}

