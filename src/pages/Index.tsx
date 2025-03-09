
import React from 'react';
import MobileStatusBar from '../components/MobileStatusBar';
import PaymentHeader from '../components/PaymentHeader';
import PaymentOptions from '../components/PaymentOptions';
import CardForm from '../components/CardForm';
import MobileNavBar from '../components/MobileNavBar';

const Index = () => {
  return (
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden">
      {/* Mobile phone simulation */}
      <MobileStatusBar />
      
      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <PaymentHeader />
        <PaymentOptions />
        <CardForm />
      </div>
      
      {/* Bottom navigation */}
      <MobileNavBar />
    </div>
  );
};

export default Index;
