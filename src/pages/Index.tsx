
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
      title: 'Flotte Diverse',
      description: 'Accès à une large gamme de véhicules pour tous vos besoins de transport.'
    },
    {
      icon: <Repeat className="h-10 w-10 text-primary" />,
      title: 'Processus Simple',
      description: 'Réservez votre transport en quelques minutes avec notre système de réservation simplifié.'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Suivi en Temps Réel',
      description: 'Suivez votre expédition avec des mises à jour en temps réel et des notifications.'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Sûr et Fiable',
      description: "Partenaires de transport vérifiés et couverture d'assurance pour votre tranquillité d'esprit."
    }
  ];

  return (
    <Layout fullWidth>
      {/* Hero Section with reduced height */}
      <section className="min-h-[70vh] flex items-center bg-gradient-to-br from-accent to-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-8">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-center max-w-2xl mb-6"
            >
              <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                Solution de Transport Rungis
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
                Réservation de transport moderne pour 
                <span className="text-primary"> entreprises Rungis</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mt-6">
                La façon la plus simple de se connecter avec des véhicules de transport. Réservez en quelques minutes et suivez votre expédition en temps réel.
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
            
            {/* Buttons removed from here */}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              Pourquoi Nous Choisir
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Simplifier la logistique de transport pour votre entreprise</h2>
            <p className="text-lg text-muted-foreground">
              Notre plateforme vous connecte avec des transporteurs fiables, rendant la gestion logistique sans effort.
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
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              Comment Ça Marche
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Trois étapes simples pour commencer</h2>
            <p className="text-lg text-muted-foreground">
              Notre processus simplifié rend la réservation de véhicules de transport rapide et sans tracas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Rechercher',
                description: 'Entrez vos détails de ramassage et de livraison, ainsi que les spécifications de votre cargaison.'
              },
              {
                step: '02',
                title: 'Sélectionner',
                description: 'Parcourez les véhicules disponibles et choisissez celui qui répond le mieux à vos besoins.'
              },
              {
                step: '03',
                title: 'Réserver',
                description: 'Confirmez vos détails de réservation et suivez votre expédition en temps réel.'
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
          
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/search-results">Trouver un Véhicule Maintenant <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Prêt à transformer votre logistique?</h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Rejoignez des milliers d'entreprises Rungis qui utilisent déjà notre plateforme pour optimiser leurs opérations de transport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Créer un Compte</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                <Link to="/contact">Contacter les Ventes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
