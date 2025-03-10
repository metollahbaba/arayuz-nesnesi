
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface BankCardProps {
  bankName: string;
  cardNumber: string;
  balance: string;
}

const BankCard: React.FC<BankCardProps> = ({ bankName, cardNumber, balance }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-14 h-10 bg-[#0e1a48] rounded-lg flex flex-col justify-between p-1 mr-3 relative overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="text-white text-[8px] font-bold ml-1">VISA</div>
            </div>
            <div className="text-white text-[10px] font-medium self-center mb-0.5">•{cardNumber}</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-bold">{balance}</span>
            </div>
            <span className="text-gray-400 text-sm">{bankName}</span>
          </div>
        </div>
        <ChevronDown size={20} className="text-gray-400" />
      </div>
    </div>
  );
};

export default BankCard;
