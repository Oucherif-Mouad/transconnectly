
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
  CheckCircle2,
  Calendar,
  Filter,
  MapPin,
  Building,
  Search,
  Star,
  Users,
  PhoneCall,
  ChartBar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

// Theme colors
const CHART_COLOR = 'hsl(var(--primary))';
const CHART_COLOR_LIGHT = 'hsl(var(--primary) / 0.2)';
const CHART_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

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

// Delivery Status Data (replacing transport expenses)
const deliveryStatusData = [
  { name: 'En cours', value: 4 },
  { name: 'Livré', value: 8 },
  { name: 'Planifié', value: 3 },
  { name: 'Retardé', value: 1 },
];

// Customer satisfaction data
const satisfactionData = [
  { month: 'Jan', score: 4.2 },
  { month: 'Fév', score: 4.3 },
  { month: 'Mar', score: 4.1 },
  { month: 'Avr', score: 4.5 },
  { month: 'Mai', score: 4.7 },
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
    transportCompany: 'Trans Express',
    phone: '+33 1 23 45 67 89'
  },
  {
    id: 'BK-12351',
    vehicleType: 'Fourgon',
    pickup: 'Marché de Rungis, Hall C',
    dropoff: 'Épicerie Fine Delices, Montmartre',
    date: '16 Mai 2024',
    time: '09:00',
    status: 'En Route',
    transportCompany: 'Rungis Logistics',
    phone: '+33 1 98 76 54 32'
  },
  {
    id: 'BK-12352',
    vehicleType: 'Camionnette',
    pickup: 'Marché de Rungis, Pavillon Poissons',
    dropoff: 'Bistro Maritime, Seine',
    date: '17 Mai 2024',
    time: '06:45',
    status: 'Confirmé',
    transportCompany: 'Trans Express',
    phone: '+33 1 23 45 67 89'
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
    rating: 4.8,
    distance: '2.3 km'
  },
  {
    id: 'VH-102',
    type: 'Fourgon',
    capacity: '1.2 tonnes',
    price: '180 €/jour',
    company: 'Rungis Logistics',
    rating: 4.6,
    distance: '1.5 km'
  },
  {
    id: 'VH-103',
    type: 'Camionnette',
    capacity: '800 kg',
    price: '120 €/jour',
    company: 'Trans Express',
    rating: 4.7,
    distance: '3.1 km'
  },
  {
    id: 'VH-104',
    type: 'Camion Plateau',
    capacity: '3 tonnes',
    price: '220 €/jour',
    company: 'Rungis Transport',
    rating: 4.9,
    distance: '0.8 km'
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
                        <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={CHART_COLOR_LIGHT} stopOpacity={0.8}/>
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
            
            {/* Replace Transport Expenses with Delivery Status */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">État des Livraisons</CardTitle>
                <CardDescription>Statut actuel de vos commandes</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="w-full flex flex-col items-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={deliveryStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {deliveryStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {deliveryStatusData.map((entry, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-1" 
                          style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }} 
                        />
                        <span className="text-xs">{entry.name}: {entry.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add Customer Satisfaction Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Satisfaction Client</CardTitle>
              <CardDescription>Évolution mensuelle des notes de satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis domain={[3, 5]} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
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
          
          {/* Weekly Charts */}
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
                        <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={CHART_COLOR_LIGHT} stopOpacity={0.8}/>
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
            
            {/* Delivery Status Weekly */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">État des Livraisons</CardTitle>
                <CardDescription>Statut actuel de vos commandes</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="w-full flex flex-col items-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={deliveryStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {deliveryStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {deliveryStatusData.map((entry, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-1" 
                          style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }} 
                        />
                        <span className="text-xs">{entry.name}: {entry.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Satisfaction Weekly */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Satisfaction Client</CardTitle>
              <CardDescription>Évolution mensuelle des notes de satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis domain={[3, 5]} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
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
                        <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={CHART_COLOR_LIGHT} stopOpacity={0.8}/>
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
            
            {/* Delivery Status Monthly */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">État des Livraisons</CardTitle>
                <CardDescription>Statut actuel de vos commandes</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="w-full flex flex-col items-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={deliveryStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {deliveryStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {deliveryStatusData.map((entry, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-1" 
                          style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }} 
                        />
                        <span className="text-xs">{entry.name}: {entry.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Satisfaction Monthly */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Satisfaction Client</CardTitle>
              <CardDescription>Évolution mensuelle des notes de satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis domain={[3, 5]} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Bookings - Redesigned */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Vos Transports</CardTitle>
                <CardDescription>Suivez vos réservations en cours</CardDescription>
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
              {activeBookings.map((booking) => (
                <div key={booking.id} className="p-4 hover:bg-muted/10 transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge className={cn(
                          booking.status === 'Confirmé' ? "bg-amber-500" : 
                          booking.status === 'En Route' ? "bg-primary" : 
                          "bg-green-500"
                        )}>
                          {booking.status}
                        </Badge>
                        <span className="font-medium">{booking.id}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {booking.date} • {booking.time}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>{booking.vehicleType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span>{booking.transportCompany}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">De:</span>
                      <span className="font-medium">{booking.pickup}</span>
                      <span className="text-muted-foreground mx-1">→</span>
                      <span className="text-muted-foreground">À:</span>
                      <span className="font-medium">{booking.dropoff}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <PhoneCall className="h-4 w-4 mr-1 text-primary" />
                        {booking.phone}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Suivre
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-muted/5 border-t">
              <Button className="w-full" asChild>
                <Link to="/dashboard/bookings/new">
                  Nouvelle Réservation de Transport
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Available Vehicles - Redesigned */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Véhicules Disponibles</CardTitle>
                <CardDescription>Trouvez un transporteur adapté à vos besoins</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/vehicles" className="flex items-center">
                  Voir Tout <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher par type, capacité..."
                  className="w-full rounded-md h-9 pl-9 pr-4 border border-input"
                />
              </div>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-1" />
                Filtrer
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {availableVehicles.map((vehicle) => (
                <div key={vehicle.id} className="p-4 hover:bg-muted/10 transition-colors">
                  <div className="flex justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Truck className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <h4 className="font-medium">{vehicle.type}</h4>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">{vehicle.capacity}</span>
                            <span className="text-primary font-medium">{vehicle.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{vehicle.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{vehicle.distance}</span>
                        </div>
                        <div className="flex items-center text-amber-500">
                          <Star className="h-4 w-4 mr-1 fill-amber-500" />
                          <span>{vehicle.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Button size="sm">Réserver</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-muted/5 border-t">
              <Button variant="outline" className="w-full">
                Afficher plus de véhicules
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

export default ClientDashboard;
