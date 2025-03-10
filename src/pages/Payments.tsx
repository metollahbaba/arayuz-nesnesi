
import React from 'react';
import { Search, ChevronRight, Plus, History, CreditCard, RefreshCw, User, Phone, Globe, Home, Tv } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToHome = () => {
    navigate('/app');
  };

  const goToBankCardTransfer = () => {
    navigate('/bank-card-transfer');
  };
  
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Mobile Status Bar with time */}
      <div className="bg-white text-black p-2 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <span className="font-semibold">11:59</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2l.001 20" />
            <path d="M18 6v.002" />
            <path d="M18 13v.002" />
            <path d="M18 20v.002" />
            <path d="M12 20v.002" />
            <path d="M12 13v.002" />
            <path d="M12 6v.002" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs">4G</span>
          <div className="flex h-3 space-x-0.5">
            <div className="w-1 h-1 bg-black rounded-sm"></div>
            <div className="w-1 h-2 bg-black rounded-sm"></div>
            <div className="w-1 h-3 bg-black rounded-sm"></div>
            <div className="w-1 h-full bg-black rounded-sm"></div>
          </div>
          <div className="flex items-center border border-black rounded-sm px-1 bg-amber-400">
            <span className="text-[10px]">24</span>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-semibold">Əməliyyatlar</h1>
        <button className="flex items-center text-red-500 px-4 py-2 rounded-full border border-red-500">
          <History size={16} className="mr-2" />
          <span>Tarixçə</span>
        </button>
      </div>
      
      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="flex items-center px-4 py-3 bg-gray-100 rounded-lg">
          <Search className="text-gray-400 mr-2" size={20} />
          <span className="text-gray-400">Axtar</span>
        </div>
      </div>
      
      {/* Templates Section */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-500">Şablonlar</h2>
          <button className="text-gray-500 flex items-center">
            <span>Hamısı</span>
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {/* Create Template Button */}
          <div className="flex flex-col items-center min-w-[100px]">
            <div className="w-20 h-20 rounded-full flex items-center justify-center border border-gray-300 mb-2">
              <Plus size={24} className="text-gray-500" />
            </div>
            <span className="text-xs text-center">Şablon yarat</span>
          </div>
        </div>
      </div>
      
      {/* Transfers Section */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-500 mb-4">Köçürmələr</h2>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center" onClick={goToBankCardTransfer}>
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-2 cursor-pointer">
              <div className="text-red-500">
                <CreditCard size={24} />
              </div>
            </div>
            <span className="text-xs text-center">İstənilən bank kartına</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-2">
              <div className="text-red-500">
                <RefreshCw size={24} />
              </div>
            </div>
            <span className="text-xs text-center">Mənim kart və hesablarım arasında</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-2">
              <div className="text-red-500">
                <User size={24} />
              </div>
            </div>
            <span className="text-xs text-center">Birbank müştərisinə köçürmə</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-2">
              <div className="text-green-500 font-bold text-xs">
                <span>ani</span>
                <span>pay</span>
              </div>
            </div>
            <span className="text-xs text-center">AniPay ilə köçürmə</span>
          </div>
        </div>
      </div>
      
      {/* Payment Categories */}
      <div className="px-6 flex-1">
        <h2 className="text-gray-500 mb-4">Ödənişlər</h2>
        
        <div className="space-y-4">
          <PaymentCategory 
            icon={<Phone className="text-red-500" />} 
            title="Mobil operatorlar" 
          />
          
          <PaymentCategory 
            icon={<img src="/lovable-uploads/b818c04f-6542-4d01-98b2-895f008b9704.png" alt="BakıKart" className="w-6 h-6" />} 
            title="BakıKart" 
          />
          
          <PaymentCategory 
            icon={<Home className="text-red-500" />} 
            title="Kommunallar" 
          />
          
          <PaymentCategory 
            icon={<Globe className="text-red-500" />} 
            title="Internet" 
          />
          
          <PaymentCategory 
            icon={<Tv className="text-red-500" />} 
            title="TV" 
          />
          
          <PaymentCategory 
            icon={<Phone className="text-red-500" />} 
            title="Telefon" 
          />
          
          <PaymentCategory 
            icon={<div className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full">
              <span className="text-white text-xs font-bold">K</span>
            </div>} 
            title="Kredit" 
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t flex justify-between items-center px-8 py-2">
        <div className="flex flex-col items-center cursor-pointer" onClick={goToHome}>
          <div className="w-8 h-8 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-xs text-gray-400 mt-1">Əsas</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
          <span className="text-xs text-gray-400 mt-1">Bizdən sizə</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400">
            <span className="font-bold text-sm">QR</span>
          </div>
          <span className="text-xs text-gray-400 mt-1">QR</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <span className="text-xs text-red-500 mt-1">Ödənişlər</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </div>
          <span className="text-xs text-gray-400 mt-1">Daha çox</span>
        </div>
      </div>

      {/* iPhone Home Indicator */}
      <div className="h-20"></div>
      <div className="fixed bottom-0 left-0 right-0 bg-black h-8 flex items-center justify-center space-x-16 max-w-md mx-auto">
        <div className="w-1/3 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

// Payment Category Component
interface PaymentCategoryProps {
  icon: React.ReactNode;
  title: string;
}

const PaymentCategory: React.FC<PaymentCategoryProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center border-b border-gray-100 pb-4">
      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-gray-800 font-medium">{title}</h3>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </div>
  );
};

export default Payments;
