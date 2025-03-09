
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Fingerprint, X } from 'lucide-react';
import MobileStatusBar from '../components/MobileStatusBar';

const PinEntry = () => {
  const [pin, setPin] = useState<string>('');
  const [errorAnimation, setErrorAnimation] = useState(false);
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
    if (pin.length < MAX_PIN_LENGTH) {
      const newPin = pin + num;
      setPin(newPin);
      
      // Check if PIN is complete and correct
      if (newPin.length === MAX_PIN_LENGTH) {
        if (newPin === CORRECT_PIN) {
          // Correct PIN
          setTimeout(() => {
            navigate('/pin-verified');
          }, 300);
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
    if (pin.length > 0) {
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
                className="h-16 flex items-center justify-center text-lg bg-gray-100 rounded-lg"
              >
                <X size={24} className="text-gray-500" />
              </button>
            );
          }
          
          return (
            <button
              key={index}
              onClick={() => handleNumberClick(num)}
              className="h-16 flex items-center justify-center text-2xl font-medium bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {num}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden
      ${errorAnimation ? 'animate-[wiggle_0.3s_ease-in-out]' : ''}`}>
      <MobileStatusBar />
      
      <div className="flex-1 flex flex-col items-center pt-16">
        {/* Logo - using the uploaded image from Imgur */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center border border-gray-200 bg-white p-2">
          <img 
            src="https://i.imgur.com/xCfLR4C.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Name */}
        <h2 className="mt-6 text-xl font-medium">Aynura Nəhmədova</h2>
        
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
      
      {/* Mobile navigation */}
      <div className="bg-black h-14 flex items-center justify-center space-x-16">
        <div className="w-5 h-5 bg-gray-400 rounded"></div>
        <div className="w-8 h-8 border-2 border-gray-400 rounded-full"></div>
        <div className="w-0 h-0 border-l-8 border-l-transparent border-t-10 border-t-gray-400 border-r-8 border-r-transparent"></div>
      </div>
    </div>
  );
};

export default PinEntry;
