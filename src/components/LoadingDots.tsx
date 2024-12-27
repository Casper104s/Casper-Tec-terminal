import React, { useEffect, useState } from 'react';

interface LoadingDotsProps {
  text: string;
}

export function LoadingDots({ text }: LoadingDotsProps) {
  const [dots, setDots] = useState('.');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '.' : prev + '.');
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="animate-pulse">{text}{dots}</span>
  );
}