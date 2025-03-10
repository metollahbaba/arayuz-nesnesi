
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, CreditCard, Banknote, Smartphone, Shield } from 'lucide-react';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Get icon and title based on product type
  const getProductInfo = () => {
    switch(id) {
      case 'card-order':
        return { 
          title: 'Kartı sifariş edin', 
          description: 'Birbank kartlarının üstünlüklərindən yararlanlın və ödənişlərinizdən bonuslar qazanın',
          icon: <CreditCard size={64} className="text-red-500" />
        };
      case 'card-activate':
        return { 
          title: 'Kartı aktivləşdirin', 
          description: 'Stend və marketlərdən əldə etdiyiniz kartlar üçün',
          icon: <CreditCard size={64} className="text-gray-700" />
        };
      case 'credit':
        return { 
          title: 'Nağd pul krediti', 
          description: '30 000 ₼-dək, komissiyasız, tamamılə onlayn',
          icon: <Banknote size={64} className="text-red-500" />
        };
      case 'mobile':
        return { 
          title: 'Mobil hesablar', 
          description: 'Nömrənizi Birbank-a əlavə edin, balansınızı izləyin və artırın',
          icon: <Smartphone size={64} className="text-red-500" />
        };
      case 'insurance':
        return { 
          title: 'Sığorta', 
          description: 'Həyatınızı, avtomobilinizi və səyahətlərinizi sığortalayın',
          icon: <Shield size={64} className="text-red-500" />
        };
      default:
        return { 
          title: 'Məhsul Detalları', 
          description: 'Bu səhifədə seçilmiş məhsul haqqında ətraflı məlumat göstəriləcək.',
          icon: <CreditCard size={64} className="text-red-500" />
        };
    }
  };

  const { title, description, icon } = getProductInfo();

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="p-4">
        <button 
          onClick={() => navigate('/app')}
          className="mb-4 flex items-center text-gray-700"
        >
          <ChevronLeft size={20} />
          <span>Geri</span>
        </button>
        
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        
        <div className="bg-gray-100 rounded-xl p-6 mb-4 flex items-center">
          <div className="mr-4 w-16 h-16 flex items-center justify-center bg-white rounded-xl">
            {icon}
          </div>
          <p className="text-gray-600 flex-1">
            {description}
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/app')}
          className="w-full bg-red-500 text-white rounded-xl py-4"
        >
          Əsas səhifəyə qayıt
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
