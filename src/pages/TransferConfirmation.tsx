
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TransferConfirmation = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Here, you would typically handle the transfer confirmation logic
    // For now, let's just navigate to a success page
    navigate('/transfer-success');
  };

  const handleCancel = () => {
    // Navigate back to the transfer details page or any other appropriate page
    navigate('/transfer-details');
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="bg-gray-100 py-4 px-6">
        <h1 className="text-lg font-semibold">Təsdiqləmə</h1>
      </div>

      <div className="p-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="text-green-500 w-8 h-8" />
          </div>
        </div>

        <div className="mt-6">
          <dl className="divide-y divide-gray-200">
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Alıcı</dt>
              <dd className="text-gray-900">John Doe</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Məbləğ</dt>
              <dd className="text-gray-900">100.00 AZN</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Tarix</dt>
              <dd className="text-gray-900">25.08.2024</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 space-x-4 flex justify-center">
          <Button variant="outline" className="px-6" onClick={handleCancel}>
            Ləğv et
          </Button>
          <Button className="px-6" onClick={handleConfirm}>
            Təsdiqlə
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransferConfirmation;
