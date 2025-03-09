
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
      title: "Services de Transport",
      description: "Accédez à notre vaste réseau de véhicules pour transporter vos marchandises en toute sécurité et efficacité dans toute la région."
    },
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Logistique de Palettes",
      description: "Solutions spécialisées pour le transport de palettes avec une manipulation soignée et un suivi tout au long du trajet."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Livraison Express",
      description: "Livraisons urgentes simplifiées avec nos services de transport prioritaires et nos véhicules dédiés."
    },
    {
      icon: <HandCoins className="h-12 w-12 text-primary" />,
      title: "Tarification Compétitive",
      description: "Tarification transparente et équitable sans frais cachés. Payez uniquement pour ce dont vous avez besoin."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Analyse Logistique",
      description: "Obtenez des informations sur vos opérations logistiques avec des rapports détaillés et des indicateurs de performance."
    },
    {
      icon: <RefreshCcw className="h-12 w-12 text-primary" />,
      title: "Planification Flexible",
      description: "Réservez le transport quand vous en avez besoin, avec des options pour des horaires récurrents ou un service à la demande."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Couverture d'Assurance",
      description: "Tranquillité d'esprit avec une assurance complète pour vos marchandises pendant le transport."
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              Nos Services
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Solutions de Transport Complètes</h1>
            <p className="text-lg text-muted-foreground">
              Nous offrons une large gamme de services conçus pour répondre à tous vos besoins logistiques et de transport au Marché de Rungis.
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
