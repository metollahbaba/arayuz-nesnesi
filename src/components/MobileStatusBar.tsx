
import React from 'react';

interface MobileStatusBarProps {
  time?: string;
  backgroundColor?: string;
  batteryLevel?: string;
}

const MobileStatusBar: React.FC<MobileStatusBarProps> = ({ 
  time = "12:00",
  backgroundColor = "bg-white", 
  batteryLevel = "24"
}) => {
  return (
    <div className={`${backgroundColor} text-black p-2 flex justify-between items-center text-xs`}>
      <div className="flex items-center gap-1">
        <span className="font-semibold">{time}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2l.001 20" />
          <path d="M18 6v.002" />
          <path d="M18 13v.002" />
          <path d="M18 20v.002" />
          <path d="M12 20v.002" />
          <path d="M12 13v.002" />
          <path d="M12 6v.002" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs">4G</span>
        <div className="flex h-3 space-x-0.5">
          <div className="w-1 h-1 bg-black rounded-sm"></div>
          <div className="w-1 h-2 bg-black rounded-sm"></div>
          <div className="w-1 h-3 bg-black rounded-sm"></div>
          <div className="w-1 h-full bg-black rounded-sm"></div>
        </div>
        <div className="flex items-center border border-black rounded-sm px-1 bg-amber-400">
          <span className="text-[10px]">{batteryLevel}</span>
        </div>
      </div>
    </div>
  );
};

export default MobileStatusBar;
