
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Battery, Wifi, Signal } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  
  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);

    // Redirect to PIN entry page after animation completes
    const redirectTimer = setTimeout(() => {
      navigate('/pin');
    }, 3000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);
  
  return (
    <div className="max-w-md mx-auto bg-red-500 h-screen flex flex-col overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-white">
        <div>{time}</div>
        <div className="flex items-center space-x-2">
          <Signal size={16} />
          <Wifi size={16} />
          <div className="flex items-center">
            <Battery size={16} />
            <span className="text-xs ml-1">72%</span>
          </div>
        </div>
      </div>
      
      {/* Logo and Text with Animation */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-3 animate-scale-in">
          <div className="w-24 h-24 rounded-full flex items-center justify-center border border-white bg-white p-2">
            <img 
              src="https://i.ibb.co/yFh4fk3/eqBuyi5.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-white">birbank</h1>
        </div>
      </div>
      
      {/* Bottom Navigation Bar */}
      <div className="h-16 bg-black flex justify-around items-center">
        <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-400 transform rotate-90" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      </div>
    </div>
  );
};

export default Index;
