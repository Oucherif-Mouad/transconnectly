import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import TransportDashboard from "./pages/dashboard/TransportDashboard";
import ClientDashboard from "./pages/dashboard/ClientDashboard";
import Bookings from "./pages/dashboard/Bookings";
import Vehicles from "./pages/dashboard/Vehicles";
import Earnings from "./pages/dashboard/Earnings";
import Settings from "./pages/dashboard/Settings";
import { DashboardRouter } from "./components/dashboard/RoleBasedRouter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/transporteur" element={<TransportDashboard />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/dashboard" element={<Navigate to="/transporteur" replace />} />
          <Route path="/dashboard/bookings" element={<Bookings />} />
          <Route path="/dashboard/vehicles" element={<Vehicles />} />
          <Route path="/dashboard/earnings" element={<Earnings />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
