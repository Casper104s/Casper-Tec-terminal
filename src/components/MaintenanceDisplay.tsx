import React from 'react';
import { WarningBox } from './WarningBox';
import { StatusList } from './StatusList';
import { IconDisplay } from './IconDisplay';

export function MaintenanceDisplay() {
  return (
    <div className="space-y-10">
      <WarningBox />
      <IconDisplay />
      
      <div className="text-5xl font-bold text-center tracking-[0.3em] terminal-text leading-relaxed">
        CASPER
        <br />
        MAINTENANCE
      </div>

      <StatusList />

      <div className="p-6 border-2 border-[#2ec62e] bg-black">
        <p className="text-center tracking-[0.15em] terminal-text text-xl">
          ESTIMATED TIME TO COMPLETION: UNKNOWN
        </p>
      </div>

      <div className="text-sm text-center terminal-text tracking-wider">
        CASPER-TEC REMINDS YOU: PREPARE FOR THE FUTURE!
      </div>
    </div>
  );
}