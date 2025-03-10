
import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import MobileStatusBar from '@/components/MobileStatusBar';

const UmicoPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showRestriction, setShowRestriction] = useState(false);

  const handleConnect = () => {
    setShowRestriction(true);
  };

  const handleCloseRestriction = () => {
    setShowRestriction(false);
    navigate('/app');
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative">
      <MobileStatusBar />
      
      <div className="flex items-center px-4 py-2">
        <button 
          onClick={() => navigate('/app')}
          className="p-2"
        >
          <ArrowLeft className="text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold ml-2">Umico</h1>
      </div>

      <div className="px-4 py-2">
        <p className="text-gray-500 text-lg">
          Artıq UMICO bonuslarınızı Birbankda izləyə bilərsiniz!
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <img
          src="https://birkart.umico.az/images/tild6232-6639-4263-b234-613939376133__main_img.png"
          alt="Umico App Preview"
          className="w-full max-w-sm mx-auto"
        />
      </div>

      <div className="p-4">
        <button
          onClick={handleConnect}
          className="w-full bg-red-500 text-white rounded-xl py-4 text-lg font-medium"
        >
          Başlamaq
        </button>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 text-red-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </div>
          <span className="text-xs mt-1 text-red-500">Əsas</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </div>
          <span className="text-xs mt-1 text-gray-400">Bizdən sizə</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01"/>
            </svg>
          </div>
          <span className="text-xs mt-1 text-gray-400">QR</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <path d="M2 10h20"/>
            </svg>
          </div>
          <span className="text-xs mt-1 text-gray-400">Ödənişlər</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="19" cy="12" r="1"/>
              <circle cx="5" cy="12" r="1"/>
            </svg>
          </div>
          <span className="text-xs mt-1 text-gray-400">Daha çox</span>
        </div>
      </div>

      {/* Restriction Modal */}
      {showRestriction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseRestriction}
          ></div>
          <div className="bg-white rounded-xl p-6 w-11/12 max-w-sm z-10 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Bildiriş</h3>
              <button 
                onClick={handleCloseRestriction}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Bu xidmətə məhdudiyyət qoyulub.</p>
            </div>
            <button
              onClick={handleCloseRestriction}
              className="w-full bg-red-500 text-white rounded-xl py-3 text-md font-medium"
            >
              Bağla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UmicoPage;
