import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, ArrowDown, Home, QrCode, CreditCard, MoreHorizontal, Clock, ArrowUpRight, Wifi, Battery } from 'lucide-react';
import visaCardLogo from '../assets/card-visa.jpeg';
import NewProductModal from '@/components/NewProductModal';

const AppDashboard = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const navigate = useNavigate();

  // Generate random balance values
  const masterCardBalance = 85;
  const visaCard1Balance = 34.59;
  const visaCard2Balance = 173;

  const navigateToPayments = () => {
    navigate('/payments');
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col overflow-hidden">
      {/* Mobile Status Bar with time 11:00 */}
      <div className="bg-white text-black p-2 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <span className="font-semibold">11:00</span>
          <Clock size={14} className="text-black" />
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
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
          <Wifi size={14} />
          <div className="flex items-center border border-black rounded-sm px-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-sm mr-0.5"></div>
            <span>31</span>
          </div>
        </div>
      </div>
      
      {/* Header with logo and search */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8">
            <div className="bg-red-500 w-3 h-8"></div>
          </div>
          
          <div className="w-8 h-8 flex items-center justify-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
        
        <div className="relative bg-gray-100 flex-1 mx-4 rounded-full">
          <div className="flex items-center px-4 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">Axtar</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-red-500 text-white w-8 h-8 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 8a8.55 8.55 0 0 1-1.67 5.23c-2.6 3.56-6.33 5.77-10.33 5.77-4 0-7.73-2.21-10.33-5.77A8.55 8.55 0 0 1 2 8c0-4.42 3.58-8 8-8h4c4.42 0 8 3.58 8 8Z" />
              <circle cx="12" cy="8" r="5" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Promotions */}
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
      
      {/* Quick services buttons */}
      <div className="flex px-4 space-x-3 mt-2">
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
          <div className="text-blue-500 font-bold mr-1">
            <ArrowUpRight size={16} className="rotate-180" />
          </div>
          <span className="text-sm font-medium">ƏDV geri al</span>
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
        
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
          <div className="w-5 h-5 bg-pink-500 rounded-sm flex items-center justify-center mr-1">
            <span className="text-white text-xs">U</span>
          </div>
          <span className="text-sm font-medium">Umico</span>
        </div>
      </div>
      
      {/* Quick actions */}
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
      
      {/* Cards and accounts */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500 font-medium">Kartlar və hesablar</h2>
          <button className="text-red-500">
            <Plus size={20} />
          </button>
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
              <span className="font-bold">{masterCardBalance}</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <span className="text-gray-400 text-sm">Mastercard Salary</span>
          </div>
        </div>
      </div>
      
      {/* Added cards section */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500 font-medium">Əlavə edilmiş kartlar</h2>
          <button className="text-red-500">
            <Plus size={20} />
          </button>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="w-20 h-12 bg-[#0e1a48] rounded-lg flex flex-col justify-between p-1 mr-3 relative overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="text-white text-[9px] font-bold ml-1">VISA</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="text-white text-xs font-bold self-center mb-0.5">4444</div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">{visaCard1Balance}</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <span className="text-gray-400 text-sm">Kapital Bank ASC</span>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="w-20 h-12 bg-[#0e1a48] rounded-lg flex flex-col justify-between p-1 mr-3 relative overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="text-white text-[9px] font-bold ml-1">VISA</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="text-white text-xs font-bold self-center mb-0.5">3303</div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">{visaCard2Balance}</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <span className="text-gray-400 text-sm">Kapital Bank ASC</span>
          </div>
        </div>
      </div>
      
      {/* Bank products */}
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
      
      {/* Bottom navigation and footer */}
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
      
      {/* New Product Modal */}
      <NewProductModal 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)} 
      />
    </div>
  );
};

export default AppDashboard;
