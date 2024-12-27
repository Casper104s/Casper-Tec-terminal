import React from 'react';
import { TerminalHeader } from './components/TerminalHeader';
import { MaintenanceDisplay } from './components/MaintenanceDisplay';
import { TerminalLink } from './components/TerminalLink';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#2ec62e] flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full p-12 border-4 border-[#2ec62e] relative bg-black">
        <div className="absolute inset-0 pointer-events-none scanlines opacity-20" />
        <TerminalHeader />
        <MaintenanceDisplay />
        <TerminalLink />
      </div>
    </div>
  );
}