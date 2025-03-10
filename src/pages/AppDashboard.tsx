
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, ArrowDown, Home, QrCode, CreditCard, MoreHorizontal, Clock, ArrowUpRight, RefreshCw, Eye, EyeOff } from 'lucide-react';
import visaCardLogo from '../assets/card-visa.jpeg';
import NewProductModal from '@/components/NewProductModal';
import BankCard from '@/components/BankCard';
import { getCardsWithBalances, resetBalances, toggleBalanceVisibility, loadBalanceVisibility } from '@/lib/balanceManager';
import { useToast } from '@/hooks/use-toast';

const AppDashboard = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [cards, setCards] = useState(getCardsWithBalances());
  const [areBalancesHidden, setAreBalancesHidden] = useState(loadBalanceVisibility());
  
  useEffect(() => {
    setCards(getCardsWithBalances());
  }, []);

  const masterCardBalance = cards.find(card => card.cardNumber === '5113')?.balance || "0 ₼";
  const visaCard1Balance = cards.find(card => card.cardNumber === '4444')?.balance || "0 ₼";
  const visaCard2Balance = cards.find(card => card.cardNumber === '3303')?.balance || "0 ₼";

  const navigateToPayments = () => {
    navigate('/payments');
  };
  
  const handleRefreshBalances = () => {
    resetBalances();
    setCards(getCardsWithBalances());
    
    toast({
      title: "Balances refreshed",
      description: "Card balances have been reset to their original values.",
    });
  };
  
  const handleToggleBalanceVisibility = () => {
    const isHidden = toggleBalanceVisibility();
    setAreBalancesHidden(isHidden);
    setCards(getCardsWithBalances());
    
    toast({
      title: isHidden ? "Balances hidden" : "Balances visible",
      description: isHidden ? "Your card balances are now hidden." : "Your card balances are now visible.",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 bg-white p-1">
            <img 
              src="https://i.imgur.com/eqBuyi5.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="w-8 h-8 flex items-center justify-center text-gray-600 cursor-pointer" onClick={handleToggleBalanceVisibility}>
            {areBalancesHidden ? (
              <EyeOff size={24} />
            ) : (
              <Eye size={24} />
            )}
          </div>
        </div>
        
        <div className="relative bg-gray-100 flex-1 mx-4 rounded-full">
          <div className="flex items-center px-4 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">Axtar</span>
          </div>
        </div>
        
        <div className="relative ml-2">
          <img
            src="https://i.ibb.co/xqB5dV7r/Screenshot-2025-03-10-23-35-53-604-az-kapitalbank-mbanking.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
      
      <div className="px-4 pt-3">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center overflow-hidden">
              <img 
                src="https://birbank.az/_next/image?url=https%3A%2F%2Fstrapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com%2F1x1_07d1ccf918.png&w=640&q=75" 
                alt="70% discount" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-xs mt-1">70%-dək</span>
            <span className="text-xs">endirim</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center overflow-hidden">
              <img 
                src="https://birbank.az/_next/image?url=https%3A%2F%2Fstrapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com%2FIMG_7725_c353e152f5.JPG&w=640&q=75" 
                alt="Women's Day Special" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-xs mt-1">Qadınlar</span>
            <span className="text-xs">gününə özəl</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center overflow-hidden">
              <img 
                src="https://cert.az/t/u/image/2024/03/06/sayt-melumat.png" 
                alt="Məlumat" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-xs mt-1">Məlumat</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src="https://www.kommersant.az/media/2020/06/22/icbari.jpg" 
                alt="Insurance" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-xs mt-1">İcbari sığorta</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <span className="text-xs mt-1">Səyahət</span>
            <span className="text-xs">sığortası</span>
          </div>
        </div>
      </div>
      
      <div className="flex px-4 space-x-3 mt-2">
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
          <span className="text-sm font-medium">ƏDV geri al</span>
          <div className="w-5 h-5 flex items-center justify-center ml-1">
            <img 
              src="https://i.ibb.co/BV6rt3VK/indir-1-1.png" 
              alt="EDV Gerial" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center relative">
          <img 
            src="https://cards.birbank.az/assets/images/birbank-cashback-debet.png" 
            alt="Cashback card" 
            className="w-5 h-5 object-contain mr-1" 
          />
          <span className="text-sm font-medium">0</span>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        
        <div 
          className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center cursor-pointer"
          onClick={() => navigate('/umico')}
        >
          <div className="w-5 h-5 flex items-center justify-center mr-1">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqJyzRb0sJsYxzBgDbAP6IlO5Yn7olNQGeg&s" 
              alt="Umico" 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <span className="text-sm font-medium">Umico</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 px-4 mt-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
          <div className="w-8 h-8 flex items-center justify-center mb-2 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
          </div>
          <span className="text-sm">Köçürmələr</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
          <div className="w-8 h-8 flex items-center justify-center mb-2 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>
          <span className="text-sm">Ödənişlər</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
          <div className="w-8 h-8 flex items-center justify-center mb-2 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <span className="text-sm">Tarixçə</span>
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500 font-medium">Kartlar və hesablar</h2>
          <div className="flex items-center">
            <button 
              className="text-green-500 mr-2"
              onClick={handleRefreshBalances}
              aria-label="Refresh balances"
            >
              <RefreshCw size={20} />
            </button>
            <button className="text-red-500">
              <Plus size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="w-20 h-12 bg-red-500 rounded-lg flex items-center justify-between px-2 py-1 mr-3 relative overflow-hidden">
            <div className="flex flex-col items-start">
              <div className="flex space-x-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-1 right-2 text-white text-xs font-bold">5113</div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">{areBalancesHidden ? '••• ₼' : masterCardBalance}</span>
              <span className="text-gray-400 text-xs"></span>
            </div>
            <span className="text-gray-400 text-sm">Mastercard Salary</span>
          </div>
        </div>
      </div>
      
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500 font-medium">Əlavə edilmiş kartlar</h2>
          <button className="text-red-500">
            <Plus size={20} />
          </button>
        </div>
        
        {cards.filter(card => card.cardNumber !== '5113').map(card => (
          <div className="mb-3" key={card.cardNumber}>
            <BankCard 
              bankName={card.bankName}
              cardNumber={card.cardNumber}
              balance={card.balance}
              hidden={areBalancesHidden}
            />
          </div>
        ))}
      </div>
      
      <div className="px-4 mt-8">
        <h2 className="text-lg font-medium mb-4">Bank məhsulları sifariş edin</h2>
        
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-white rounded-full border border-gray-300 font-medium">Kartlar</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Kreditlər</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Depozit</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Sığorta</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Mobil hesablar</button>
        </div>
        
        <div className="mt-4 bg-gray-100 rounded-xl p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium">Yeni kart əlavə et</h3>
              <p className="text-gray-400 text-sm mt-2">Kartları sifariş edin, aktivləşdirin və əlavə edin</p>
            </div>
            <div className="flex items-center">
              <img src="https://birkart.umico.az/images/tild3131-3333-4135-b433-636331303134__2_cards.png" alt="Cards" className="w-20 h-16 object-contain" />
            </div>
          </div>
        </div>
        
        <button 
          className="mt-6 w-full bg-red-500 text-white rounded-xl py-4 flex items-center justify-center"
          onClick={() => setIsProductModalOpen(true)}
        >
          <Plus size={18} className="mr-2" />
          <span>Yeni məhsul əlavə et</span>
        </button>
      </div>
      
      <div className="flex-grow"></div>
      
      <div className="flex justify-between items-center px-4 py-4 border-t">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <Home size={16} className="text-white" />
          </div>
          <span className="text-xs text-red-500 mt-1">Əsas</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7z" />
              <path d="M15 5l4 4" />
            </svg>
          </div>
          <span className="text-xs text-gray-400 mt-1">Bizdən sizə</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <QrCode size={20} className="text-gray-400" />
          </div>
          <span className="text-xs text-gray-400 mt-1">QR</span>
        </div>
        
        <div className="flex flex-col items-center cursor-pointer" onClick={navigateToPayments}>
          <div className="w-8 h-8 flex items-center justify-center">
            <CreditCard size={20} className="text-gray-400" />
          </div>
          <span className="text-xs text-gray-400 mt-1">Ödənişlər</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <MoreHorizontal size={20} className="text-gray-400" />
          </div>
          <span className="text-xs text-gray-400 mt-1">Daha çox</span>
        </div>
      </div>
      
      <div className="bg-black h-14 flex items-center justify-center space-x-16">
        <div className="w-5 h-5 bg-gray-400 rounded"></div>
        <div className="w-12 h-12 border-2 border-gray-400 rounded-full"></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-400"></div>
      </div>
      
      <NewProductModal 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)} 
      />
    </div>
  );
};

export default AppDashboard;
