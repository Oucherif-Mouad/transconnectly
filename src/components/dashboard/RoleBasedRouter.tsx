
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import ClientDashboard from '@/pages/dashboard/ClientDashboard';

// This would typically come from an authentication context
// For now, we'll use a simple constant - in a real app, this would be determined by user login
const USER_ROLE = 'transport'; // or 'client'

interface RoleBasedRouterProps {
  transportComponent: React.ComponentType;
  clientComponent: React.ComponentType;
}

export const RoleBasedRouter: React.FC<RoleBasedRouterProps> = ({ 
  transportComponent, 
  clientComponent 
}) => {
  const location = useLocation();
  
  // Redirect to login if there's no role (not authenticated)
  // This is just placeholder logic - real auth would be more complex
  if (!USER_ROLE) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Return the appropriate component based on user role
  return USER_ROLE === 'transport' 
    ? <>{React.createElement(transportComponent)}</> 
    : <>{React.createElement(clientComponent)}</>;
};

// Pre-configured components for dashboard routing
export const DashboardRouter = () => (
  <RoleBasedRouter 
    transportComponent={Dashboard}
    clientComponent={ClientDashboard}
  />
);
