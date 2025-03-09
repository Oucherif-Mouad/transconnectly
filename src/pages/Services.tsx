
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Clock, 
  HandCoins, 
  BarChart3, 
  RefreshCcw, 
  ShieldCheck 
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Transportation Services",
      description: "Access our wide network of vehicles to transport your goods safely and efficiently across the region."
    },
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Pallet Logistics",
      description: "Specialized solutions for pallet transportation with careful handling and tracking throughout the journey."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Express Delivery",
      description: "Urgent deliveries made simple with our priority transport services and dedicated vehicles."
    },
    {
      icon: <HandCoins className="h-12 w-12 text-primary" />,
      title: "Competitive Pricing",
      description: "Transparent and fair pricing with no hidden costs. Pay only for what you need."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Logistics Analytics",
      description: "Gain insights into your logistics operations with detailed reports and performance metrics."
    },
    {
      icon: <RefreshCcw className="h-12 w-12 text-primary" />,
      title: "Flexible Scheduling",
      description: "Book transport when you need it, with options for recurring schedules or on-demand service."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Insurance Coverage",
      description: "Peace of mind with comprehensive insurance for your goods during transportation."
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Comprehensive Transport Solutions</h1>
            <p className="text-lg text-muted-foreground">
              We offer a wide range of services designed to meet all your logistics and transportation needs at Rungis Market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-white border border-border shadow-elevation hover:shadow-elevation-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
