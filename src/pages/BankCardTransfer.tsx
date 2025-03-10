import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search, User } from 'lucide-react';
import { getCardsWithBalances } from '@/lib/balanceManager';
import { formatCardNumber, getCardType } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import MobileStatusBar from '@/components/MobileStatusBar';
import CardSelectionModal from '@/components/CardSelectionModal';

const BankCardTransfer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cards, setCards] = useState(getCardsWithBalances());
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isCardSelectionOpen, setIsCardSelectionOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    bankName: string;
    cardNumber: string;
    balance: string;
    minAmount: number;
    maxAmount: number;
    hidden: boolean;
  }>(cards[0]);
  
  useEffect(() => {
    // Reset selected card when cards change
    if (cards.length > 0 && !selectedCard) {
      setSelectedCard(cards[0]);
    }
  }, [cards, selectedCard]);
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, '');
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(value);
    }
  };
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers with up to 2 decimal places
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };
  
  const handleContinue = () => {
    if (!cardNumber || cardNumber.length < 13) {
      toast({
        title: "Invalid card number",
        description: "Please enter a valid card number",
        variant: "destructive",
      });
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }
    
    if (parseFloat(amount) > selectedCard.maxAmount) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough funds for this transfer",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to confirmation page with all the needed data
    navigate('/transfer-confirmation', { 
      state: { 
        cardNumber: formatCardNumber(cardNumber), 
        amount, 
        sourceCard: selectedCard,
        cardType: getCardType(cardNumber)
      } 
    });
  };
  
  const handleOpenCardSelection = () => {
    setIsCardSelectionOpen(true);
  };
  
  const handleSelectCard = (card: { bankName: string; cardNumber: string; balance: string; minAmount: number; maxAmount: number; hidden: boolean }) => {
    setSelectedCard(card);
    setIsCardSelectionOpen(false);
  };
  
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col overflow-hidden">
      <MobileStatusBar time="11:00" batteryLevel="31" />
      
      {/* Header */}
      <div className="px-4 py-2 flex items-center">
        <ChevronLeft 
          className="mr-4 cursor-pointer" 
          onClick={() => navigate(-1)} 
        />
        <h1 className="text-lg font-semibold">Karta köçürmə</h1>
      </div>
      
      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative bg-gray-100 rounded-full">
          <div className="flex items-center px-4 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Axtar"
              className="bg-transparent w-full focus:outline-none text-gray-400"
            />
          </div>
        </div>
      </div>
      
      {/* User Info */}
      <div className="px-4 py-3 flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="text-gray-500" size={24} />
        </div>
        <div>
          <p className="text-gray-600 font-medium">Son köçürmələr</p>
          <p className="text-gray-400 text-sm">Ad soyad</p>
        </div>
      </div>
      
      {/* Card Number Input */}
      <div className="px-4 py-3">
        <label className="block text-sm font-medium text-gray-700">
          Kart nömrəsi
        </label>
        <div className="mt-1">
          <input
            type="tel"
            placeholder="4169 9200 0000 0000"
            className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2"
            value={formatCardNumber(cardNumber)}
            onChange={handleCardNumberChange}
            maxLength={19}
          />
        </div>
      </div>
      
      {/* Amount Input */}
      <div className="px-4 py-3">
        <label className="block text-sm font-medium text-gray-700">
          Məbləğ
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            placeholder="0.00"
            className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2 pr-10"
            value={amount}
            onChange={handleAmountChange}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
            ₼
          </div>
        </div>
      </div>
      
      {/* Select Card */}
      <div className="px-4 py-3">
        <label className="block text-sm font-medium text-gray-700">
          Ödəniş kartı
        </label>
        <div 
          className="mt-1 relative rounded-md shadow-sm cursor-pointer"
          onClick={handleOpenCardSelection}
        >
          <input
            type="text"
            value={`${selectedCard?.bankName} - ${selectedCard?.cardNumber}`}
            className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2 pr-10 cursor-pointer"
            readOnly
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
            <ChevronLeft size={20} className="rotate-180" />
          </div>
        </div>
      </div>
      
      {/* Continue Button */}
      <div className="px-4 py-3">
        <button
          className="w-full bg-red-500 text-white rounded-md py-2 font-medium"
          onClick={handleContinue}
        >
          Davam et
        </button>
      </div>
      
      <CardSelectionModal 
        isOpen={isCardSelectionOpen}
        onClose={() => setIsCardSelectionOpen(false)}
        onSelectCard={handleSelectCard}
        cards={cards}
        selectedCardNumber={selectedCard?.cardNumber}
      />
    </div>
  );
};

export default BankCardTransfer;
