
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
  Clock, 
  AlertTriangle, 
  Check,
  Search,
  CheckCircle2,
  Calendar,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Theme colors
const CHART_BLUE = '#0EA5E9';
const LIGHT_BLUE = '#D3E4FD';

// Dummy data for metrics
const metricsData = {
  daily: {
    bookings: 3,
    completed: 2,
    upcoming: 5,
    totalSpent: 450,
  },
  weekly: {
    bookings: 18,
    completed: 15,
    upcoming: 8,
    totalSpent: 2350,
  },
  monthly: {
    bookings: 62,
    completed: 58,
    upcoming: 12,
    totalSpent: 8450,
  }
};

// Chart data
const bookingHistoryData = [
  { day: 'Lun', bookings: 2 },
  { day: 'Mar', bookings: 3 },
  { day: 'Mer', bookings: 1 },
  { day: 'Jeu', bookings: 2 },
  { day: 'Ven', bookings: 4 },
  { day: 'Sam', bookings: 2 },
  { day: 'Dim', bookings: 0 },
];

const spendingTrendData = [
  { day: 'Lun', amount: 220 },
  { day: 'Mar', amount: 330 },
  { day: 'Mer', amount: 110 },
  { day: 'Jeu', amount: 220 },
  { day: 'Ven', amount: 440 },
  { day: 'Sam', amount: 220 },
  { day: 'Dim', amount: 0 },
];

// Dummy data for bookings
const activeBookings = [
  {
    id: 'BK-12350',
    vehicleType: 'Camion Frigorifique',
    pickup: 'Marché de Rungis, Hall A',
    dropoff: 'Restaurant Le Gourmet, Paris',
    date: '16 Mai 2024',
    time: '07:30',
    status: 'Confirmé',
    transportCompany: 'Trans Express'
  },
  {
    id: 'BK-12351',
    vehicleType: 'Fourgon',
    pickup: 'Marché de Rungis, Hall C',
    dropoff: 'Épicerie Fine Delices, Montmartre',
    date: '16 Mai 2024',
    time: '09:00',
    status: 'En Route',
    transportCompany: 'Rungis Logistics'
  },
  {
    id: 'BK-12352',
    vehicleType: 'Camionnette',
    pickup: 'Marché de Rungis, Pavillon Poissons',
    dropoff: 'Bistro Maritime, Seine',
    date: '17 Mai 2024',
    time: '06:45',
    status: 'Confirmé',
    transportCompany: 'Trans Express'
  }
];

// Available vehicles for booking
const availableVehicles = [
  {
    id: 'VH-101',
    type: 'Camion Frigorifique',
    capacity: '2.5 tonnes',
    price: '250 €/jour',
    company: 'Trans Express',
    rating: 4.8
  },
  {
    id: 'VH-102',
    type: 'Fourgon',
    capacity: '1.2 tonnes',
    price: '180 €/jour',
    company: 'Rungis Logistics',
    rating: 4.6
  },
  {
    id: 'VH-103',
    type: 'Camionnette',
    capacity: '800 kg',
    price: '120 €/jour',
    company: 'Trans Express',
    rating: 4.7
  },
  {
    id: 'VH-104',
    type: 'Camion Plateau',
    capacity: '3 tonnes',
    price: '220 €/jour',
    company: 'Rungis Transport',
    rating: 4.9
  }
];

const ClientDashboard = () => {
  return (
    <DashboardLayout>
      {/* Metrics Section */}
      <Tabs defaultValue="daily" className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Tableau de Bord Client</h2>
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
              description="Réservations effectuées aujourd'hui"
              trend="+33%"
            />
            <MetricCard 
              title="Terminées" 
              value={metricsData.daily.completed} 
              icon={<CheckCircle2 className="h-5 w-5" />} 
              description="Livraisons terminées aujourd'hui"
              trend="+50%"
            />
            <MetricCard 
              title="À venir" 
              value={metricsData.daily.upcoming} 
              icon={<Calendar className="h-5 w-5" />} 
              description="Réservations à venir"
              trend="+20%"
            />
            <MetricCard 
              title="Dépenses" 
              value={`${metricsData.daily.totalSpent} €`} 
              icon={<CreditCard className="h-5 w-5" />} 
              description="Total dépensé aujourd'hui"
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
                  <BarChart data={bookingHistoryData}>
                    <defs>
                      <linearGradient id="colorBookingsClient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_BLUE} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={LIGHT_BLUE} stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="url(#colorBookingsClient)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Dépenses Transport</CardTitle>
                <CardDescription>Montant dépensé par jour (€)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={spendingTrendData}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_BLUE} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={LIGHT_BLUE} stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="amount" stroke={CHART_BLUE} fillOpacity={1} fill="url(#colorAmount)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="weekly" className="space-y-4">
          {/* Weekly metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard 
              title="Réservations" 
              value={metricsData.weekly.bookings} 
              icon={<CalendarCheck className="h-5 w-5" />} 
              description="Réservations cette semaine"
              trend="+22%"
            />
            <MetricCard 
              title="Terminées" 
              value={metricsData.weekly.completed} 
              icon={<CheckCircle2 className="h-5 w-5" />} 
              description="Livraisons terminées cette semaine"
              trend="+25%"
            />
            <MetricCard 
              title="À venir" 
              value={metricsData.weekly.upcoming} 
              icon={<Calendar className="h-5 w-5" />} 
              description="Réservations à venir"
              trend="+8%"
            />
            <MetricCard 
              title="Dépenses" 
              value={`${metricsData.weekly.totalSpent} €`} 
              icon={<CreditCard className="h-5 w-5" />} 
              description="Total dépensé cette semaine"
              trend="+18%"
            />
          </div>
          
          {/* Weekly Charts - using same components but would have different data in real app */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tendance des Réservations</CardTitle>
                <CardDescription>Nombre de réservations par jour cette semaine</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={bookingHistoryData}>
                    <defs>
                      <linearGradient id="colorBookingsClientWeekly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_BLUE} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={LIGHT_BLUE} stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="url(#colorBookingsClientWeekly)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Dépenses Transport</CardTitle>
                <CardDescription>Montant dépensé par jour cette semaine (€)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={spendingTrendData}>
                    <defs>
                      <linearGradient id="colorAmountWeekly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_BLUE} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={LIGHT_BLUE} stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="amount" stroke={CHART_BLUE} fillOpacity={1} fill="url(#colorAmountWeekly)" />
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
              description="Réservations ce mois"
              trend="+15%"
            />
            <MetricCard 
              title="Terminées" 
              value={metricsData.monthly.completed} 
              icon={<CheckCircle2 className="h-5 w-5" />} 
              description="Livraisons terminées ce mois"
              trend="+18%"
            />
            <MetricCard 
              title="À venir" 
              value={metricsData.monthly.upcoming} 
              icon={<Calendar className="h-5 w-5" />} 
              description="Réservations à venir"
              trend="+5%"
            />
            <MetricCard 
              title="Dépenses" 
              value={`${metricsData.monthly.totalSpent} €`} 
              icon={<CreditCard className="h-5 w-5" />} 
              description="Total dépensé ce mois"
              trend="+12%"
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
                  <BarChart data={bookingHistoryData}>
                    <defs>
                      <linearGradient id="colorBookingsClientMonthly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_BLUE} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={LIGHT_BLUE} stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="url(#colorBookingsClientMonthly)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Dépenses Transport</CardTitle>
                <CardDescription>Montant dépensé par semaine ce mois (€)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={spendingTrendData}>
                    <defs>
                      <linearGradient id="colorAmountMonthly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_BLUE} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={LIGHT_BLUE} stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="amount" stroke={CHART_BLUE} fillOpacity={1} fill="url(#colorAmountMonthly)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Bookings */}
        <Card className="overflow-hidden border shadow-sm">
          <CardHeader className="border-b bg-muted/10 pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Réservations Actives</CardTitle>
              <Button variant="ghost" size="sm" asChild className="text-primary">
                <Link to="/dashboard/bookings" className="flex items-center text-sm font-medium">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CardDescription>Suivez vos réservations en cours</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {activeBookings.map((booking) => (
                <div key={booking.id} className="p-4 hover:bg-muted/20 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium text-primary">{booking.id}</span>
                      <Badge className={cn(
                        "ml-2 text-xs",
                        booking.status === 'Confirmé' ? "bg-amber-500" : 
                        booking.status === 'En Route' ? "bg-blue-500" : "bg-green-500"
                      )}>
                        {booking.status === 'Confirmé' ? (
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {booking.status}
                          </span>
                        ) : booking.status === 'En Route' ? (
                          <span className="flex items-center">
                            <Truck className="mr-1 h-3 w-3" />
                            {booking.status}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Check className="mr-1 h-3 w-3" />
                            {booking.status}
                          </span>
                        )}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 rounded-full">
                      Suivre
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-start">
                      <div className="w-24 text-muted-foreground">Véhicule:</div>
                      <div className="font-medium">{booking.vehicleType}</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-24 text-muted-foreground">Date:</div>
                      <div className="font-medium">{booking.date} à {booking.time}</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-24 text-muted-foreground">Transporteur:</div>
                      <div className="font-medium">{booking.transportCompany}</div>
                    </div>
                    <div className="flex items-start md:col-span-2">
                      <div className="w-24 text-muted-foreground">Départ:</div>
                      <div className="font-medium truncate">{booking.pickup}</div>
                    </div>
                    <div className="flex items-start md:col-span-2">
                      <div className="w-24 text-muted-foreground">Arrivée:</div>
                      <div className="font-medium truncate">{booking.dropoff}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t bg-muted/10">
              <Button className="w-full" asChild>
                <Link to="/dashboard/bookings/new">
                  Nouvelle Réservation de Transport
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Available Vehicles */}
        <Card className="overflow-hidden border shadow-sm">
          <CardHeader className="border-b bg-muted/10 pb-3 flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Véhicules Disponibles</CardTitle>
              <Button variant="ghost" size="sm" asChild className="text-primary">
                <Link to="/vehicles" className="flex items-center text-sm font-medium">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CardDescription>Véhicules disponibles pour réservation</CardDescription>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-1" />
                Filtrer
              </Button>
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un véhicule..."
                  className="w-full rounded-md border border-input pl-9 pr-4 py-2 text-sm"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {availableVehicles.map((vehicle) => (
                <div key={vehicle.id} className="p-4 hover:bg-muted/20 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="rounded-md bg-primary/10 p-2 text-primary">
                        <Truck className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{vehicle.type}</h4>
                        <p className="text-sm text-muted-foreground">{vehicle.company}</p>
                        <div className="mt-1 flex items-center text-sm">
                          <span className="mr-2">{vehicle.capacity}</span>
                          <span className="text-amber-500 font-medium">{vehicle.price}</span>
                        </div>
                        <div className="mt-1">
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-600 border-green-200">
                            Disponible
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button className="mt-1">Réserver</Button>
                  </div>
                </div>
              ))}
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

export default ClientDashboard;
