
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// In a real application, this would come from an authentication context or service
// For demo purposes, we're simulating by looking at localStorage
const getUserRole = (): 'transport' | 'client' => {
  // This would typically be stored in a more secure way after authentication
  // For demo purposes only - in production, use a proper auth system
  return localStorage.getItem('userRole') as 'transport' | 'client' || 'client';
};

export const RoleBasedRouter = () => {
  const location = useLocation();
  const userRole = getUserRole();
  
  // Redirect to login if there's no role (not authenticated)
  // In a real app, you'd have a more comprehensive auth check
  if (!userRole) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Return the appropriate dashboard based on user role
  return <Navigate to={userRole === 'transport' ? '/transporteur' : '/client'} replace />;
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
