
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { motion } from 'framer-motion';

type LayoutProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export const Layout = ({ children, fullWidth = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-grow pt-16 ${fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
