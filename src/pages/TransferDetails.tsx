
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Check } from 'lucide-react';
import MobileStatusBar from '../components/MobileStatusBar';

const TransferDetails = () => {
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
  
  const senderCardLast4 = selectedCard?.cardNumber.slice(-4) || '3303';
  const receiverCardLast4 = cardNumber?.slice(-4) || '0730';
  
  const parsedAmount = parseFloat(amount) || 15;
  const initialBalance = parseFloat(selectedCard?.balance) || 173;
  const remainingBalance = (initialBalance - parsedAmount).toFixed(2);
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToHome = () => {
    navigate('/app');
  };
  
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      <MobileStatusBar time="14:16" backgroundColor="bg-gray-50" batteryLevel="70" />
      
      <div className="flex justify-between items-center px-6 py-4">
        <button onClick={goBack} className="text-black">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-medium">Köçürmələr</h1>
        <button className="text-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center mb-6 mt-4 animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
          <Check size={24} className="text-white" />
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold px-6 mb-6 animate-fade-in">Detallar</h2>
      
      <div className="px-6 mb-6 animate-fade-in">
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Qəbz nömrəsi</div>
          <div className="text-gray-900 font-medium">{receiptNumber || "15005060187"}</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Əməliyyat tarixi</div>
          <div className="text-gray-900 font-medium">{transactionDate || "03.02.2025, 17:55"}</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Vəsait silinən kart/hesab</div>
          <div className="text-gray-900 font-medium">****{senderCardLast4}</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Köçürməni alan</div>
          <div className="text-gray-900 font-medium">{formattedName || "PƏ***** S*****"}</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Vəsaiti alan kart/hesab</div>
          <div className="text-gray-900 font-medium">****{receiverCardLast4}</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Kateqoriya</div>
          <div className="text-gray-900 font-medium">Köçürmələr</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Məbləğ</div>
          <div className="text-gray-900 font-medium">{parsedAmount} ₼</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Ödəniş Məbləği</div>
          <div className="text-gray-900 font-medium">{parsedAmount} ₼</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Komissiya</div>
          <div className="text-gray-900 font-medium">0 ₼</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Balans</div>
          <div className="text-blue-500 font-medium">{remainingBalance} ₼</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Təsvir</div>
          <div className="text-gray-900 font-medium">Köçürməni alan • {formattedName || "PƏ***** S*****"}</div>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-200">
          <div className="text-gray-700">Status</div>
          <div className="text-green-500 font-medium">Uğurlu</div>
        </div>
      </div>
      
      <div className="flex flex-col items-end mb-8 px-6">
        <div className="h-12 self-end animate-fade-in bg-transparent">
          {/* Kapital Bank logo as SVG with transparent background */}
          <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="text-brandRed">
            <g fill="#FF3869">
              <path d="M10,8 h15 v5 h-10 v5 h8 v5 h-8 v7 h-5 z" />
              <path d="M28,8 h5 v22 h-5 z" />
              <path d="M38,8 h15 l-10,12 l10,10 h-7 l-8,-10 v10 h-5 v-22 h5 v9 l7,-9 h8 z" />
              <path d="M58,15 a8,8 0 1,1 0,16 a8,8 0 1,1 0,-16 m0,5 a3,3 0 1,0 0,6 a3,3 0 1,0 0,-6" />
              <path d="M70,8 h15 v5 h-10 v4 h8 v4 h-8 v4 h10 v5 h-15 z" />
            </g>
          </svg>
        </div>
      </div>
      
      <div className="px-6 mt-auto mb-4 animate-fade-in">
        <button 
          onClick={goToHome}
          className="w-full py-4 rounded-xl font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Bağla
        </button>
      </div>
      
      <div className="bg-black h-10 flex items-center justify-center">
        <div className="w-1/3 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default TransferDetails;
