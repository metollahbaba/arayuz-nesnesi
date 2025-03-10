
import React from 'react';
import { ChevronDown, CreditCard } from 'lucide-react';

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
          <div className="bg-blue-900 w-12 h-8 rounded flex items-center justify-center mr-3 relative overflow-hidden">
            <CreditCard size={16} className="text-white absolute top-1 left-1" />
            <div className="text-white text-xs font-bold">VISA</div>
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
