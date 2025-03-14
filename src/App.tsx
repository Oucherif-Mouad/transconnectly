
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
import { RoleBasedRouter } from "./components/dashboard/RoleBasedRouter";
import { NavigationProvider } from "./components/dashboard/NavigationContext";

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
          
          {/* Dashboard Routes - Wrapped with NavigationProvider */}
          <Route element={<NavigationProvider>
            {/* The element prop should be empty, as NavigationProvider is just a context wrapper */}
            <></>
          </NavigationProvider>}>
            {/* Transport Routes */}
            <Route path="/transporteur" element={<TransportDashboard />} />
            <Route path="/dashboard/vehicles" element={<Vehicles />} />
            <Route path="/dashboard/bookings" element={<Bookings />} />
            <Route path="/dashboard/earnings" element={<Earnings />} />
            
            {/* Client Routes */}
            <Route path="/client" element={<ClientDashboard />} />
            <Route path="/dashboard/invoices" element={<Navigate to="/client" replace />} />
            
            {/* Shared Routes */}
            <Route path="/dashboard" element={<RoleBasedRouter />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
