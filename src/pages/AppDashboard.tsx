
import React from 'react';
import MobileStatusBar from '../components/MobileStatusBar';
import MobileNavBar from '../components/MobileNavBar';

const AppDashboard = () => {
  return (
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden">
      <MobileStatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Ana Səhifə</h1>
        <p className="mt-4">Uğurla giriş etdiniz!</p>
      </div>
      
      <MobileNavBar />
    </div>
  );
};

export default AppDashboard;
