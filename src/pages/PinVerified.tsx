
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import MobileStatusBar from '../components/MobileStatusBar';

const PinVerified = () => {
  const navigate = useNavigate();
  
  // Automatically go back to the main app after showing success
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/app');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden">
      <MobileStatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center animate-scale-in">
          <Check size={36} className="text-white" />
        </div>
        <h2 className="mt-6 text-xl font-medium animate-fade-in">Pin doğrulandı</h2>
      </div>
      
      {/* Mobile navigation */}
      <div className="bg-black h-14 flex items-center justify-center space-x-16">
        <div className="w-5 h-5 bg-gray-400 rounded"></div>
        <div className="w-8 h-8 border-2 border-gray-400 rounded-full"></div>
        <div className="w-0 h-0 border-l-8 border-l-transparent border-t-10 border-t-gray-400 border-r-8 border-r-transparent"></div>
      </div>
    </div>
  );
};

export default PinVerified;
