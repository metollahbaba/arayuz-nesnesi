
import React from 'react';
import { ChevronRight, X } from 'lucide-react';
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
              icon={<img src="public/lovable-uploads/57890aa5-22ed-40b2-aaae-6ea8f40638ab.png" alt="Card order" className="w-14 h-14 object-contain" />}
            />
            
            <CategoryItem 
              title="Kartı aktivləşdirin"
              description="Stend və marketlərdən əldə etdiyiniz kartlar üçün"
              icon={
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="w-10 h-14 bg-gray-800 rounded relative">
                    <div className="absolute -right-2 -top-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
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
                <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded">
                  <div className="w-10 h-10 bg-white border border-gray-300 rounded relative">
                    <div className="absolute -right-2 -top-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">+</span>
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
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="w-12 h-10 bg-red-100 rounded-md flex items-center justify-center">
                    <div className="w-8 h-6 bg-red-500 rounded-md relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded"></div>
                    </div>
                  </div>
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
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SIM</span>
                  </div>
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
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👤</span>
                    </div>
                  </div>
                </div>
              }
            />
            
            <CategoryItem 
              title="Səyahət sığortası"
              description="Səyahətinizi onlayn sığortalayın"
              icon={
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center relative">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span>🌐</span>
                    </div>
                    <div className="absolute -right-2 -bottom-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              }
            />
            
            <CategoryItem 
              title="Kasko"
              description="Avtomobilinizi hal-hazırda olduğunuz yerdən sığortalayın"
              icon={
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="w-12 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                    <span>🚗</span>
                  </div>
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
