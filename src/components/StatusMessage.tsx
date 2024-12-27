import React, { useEffect, useState } from 'react';

interface StatusMessageProps {
  message: string;
  onComplete: () => void;
}

export function StatusMessage({ message, onComplete }: StatusMessageProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Adjust speed of typing here

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, message, onComplete]);

  return (
    <p className="terminal-text text-lg mb-2 h-7">
      <span className="text-[#2ec62e] opacity-90">&gt;</span> {displayedText}
    </p>
  );
}