import React, { useState } from 'react';
import { 
  Search, ChevronRight, Plus, History, ArrowRight, Phone, Tv, Globe, Home, 
  CreditCard, Database, RefreshCw, User 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToHome = () => {
    navigate('/app');
  };
  
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Mobile Status Bar with time */}
      <div className="bg-white text-black p-2 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <span className="font-semibold">11:33</span>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 7a5 5 0 1 0 5 5" />
            <path d="M17 12h-5" />
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
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12" y2="20" />
          </svg>
          <div className="flex items-center border border-black rounded-sm px-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-sm mr-0.5"></div>
            <span>82</span>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Əməliyyatlar</h1>
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
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-2">
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
              <div className="text-green-500 font-bold">
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
            icon={
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                  <path d="M17.5 6.5c.5 2 .5 4 0 6" />
                  <path d="M20.5 3.5c1.5 3.2 1.5 6.8 0 10" />
                  <path d="M3.1 10.6c.4.5.8.9 1.4 1.1" />
                  <path d="M2 12.5v-1a5 5 0 0 1 5-5c.5 0 .9.1 1.4.3" />
                  <path d="M8 20.5H7A2.5 2.5 0 0 1 4.5 18" />
                  <path d="M16 20.5h-1.5a4 4 0 0 1-4-4v-3a3 3 0 0 1 3-3h1" />
                  <path d="M20.5 16.5v-4h-4v4Z" />
                  <path d="M8 8.5v9" />
                  <path d="M12 12.5v5" />
                </svg>
              </div>
            } 
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
            icon={<Database className="text-red-500" />} 
            title="Kredit" 
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="flex justify-between items-center px-4 py-4 border-t mt-8">
        <div className="flex flex-col items-center cursor-pointer" onClick={goToHome}>
          <div className={`w-8 h-8 flex items-center justify-center text-gray-400`}>
            <Home size={20} />
          </div>
          <span className={`text-xs text-gray-400 mt-1`}>Əsas</span>
        </div>
        <NavItem icon={<ArrowRight size={20} />} label="Bizdən sizə" />
        <NavItem icon={
          <div className="w-8 h-8 flex items-center justify-center rounded-full">
            <span className="font-bold">QR</span>
          </div>
        } label="QR" />
        <NavItem 
          icon={<CreditCard size={20} />} 
          label="Ödənişlər" 
          active 
        />
        <NavItem icon={
          <div className="w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
            </svg>
          </div>
        } label="Daha çox" />
      </div>

      {/* iPhone Home Indicator */}
      <div className="bg-black h-8 flex items-center justify-center space-x-16">
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

// Navigation Item Component
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-8 h-8 flex items-center justify-center ${active ? 'text-red-500' : 'text-gray-400'}`}>
        {icon}
      </div>
      <span className={`text-xs mt-1 ${active ? 'text-red-500' : 'text-gray-400'}`}>{label}</span>
    </div>
  );
};

export default Payments;
