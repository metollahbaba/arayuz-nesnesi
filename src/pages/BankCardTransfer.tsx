
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, ChevronDown, Scan } from 'lucide-react';
import BankCard from '../components/BankCard';
import { formatCardNumber, getCardType } from '../lib/utils';

const BankCardTransfer = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  
  useEffect(() => {
    if (cardNumber) {
      setCardType(getCardType(cardNumber.replace(/\s/g, '')));
    } else {
      setCardType('');
    }
  }, [cardNumber]);
  
  const goBack = () => {
    navigate('/payments');
  };
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure amount doesn't exceed max value
    if (!value || parseFloat(value) <= 173) {
      setAmount(value);
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardNumber(formatCardNumber(value));
  };
  
  const handlePresetAmount = (value: string) => {
    // Ensure preset amount doesn't exceed max value
    if (parseFloat(value) <= 173) {
      setAmount(value);
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Mobile Status Bar with time */}
      <div className="bg-white text-black p-2 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <span className="font-semibold">11:40</span>
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
          <div className="flex items-center border border-black rounded-sm px-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-sm mr-0.5"></div>
            <span>50</span>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <button onClick={goBack} className="p-2">
          <ChevronLeft size={24} />
        </button>
        <button className="p-2">
          <Info size={24} />
        </button>
      </div>
      
      {/* Page Title */}
      <div className="px-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">İstənilən bank kartına</h1>
      </div>
      
      {/* Card Selection */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-700 mb-2">Ödəmək</h2>
        <BankCard 
          bankName="Kapital Bank ASC"
          cardNumber="•••• 4444"
          balance="173 ₼"
        />
      </div>
      
      {/* Card Number Input */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-700 mb-2">Mədaxil etmək</h2>
        <div className="border border-gray-200 rounded-xl p-4 flex items-center">
          <div className="flex-1">
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Kart nömrəsi"
              className="w-full outline-none text-gray-700"
              maxLength={19} // 16 digits + 3 spaces
            />
            {cardType && (
              <div className="text-xs text-gray-500 mt-1">
                {cardType}
              </div>
            )}
          </div>
          <Scan size={20} className="text-gray-400" />
        </div>
      </div>
      
      {/* Transfer Details */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-700 mb-2">Köçürmənin detalları</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="border border-gray-200 rounded-xl p-4">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Məbləğ"
                className="w-full outline-none text-gray-700"
                min="0.01"
                max="173"
                step="0.01"
              />
            </div>
            <div className="mt-1 text-gray-500 text-xs flex items-center">
              <span className="mr-1">ⓘ</span>
              <span>Min: 0.01AZN, Maks: 173AZN</span>
            </div>
          </div>
          <div>
            <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
              <span className="text-gray-700">AZN</span>
              <ChevronDown size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <button 
            onClick={() => handlePresetAmount('10')}
            className="border border-gray-200 rounded-xl py-3 flex items-center justify-center"
          >
            <span className="mr-1">+</span>
            <span>10</span>
          </button>
          <button 
            onClick={() => handlePresetAmount('20')}
            className="border border-gray-200 rounded-xl py-3 flex items-center justify-center"
          >
            <span className="mr-1">+</span>
            <span>20</span>
          </button>
          <button 
            onClick={() => handlePresetAmount('50')}
            className="border border-gray-200 rounded-xl py-3 flex items-center justify-center"
          >
            <span className="mr-1">+</span>
            <span>50</span>
          </button>
        </div>
      </div>
      
      {/* Bottom Button */}
      <div className="mt-auto px-6 py-6">
        <button 
          className={`w-full py-4 rounded-xl font-medium ${
            cardNumber.length === 19 && parseFloat(amount || '0') >= 0.01 && parseFloat(amount || '0') <= 173
              ? 'bg-red-500 text-white'
              : 'bg-red-100 text-red-500'
          }`}
        >
          Davam etmək
        </button>
      </div>
      
      {/* iPhone Home Indicator */}
      <div className="bg-black h-8 flex items-center justify-center space-x-16">
        <div className="w-1/3 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default BankCardTransfer;
