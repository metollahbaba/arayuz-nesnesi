
import React from 'react';
import { ChevronRight, X, CreditCard, Banknote, Smartphone, Shield, Plus, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProductModal: React.FC<NewProductModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-t-3xl absolute bottom-0 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Yeni məhsul əlavə et</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <X size={24} />
            </button>
          </div>
          
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          
          {/* Categories tabs */}
          <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
            <button className="px-6 py-3 bg-red-500 text-white rounded-full whitespace-nowrap">
              Hamısı
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Kartlar
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Kreditlər
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Mobil hesablar
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Sığorta
            </button>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Kartlar</h3>
          
          {/* Card options */}
          <div className="space-y-4">
            <CategoryItem 
              title="Kartı sifariş edin"
              description="Birbank kartlarının üstünlüklərindən yararlanlın və ödənişlərinizdən bonuslar qazanın"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-xl">
                  <CreditCard size={28} className="text-red-500" />
                </div>
              }
            />
            
            <CategoryItem 
              title="Kartı aktivləşdirin"
              description="Stend və marketlərdən əldə etdiyiniz kartlar üçün"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl">
                  <div className="relative">
                    <CreditCard size={28} className="text-gray-700" />
                    <div className="absolute -right-2 -top-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <ExternalLink size={12} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            
            <CategoryItem 
              title="Kartı əlavə et"
              description="İstənilən yerli bankın kartlarını əlavə edin, balanslarını daha rahat artırın, ödəniş və köçürmələr edin"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl">
                  <div className="relative">
                    <CreditCard size={28} className="text-gray-700" />
                    <div className="absolute -right-2 -top-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <Plus size={12} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Kreditlər</h3>
          
          {/* Credit options */}
          <div className="space-y-4">
            <CategoryItem 
              title="Nağd pul krediti"
              description="30 000 ₼-dək, komissiyasız, tamamılə onlayn"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-xl">
                  <Banknote size={28} className="text-red-500" />
                </div>
              }
            />
          </div>
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Mobil hesablar</h3>
          
          {/* Mobile accounts options */}
          <div className="space-y-4">
            <CategoryItem 
              title="Nar və Bakcell nömrələrini əlavə edin"
              description="Nömrənizi Birbank-a əlavə edin, balansınızı izləyin və artırın"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-xl">
                  <Smartphone size={28} className="text-red-500" />
                </div>
              }
            />
          </div>
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Sığorta</h3>
          
          {/* Insurance options */}
          <div className="space-y-4">
            <CategoryItem 
              title="Həyatın yaşam sığortası"
              description="Əməkhaqqınızdan əlavə gəlir qazanın"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-xl">
                  <Shield size={28} className="text-red-500" />
                </div>
              }
            />
            
            <CategoryItem 
              title="Səyahət sığortası"
              description="Səyahətinizi onlayn sığortalayın"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              }
            />
            
            <CategoryItem 
              title="Kasko"
              description="Avtomobilinizi hal-hazırda olduğunuz yerdən sığortalayın"
              icon={
                <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for category items
interface CategoryItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-xl">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};

export default NewProductModal;
