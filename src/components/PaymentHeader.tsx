
import React from 'react';
import { Check } from 'lucide-react';

const PaymentHeader = () => {
  return (
    <div className="relative bg-brandRed text-white py-8 px-4">
      {/* Logo */}
      <div className="absolute left-4 top-8">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-8 bg-brandRed rounded-r-full"></div>
        </div>
      </div>
      
      {/* Hit Detected indicator */}
      <div className="absolute right-4 top-8">
        <div className="bg-green-600/80 text-white px-4 py-3 rounded-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span className="font-medium">Hit Detected</span>
          </div>
        </div>
      </div>
      
      {/* Subscription info */}
      <div className="text-center mt-8">
        <p className="text-xl">Starter Plan ürününe abone olun</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-5xl font-bold">$9,99</span>
          <span className="ml-2 text-lg">ayda bir</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentHeader;
