
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

// Import pages
import Index from './pages/Index';
import AppDashboard from './pages/AppDashboard';
import NotFound from './pages/NotFound';
import PinEntry from './pages/PinEntry';
import ProductDetail from './pages/ProductDetail';
import PinVerified from './pages/PinVerified';
import Payments from './pages/Payments';
import BankCardTransfer from './pages/BankCardTransfer';
import TransferConfirmation from './pages/TransferConfirmation';
import TransferSuccess from './pages/TransferSuccess';
import TransferDetails from './pages/TransferDetails';
import UmicoPage from './pages/UmicoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app" element={<AppDashboard />} />
        <Route path="/pin" element={<PinEntry />} />
        <Route path="/pin-verified" element={<PinVerified />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/bank-card-transfer" element={<BankCardTransfer />} />
        <Route path="/transfer-confirmation" element={<TransferConfirmation />} />
        <Route path="/transfer-success" element={<TransferSuccess />} />
        <Route path="/transfer-details" element={<TransferDetails />} />
        <Route path="/umico" element={<UmicoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
