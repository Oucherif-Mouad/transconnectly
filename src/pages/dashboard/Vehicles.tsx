
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Search, Filter, Plus, Truck, Settings, Calendar, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy data
const vehiclesData = [
  {
    id: 'VH-001',
    name: 'Renault Master Frigo',
    type: 'Camion Frigorifique',
    licensePlate: 'AB-123-CD',
    capacity: '2.5 tonnes',
    dimensions: '4.5m x 2.1m x 2.2m',
    temperature: '-10°C à +5°C',
    year: '2021',
    nextMaintenance: '15 Juin 2023',
    status: 'Disponible',
    bookings: 124
  },
  {
    id: 'VH-002',
    name: 'Citroën Jumpy',
    type: 'Fourgon',
    licensePlate: 'EF-456-GH',
    capacity: '1.2 tonnes',
    dimensions: '3.9m x 1.9m x 1.9m',
    temperature: null,
    year: '2020',
    nextMaintenance: '22 Mai 2023',
    status: 'Réservé',
    bookings: 98
  },
  {
    id: 'VH-003',
    name: 'Renault Kangoo',
    type: 'Camionnette',
    licensePlate: 'IJ-789-KL',
    capacity: '800 kg',
    dimensions: '3.0m x 1.7m x 1.8m',
    temperature: null,
    year: '2022',
    nextMaintenance: '10 Juillet 2023',
    status: 'Disponible',
    bookings: 75
  },
  {
    id: 'VH-004',
    name: 'Mercedes Sprinter',
    type: 'Camion Plateau',
    licensePlate: 'MN-012-OP',
    capacity: '3 tonnes',
    dimensions: '5.2m x 2.2m x 2.3m',
    temperature: null,
    year: '2019',
    nextMaintenance: '05 Mai 2023',
    status: 'En Maintenance',
    bookings: 156
  },
  {
    id: 'VH-005',
    name: 'Iveco Daily',
    type: 'Camion Multi-température',
    licensePlate: 'QR-345-ST',
    capacity: '2.8 tonnes',
    dimensions: '4.8m x 2.1m x 2.2m',
    temperature: '-20°C à +10°C',
    year: '2020',
    nextMaintenance: '30 Mai 2023',
    status: 'Disponible',
    bookings: 112
  },
  {
    id: 'VH-006',
    name: 'Peugeot Expert',
    type: 'Fourgonnette',
    licensePlate: 'UV-678-WX',
    capacity: '1 tonne',
    dimensions: '3.5m x 1.8m x 1.9m',
    temperature: null,
    year: '2021',
    nextMaintenance: '18 Juin 2023',
    status: 'Réservé',
    bookings: 87
  }
];

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData);
  const [newVehicle, setNewVehicle] = useState({
    name: '',
    type: '',
    licensePlate: '',
    capacity: '',
    dimensions: '',
    temperature: '',
    year: ''
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (!value) {
      setFilteredVehicles(vehiclesData);
      return;
    }
    
    const searchResults = vehiclesData.filter(vehicle => 
      vehicle.id.toLowerCase().includes(value.toLowerCase()) ||
      vehicle.name.toLowerCase().includes(value.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(value.toLowerCase()) ||
      vehicle.licensePlate.toLowerCase().includes(value.toLowerCase())
    );
    
    setFilteredVehicles(searchResults);
  };

  const handleNewVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewVehicle(prev => ({ ...prev, [name]: value }));
  };

  const handleAddVehicle = () => {
    // Handle the form submission - in a real app, this would send data to a backend
    console.log('New vehicle data:', newVehicle);
    setDialogOpen(false);
    // Reset form
    setNewVehicle({
      name: '',
      type: '',
      licensePlate: '',
      capacity: '',
      dimensions: '',
      temperature: '',
      year: ''
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible':
        return 'bg-green-500';
      case 'Réservé':
        return 'bg-blue-500';
      case 'En Maintenance':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-1">Véhicules</h2>
          <p className="text-muted-foreground">Gérez votre flotte de véhicules et leur statut</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Ajouter un Véhicule
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Ajouter un Nouveau Véhicule</DialogTitle>
              <DialogDescription>
                Remplissez les détails du véhicule. Cliquez sur Ajouter quand vous avez terminé.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="col-span-2">
                <Label htmlFor="name">Nom du Véhicule</Label>
                <Input
                  id="name"
                  name="name"
                  value={newVehicle.name}
                  onChange={handleNewVehicleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="type">Type de Véhicule</Label>
                <Input
                  id="type"
                  name="type"
                  value={newVehicle.type}
                  onChange={handleNewVehicleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="licensePlate">Plaque d'Immatriculation</Label>
                <Input
                  id="licensePlate"
                  name="licensePlate"
                  value={newVehicle.licensePlate}
                  onChange={handleNewVehicleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="capacity">Capacité</Label>
                <Input
                  id="capacity"
                  name="capacity"
                  value={newVehicle.capacity}
                  onChange={handleNewVehicleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="year">Année</Label>
                <Input
                  id="year"
                  name="year"
                  value={newVehicle.year}
                  onChange={handleNewVehicleChange}
                  className="mt-1"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="dimensions">Dimensions (L x l x H)</Label>
                <Input
                  id="dimensions"
                  name="dimensions"
                  value={newVehicle.dimensions}
                  onChange={handleNewVehicleChange}
                  className="mt-1"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="temperature">Plage de Température (si applicable)</Label>
                <Input
                  id="temperature"
                  name="temperature"
                  value={newVehicle.temperature}
                  onChange={handleNewVehicleChange}
                  className="mt-1"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Annuler</Button>
              <Button onClick={handleAddVehicle}>Ajouter Véhicule</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher par ID, nom, type, immatriculation..."
                className="pl-9"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              <span>Filtres</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="available">Disponibles</TabsTrigger>
          <TabsTrigger value="booked">Réservés</TabsTrigger>
          <TabsTrigger value="maintenance">En Maintenance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden">
                <div className="relative h-40 bg-gradient-to-r from-primary/10 to-accent flex items-center justify-center">
                  <Truck className="h-20 w-20 text-primary/50" />
                  <Badge className={cn("absolute top-3 right-3", getStatusColor(vehicle.status))}>
                    {vehicle.status}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle>{vehicle.name}</CardTitle>
                      <CardDescription>{vehicle.type} | {vehicle.licensePlate}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {vehicle.bookings} réservations
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="text-muted-foreground">Capacité:</div>
                    <div className="font-medium">{vehicle.capacity}</div>
                    
                    <div className="text-muted-foreground">Dimensions:</div>
                    <div className="font-medium">{vehicle.dimensions}</div>
                    
                    {vehicle.temperature && (
                      <>
                        <div className="text-muted-foreground">Température:</div>
                        <div className="font-medium">{vehicle.temperature}</div>
                      </>
                    )}
                    
                    <div className="text-muted-foreground">Année:</div>
                    <div className="font-medium">{vehicle.year}</div>
                    
                    <div className="text-muted-foreground">Maintenance:</div>
                    <div className={cn(
                      "font-medium",
                      new Date(vehicle.nextMaintenance) < new Date() ? "text-red-500" : ""
                    )}>
                      {new Date(vehicle.nextMaintenance) < new Date() && (
                        <AlertTriangle className="inline h-3 w-3 mr-1" />
                      )}
                      {vehicle.nextMaintenance}
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 pb-6 pt-0 flex gap-2 justify-end">
                  <Button variant="outline" size="sm" className="flex gap-2">
                    <Calendar className="h-4 w-4" />
                    Réservations
                  </Button>
                  <Button size="sm" className="flex gap-2">
                    <Settings className="h-4 w-4" />
                    Gérer
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="available" className="mt-4">
          <p className="text-center text-muted-foreground py-4">
            Filtré pour montrer uniquement les véhicules disponibles
          </p>
        </TabsContent>
        
        <TabsContent value="booked" className="mt-4">
          <p className="text-center text-muted-foreground py-4">
            Filtré pour montrer uniquement les véhicules réservés
          </p>
        </TabsContent>
        
        <TabsContent value="maintenance" className="mt-4">
          <p className="text-center text-muted-foreground py-4">
            Filtré pour montrer uniquement les véhicules en maintenance
          </p>
        </TabsContent>
      </Tabs>
      
      <div className="text-sm text-muted-foreground">
        Affichage de {filteredVehicles.length} véhicules sur {vehiclesData.length}
      </div>
    </DashboardLayout>
  );
};

export default Vehicles;
