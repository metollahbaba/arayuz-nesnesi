
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import BankCard from '../components/BankCard';

// Helper function to format name with first name and first letter of last name followed by asterisks
const formatName = (input: string) => {
  if (!input || input.trim() === '') return '';
  
  const formattedInput = input.trim().toUpperCase();
  const parts = formattedInput.split(' ');
  
  if (parts.length === 1) {
    // Only first name provided
    return `${parts[0]} ${'*'.repeat(5)}`;
  } else {
    // First name and last name provided
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');
    const firstLetterOfLastName = lastName.charAt(0);
    
    return `${firstName} ${firstLetterOfLastName}${'*'.repeat(5)}`;
  }
};

// Default name if needed
const DEFAULT_NAME = 'AYNURA N';

const TransferConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCard, cardNumber, amount, fullName: inputName } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);
  const [nameInput, setNameInput] = useState(inputName || '');
  
  // Format the name
  const formattedName = nameInput ? formatName(nameInput) : '';
  
  const goBack = () => {
    navigate('/bank-card-transfer');
  };
  
  const handleConfirm = () => {
    setIsProcessing(true);
    // Simulate processing and then go back to dashboard
    setTimeout(() => {
      navigate('/app');
    }, 2000);
  };
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  
  // Quick add amount buttons
  const quickAddAmounts = [10, 20, 50];
  
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* Mobile Status Bar with time */}
      <div className="bg-gray-50 text-black p-2 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <span className="font-semibold">12:10</span>
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
            <span className="text-[10px]">91</span>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <button onClick={goBack} className="text-black">
          <ChevronLeft size={24} />
        </button>
        <button className="text-black">
          <Info size={24} />
        </button>
      </div>
      
      {/* Page Title */}
      <div className="px-6 mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">İstənilən bank kartına</h1>
      </div>
      
      {/* From Card */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Ödəmək</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className="bg-navy-700 w-14 h-10 rounded-md flex items-center justify-center">
              <div className="text-white text-xs">VISA</div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="text-gray-600">Kapital Bank ASC</div>
            <div className="flex justify-between">
              <div className="font-medium">{selectedCard?.balance || '0.27'} AZN</div>
              <div className="text-gray-500 text-sm">•{selectedCard?.cardNumber || '3303'}</div>
            </div>
          </div>
          <div className="flex-shrink-0 ml-2">
            <ChevronLeft size={20} className="transform rotate-180 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* To Card */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Mədaxil etmək</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-xs text-gray-400 mb-1">Kart nömrəsi</div>
          <div className="text-gray-700 text-lg font-medium flex justify-between items-center">
            <span>{cardNumber || '4169 7388 4327 4444'}</span>
            <button className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Transfer Details */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Köçürmənin detalları</h2>
        <div className="flex gap-3 mb-3">
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex-grow">
            <div className="text-xs text-gray-400 mb-1">Məbləğ</div>
            <div className="text-gray-700 text-lg font-medium">{amount || '0.01'}</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 w-1/3">
            <div className="text-xs text-gray-400 mb-1">Valyuta</div>
            <div className="text-gray-700 text-lg font-medium flex justify-between items-center">
              <span>AZN</span>
              <ChevronLeft size={16} className="transform rotate-180 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Min-Max info */}
        <div className="flex items-center mb-3 text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span>Min: 0.01AZN, Maks: 0.27AZN</span>
        </div>
        
        {/* Quick Amount Buttons */}
        <div className="flex gap-3 mb-6">
          {quickAddAmounts.map(value => (
            <button 
              key={value} 
              className="flex-1 p-3 bg-white rounded-xl border border-gray-200 flex items-center justify-center"
            >
              <span className="text-gray-400 mr-1">+</span>
              <span>{value}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Name Section */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Ad Səyad</h2>
        <div className="relative">
          <input
            type="text"
            value={nameInput}
            onChange={handleNameChange}
            className="opacity-0 absolute inset-0 w-full h-full cursor-text z-10"
            autoFocus
          />
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-gray-700 text-lg font-medium">
              {formattedName || DEFAULT_NAME + '*****'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Amount Display */}
      <div className="px-6 mb-2">
        <h2 className="text-gray-700 mb-2">Məbləğ</h2>
        <div className="text-xl font-semibold text-gray-900">{amount || '0,01'} AZN</div>
      </div>
      
      {/* Commission Section */}
      <div className="px-6 flex items-center text-gray-600 mb-4">
        <span className="mr-2">Komissiya yoxdur</span>
        <span className="text-yellow-500">👍</span>
      </div>
      
      {/* Country and Bank */}
      <div className="px-6 mb-4">
        <div className="bg-gray-100 rounded-xl p-4 flex items-center">
          <div className="mr-2">
            <span className="text-[16px]">🇦🇿</span>
          </div>
          <span className="text-gray-700">AZERBAIJAN, KapitalBank</span>
        </div>
      </div>
      
      {/* Bottom Button */}
      <div className="mt-auto px-6 pb-6">
        <button 
          onClick={handleConfirm}
          disabled={isProcessing}
          className={`w-full py-4 rounded-xl font-medium ${
            isProcessing ? 'bg-gray-400 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {isProcessing ? 'Emal edilir...' : 'Təsdiq etmək'}
        </button>
      </div>
      
      {/* iPhone Home Indicator */}
      <div className="bg-black h-10 flex items-center justify-center">
        <div className="w-1/3 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default TransferConfirmation;
