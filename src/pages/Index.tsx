
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to PIN entry page
    navigate('/pin');
  }, [navigate]);
  
  return (
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden items-center justify-center">
      <p>Yönləndirilir...</p>
    </div>
  );
};

export default Index;
