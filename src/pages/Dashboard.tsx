
import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUp, Truck, CalendarCheck, CreditCard, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

// Dummy data
const metricsData = {
  daily: {
    bookings: 12,
    earnings: 1250,
    vehicles: 8,
    completed: 9
  },
  weekly: {
    bookings: 78,
    earnings: 7800,
    vehicles: 12,
    completed: 65
  },
  monthly: {
    bookings: 342,
    earnings: 32450,
    vehicles: 15,
    completed: 298
  }
};

const upcomingBookings = [
  {
    id: 'BK-12345',
    vehicleType: 'Camion Frigorifique',
    pickup: 'Marché de Rungis, Hall A',
    dropoff: 'Restaurant La Belle Vue, Paris',
    date: '15 Mai 2023',
    time: '08:00',
    status: 'Confirmé'
  },
  {
    id: 'BK-12346',
    vehicleType: 'Fourgon',
    pickup: 'Marché de Rungis, Hall C',
    dropoff: 'Supermarché Carrefour, Orly',
    date: '15 Mai 2023',
    time: '10:30',
    status: 'En Attente'
  },
  {
    id: 'BK-12347',
    vehicleType: 'Camionnette',
    pickup: 'Marché de Rungis, Pavillon Fruits',
    dropoff: 'Hôtel Mercure, Versailles',
    date: '16 Mai 2023',
    time: '07:15',
    status: 'Confirmé'
  },
  {
    id: 'BK-12348',
    vehicleType: 'Camion Plateau',
    pickup: 'Marché de Rungis, Entrée D6',
    dropoff: 'Marché Saint-Germain, Paris',
    date: '16 Mai 2023',
    time: '09:00',
    status: 'Confirmé'
  }
];

const vehiclesList = [
  {
    id: 'VH-001',
    type: 'Camion Frigorifique',
    capacity: '2.5 tonnes',
    status: 'Disponible'
  },
  {
    id: 'VH-002',
    type: 'Fourgon',
    capacity: '1.2 tonnes',
    status: 'Réservé'
  },
  {
    id: 'VH-003',
    type: 'Camionnette',
    capacity: '800 kg',
    status: 'Disponible'
  },
  {
    id: 'VH-004',
    type: 'Camion Plateau',
    capacity: '3 tonnes',
    status: 'En Maintenance'
  }
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Metrics Section */}
      <Tabs defaultValue="daily" className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Tableau de Bord</h2>
          <TabsList>
            <TabsTrigger value="daily">Aujourd'hui</TabsTrigger>
            <TabsTrigger value="weekly">Cette Semaine</TabsTrigger>
            <TabsTrigger value="monthly">Ce Mois</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="daily" className="space-y-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard 
              title="Réservations" 
              value={metricsData.daily.bookings} 
              icon={<CalendarCheck className="h-5 w-5" />} 
              description="Total des réservations aujourd'hui"
              trend="+8%"
            />
            <MetricCard 
              title="Revenus" 
              value={`${metricsData.daily.earnings} €`} 
              icon={<CreditCard className="h-5 w-5" />} 
              description="Revenus générés aujourd'hui"
              trend="+12%"
            />
            <MetricCard 
              title="Véhicules" 
              value={metricsData.daily.vehicles} 
              icon={<Truck className="h-5 w-5" />} 
              description="Véhicules disponibles"
              trend="-2%"
              trendNegative
            />
            <MetricCard 
              title="Terminées" 
              value={metricsData.daily.completed} 
              icon={<CalendarCheck className="h-5 w-5" />} 
              description="Réservations terminées"
              trend="+15%"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="weekly" className="space-y-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard 
              title="Réservations" 
              value={metricsData.weekly.bookings} 
              icon={<CalendarCheck className="h-5 w-5" />} 
              description="Total des réservations cette semaine"
              trend="+12%"
            />
            <MetricCard 
              title="Revenus" 
              value={`${metricsData.weekly.earnings} €`} 
              icon={<CreditCard className="h-5 w-5" />} 
              description="Revenus générés cette semaine"
              trend="+18%"
            />
            <MetricCard 
              title="Véhicules" 
              value={metricsData.weekly.vehicles} 
              icon={<Truck className="h-5 w-5" />} 
              description="Véhicules disponibles"
              trend="+5%"
            />
            <MetricCard 
              title="Terminées" 
              value={metricsData.weekly.completed} 
              icon={<CalendarCheck className="h-5 w-5" />} 
              description="Réservations terminées"
              trend="+10%"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="monthly" className="space-y-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard 
              title="Réservations" 
              value={metricsData.monthly.bookings} 
              icon={<CalendarCheck className="h-5 w-5" />} 
              description="Total des réservations ce mois"
              trend="+24%"
            />
            <MetricCard 
              title="Revenus" 
              value={`${metricsData.monthly.earnings} €`} 
              icon={<CreditCard className="h-5 w-5" />} 
              description="Revenus générés ce mois"
              trend="+20%"
            />
            <MetricCard 
              title="Véhicules" 
              value={metricsData.monthly.vehicles} 
              icon={<Truck className="h-5 w-5" />} 
              description="Véhicules disponibles"
              trend="+8%"
            />
            <MetricCard 
              title="Terminées" 
              value={metricsData.monthly.completed} 
              icon={<CalendarCheck className="h-5 w-5" />} 
              description="Réservations terminées"
              trend="+28%"
            />
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Bookings */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Réservations à Venir</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/bookings" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CardDescription>Gérez vos prochaines réservations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex flex-col p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium text-primary">{booking.id}</span>
                      <Badge className={cn(
                        "ml-2",
                        booking.status === 'Confirmé' ? "bg-green-500" : "bg-amber-500"
                      )}>
                        {booking.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                    <div className="text-sm text-muted-foreground">Type de véhicule:</div>
                    <div className="text-sm font-medium">{booking.vehicleType}</div>
                    <div className="text-sm text-muted-foreground">Départ:</div>
                    <div className="text-sm font-medium truncate">{booking.pickup}</div>
                    <div className="text-sm text-muted-foreground">Arrivée:</div>
                    <div className="text-sm font-medium truncate">{booking.dropoff}</div>
                    <div className="text-sm text-muted-foreground">Date & Heure:</div>
                    <div className="text-sm font-medium">{booking.date} à {booking.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Vehicle Management */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Gestion des Véhicules</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/vehicles" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CardDescription>Gérez votre flotte de véhicules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vehiclesList.map((vehicle) => (
                <div key={vehicle.id} className="flex flex-col p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-primary">{vehicle.id}</span>
                    <Badge className={cn(
                      vehicle.status === 'Disponible' ? "bg-green-500" : 
                      vehicle.status === 'Réservé' ? "bg-blue-500" : 
                      "bg-orange-500"
                    )}>
                      {vehicle.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                    <div className="text-sm text-muted-foreground">Type:</div>
                    <div className="text-sm font-medium">{vehicle.type}</div>
                    <div className="text-sm text-muted-foreground">Capacité:</div>
                    <div className="text-sm font-medium">{vehicle.capacity}</div>
                  </div>
                  <div className="flex justify-end mt-3 space-x-2">
                    <Button variant="outline" size="sm">Modifier</Button>
                    <Button variant="destructive" size="sm">Désactiver</Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">
              Ajouter un Véhicule
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

// Helper component for metrics
interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
  trend: string;
  trendNegative?: boolean;
}

const MetricCard = ({ title, value, icon, description, trend, trendNegative = false }: MetricCardProps) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <span className="p-2 rounded-md bg-primary/10 text-primary">{icon}</span>
        <Badge variant="outline" className={cn(
          "flex items-center gap-1 px-2 py-1",
          trendNegative ? "text-red-500 bg-red-50" : "text-green-500 bg-green-50"
        )}>
          <ArrowUp className={cn("h-3 w-3", trendNegative ? "rotate-180" : "")} />
          {trend}
        </Badge>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-bold">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-xs text-muted-foreground mt-3">{description}</p>
    </CardContent>
  </Card>
);

export default Dashboard;
