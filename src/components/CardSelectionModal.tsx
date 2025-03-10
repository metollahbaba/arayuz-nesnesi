
import React from 'react';
import BankCard from './BankCard';
import { X } from 'lucide-react';

interface CardSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCard: (cardInfo: { bankName: string; cardNumber: string; balance: string }) => void;
  cards: Array<{ bankName: string; cardNumber: string; balance: string }>;
  selectedCardNumber?: string;
}

const CardSelectionModal: React.FC<CardSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelectCard,
  cards,
  selectedCardNumber
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col justify-end">
      <div className="bg-white rounded-t-3xl pt-4 pb-6 animate-slide-in-up">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
        
        <div className="px-6">
          <h2 className="text-2xl font-semibold mb-4">Ödəmək</h2>
          
          <div className="space-y-3">
            {cards.map((card) => (
              <div 
                key={card.cardNumber}
                className={`relative ${selectedCardNumber === card.cardNumber ? 'bg-gray-100' : ''} rounded-2xl`}
                onClick={() => onSelectCard(card)}
              >
                <BankCard 
                  bankName={card.bankName}
                  cardNumber={card.cardNumber}
                  balance={card.balance}
                  showArrow={false}
                />
                {selectedCardNumber === card.cardNumber && (
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <X size={16} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSelectionModal;
