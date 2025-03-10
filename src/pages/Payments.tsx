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
            icon={<img src="https://qebulol.az/wp-content/uploads/2023/12/bk.jpg" alt="BakıKart" className="w-6 h-6" />} 
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
