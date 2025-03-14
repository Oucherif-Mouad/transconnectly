
import React, { createContext, useContext, useState, useEffect } from 'react';
import { LayoutDashboard, CalendarCheck, Truck, Wallet, Settings, Receipt } from 'lucide-react';

// Navigation items for each role
const transportNavigation = [
  { name: 'Tableau de Bord', href: '/transporteur', icon: LayoutDashboard },
  { name: 'Véhicules', href: '/dashboard/vehicles', icon: Truck },
  { name: 'Réservations', href: '/dashboard/bookings', icon: CalendarCheck },
  { name: 'Revenus', href: '/dashboard/earnings', icon: Wallet },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
];

const clientNavigation = [
  { name: 'Tableau de Bord', href: '/client', icon: LayoutDashboard },
  { name: 'Réservations', href: '/dashboard/bookings', icon: CalendarCheck },
  { name: 'Factures', href: '/dashboard/invoices', icon: Receipt },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
];

// Type definitions
type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
};

type Role = 'transport' | 'client';

type NavigationContextType = {
  navigation: NavigationItem[];
  role: Role;
  setRole: (role: Role) => void;
};

// Create context
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Get user role (this would normally use your authentication system)
const getUserRole = (): Role => {
  return localStorage.getItem('userRole') as Role || 'client';
};

// Provider component
export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>(getUserRole());
  const [navigation, setNavigation] = useState<NavigationItem[]>(
    role === 'transport' ? transportNavigation : clientNavigation
  );

  useEffect(() => {
    // Update navigation when role changes
    setNavigation(role === 'transport' ? transportNavigation : clientNavigation);
    // Store role in localStorage for persistence
    localStorage.setItem('userRole', role);
  }, [role]);

  return (
    <NavigationContext.Provider value={{ navigation, role, setRole }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Hook to use the context
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
