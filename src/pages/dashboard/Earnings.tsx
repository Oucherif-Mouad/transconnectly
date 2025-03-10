
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, Calendar, Download, Wallet, BarChart, PieChart, TrendingUp, ArrowRight, Ban, CheckCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy data
const earningsData = {
  totalToday: 485,
  totalWeek: 3250,
  totalMonth: 12850,
  pendingPayments: 2150,
  completedPayments: 10700,
  vehicleEarnings: [
    { id: 'VH-001', name: 'Renault Master Frigo', earnings: 3850, bookings: 28 },
    { id: 'VH-002', name: 'Citroën Jumpy', earnings: 2450, bookings: 26 },
    { id: 'VH-003', name: 'Renault Kangoo', earnings: 1850, bookings: 22 },
    { id: 'VH-004', name: 'Mercedes Sprinter', earnings: 2900, bookings: 19 },
    { id: 'VH-005', name: 'Iveco Daily', earnings: 1800, bookings: 15 }
  ],
  recentTransactions: [
    { id: 'TR-1234', date: '12 Mai 2023', amount: 145, status: 'Complété', client: 'Restaurant La Belle Vue' },
    { id: 'TR-1235', date: '13 Mai 2023', amount: 95, status: 'Complété', client: 'Supermarché Carrefour' },
    { id: 'TR-1236', date: '14 Mai 2023', amount: 120, status: 'En Attente', client: 'Hôtel Mercure' },
    { id: 'TR-1237', date: '14 Mai 2023', amount: 180, status: 'Complété', client: 'Marché Saint-Germain' },
    { id: 'TR-1238', date: '15 Mai 2023', amount: 160, status: 'Refusé', client: 'Restaurant L\'Ardoise' }
  ]
};

const Earnings = () => {
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complété':
        return 'bg-green-500';
      case 'En Attente':
        return 'bg-amber-500';
      case 'Refusé':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Complété':
        return <CheckCircle className="h-4 w-4" />;
      case 'En Attente':
        return <Clock className="h-4 w-4" />;
      case 'Refusé':
        return <Ban className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Revenus</h2>
        <p className="text-muted-foreground">Suivez vos revenus et gérez vos transactions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-md bg-primary/10 text-primary">
                <Wallet className="h-5 w-5" />
              </span>
              <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-green-500 bg-green-50">
                <ArrowUp className="h-3 w-3" />
                +12%
              </Badge>
            </div>
            <h3 className="text-2xl font-bold">€{earningsData.totalMonth.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Total des Revenus (Ce Mois)</p>
            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <div>
                <p className="text-xs text-muted-foreground">En Attente</p>
                <p className="font-medium">€{earningsData.pendingPayments.toLocaleString()}</p>
              </div>
              <Button>Retirer</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="day">
              <div className="flex justify-between items-center mb-4">
                <span className="p-2 rounded-md bg-primary/10 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <TabsList className="h-8">
                  <TabsTrigger value="day" className="text-xs px-2">Jour</TabsTrigger>
                  <TabsTrigger value="week" className="text-xs px-2">Semaine</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="day" className="space-y-0 mt-0">
                <h3 className="text-2xl font-bold">€{earningsData.totalToday.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">Revenus Aujourd'hui</p>
              </TabsContent>
              
              <TabsContent value="week" className="space-y-0 mt-0">
                <h3 className="text-2xl font-bold">€{earningsData.totalWeek.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">Revenus Cette Semaine</p>
              </TabsContent>
              
              <div className="mt-4 pt-4 border-t">
                <Button variant="outline" className="w-full flex justify-between">
                  <span>Télécharger Rapport</span>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-md bg-primary-foreground/20 text-primary-foreground">
                <BarChart className="h-5 w-5" />
              </span>
            </div>
            <h3 className="text-2xl font-bold">{earningsData.vehicleEarnings.reduce((total, vehicle) => total + vehicle.bookings, 0)}</h3>
            <p className="text-sm text-primary-foreground/80">Réservations Ce Mois</p>
            
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <Button variant="secondary" className="w-full">
                Voir Statistiques
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Revenus par Véhicule</CardTitle>
              <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                Ce Mois <Calendar className="h-3 w-3 ml-1" />
              </Button>
            </div>
            <CardDescription>
              Performance financière de chaque véhicule
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {earningsData.vehicleEarnings.map((vehicle) => (
                <div key={vehicle.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{vehicle.name}</p>
                      <p className="text-xs text-muted-foreground">{vehicle.id} | {vehicle.bookings} réservations</p>
                    </div>
                  </div>
                  <p className="font-bold">€{vehicle.earnings}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Transactions Récentes</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <span className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Button>
            </div>
            <CardDescription>
              Historique des paiements récents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {earningsData.recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{transaction.client}</p>
                      <Badge className={cn("flex items-center gap-1", getStatusColor(transaction.status))}>
                        {getStatusIcon(transaction.status)}
                        {transaction.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span>{transaction.id}</span>
                      <span>•</span>
                      <span>{transaction.date}</span>
                    </div>
                  </div>
                  <p className="font-bold">€{transaction.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <CardTitle>Statistiques Financières</CardTitle>
              <CardDescription>
                Vue d'ensemble de vos performances financières
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                <span>Par Véhicule</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Exporter</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-lg border">
            <div className="text-center p-6">
              <BarChart className="h-12 w-12 mx-auto text-muted-foreground" />
              <h4 className="text-lg font-medium mt-3">Graphique des Revenus Mensuels</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Les graphiques détaillés permettent de visualiser vos tendances de revenus
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Earnings;
