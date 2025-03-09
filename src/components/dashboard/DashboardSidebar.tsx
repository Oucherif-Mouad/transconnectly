
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Calendar,
  Truck,
  CreditCard,
  Settings,
  Users,
  MessageSquare,
  HelpCircle,
  LogOut,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  className?: string;
}

export const DashboardSidebar: React.FC<SidebarProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'Bookings', path: '/dashboard/bookings' },
    { icon: Truck, label: 'Vehicles', path: '/dashboard/vehicles' },
    { icon: CreditCard, label: 'Payments', path: '/dashboard/payments' },
    { icon: Users, label: 'Customers', path: '/dashboard/customers' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    { icon: HelpCircle, label: 'Help', path: '/dashboard/help' },
  ];

  const sidebarVariants = {
    expanded: { width: '240px' },
    collapsed: { width: '80px' }
  };

  return (
    <>
      {/* Mobile sidebar trigger */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-40 md:hidden"
        onClick={toggleMobile}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMobile}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed top-0 left-0 h-full flex flex-col z-50 bg-card border-r border-border shadow-xl md:shadow-none",
          expanded ? "w-60" : "w-20",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "transition-transform duration-300 ease-in-out md:transition-all",
          className
        )}
        variants={sidebarVariants}
        animate={expanded ? 'expanded' : 'collapsed'}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-semibold">
                  T
                </div>
                <span className="font-semibold text-foreground">TransConnect</span>
              </motion.div>
            ) : (
              <motion.div
                className="w-full flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-semibold">
                  T
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile close button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobile}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Desktop toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={toggleSidebar}
          >
            <ChevronRight
              className={`h-5 w-5 transition-transform duration-300 ${
                !expanded ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </Button>
        </div>

        <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center rounded-md px-3 py-2 transition-colors",
                      expanded ? "justify-start" : "justify-center",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )
                  }
                >
                  <item.icon className={cn("shrink-0", expanded ? "mr-3 h-5 w-5" : "h-6 w-6")} />
                  {expanded && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto px-3 pb-6">
          <Button
            variant="ghost"
            className={cn(
              "flex w-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground",
              expanded ? "justify-start" : "justify-center"
            )}
          >
            <LogOut className={cn("shrink-0", expanded ? "mr-3 h-5 w-5" : "h-6 w-6")} />
            {expanded && <span>Logout</span>}
          </Button>
        </div>
      </motion.aside>
    </>
  );
};
