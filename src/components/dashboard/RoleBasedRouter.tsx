
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// This would typically come from an authentication context
// For now, we'll use a simple constant - in a real app, this would be determined by user login
const USER_ROLE = 'transport'; // or 'client'

export const RoleBasedRouter = () => {
  const location = useLocation();
  
  // Redirect to login if there's no role (not authenticated)
  if (!USER_ROLE) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Return the appropriate dashboard based on user role
  return <Navigate to={USER_ROLE === 'transport' ? '/transporteur' : '/client'} replace />;
};

// Navigation items based on role
export const getNavigationByRole = (role: 'transport' | 'client') => {
  if (role === 'transport') {
    return [
      { name: 'Tableau de Bord', href: '/transporteur', icon: 'LayoutDashboard' },
      { name: 'Véhicules', href: '/dashboard/vehicles', icon: 'Truck' },
      { name: 'Réservations', href: '/dashboard/bookings', icon: 'CalendarCheck' },
      { name: 'Revenus', href: '/dashboard/earnings', icon: 'Wallet' },
      { name: 'Paramètres', href: '/dashboard/settings', icon: 'Settings' },
    ];
  }

  // Client navigation
  return [
    { name: 'Tableau de Bord', href: '/client', icon: 'LayoutDashboard' },
    { name: 'Réservations', href: '/dashboard/bookings', icon: 'CalendarCheck' },
    { name: 'Factures', href: '/dashboard/invoices', icon: 'Receipt' },
    { name: 'Paramètres', href: '/dashboard/settings', icon: 'Settings' },
  ];
};

