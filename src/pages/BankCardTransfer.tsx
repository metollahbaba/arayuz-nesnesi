
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, ChevronDown, Scan } from 'lucide-react';
import BankCard from '../components/BankCard';
import { formatCardNumber, getCardType } from '../lib/utils';

const BankCardTransfer = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('4169 7388 2455 3303');
  const [cardType, setCardType] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (cardNumber) {
      setCardType(getCardType(cardNumber.replace(/\s/g, '')));
    } else {
      setCardType('');
    }
  }, [cardNumber]);
  
  useEffect(() => {
    const handleFocus = () => {
      setIsKeyboardOpen(true);
    };

    const handleBlur = () => {
      setIsKeyboardOpen(false);
    };

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);
  
  const goBack = () => {
    navigate('/payments');
  };
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure amount doesn't exceed max value
    if (!value || parseFloat(value) <= 0.27) {
      setAmount(value);
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardNumber(formatCardNumber(value));
  };
  
  const handlePresetAmount = (value: string) => {
    // Ensure preset amount doesn't exceed max value
    if (parseFloat(value) <= 0.27) {
      setAmount(value);
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col">
      {/* Mobile Status Bar with time */}
      <div className="bg-gray-100 text-black p-2 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <span className="font-semibold">11:53</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
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
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 7a5 5 0 1 0 5 5" />
            <path d="M17 12h-5" />
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
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12" y2="20" />
          </svg>
          <div className="flex items-center border border-black rounded-sm px-1 bg-amber-400">
            <span className="text-[10px]">26</span>
          </div>
        </div>
      </div>
      
      {/* Header - Adjusts position based on keyboard state */}
      <div className={`flex justify-between items-center px-6 py-4 ${isKeyboardOpen ? 'py-1' : 'py-4'}`}>
        <button onClick={goBack} className="text-black">
          <ChevronLeft size={24} />
        </button>
        <button className="text-black">
          <Info size={24} />
        </button>
      </div>
      
      {/* Page Title - Adjusts position based on keyboard state */}
      <div className={`px-6 ${isKeyboardOpen ? 'mb-2' : 'mb-6'}`}>
        <h1 className={`${isKeyboardOpen ? 'text-2xl' : 'text-3xl'} font-bold text-gray-900`}>İstənilən bank kartına</h1>
      </div>
      
      {/* Card Selection */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Ödəmək</h2>
        <BankCard 
          bankName="Kapital Bank ASC"
          cardNumber="3303"
          balance="0.27 AZN"
        />
      </div>
      
      {/* Card Number Input */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Mədaxil etmək</h2>
        <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm">
          <div className="flex-1">
            <div className="text-xs text-gray-400 mb-1">Kart nömrəsi</div>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full outline-none text-gray-700 text-lg font-medium"
              maxLength={19}
              ref={inputRef}
            />
          </div>
          <div className="rounded-lg bg-gray-100 p-2">
            <Scan size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
      
      {/* Transfer Details */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Köçürmənin detalları</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-xs text-gray-400 mb-1">Məbləğ</div>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="w-full outline-none text-gray-700 text-lg font-medium"
                min="0.01"
                max="0.27"
                step="0.01"
                placeholder="0.01"
              />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <span className="text-gray-700 font-medium">AZN</span>
              <ChevronDown size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center mt-2 mb-4 text-gray-500 text-xs">
          <span className="mr-1">ⓘ</span>
          <span>Min: 0.01AZN, Maks: 0.27AZN</span>
        </div>
        
        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button 
            onClick={() => handlePresetAmount('10')}
            className="bg-white rounded-2xl py-3 flex items-center justify-center shadow-sm"
          >
            <span className="text-gray-500 mr-1">+</span>
            <span className="text-gray-700 font-medium">10</span>
          </button>
          <button 
            onClick={() => handlePresetAmount('20')}
            className="bg-white rounded-2xl py-3 flex items-center justify-center shadow-sm"
          >
            <span className="text-gray-500 mr-1">+</span>
            <span className="text-gray-700 font-medium">20</span>
          </button>
          <button 
            onClick={() => handlePresetAmount('50')}
            className="bg-white rounded-2xl py-3 flex items-center justify-center shadow-sm"
          >
            <span className="text-gray-500 mr-1">+</span>
            <span className="text-gray-700 font-medium">50</span>
          </button>
        </div>
      </div>
      
      {/* Bank Info and Bottom Button - Move to bottom of screen */}
      <div className="mt-auto">
        <div className="mx-6 mb-4 bg-white rounded-2xl p-4 flex items-center shadow-sm">
          <div className="flex items-center">
            <span className="mr-2">🇦🇿</span>
            <span className="text-gray-700 font-medium">AZERBAIJAN, KapitalBank</span>
          </div>
        </div>
        
        {/* Bottom Button */}
        <div className="px-6 pb-6">
          <button 
            className={`w-full py-4 rounded-2xl font-medium ${
              cardNumber.length === 19 && (!amount || parseFloat(amount) >= 0.01) && parseFloat(amount || '0') <= 0.27
                ? 'bg-red-500 text-white'
                : 'bg-red-200 text-red-500'
            }`}
          >
            Davam etmək
          </button>
        </div>
      </div>
      
      {/* iPhone Home Indicator */}
      <div className="bg-black h-10 flex items-center justify-center">
        <div className="w-1/3 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default BankCardTransfer;
