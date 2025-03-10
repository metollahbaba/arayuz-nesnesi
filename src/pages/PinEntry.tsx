
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Fingerprint, X, Loader2 } from 'lucide-react';

const PinEntry = () => {
  const [pin, setPin] = useState<string>('');
  const [errorAnimation, setErrorAnimation] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const MAX_PIN_LENGTH = 4;
  const CORRECT_PIN = '2121';

  // Pin indicator circles
  const renderPinIndicators = () => {
    return (
      <div className="flex justify-center space-x-6 my-10">
        {Array(MAX_PIN_LENGTH).fill(0).map((_, index) => (
          <div 
            key={index} 
            className={`w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center
              ${pin.length > index ? 'bg-black border-black' : 'bg-white'}`}
          />
        ))}
      </div>
    );
  };

  // Handle number click
  const handleNumberClick = (num: number | string) => {
    if (pin.length < MAX_PIN_LENGTH && !loading) {
      const newPin = pin + num;
      setPin(newPin);
      
      // Check if PIN is complete and correct
      if (newPin.length === MAX_PIN_LENGTH) {
        if (newPin === CORRECT_PIN) {
          // Correct PIN - show loading animation
          setLoading(true);
          setTimeout(() => {
            navigate('/app');
          }, 1000); // Navigate after 1 second loading animation
        } else {
          // Wrong PIN - show error animation
          setErrorAnimation(true);
          setTimeout(() => {
            setErrorAnimation(false);
            setPin('');
          }, 400);
        }
      }
    }
  };

  // Handle delete button click
  const handleDelete = () => {
    if (pin.length > 0 && !loading) {
      setPin(pin.slice(0, -1));
    }
  };
  
  // Number buttons (0-9)
  const renderNumberButtons = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'delete'];
    
    return (
      <div className="grid grid-cols-3 gap-4 px-6">
        {numbers.map((num, index) => {
          if (num === null) return <div key={index} className="h-16" />; // Empty space
          
          if (num === 'delete') {
            return (
              <button
                key={index}
                onClick={handleDelete}
                disabled={loading}
                className={`h-16 flex items-center justify-center text-lg bg-gray-100 rounded-lg 
                  ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <X size={24} className="text-gray-500" />
              </button>
            );
          }
          
          return (
            <button
              key={index}
              onClick={() => handleNumberClick(num)}
              disabled={loading}
              className={`h-16 flex items-center justify-center text-2xl font-medium bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {num}
            </button>
          );
        })}
      </div>
    );
  };

  // Loading overlay
  const renderLoadingOverlay = () => {
    if (!loading) return null;
    
    return (
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Loader2 size={50} className="text-red-500 animate-spin" />
      </div>
    );
  };

  return (
    <div className={`max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden relative
      ${errorAnimation ? 'animate-[wiggle_0.3s_ease-in-out]' : ''}`}>
      {renderLoadingOverlay()}
      
      <div className="flex-1 flex flex-col items-center pt-16">
        {/* Logo - using the direct image link from Imgur */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center border border-gray-200 bg-white p-2">
          <img 
            src="https://i.imgur.com/eqBuyi5.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Name */}
        <h2 className="mt-6 text-xl font-medium">Xəlil Rəhimov</h2>
        
        {/* PIN indicators */}
        {renderPinIndicators()}
        
        {/* Number pad */}
        <div className="mt-auto w-full pb-6">
          {renderNumberButtons()}
          
          {/* Footer options */}
          <div className="flex justify-between px-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Lock size={18} className="mr-2" />
              <span>Giriş kodunu unutmusunuz?</span>
            </div>
            <div className="flex items-center">
              <Fingerprint size={18} className="mr-2" />
              <span>Giriş üçün «Barmaq izi» istifadə edin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinEntry;
