
import React from 'react';

const MobileNavBar = () => {
  return (
    <div className="bg-black text-white p-3 flex justify-between items-center">
      <div className="flex items-center gap-2 bg-gray-800 rounded-full py-2 px-4 w-full">
        <div className="bg-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
        </div>
        <span className="text-gray-300">hugai.app</span>
        <span className="bg-white text-black rounded-full ml-auto w-5 h-5 flex items-center justify-center text-xs">2</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </div>
    </div>
  );
};

export default MobileNavBar;
