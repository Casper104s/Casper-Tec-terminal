import React, { useState } from 'react';
import { StatusMessage } from './StatusMessage';

export function StatusList() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const statuses = [
    'Initializing Casper-Tec maintenance protocols...',
    'Updating C.A.S.P.E.R. systems...',
    'Recalibrating Bot interface...',
    'Please stand by.',
  ];

  const handleMessageComplete = () => {
    if (currentMessageIndex < statuses.length - 1) {
      setCurrentMessageIndex(prev => prev + 1);
    }
  };

  return (
    <div className="border-2 border-[#2ec62e] p-6 bg-black min-h-[200px]">
      {statuses.slice(0, currentMessageIndex + 1).map((status, index) => (
        <StatusMessage
          key={index}
          message={status}
          onComplete={index === currentMessageIndex ? handleMessageComplete : () => {}}
        />
      ))}
    </div>
  );
}