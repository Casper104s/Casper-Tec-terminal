import React from 'react';
import { LoadingDots } from './LoadingDots';

export function WarningBox() {
  return (
    <div className="flex items-center gap-4 border-2 border-[#2ec62e] p-4 bg-black">
      <span className="text-yellow-500 text-xl font-bold">[CASPER-TEC WARNING]</span>
      <LoadingDots text="MAINTENANCE PROTOCOLS ACTIVE" />
    </div>
  );
}