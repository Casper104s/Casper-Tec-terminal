import React from 'react';
import { Shield } from 'lucide-react';

export function TerminalLink() {
  return (
    <a
      href="https://casper-tec.xyz"
      className="block w-full max-w-xs mx-auto mt-8 px-6 py-3 bg-[#2ec62e] text-black text-center hover:bg-[#2ec62e]/90 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="tracking-[0.2em] font-bold">BACK TO TERMINAL</span>
    </a>
  );
}