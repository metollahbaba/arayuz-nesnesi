
import React from 'react';
import { Search, BellRing, Plus, ArrowDown, Home, Scan, QrCode, CreditCard, MoreHorizontal, Clock } from 'lucide-react';
import MobileStatusBar from '../components/MobileStatusBar';

const AppDashboard = () => {
  return (
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden">
      {/* Mobile Status Bar with time 3:10 */}
      <div className="bg-white text-black p-2 flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <span>3:10</span>
          <Clock size={14} className="text-black" />
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v4h3v-4h4v4h3v-4" />
          </svg>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex h-3">
            <div className="w-1 h-full bg-black rounded-sm"></div>
            <div className="w-1 h-full bg-black rounded-sm ml-0.5"></div>
            <div className="w-1 h-full bg-black rounded-sm ml-0.5"></div>
            <div className="w-1 h-full bg-black rounded-sm ml-0.5"></div>
          </div>
          <div className="flex h-3 ml-1">
            <div className="w-1 h-full bg-black rounded-sm"></div>
            <div className="w-1 h-full bg-black rounded-sm ml-0.5"></div>
            <div className="w-1 h-full bg-black rounded-sm ml-0.5"></div>
            <div className="w-1 h-full bg-black rounded-sm ml-0.5"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.81 10.13a4 4 0 0 0 0 5.74" />
            <path d="M3.52 7.52a8 8 0 0 0 0 10.96" />
            <path d="M10.09 5.23a11.92 11.92 0 0 1 0 15.54" />
            <path d="M13.38 2.52c4.42 4.42 4.42 11.54 0 15.96" />
          </svg>
          <div className="ml-1 flex items-center justify-center rounded-sm px-1 border border-black">
            <span>31</span>
          </div>
        </div>
      </div>
      
      {/* Header with logo and search */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <rect width="6" height="16" x="4" y="4" fill="#FF3869" />
            </svg>
          </div>
          <div className="w-8 h-8 flex items-center justify-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4" y1="12" x2="2" y2="12" />
              <line x1="22" y1="12" x2="20" y2="12" />
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
          <div className="bg-red-500 text-white w-6 h-6 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Promotions */}
      <div className="px-4 pt-3">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center">
              <img src="public/lovable-uploads/a9b5730b-173f-4199-8c1d-4f3906c1530d.png" alt="Woman" className="w-10 h-10 object-cover" />
            </div>
            <span className="text-xs mt-1">70%-dək</span>
            <span className="text-xs">endirim</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center">
              <img src="public/lovable-uploads/de1cdfcc-6687-4842-a102-85c6fa294a4c.png" alt="Gift" className="w-10 h-10 object-cover" />
            </div>
            <span className="text-xs mt-1">Qadınlar</span>
            <span className="text-xs">gününə özəl</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">i</span>
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">i</div>
              </div>
            </div>
            <span className="text-xs mt-1">Məlumat</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xs mt-1">Səyahət</span>
            <span className="text-xs">sığortası</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center relative">
                <span className="text-gray-500 font-bold text-xl">6</span>
              </div>
            </div>
            <span className="text-xs mt-1">Trendyol-da 6</span>
            <span className="text-xs">taksit imkanı</span>
          </div>
        </div>
      </div>
      
      {/* Currency rates */}
      <div className="flex px-4 space-x-3 mt-2">
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
          <span className="text-blue-500 font-bold mr-1">₼</span>
          <span className="text-sm font-medium">0,03</span>
        </div>
        
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
          <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center mr-1">
            <span className="text-white text-xs">!</span>
          </div>
          <span className="text-sm font-medium">0,09</span>
        </div>
        
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mr-1">
            <span className="text-white text-xs">≡</span>
          </div>
          <span className="text-sm font-medium">0,19</span>
        </div>
      </div>
      
      {/* Quick actions */}
      <div className="grid grid-cols-3 gap-3 px-4 mt-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF3869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
          </div>
          <span className="text-sm">Köçürmələr</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF3869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>
          <span className="text-sm">Ödənişlər</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF3869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <polyline points="23 20 23 14 17 14" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
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
        
        {/* Card entry */}
        <div className="flex items-center mb-3">
          <div className="w-14 h-12 bg-gray-100 rounded flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">0</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <span className="text-gray-400 text-sm">Cari hesab</span>
          </div>
        </div>
        
        {/* Visa card - Using the uploaded image */}
        <div className="flex items-center mb-3">
          <div className="w-14 h-12 bg-blue-400 rounded flex flex-col items-center justify-center mr-3">
            <img 
              src="public/lovable-uploads/e6bc68d6-d5d3-4d17-873d-5b38caa1f5e9.png" 
              alt="VISA" 
              className="w-12 h-8 object-contain" 
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">0</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <span className="text-gray-400 text-sm">Visa Electron Salary</span>
          </div>
        </div>
        
        {/* Card account */}
        <div className="flex items-center mb-1">
          <div className="w-14 h-12 bg-gray-100 rounded flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold text-red-500">-441,09</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <span className="text-gray-400 text-sm">Kart hesabı</span>
          </div>
        </div>
        
        {/* Show more button */}
        <button className="flex items-center justify-center w-full mt-2 text-gray-500 text-sm">
          <ArrowDown size={16} className="mr-1" />
          <span>Daha çox göstər</span>
        </button>
      </div>
      
      {/* Credits section */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500 font-medium">Kreditlər və kredit xəttləri</h2>
          <button className="text-red-500">
            <Plus size={20} />
          </button>
        </div>
        
        {/* Credit card */}
        <div className="flex items-center mb-3">
          <div className="w-14 h-12 bg-gray-100 rounded flex items-center justify-center mr-3">
            <div className="w-6 h-4 border border-red-500 rounded-sm"></div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">452,80</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 text-sm">BirKart Taksit</span>
              <span className="text-gray-400 mx-1">•</span>
              <span className="text-gray-400 text-sm">0</span>
              <span className="text-gray-400 text-xs ml-1">₼</span>
            </div>
          </div>
        </div>
        
        {/* Daily credit */}
        <div className="flex items-center">
          <div className="w-14 h-12 bg-gray-100 rounded flex items-center justify-center mr-3">
            <div className="text-red-500 text-lg font-bold">%</div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">229,52</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 text-sm">Gündəlik tələbat krediti</span>
              <span className="text-gray-400 mx-1">•</span>
              <span className="text-gray-400 text-sm">2 060</span>
              <span className="text-gray-400 text-xs ml-1">₼</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile numbers */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500 font-medium">Mobil nömrələr</h2>
          <button className="text-red-500">
            <Plus size={20} />
          </button>
        </div>
        
        {/* Nar number */}
        <div className="flex items-center">
          <div className="w-14 h-12 bg-gray-100 rounded flex items-center justify-center mr-3">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">nar</span>
            </div>
          </div>
          <div className="flex-1">
            <span className="font-medium">Nar</span>
            <span className="block text-gray-400 text-sm">+994 77 314 81 51</span>
          </div>
        </div>
      </div>
      
      {/* Bank products */}
      <div className="px-4 mt-8">
        <h2 className="text-lg font-medium mb-4">Bank məhsulları sifariş edin</h2>
        
        {/* Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-white rounded-full border border-gray-300 font-medium">Kartlar</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Kreditlər</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Depozit</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Sığorta</button>
          <button className="px-4 py-2 bg-transparent rounded-full text-gray-400">Mobil hesablar</button>
        </div>
        
        {/* Add new card */}
        <div className="mt-4 bg-gray-100 rounded-xl p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium">Yeni kart əlavə et</h3>
              <p className="text-gray-400 text-sm mt-2">Kartları sifariş edin, aktivləşdirin və əlavə edin</p>
            </div>
            <div className="flex items-center">
              <img src="public/lovable-uploads/5dcef620-b471-48b9-ad95-dcc1bc3efdb6.png" alt="Cards" className="w-16 h-16 object-contain" />
            </div>
          </div>
        </div>
        
        {/* Add new product button */}
        <button className="mt-6 w-full bg-red-500 text-white rounded-xl py-4 flex items-center justify-center">
          <Plus size={18} className="mr-2" />
          <span>Yeni məhsul əlavə et</span>
        </button>
      </div>
      
      {/* Fixed height spacer to push navigation to bottom */}
      <div className="flex-grow"></div>
      
      {/* Navigation */}
      <div className="flex justify-between items-center px-4 py-4 border-t">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <Home size={16} className="text-white" />
          </div>
          <span className="text-xs text-red-500 mt-1">Əsas</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <Scan size={20} className="text-gray-400" />
          </div>
          <span className="text-xs text-gray-400 mt-1">Bizdən sizə</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <QrCode size={20} className="text-gray-400" />
          </div>
          <span className="text-xs text-gray-400 mt-1">QR</span>
        </div>
        
        <div className="flex flex-col items-center">
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
      
      {/* Bottom navigation bar (for Android) */}
      <div className="bg-black h-14 flex items-center justify-center space-x-16">
        <div className="w-5 h-5 bg-gray-400 rounded"></div>
        <div className="w-12 h-12 border-2 border-gray-400 rounded-full"></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-400"></div>
      </div>
    </div>
  );
};

export default AppDashboard;
