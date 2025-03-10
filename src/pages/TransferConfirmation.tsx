
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, QrCode } from 'lucide-react';
import MobileStatusBar from '../components/MobileStatusBar';
import { formatUserName } from '../lib/utils';
import CardSelectionModal from '../components/CardSelectionModal';
import { getCardsWithBalances, updateCardBalance } from '../lib/balanceManager';
import { useToast } from '@/hooks/use-toast';

const TransferConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCard: initialCard, cardNumber, amount } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [isCardSelectionOpen, setIsCardSelectionOpen] = useState(false);
  const { toast } = useToast();
  
  // Define all available cards from the balance manager
  const [cards, setCards] = useState(getCardsWithBalances());
  
  // Set selected card state
  const [selectedCard, setSelectedCard] = useState(initialCard || cards.find(card => card.cardNumber === '3303') || cards[0]);
  
  // Check if card ends with 0730 and set default name
  useEffect(() => {
    if (cardNumber && cardNumber.trim().endsWith('0730')) {
      setNameInput('PƏS');
    }
  }, [cardNumber]);
  
  // Format the name
  const formattedName = nameInput ? formatUserName(nameInput) : '';
  
  const goBack = () => {
    navigate('/bank-card-transfer');
  };
  
  const handleConfirm = () => {
    setIsProcessing(true);
    
    // Get the final amount to transfer (as a number)
    const transferAmount = amount && parseFloat(amount) <= selectedCard.maxAmount 
      ? parseFloat(amount) 
      : selectedCard.minAmount;
    
    // Update the card balance
    updateCardBalance(selectedCard.cardNumber, transferAmount);
    
    // Show success toast
    toast({
      title: "Transfer successful",
      description: `${transferAmount} ₼ has been sent to ${cardNumber}`,
    });
    
    // Simulate processing and then go to dashboard
    setTimeout(() => {
      navigate('/app');
    }, 2000);
  };
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Limit input to maximum 3 characters
    if (e.target.value.length <= 3) {
      setNameInput(e.target.value);
    }
  };
  
  const openCardSelection = () => {
    setIsCardSelectionOpen(true);
  };

  const handleSelectCard = (card: { bankName: string; cardNumber: string; balance: string; minAmount: number; maxAmount: number; hidden: boolean }) => {
    setSelectedCard(card);
    setIsCardSelectionOpen(false);
  };
  
  // Quick add amount buttons - adjust based on card balance
  const quickAddAmounts = [
    Math.min(10, selectedCard.maxAmount),
    Math.min(20, selectedCard.maxAmount),
    Math.min(50, selectedCard.maxAmount)
  ].filter(amount => amount > 0);
  
  // Determine card type based on the card number
  const getCardType = (cardNumber: string) => {
    // Get the first digit of the card number
    const firstDigit = cardNumber.replace(/\D/g, '').charAt(0);
    
    if (firstDigit === '4') return 'visa';
    if (firstDigit === '5') return 'mastercard';
    return 'visa'; // Default to visa
  };
  
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* Mobile Status Bar */}
      <MobileStatusBar time="12:10" backgroundColor="bg-gray-50" batteryLevel="91" />
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <button onClick={goBack} className="text-black">
          <ChevronLeft size={24} />
        </button>
        <button className="text-black float-right">
          <Info size={24} />
        </button>
      </div>
      
      {/* Page Title */}
      <div className="px-6 mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">İstənilən bank kartına</h1>
      </div>
      
      {/* From Card - Now clickable to open card selection */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-600 text-base mb-2">Ödəmək</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center" onClick={openCardSelection}>
          <div className="flex-shrink-0 mr-4">
            <div className={`${getCardType(selectedCard.cardNumber) === 'visa' ? 'bg-gradient-to-br from-[#0e1a48] to-[#1e3a88]' : 'bg-gradient-to-br from-[#1f1f1f] to-[#383838]'} w-14 h-10 rounded-md flex items-center justify-center relative overflow-hidden`}>
              <div className="text-white text-[8px] font-bold">
                {getCardType(selectedCard.cardNumber) === 'visa' ? 'VISA' : 'MC'}
              </div>
              <div className="text-white text-[10px] font-medium absolute bottom-1 self-center">
                •{selectedCard.cardNumber}
              </div>
              {/* Add shine effect to the card */}
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-45" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="text-gray-500">{selectedCard.bankName}</div>
            <div className="font-medium">{selectedCard.hidden ? '••• ₼' : selectedCard.balance}</div>
          </div>
          <div className="flex-shrink-0 ml-2">
            <ChevronLeft size={20} className="transform rotate-180 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* To Card */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-600 text-base mb-2">Mədaxil etmək</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-xs text-gray-400 mb-1">Kart nömrəsi</div>
          <div className="text-gray-700 text-lg font-medium flex justify-between items-center">
            <span>{cardNumber || '4169 7388 4327 4444'}</span>
            <button className="p-1 text-gray-500">
              <QrCode size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Transfer Details */}
      <div className="px-6 mb-5">
        <h2 className="text-gray-600 text-base mb-2">Köçürmənin detalları</h2>
        <div className="flex gap-3 mb-3">
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex-grow">
            <div className="text-xs text-gray-400 mb-1">Məbləğ</div>
            <div className="text-gray-700 text-lg font-medium">
              {amount && parseFloat(amount) <= selectedCard.maxAmount ? amount : selectedCard.minAmount.toFixed(2)}
            </div>
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
        <div className="flex items-center mb-4 text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span>Min: {selectedCard.minAmount.toFixed(2)}AZN, Maks: {selectedCard.maxAmount.toFixed(2)}AZN</span>
        </div>
        
        {/* Quick Amount Buttons - Only show buttons that are less than or equal to max amount */}
        {quickAddAmounts.length > 0 && (
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
        )}
      </div>
      
      {/* Name Section - Now shown as text with a bottom border */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-500 text-base mb-2">Ad Soyad</h2>
        <div>
          {/* Hidden input for mobile keyboard functionality */}
          <input
            type="text"
            value={nameInput}
            onChange={handleNameChange}
            className="opacity-0 absolute -left-[9999px]"
            maxLength={3}
            ref={inputRef}
          />
          {/* Display as text with border bottom */}
          <div 
            className="text-gray-900 text-lg font-medium pb-1 border-b border-gray-200 min-h-[1.75rem]"
            onClick={() => inputRef.current?.focus()}
          >
            {formattedName}
          </div>
        </div>
      </div>
      
      {/* Amount Display */}
      <div className="px-6 mb-2">
        <h2 className="text-gray-500 text-base mb-2">Məbləğ</h2>
        <div className="text-xl font-semibold text-gray-900">
          {amount && parseFloat(amount) <= selectedCard.maxAmount ? amount : selectedCard.minAmount.toFixed(2)} AZN
        </div>
      </div>
      
      {/* Commission Section */}
      <div className="px-6 flex items-center text-gray-500 mb-6 border-b border-gray-200 pb-6">
        <span className="mr-2">Komissiya yoxdur</span>
        <span className="text-yellow-500">👍</span>
      </div>
      
      {/* Country and Bank */}
      <div className="px-6 mb-6">
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
      
      {/* Card Selection Modal */}
      <CardSelectionModal 
        isOpen={isCardSelectionOpen}
        onClose={() => setIsCardSelectionOpen(false)}
        onSelectCard={handleSelectCard}
        cards={cards}
        selectedCardNumber={selectedCard.cardNumber}
      />
    </div>
  );
};

export default TransferConfirmation;
