
import React from 'react';

const MobileStatusBar = () => {
  return (
    <div className="bg-black text-white p-2 flex justify-between items-center text-xs">
      <div className="flex items-center gap-2">
        <span>18:47</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7L6.44 7"></path>
          <path d="M20.5 11L6.44 11"></path>
          <path d="M18.5 15L6.44 15"></path>
          <path d="M16.5 19L6.44 19"></path>
          <path d="M3.5 7L6.44 7"></path>
          <path d="M3.5 11L6.44 11"></path>
          <path d="M3.5 15L6.44 15"></path>
          <path d="M3.5 19L6.44 19"></path>
        </svg>
        <div className="flex">
          <div className="w-1 h-3 bg-white rounded-sm"></div>
          <div className="w-1 h-3 bg-white rounded-sm ml-0.5"></div>
          <div className="w-1 h-3 bg-white rounded-sm ml-0.5"></div>
          <div className="w-1 h-3 bg-white rounded-sm ml-0.5"></div>
        </div>
        <div className="border border-white rounded px-1">
          <span>75</span>
        </div>
      </div>
    </div>
  );
};

export default MobileStatusBar;
