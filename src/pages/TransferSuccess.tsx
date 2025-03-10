
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, Info, ChevronLeft } from 'lucide-react';
import MobileStatusBar from '../components/MobileStatusBar';

const TransferSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    amount, 
    cardNumber, 
    selectedCard, 
    formattedName, 
    receiptNumber, 
    transactionDate 
  } = location.state || {};
  
  const goToHome = () => {
    navigate('/app');
  };
  
  const goToDetails = () => {
    navigate('/transfer-details', { 
      state: { 
        amount, 
        cardNumber, 
        selectedCard, 
        formattedName, 
        receiptNumber, 
        transactionDate 
      } 
    });
  };
  
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* Mobile Status Bar */}
      <MobileStatusBar time="14:15" backgroundColor="bg-gray-50" batteryLevel="71" />
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="w-8"></div> {/* Empty div for spacing */}
        <h1 className="text-lg font-medium">Köçürmələr</h1>
        <button className="text-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Success Animation & Message */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <Check size={40} className="text-white" />
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uğurlu əməliyyat!</h2>
        
        <div className="text-4xl font-bold mb-4">
          {amount} ₼
        </div>
        
        <div className="text-gray-400 mb-10">
          Köçürmələr
        </div>
      </div>
      
      {/* Details Button */}
      <div className="px-6 mt-auto">
        <button 
          onClick={goToDetails}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-full"
        >
          <Info size={20} className="text-gray-700" />
          <span className="text-gray-700">Detallar</span>
        </button>
        
        <button 
          onClick={goToHome}
          className="w-full py-4 rounded-xl font-medium bg-red-500 text-white mb-4 mt-2"
        >
          Bağla
        </button>
      </div>
      
      {/* iPhone Home Indicator */}
      <div className="bg-black h-10 flex items-center justify-center">
        <div className="w-1/3 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default TransferSuccess;
