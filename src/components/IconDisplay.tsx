import React from 'react';
import { Radiation, Skull } from 'lucide-react';

export function IconDisplay() {
  return (
    <div className="flex items-center justify-center gap-12">
      <Radiation className="w-24 h-24 text-yellow-500" />
      <Skull className="w-24 h-24 text-yellow-500" />
    </div>
  );
}