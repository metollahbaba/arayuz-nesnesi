
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
  const navigate = useNavigate();

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
        
        <h1 className="text-2xl font-bold mb-6">Məhsul Detalları</h1>
        
        <div className="bg-gray-100 rounded-xl p-6 mb-4">
          <p className="text-gray-600">
            Bu səhifədə seçilmiş məhsul haqqında ətraflı məlumat göstəriləcək.
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
