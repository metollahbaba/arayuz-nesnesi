
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import BankCard from '../components/BankCard';

// Helper function to mask full name
const maskFullName = (name: string) => {
  if (!name) return '';
  
  const parts = name.split(' ');
  return parts.map(part => {
    if (part.length <= 1) return part;
    return part[0] + '*'.repeat(part.length - 1);
  }).join(' ');
};

const TransferConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCard, cardNumber, amount, fullName } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);
  
  const maskedFullName = fullName ? maskFullName(fullName) : 'AYNURA N*****';
  
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
        <BankCard 
          bankName={selectedCard?.bankName || 'Kapital Bank ASC'}
          cardNumber={selectedCard?.cardNumber || '3303'}
          balance={selectedCard?.balance || '173 ₼'}
          showArrow={false}
        />
      </div>
      
      {/* To Card */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Mədaxil etmək</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-gray-400 mb-1">Kart nömrəsi</div>
          <div className="text-gray-700 text-lg font-medium">{cardNumber || '4169 7388 4327 4444'}</div>
        </div>
      </div>
      
      {/* Details */}
      <div className="px-6 space-y-4">
        {/* Name Section */}
        <div>
          <h2 className="text-gray-700 mb-2">Ad Səyad</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-gray-700 font-medium">{maskedFullName}</div>
          </div>
        </div>
        
        {/* Amount Section */}
        <div>
          <h2 className="text-gray-700 mb-2">Məbləğ</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-gray-700 font-medium">{amount || '0,01'} AZN</div>
          </div>
        </div>
        
        {/* Commission Section */}
        <div className="flex items-center text-gray-700 mt-4">
          <span className="mr-2">Komissiya yoxdur</span>
          <span className="text-yellow-500">👍</span>
        </div>
        
        {/* Country and Bank */}
        <div className="bg-gray-100 rounded-2xl p-4 mt-6 mb-4 flex items-center">
          <div className="mr-2">
            <span className="text-[16px] mr-1">🇦🇿</span>
          </div>
          <span className="text-gray-700">AZERBAIJAN, KapitalBank</span>
        </div>
      </div>
      
      {/* Bottom Button */}
      <div className="mt-auto">
        <div className="px-6 pb-6">
          <button 
            onClick={handleConfirm}
            disabled={isProcessing}
            className={`w-full py-4 rounded-2xl font-medium ${
              isProcessing ? 'bg-gray-400 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {isProcessing ? 'Emal edilir...' : 'Təsdiq etmək'}
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

export default TransferConfirmation;
