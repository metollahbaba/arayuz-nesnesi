
import React from 'react';
import { ChevronDown } from 'lucide-react';
import visaCardImage from '../assets/card-visa.jpeg';

interface BankCardProps {
  bankName: string;
  cardNumber: string;
  balance: string;
}

const BankCard: React.FC<BankCardProps> = ({ bankName, cardNumber, balance }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-8 rounded overflow-hidden mr-3">
            <img 
              src={visaCardImage} 
              alt="VISA Card" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-gray-600">{bankName}</div>
            <div className="text-[10px] text-gray-500 mb-1">{cardNumber}</div>
            <div className="font-medium">{balance}</div>
          </div>
        </div>
        <ChevronDown size={20} className="text-gray-400" />
      </div>
    </div>
  );
};

export default BankCard;
