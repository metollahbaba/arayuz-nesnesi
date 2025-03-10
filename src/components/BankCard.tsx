
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface BankCardProps {
  bankName: string;
  cardNumber: string;
  balance: string;
}

const BankCard: React.FC<BankCardProps> = ({ bankName, cardNumber, balance = "173 ₼" }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-20 h-12 bg-[#0e1a48] rounded-lg flex flex-col justify-between p-1 mr-3 relative overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="text-white text-[9px] font-bold ml-1">VISA</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="text-white text-xs font-bold self-center mb-0.5">{cardNumber.substring(cardNumber.length - 4)}</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-bold">173 ₼</span>
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
