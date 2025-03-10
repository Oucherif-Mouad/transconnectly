
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, CalendarRange, Filter, Eye, CheckCircle, Clock, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy data
const bookingsData = [
  {
    id: 'BK-12345',
    client: 'Restaurant La Belle Vue',
    vehicleType: 'Camion Frigorifique',
    pickup: 'Marché de Rungis, Hall A',
    dropoff: 'Restaurant La Belle Vue, Paris',
    date: '15 Mai 2023',
    time: '08:00',
    amount: '145 €',
    status: 'Confirmé'
  },
  {
    id: 'BK-12346',
    client: 'Supermarché Carrefour',
    vehicleType: 'Fourgon',
    pickup: 'Marché de Rungis, Hall C',
    dropoff: 'Supermarché Carrefour, Orly',
    date: '15 Mai 2023',
    time: '10:30',
    amount: '95 €',
    status: 'En Attente'
  },
  {
    id: 'BK-12347',
    client: 'Hôtel Mercure',
    vehicleType: 'Camionnette',
    pickup: 'Marché de Rungis, Pavillon Fruits',
    dropoff: 'Hôtel Mercure, Versailles',
    date: '16 Mai 2023',
    time: '07:15',
    amount: '120 €',
    status: 'Confirmé'
  },
  {
    id: 'BK-12348',
    client: 'Marché Saint-Germain',
    vehicleType: 'Camion Plateau',
    pickup: 'Marché de Rungis, Entrée D6',
    dropoff: 'Marché Saint-Germain, Paris',
    date: '16 Mai 2023',
    time: '09:00',
    amount: '180 €',
    status: 'Confirmé'
  },
  {
    id: 'BK-12349',
    client: 'Boulangerie Dupain',
    vehicleType: 'Fourgonnette',
    pickup: 'Marché de Rungis, Secteur BOF',
    dropoff: 'Boulangerie Dupain, Paris 15',
    date: '17 Mai 2023',
    time: '06:00',
    amount: '85 €',
    status: 'Terminé'
  },
  {
    id: 'BK-12350',
    client: 'Restaurant L\'Ardoise',
    vehicleType: 'Camion Frigorifique',
    pickup: 'Marché de Rungis, Pavillon Viande',
    dropoff: 'Restaurant L\'Ardoise, Paris 8',
    date: '17 Mai 2023',
    time: '07:30',
    amount: '160 €',
    status: 'Annulé'
  },
  {
    id: 'BK-12351',
    client: 'Traiteur Saveurs',
    vehicleType: 'Camion Multi-température',
    pickup: 'Marché de Rungis, Pavillon Gastronomie',
    dropoff: 'Traiteur Saveurs, Neuilly',
    date: '18 Mai 2023',
    time: '08:45',
    amount: '190 €',
    status: 'Confirmé'
  },
  {
    id: 'BK-12352',
    client: 'École Hôtelière',
    vehicleType: 'Fourgon',
    pickup: 'Marché de Rungis, Divers Pavillons',
    dropoff: 'École Hôtelière, Paris 17',
    date: '18 Mai 2023',
    time: '10:00',
    amount: '110 €',
    status: 'En Attente'
  }
];

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBookings, setFilteredBookings] = useState(bookingsData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (!value) {
      setFilteredBookings(bookingsData);
      return;
    }
    
    const searchResults = bookingsData.filter(booking => 
      booking.id.toLowerCase().includes(value.toLowerCase()) ||
      booking.client.toLowerCase().includes(value.toLowerCase()) ||
      booking.pickup.toLowerCase().includes(value.toLowerCase()) ||
      booking.dropoff.toLowerCase().includes(value.toLowerCase())
    );
    
    setFilteredBookings(searchResults);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmé':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'Terminé':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Annulé':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'En Attente':
        return <Clock className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmé':
        return 'bg-amber-500';
      case 'Terminé':
        return 'bg-green-500';
      case 'Annulé':
        return 'bg-red-500';
      case 'En Attente':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Réservations</h2>
        <p className="text-muted-foreground">Gérez toutes vos réservations de transport en un seul endroit.</p>
      </div>
      
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher par ID, client, adresse..."
                className="pl-9"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex gap-2">
                <CalendarRange className="h-4 w-4" />
                <span className="hidden md:inline">Filtrer par date</span>
              </Button>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden md:inline">Filtres</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">Toutes</TabsTrigger>
          <TabsTrigger value="upcoming">À Venir</TabsTrigger>
          <TabsTrigger value="completed">Terminées</TabsTrigger>
          <TabsTrigger value="canceled">Annulées</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">ID Réservation</th>
                      <th className="text-left p-4">Client</th>
                      <th className="text-left p-4">Date & Heure</th>
                      <th className="text-left p-4">Type de Véhicule</th>
                      <th className="text-left p-4">Montant</th>
                      <th className="text-left p-4">Statut</th>
                      <th className="text-right p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="border-b hover:bg-muted/50">
                        <td className="p-4 font-medium">{booking.id}</td>
                        <td className="p-4">{booking.client}</td>
                        <td className="p-4">{booking.date} à {booking.time}</td>
                        <td className="p-4">{booking.vehicleType}</td>
                        <td className="p-4 font-medium">{booking.amount}</td>
                        <td className="p-4">
                          <Badge className={cn("flex items-center gap-1.5", getStatusColor(booking.status))}>
                            {getStatusIcon(booking.status)}
                            {booking.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground py-4">
                Filtré pour montrer uniquement les réservations à venir
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground py-4">
                Filtré pour montrer uniquement les réservations terminées
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="canceled" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground py-4">
                Filtré pour montrer uniquement les réservations annulées
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Affichage de {filteredBookings.length} réservations sur {bookingsData.length}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" disabled>Précédent</Button>
          <Button variant="outline">Suivant</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Bookings;
