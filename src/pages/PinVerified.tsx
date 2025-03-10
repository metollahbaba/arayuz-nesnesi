
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

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
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center animate-scale-in">
          <Check size={36} className="text-white" />
        </div>
        <h2 className="mt-6 text-xl font-medium animate-fade-in">Pin doğrulandı</h2>
      </div>
    </div>
  );
};

export default PinVerified;
