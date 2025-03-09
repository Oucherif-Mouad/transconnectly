
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Our Mission & Vision</h1>
            <p className="text-lg text-muted-foreground">
              We're revolutionizing logistics at Rungis Market by connecting businesses with the right transport solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-accent/70 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary/40">TransConnect Image</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Simplifying Transport Logistics</h2>
              <p className="text-lg text-muted-foreground">
                TransConnect was founded in 2023 with a clear purpose: to modernize the way Rungis Market businesses handle their logistics needs. 
                Our platform bridges the gap between companies needing transport services and vehicle providers.
              </p>
              <div className="space-y-3">
                {[
                  "Efficient booking process",
                  "Transparent pricing",
                  "Reliable service providers",
                  "Real-time tracking",
                  "Dedicated customer support"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/10 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-accent/50 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg">
                From a small startup to a trusted logistics partner for businesses across Rungis Market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2023",
                  title: "Founded",
                  description: "TransConnect was born from the need to simplify logistics at Rungis Market."
                },
                {
                  year: "2024",
                  title: "Growth",
                  description: "Expanded our network of transport providers and upgraded our platform."
                },
                {
                  year: "2025",
                  title: "Innovation",
                  description: "Introducing new features like real-time tracking and advanced booking."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
