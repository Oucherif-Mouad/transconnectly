
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { VehicleCard, VehicleType } from '@/components/vehicles/VehicleCard';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Truck, Filter, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const SearchResults = () => {
  const location = useLocation();
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<VehicleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceRange: [0, 200],
    vehicleTypes: [] as string[],
    availability: [] as string[],
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const searchParams = location.state?.searchParams || {};
  
  useEffect(() => {
    // Simulating API request
    setTimeout(() => {
      // Mock data
      const mockVehicles: VehicleType[] = [
        {
          id: '1',
          image: 'https://images.unsplash.com/photo-1600320402576-a309a014c2dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'Mercedes-Benz Sprinter',
          type: 'Van',
          capacity: {
            pallets: 4,
            weight: 1500
          },
          dimensions: {
            length: 320,
            width: 170,
            height: 190
          },
          availability: 'Available',
          price: {
            hour: 45,
            day: 280
          }
        },
        {
          id: '2',
          image: 'https://images.unsplash.com/photo-1532298013760-608e5e0ab2e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'Iveco Daily',
          type: 'Light Truck',
          capacity: {
            pallets: 6,
            weight: 2500
          },
          dimensions: {
            length: 420,
            width: 200,
            height: 210
          },
          availability: 'Limited',
          price: {
            hour: 65,
            day: 380
          }
        },
        {
          id: '3',
          image: 'https://images.unsplash.com/photo-1599232288126-f0297b18967b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'Volvo FH16',
          type: 'Heavy Truck',
          capacity: {
            pallets: 16,
            weight: 8000
          },
          dimensions: {
            length: 650,
            width: 250,
            height: 280
          },
          availability: 'Available',
          price: {
            hour: 120,
            day: 720
          }
        },
        {
          id: '4',
          image: 'https://images.unsplash.com/photo-1546396771-1bdfc3a60a6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'Iveco Eurocargo',
          type: 'Medium Truck',
          capacity: {
            pallets: 12,
            weight: 5000
          },
          dimensions: {
            length: 550,
            width: 240,
            height: 260
          },
          availability: 'Available',
          price: {
            hour: 95,
            day: 580
          }
        },
        {
          id: '5',
          image: 'https://images.unsplash.com/photo-1626056987145-9b182ab4d9c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'MAN TGX',
          type: 'Heavy Truck',
          capacity: {
            pallets: 18,
            weight: 9000
          },
          dimensions: {
            length: 680,
            width: 260,
            height: 290
          },
          availability: 'Limited',
          price: {
            hour: 135,
            day: 800
          }
        },
        {
          id: '6',
          image: 'https://images.unsplash.com/photo-1586705207132-3faf47615a8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'Renault Master',
          type: 'Van',
          capacity: {
            pallets: 3,
            weight: 1200
          },
          dimensions: {
            length: 300,
            width: 160,
            height: 180
          },
          availability: 'Unavailable',
          price: {
            hour: 40,
            day: 250
          }
        },
        {
          id: '7',
          image: 'https://images.unsplash.com/photo-1506633541287-7168b8741af1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'Scania R450',
          type: 'Refrigerated Truck',
          capacity: {
            pallets: 14,
            weight: 7000
          },
          dimensions: {
            length: 620,
            width: 250,
            height: 270
          },
          availability: 'Available',
          price: {
            hour: 110,
            day: 660
          }
        },
        {
          id: '8',
          image: 'https://images.unsplash.com/photo-1592807729516-39ab85a824b0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3',
          name: 'DAF XF',
          type: 'Heavy Truck',
          capacity: {
            pallets: 16,
            weight: 8500
          },
          dimensions: {
            length: 660,
            width: 250,
            height: 280
          },
          availability: 'Available',
          price: {
            hour: 125,
            day: 750
          }
        }
      ];
      
      setVehicles(mockVehicles);
      setFilteredVehicles(mockVehicles);
      setLoading(false);
      
      // Initialize price range based on data
      const prices = mockVehicles.map(v => v.price.hour);
      setFilters(prev => ({
        ...prev,
        priceRange: [Math.min(...prices), Math.max(...prices)]
      }));
    }, 1500);
  }, []);
  
  useEffect(() => {
    if (vehicles.length) {
      let result = [...vehicles];
      
      // Filter by price
      result = result.filter(
        vehicle => 
          vehicle.price.hour >= filters.priceRange[0] && 
          vehicle.price.hour <= filters.priceRange[1]
      );
      
      // Filter by vehicle type
      if (filters.vehicleTypes.length > 0) {
        result = result.filter(vehicle => 
          filters.vehicleTypes.includes(vehicle.type)
        );
      }
      
      // Filter by availability
      if (filters.availability.length > 0) {
        result = result.filter(vehicle => 
          filters.availability.includes(vehicle.availability)
        );
      }
      
      setFilteredVehicles(result);
    }
  }, [filters, vehicles]);
  
  const toggleVehicleType = (type: string) => {
    setFilters(prev => {
      const types = prev.vehicleTypes.includes(type)
        ? prev.vehicleTypes.filter(t => t !== type)
        : [...prev.vehicleTypes, type];
      
      return { ...prev, vehicleTypes: types };
    });
  };
  
  const toggleAvailability = (status: string) => {
    setFilters(prev => {
      const statuses = prev.availability.includes(status)
        ? prev.availability.filter(s => s !== status)
        : [...prev.availability, status];
      
      return { ...prev, availability: statuses };
    });
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  };
  
  const vehicleTypes = [...new Set(vehicles.map(v => v.type))];
  const availabilityOptions = [...new Set(vehicles.map(v => v.availability))];
  
  const handleMobileFiltersToggle = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };
  
  return (
    <Layout>
      <div className="py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Search Results</h1>
            <div className="text-muted-foreground mt-1">
              {filteredVehicles.length} vehicles found for your requirements
            </div>
            
            {/* Search Parameters Summary */}
            {Object.keys(searchParams).length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {searchParams.startPoint && (
                  <Badge variant="secondary" className="px-3 py-1">
                    From: {searchParams.startPoint}
                  </Badge>
                )}
                {searchParams.endPoint && (
                  <Badge variant="secondary" className="px-3 py-1">
                    To: {searchParams.endPoint}
                  </Badge>
                )}
                {searchParams.pallets && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {searchParams.pallets} Pallets
                  </Badge>
                )}
                {searchParams.weight && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {searchParams.weight} kg
                  </Badge>
                )}
              </div>
            )}
          </div>
          
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={handleMobileFiltersToggle}
          >
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <motion.aside 
            className="hidden md:block w-full md:w-64 flex-shrink-0 bg-white rounded-lg border border-border p-6 shadow-glass"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center mb-4">
              <Filter className="mr-2 h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>
            
            <div className="space-y-8">
              {/* Price Range Filter */}
              <div>
                <h3 className="text-sm font-medium mb-4">Price Range (€/hour)</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 200]}
                    value={filters.priceRange}
                    min={0}
                    max={200}
                    step={5}
                    onValueChange={handlePriceChange}
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-20">
                    <Input
                      type="number"
                      value={filters.priceRange[0]}
                      onChange={(e) => handlePriceChange([parseInt(e.target.value), filters.priceRange[1]])}
                      className="h-8"
                    />
                  </div>
                  <span className="text-muted-foreground">to</span>
                  <div className="w-20">
                    <Input
                      type="number"
                      value={filters.priceRange[1]}
                      onChange={(e) => handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])}
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
              
              {/* Vehicle Type Filter */}
              <div>
                <h3 className="text-sm font-medium mb-4">Vehicle Type</h3>
                <div className="space-y-3">
                  {vehicleTypes.map((type) => (
                    <div key={type} className="flex items-center">
                      <Checkbox
                        id={`vehicle-type-${type}`}
                        checked={filters.vehicleTypes.includes(type)}
                        onCheckedChange={() => toggleVehicleType(type)}
                      />
                      <Label
                        htmlFor={`vehicle-type-${type}`}
                        className="ml-2 text-sm font-normal cursor-pointer"
                      >
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Availability Filter */}
              <div>
                <h3 className="text-sm font-medium mb-4">Availability</h3>
                <div className="space-y-3">
                  {availabilityOptions.map((status) => (
                    <div key={status} className="flex items-center">
                      <Checkbox
                        id={`availability-${status}`}
                        checked={filters.availability.includes(status)}
                        onCheckedChange={() => toggleAvailability(status)}
                      />
                      <Label
                        htmlFor={`availability-${status}`}
                        className="ml-2 text-sm font-normal cursor-pointer"
                      >
                        {status}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
          
          {/* Filters Sidebar - Mobile */}
          <motion.aside 
            className={`md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ${mobileFiltersOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileFiltersOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: mobileFiltersOpen ? 0 : '100%' }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={handleMobileFiltersToggle}>
                  &times;
                </Button>
              </div>
              
              <div className="space-y-8">
                {/* Price Range Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Price Range (€/hour)</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 200]}
                      value={filters.priceRange}
                      min={0}
                      max={200}
                      step={5}
                      onValueChange={handlePriceChange}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-20">
                      <Input
                        type="number"
                        value={filters.priceRange[0]}
                        onChange={(e) => handlePriceChange([parseInt(e.target.value), filters.priceRange[1]])}
                        className="h-8"
                      />
                    </div>
                    <span className="text-muted-foreground">to</span>
                    <div className="w-20">
                      <Input
                        type="number"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])}
                        className="h-8"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Vehicle Type Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Vehicle Type</h3>
                  <div className="space-y-3">
                    {vehicleTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox
                          id={`mobile-vehicle-type-${type}`}
                          checked={filters.vehicleTypes.includes(type)}
                          onCheckedChange={() => toggleVehicleType(type)}
                        />
                        <Label
                          htmlFor={`mobile-vehicle-type-${type}`}
                          className="ml-2 text-sm font-normal cursor-pointer"
                        >
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Availability Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Availability</h3>
                  <div className="space-y-3">
                    {availabilityOptions.map((status) => (
                      <div key={status} className="flex items-center">
                        <Checkbox
                          id={`mobile-availability-${status}`}
                          checked={filters.availability.includes(status)}
                          onCheckedChange={() => toggleAvailability(status)}
                        />
                        <Label
                          htmlFor={`mobile-availability-${status}`}
                          className="ml-2 text-sm font-normal cursor-pointer"
                        >
                          {status}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full" onClick={handleMobileFiltersToggle}>
                  Apply Filters
                </Button>
              </div>
            </motion.div>
          </motion.aside>
          
          {/* Results Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64">
                <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">Loading vehicles...</p>
              </div>
            ) : filteredVehicles.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-lg border border-border p-8 shadow-glass">
                <Truck className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No vehicles found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  We couldn't find any vehicles matching your criteria. Try adjusting your filters or search parameters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle, index) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
