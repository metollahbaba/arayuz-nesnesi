
import React from 'react';
import { Check } from 'lucide-react';

const CardForm = () => {
  return (
    <div className="px-4">
      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2">Kart bilgileri</p>
        <div className="bg-inputGray rounded-md flex items-center mb-3">
          <input 
            type="text" 
            placeholder="Kart numarası" 
            defaultValue="4169 7388 2455 3303"
            className="flex-1 bg-transparent py-4 px-4 outline-none"
          />
          <div className="px-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="w-10 h-6 object-contain" />
          </div>
        </div>
        
        <div className="flex gap-3">
          <div className="bg-inputGray rounded-md flex-1">
            <input 
              type="text" 
              placeholder="MM / YY" 
              defaultValue="07 / 26"
              className="w-full bg-transparent py-4 px-4 outline-none"
            />
          </div>
          <div className="bg-inputGray rounded-md flex-1 relative">
            <input 
              type="text" 
              placeholder="CVC" 
              defaultValue="000"
              className="w-full bg-transparent py-4 px-4 outline-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs">MC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2">Kart sahibinin adı</p>
        <div className="bg-inputGray rounded-md">
          <input 
            type="text" 
            placeholder="Ad Soyad" 
            defaultValue="metollah"
            className="w-full bg-transparent py-4 px-4 outline-none"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700 font-medium mb-2">Ülke veya bölge</p>
        <div className="bg-inputGray rounded-md">
          <input 
            type="text" 
            defaultValue="Azerbaycan"
            className="w-full bg-transparent py-4 px-4 outline-none"
          />
        </div>
      </div>
      
      <button className="w-full bg-brandGreen text-white py-4 rounded-md mb-6 font-medium flex items-center justify-center">
        <Check className="w-6 h-6" />
      </button>
      
      <p className="text-gray-500 text-center text-sm px-4 mb-4">
        Aboneliğinizi teyit ederek, TRTW Platform tarafından hesabınızdan kendi koşulları uyarınca gelecekteki ödemeler için tahsilat yapılmasına izin vermektesiniz. Aboneliğinizi dilediğiniz zaman iptal edebilirsiniz.
      </p>
      
      <div className="text-center mb-6">
        <p className="text-gray-400 text-sm">
          <span className="font-light">stripe</span> tarafından desteklenmektedir
        </p>
      </div>
      
      <div className="flex justify-center gap-6 text-gray-500 text-sm mb-6">
        <a href="#" className="underline">Koşullar</a>
        <a href="#" className="underline">Gizlilik</a>
      </div>
    </div>
  );
};

export default CardForm;
