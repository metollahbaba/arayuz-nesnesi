
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PaymentOptions = () => {
  return (
    <div className="px-4 py-6">
      {/* Payment method buttons */}
      <button className="w-full bg-brandGreen text-black py-3 rounded-md mb-4 font-medium flex items-center justify-center gap-2">
        Şununla öde: <ArrowRight className="w-5 h-5" /> link
      </button>
      
      <div className="text-center text-gray-500 mb-6">
        Ya da kartla ödeyin
      </div>
      
      {/* Email field */}
      <div className="bg-inputGray rounded-md flex items-center mb-4">
        <div className="px-4 py-3">
          <label htmlFor="email" className="text-textGray">E-posta</label>
        </div>
        <input 
          type="email" 
          id="email" 
          defaultValue="discordol23a@gmail..." 
          className="flex-1 bg-transparent py-3 outline-none"
        />
        <button className="text-blue-500 px-4 underline text-sm">
          Link ile Devam Et
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
