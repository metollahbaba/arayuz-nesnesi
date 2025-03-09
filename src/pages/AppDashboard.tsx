
import React from 'react';
import { Search, BellRing, Plus, ArrowDown, Home, Scan, QrCode, CreditCard, MoreHorizontal } from 'lucide-react';
import MobileStatusBar from '../components/MobileStatusBar';

const AppDashboard = () => {
  return (
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden">
      <MobileStatusBar />
      
      {/* Header with logo and search */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M4 4h4v16H4V4z" fill="#FF3869" />
            </svg>
          </div>
          <div className="w-8 h-8 flex items-center justify-center text-gray-600">
            <Search size={24} />
          </div>
        </div>
        
        <div className="relative bg-gray-100 flex-1 mx-4 rounded-full">
          <div className="flex items-center px-4 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">Axtar</span>
          </div>
        </div>
        
        <div className="relative">
          <BellRing size={24} className="text-red-500" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
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
                <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">i</div>
              </div>
            </div>
            <span className="text-xs mt-1">Məlumat</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-xs mt-1">Səyahət</span>
            <span className="text-xs">sığortası</span>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-400 rounded-md"></div>
            </div>
            <span className="text-xs mt-1">Trendyol-da 6</span>
            <span className="text-xs">taksit imkanı</span>
          </div>
        </div>
      </div>
      
      {/* Currency rates */}
      <div className="flex px-4 space-x-3 mt-2">
        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
          <span className="text-blue-500 font-bold mr-1">₼</span>
          <span className="text-sm font-medium">0,03</span>
        </div>
        
        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
          <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center mr-1">
            <span className="text-white text-xs">!</span>
          </div>
          <span className="text-sm font-medium">0,09</span>
        </div>
        
        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
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
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-red-500">
              <CreditCard size={14} className="text-red-500" />
            </div>
          </div>
          <span className="text-sm">Köçürmələr</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center mb-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-red-500">
              <CreditCard size={14} className="text-red-500" />
            </div>
          </div>
          <span className="text-sm">Ödənişlər</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center mb-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-red-500">
              <ArrowDown size={14} className="text-red-500 rotate-45" />
            </div>
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
            <Home size={18} className="text-red-500" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold">0</span>
              <span className="text-gray-400 text-xs">₼</span>
            </div>
            <span className="text-gray-400 text-sm">Cari hesab</span>
          </div>
        </div>
        
        {/* Visa card */}
        <div className="flex items-center mb-3">
          <div className="w-14 h-12 bg-blue-400 rounded flex flex-col items-center justify-center mr-3">
            <span className="text-white text-xs font-bold">VISA</span>
            <span className="text-white text-xs font-medium">3516</span>
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
            <Home size={18} className="text-red-500" />
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
            <div>
              <img src="/placeholder.svg" alt="Cards" className="w-16 h-16" />
            </div>
          </div>
        </div>
        
        {/* Add new product button */}
        <button className="mt-6 w-full bg-red-500 text-white rounded-xl py-4 flex items-center justify-center">
          <Plus size={18} className="mr-2" />
          <span>Yeni məhsul əlavə et</span>
        </button>
      </div>
      
      {/* Navigation */}
      <div className="mt-auto flex justify-between items-center px-4 py-4 border-t">
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
        <div className="w-8 h-8 border-2 border-gray-400 rounded-full"></div>
        <div className="w-0 h-0 border-l-8 border-l-transparent border-t-10 border-t-gray-400 border-r-8 border-r-transparent"></div>
      </div>
    </div>
  );
};

export default AppDashboard;
