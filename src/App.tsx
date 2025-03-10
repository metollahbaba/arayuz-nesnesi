
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PinEntry from "./pages/PinEntry";
import PinVerified from "./pages/PinVerified";
import AppDashboard from "./pages/AppDashboard";
import ProductDetail from "./pages/ProductDetail";
import Payments from "./pages/Payments";
import BankCardTransfer from "./pages/BankCardTransfer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pin" element={<PinEntry />} />
          <Route path="/pin-verified" element={<PinVerified />} />
          <Route path="/app" element={<AppDashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/bank-card-transfer" element={<BankCardTransfer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
