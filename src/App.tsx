import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OfDiagnostico from "./pages/OfDiagnostico";
import DiagnosticoForm from "./pages/DiagnosticoForm";
import CheckoutDiagnostico from "./pages/CheckoutDiagnostico";
import Diagnostico from "./pages/Diagnostico";
import CheckoutManual from "./pages/CheckoutManual";
import ManualPg from "./pages/ManualPg";
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
          <Route path="/ofdiagnostico" element={<OfDiagnostico />} />
          <Route path="/diagnosticoform" element={<DiagnosticoForm />} />
          <Route path="/checkoutdiagnostico" element={<CheckoutDiagnostico />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/checkoutmanual" element={<CheckoutManual />} />
          <Route path="/manualpg" element={<ManualPg />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
