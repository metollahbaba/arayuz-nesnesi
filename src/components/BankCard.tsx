
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface BankCardProps {
  bankName: string;
  cardNumber: string;
  balance: string;
  showArrow?: boolean;
  hidden?: boolean;
}

const BankCard: React.FC<BankCardProps> = ({ bankName, cardNumber, balance, showArrow = true, hidden = false }) => {
  // Display masked balance when hidden
  const displayBalance = hidden ? '••• ₼' : balance;
  
  // Determine card type and set appropriate styles
  const getCardStyle = () => {
    // Get the first digit of the card number
    const firstDigit = cardNumber.replace(/\D/g, '').charAt(0);
    
    switch(firstDigit) {
      case '4': // Visa
        return {
          background: 'bg-gradient-to-br from-[#0e1a48] to-[#1e3a88]',
          logo: 'VISA',
          textColor: 'text-white',
          logoClass: 'text-[8px] font-bold ml-1'
        };
      case '5': // Mastercard
        return {
          background: 'bg-gradient-to-br from-[#1f1f1f] to-[#383838]',
          logo: 'MC',
          textColor: 'text-white',
          logoClass: 'text-[8px] font-bold ml-1'
        };
      case '3': // Amex
        return {
          background: 'bg-gradient-to-br from-[#108168] to-[#119f7e]',
          logo: 'AMEX',
          textColor: 'text-white',
          logoClass: 'text-[8px] font-bold ml-1'
        };
      default: // Default card
        return {
          background: 'bg-gradient-to-br from-[#444444] to-[#666666]',
          logo: 'CARD',
          textColor: 'text-white',
          logoClass: 'text-[8px] font-bold ml-1'
        };
    }
  };
  
  const cardStyle = getCardStyle();
  
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-14 h-10 ${cardStyle.background} rounded-lg flex flex-col justify-between p-1 mr-3 relative overflow-hidden`}>
            <div className="flex justify-between items-center">
              <div className={`${cardStyle.textColor} ${cardStyle.logoClass}`}>{cardStyle.logo}</div>
            </div>
            <div className={`${cardStyle.textColor} text-[10px] font-medium self-center mb-0.5`}>•{cardNumber}</div>
            {/* Add shine effect to the card */}
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-45" />
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-bold">{displayBalance}</span>
            </div>
            <span className="text-gray-400 text-sm">{bankName}</span>
          </div>
        </div>
        {showArrow && <ChevronDown size={20} className="text-gray-400" />}
      </div>
    </div>
  );
};

export default BankCard;
