
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import SearchForm from '@/components/booking/SearchForm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Repeat, Clock, Shield } from 'lucide-react';

const Index = () => {
  const benefits = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Diverse Fleet',
      description: 'Access to a wide range of vehicles for all your transportation needs.'
    },
    {
      icon: <Repeat className="h-10 w-10 text-primary" />,
      title: 'Simple Process',
      description: 'Book your transport in minutes with our streamlined booking system.'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Real-time Tracking',
      description: 'Monitor your shipment with real-time updates and notifications.'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Secure & Reliable',
      description: 'Verified transport partners and insurance coverage for peace of mind.'
    }
  ];

  return (
    <Layout fullWidth>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-accent to-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-center max-w-2xl mb-12"
            >
              <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                Rungis Transport Solution
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
                Modern transport booking for 
                <span className="text-primary"> Rungis companies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mt-6">
                The simplest way to connect with transport vehicles. Book in minutes and track your shipment in real-time.
              </p>
            </motion.div>
            
            <motion.div
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-30"></div>
              <div className="relative">
                <SearchForm />
              </div>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-6 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Simplifying transport logistics for your business</h2>
            <p className="text-lg text-muted-foreground">
              Our platform connects you with reliable transport providers, making logistics management effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white border border-border shadow-elevation hover:shadow-elevation-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Three simple steps to get started</h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process makes booking transport vehicles quick and hassle-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Search',
                description: 'Enter your pickup and delivery details, along with your cargo specifications.'
              },
              {
                step: '02',
                title: 'Select',
                description: 'Browse available vehicles and choose the one that best meets your requirements.'
              },
              {
                step: '03',
                title: 'Book',
                description: 'Confirm your booking details and track your shipment in real-time.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-white border border-border shadow-elevation relative z-10 group hover:shadow-elevation-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="text-7xl font-bold text-primary/10 absolute -top-5 -left-2 z-0 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/search-results">Find a Vehicle Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform your logistics?</h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Join thousands of Rungis companies already using our platform to streamline their transport operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
