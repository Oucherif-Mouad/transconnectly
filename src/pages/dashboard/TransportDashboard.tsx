
import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ArrowUp, 
  Truck, 
  CalendarCheck, 
  CreditCard, 
  Eye, 
  Check, 
  Clock, 
  AlertTriangle, 
  ChevronRight,
  Users,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

// Theme colors - using the primary color from the theme
const CHART_COLOR = 'hsl(var(--primary))';
const CHART_COLOR_LIGHT = 'hsl(var(--primary) / 0.2)';

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

// Chart data
const bookingTrendsData = [
  { day: 'Lun', bookings: 4 },
  { day: 'Mar', bookings: 6 },
  { day: 'Mer', bookings: 8 },
  { day: 'Jeu', bookings: 7 },
  { day: 'Ven', bookings: 12 },
  { day: 'Sam', bookings: 5 },
  { day: 'Dim', bookings: 3 },
];

const earningsTrendData = [
  { day: 'Lun', earnings: 420 },
  { day: 'Mar', earnings: 580 },
  { day: 'Mer', earnings: 750 },
  { day: 'Jeu', earnings: 620 },
  { day: 'Ven', earnings: 1100 },
  { day: 'Sam', earnings: 450 },
  { day: 'Dim', earnings: 280 },
];

const upcomingBookings = [
  {
    id: 'BK-12345',
    vehicleType: 'Camion Frigorifique',
    pickup: 'Marché de Rungis, Hall A',
    dropoff: 'Restaurant La Belle Vue, Paris',
    date: '15 Mai 2023',
    time: '08:00',
    status: 'Confirmé',
    client: 'Restaurant La Belle Vue'
  },
  {
    id: 'BK-12346',
    vehicleType: 'Fourgon',
    pickup: 'Marché de Rungis, Hall C',
    dropoff: 'Supermarché Carrefour, Orly',
    date: '15 Mai 2023',
    time: '10:30',
    status: 'En Attente',
    client: 'Supermarché Carrefour'
  },
  {
    id: 'BK-12347',
    vehicleType: 'Camionnette',
    pickup: 'Marché de Rungis, Pavillon Fruits',
    dropoff: 'Hôtel Mercure, Versailles',
    date: '16 Mai 2023',
    time: '07:15',
    status: 'Confirmé',
    client: 'Hôtel Mercure'
  },
  {
    id: 'BK-12348',
    vehicleType: 'Camion Plateau',
    pickup: 'Marché de Rungis, Entrée D6',
    dropoff: 'Marché Saint-Germain, Paris',
    date: '16 Mai 2023',
    time: '09:00',
    status: 'Confirmé',
    client: 'Marché Saint-Germain'
  }
];

const vehiclesList = [
  {
    id: 'VH-001',
    type: 'Camion Frigorifique',
    capacity: '2.5 tonnes',
    status: 'Disponible',
    lastLocation: 'Rungis, Secteur A',
    driver: 'Michel Dupont'
  },
  {
    id: 'VH-002',
    type: 'Fourgon',
    capacity: '1.2 tonnes',
    status: 'Réservé',
    lastLocation: 'Paris, 11ème',
    driver: 'Sophie Martin'
  },
  {
    id: 'VH-003',
    type: 'Camionnette',
    capacity: '800 kg',
    status: 'Disponible',
    lastLocation: 'Rungis, Parking C',
    driver: 'Jean Lefevre'
  },
  {
    id: 'VH-004',
    type: 'Camion Plateau',
    capacity: '3 tonnes',
    status: 'En Maintenance',
    lastLocation: 'Garage Central, Orly',
    driver: 'Non assigné'
  }
];

const TransportDashboard = () => {
  return (
    <DashboardLayout>
      {/* Metrics Section */}
      <Tabs defaultValue="daily" className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Tableau de Bord Transporteur</h2>
          <TabsList className="bg-background border">
            <TabsTrigger value="daily" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Aujourd'hui</TabsTrigger>
            <TabsTrigger value="weekly" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Cette Semaine</TabsTrigger>
            <TabsTrigger value="monthly" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Ce Mois</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="daily" className="space-y-4">
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
              icon={<Check className="h-5 w-5" />} 
              description="Réservations terminées"
              trend="+15%"
            />
          </div>
          
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tendance des Réservations</CardTitle>
                <CardDescription>Nombre de réservations par jour</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={bookingTrendsData}>
                    <defs>
                      <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={CHART_COLOR_LIGHT} stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="url(#colorBookings)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Revenus Journaliers</CardTitle>
                <CardDescription>Revenus générés par jour (€)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={earningsTrendData}>
                    <defs>
                      <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="earnings" stroke="#82ca9d" fillOpacity={1} fill="url(#colorEarnings)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="weekly" className="space-y-4">
          {/* Weekly metrics - same structure as daily but with weekly data */}
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
              icon={<Check className="h-5 w-5" />} 
              description="Réservations terminées"
              trend="+10%"
            />
          </div>
          
          {/* Weekly Charts - can be the same as daily for this example */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tendance des Réservations</CardTitle>
                <CardDescription>Nombre de réservations par jour cette semaine</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={bookingTrendsData}>
                    <defs>
                      <linearGradient id="colorBookingsWeekly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={CHART_COLOR_LIGHT} stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="url(#colorBookingsWeekly)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Revenus Hebdomadaires</CardTitle>
                <CardDescription>Revenus générés par jour cette semaine (€)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={earningsTrendData}>
                    <defs>
                      <linearGradient id="colorEarningsWeekly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="earnings" stroke="#82ca9d" fillOpacity={1} fill="url(#colorEarningsWeekly)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="monthly" className="space-y-4">
          {/* Monthly metrics */}
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
              icon={<Check className="h-5 w-5" />} 
              description="Réservations terminées"
              trend="+28%"
            />
          </div>
          
          {/* Monthly Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tendance des Réservations</CardTitle>
                <CardDescription>Nombre de réservations par semaine ce mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={bookingTrendsData}>
                    <defs>
                      <linearGradient id="colorBookingsMonthly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={CHART_COLOR_LIGHT} stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="url(#colorBookingsMonthly)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Revenus Mensuels</CardTitle>
                <CardDescription>Revenus générés par semaine ce mois (€)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={earningsTrendData}>
                    <defs>
                      <linearGradient id="colorEarningsMonthly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="earnings" stroke="#82ca9d" fillOpacity={1} fill="url(#colorEarningsMonthly)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Bookings - New Design */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Réservations à Venir</CardTitle>
                <CardDescription>Gérez vos prochaines réservations</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard/bookings" className="flex items-center">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="p-4 hover:bg-muted/10 transition-colors">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className={cn(
                          booking.status === 'Confirmé' ? "bg-primary" : "bg-amber-500"
                        )}>
                          {booking.status}
                        </Badge>
                        <span className="font-medium">{booking.id}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {booking.date} • {booking.time}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>{booking.vehicleType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{booking.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="truncate">{booking.dropoff}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-1">
                      <Button variant="ghost" size="sm" className="text-primary">
                        <Eye className="h-4 w-4 mr-1" /> Détails
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-muted/5 border-t">
              <Button className="w-full" asChild>
                <Link to="/dashboard/bookings/new">
                  Créer une Nouvelle Réservation
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Vehicle Management - New Design */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Votre Flotte</CardTitle>
                <CardDescription>Gérez vos véhicules de transport</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard/vehicles" className="flex items-center">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {vehiclesList.map((vehicle) => (
                <div key={vehicle.id} className="p-4 hover:bg-muted/10 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{vehicle.id} • {vehicle.type}</span>
                        <Badge className={cn(
                          vehicle.status === 'Disponible' ? "bg-green-500" : 
                          vehicle.status === 'Réservé' ? "bg-primary" : 
                          "bg-orange-500"
                        )}>
                          {vehicle.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mt-3">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{vehicle.driver}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{vehicle.lastLocation}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 items-end justify-between">
                      <div className="text-sm text-muted-foreground">
                        Capacité: {vehicle.capacity}
                      </div>
                      
                      <Button size="sm" className={vehicle.status === 'Disponible' ? '' : 'opacity-50'} 
                              disabled={vehicle.status !== 'Disponible'}>
                        Assigner
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-muted/5 border-t">
              <Button className="w-full" asChild>
                <Link to="/dashboard/vehicles/new">
                  Ajouter un Véhicule
                </Link>
              </Button>
            </div>
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
  <Card className="border shadow-sm overflow-hidden">
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
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm font-medium text-foreground">{title}</p>
      </div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </CardContent>
  </Card>
);

export default TransportDashboard;
