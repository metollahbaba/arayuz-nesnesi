import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, ChevronDown, Scan } from 'lucide-react';
import BankCard from '../components/BankCard';
import CardSelectionModal from '../components/CardSelectionModal';
import { formatCardNumber, getCardType } from '../lib/utils';
import { getCardsWithBalances } from '../lib/balanceManager';

const BankCardTransfer = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isCardSelectionOpen, setIsCardSelectionOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  
  const [cards, setCards] = useState(getCardsWithBalances());
  
  const [selectedCard, setSelectedCard] = useState(
    cards.reduce((prev, current) => 
      (prev.maxAmount > current.maxAmount) ? prev : current
    )
  );
  
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
    if (!value || parseFloat(value) <= selectedCard.maxAmount) {
      setAmount(value);
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardNumber(formatCardNumber(value));
  };
  
  const handlePresetAmount = (value: string) => {
    const numValue = parseFloat(value);
    if (numValue <= selectedCard.maxAmount) {
      setAmount(value);
    }
  };

  const openCardSelection = () => {
    setIsCardSelectionOpen(true);
  };

  const handleSelectCard = (card: { bankName: string; cardNumber: string; balance: string; minAmount: number; maxAmount: number; hidden: boolean }) => {
    setSelectedCard(card);
    setIsCardSelectionOpen(false);
    
    if (amount && parseFloat(amount) > card.maxAmount) {
      setAmount(card.maxAmount.toString());
    }
  };
  
  const handleConfirm = () => {
    if (cardNumber.length === 19 && amount && parseFloat(amount) >= selectedCard.minAmount && parseFloat(amount) <= selectedCard.maxAmount) {
      navigate('/transfer-confirmation', { 
        state: { 
          selectedCard, 
          cardNumber, 
          amount, 
          fullName 
        } 
      });
    }
  };
  
  const quickAddAmounts = [
    Math.min(10, selectedCard.maxAmount),
    Math.min(20, selectedCard.maxAmount),
    Math.min(50, selectedCard.maxAmount)
  ].filter(amount => amount > 0);
  
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      <div className="flex justify-between items-center px-6 py-4">
        <button onClick={goBack} className="text-black">
          <ChevronLeft size={24} />
        </button>
        <button className="text-black">
          <Info size={24} />
        </button>
      </div>
      
      {/* Page Title */}
      <div className="px-6 mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">İstənilən bank kartına</h1>
      </div>
      
      {/* From Card - Now clickable to open card selection */}
      <div className="px-6 mb-4">
        <h2 className="text-gray-700 mb-2">Ödəmək</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm" onClick={openCardSelection}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-14 h-10 bg-[#0e1a48] rounded-lg flex flex-col justify-between p-1 mr-3 relative overflow-hidden">
                <div className="flex justify-between items-center">
                  <div className="text-white text-[8px] font-bold ml-1">VISA</div>
                </div>
                <div className="text-white text-[10px] font-medium self-center mb-0.5">•{selectedCard.cardNumber}</div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{selectedCard.balance}</span>
                </div>
                <span className="text-gray-400 text-sm">{selectedCard.bankName}</span>
              </div>
            </div>
            <ChevronDown size={20} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* To Card */}
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
              placeholder="Kart nömrəsi"
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
                min={selectedCard.minAmount}
                max={selectedCard.maxAmount}
                step="0.01"
                placeholder="Məbləğ"
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
          <span>Min: {selectedCard.minAmount.toFixed(2)}AZN, Maks: {selectedCard.maxAmount.toFixed(2)}AZN</span>
        </div>
        
        {quickAddAmounts.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {quickAddAmounts.map(value => (
              <button 
                key={value}
                onClick={() => handlePresetAmount(value.toString())}
                className="bg-white rounded-2xl py-3 flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-500 mr-1">+</span>
                <span className="text-gray-700 font-medium">{value}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Bottom Button */}
      <div className="mt-auto px-6 pb-6">
        <button 
          onClick={handleConfirm}
          className={`w-full py-4 rounded-2xl font-medium ${
            cardNumber.length === 19 && amount && parseFloat(amount) >= selectedCard.minAmount && parseFloat(amount) <= selectedCard.maxAmount
              ? 'bg-red-500 text-white'
              : 'bg-red-300 text-white opacity-75'
          }`}
        >
          Davam etmək
        </button>
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

export default BankCardTransfer;
