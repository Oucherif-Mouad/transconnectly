
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Truck, Package, Scale, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export interface VehicleType {
  id: string;
  image: string;
  name: string;
  type: string;
  capacity: {
    pallets: number;
    weight: number;
  };
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  availability: string;
  price: {
    hour: number;
    day: number;
  };
}

interface VehicleCardProps {
  vehicle: VehicleType;
  index: number;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden border border-border shadow-elevation transition-all hover:shadow-elevation-md hover:-translate-y-1 duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium shadow-sharp">
          €{vehicle.price.hour}/hour
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{vehicle.name}</h3>
            <p className="text-muted-foreground text-sm">{vehicle.type}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            vehicle.availability === 'Available' ? 'bg-green-100 text-green-800' : 
            vehicle.availability === 'Limited' ? 'bg-amber-100 text-amber-800' : 
            'bg-red-100 text-red-800'
          }`}>
            {vehicle.availability}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-4 mb-4">
          <div className="flex items-center text-sm">
            <Package className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{vehicle.capacity.pallets} pallets</span>
          </div>
          <div className="flex items-center text-sm">
            <Scale className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{vehicle.capacity.weight} kg</span>
          </div>
          <div className="flex items-center text-sm">
            <Truck className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{vehicle.dimensions.length}x{vehicle.dimensions.width}x{vehicle.dimensions.height} cm</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>€{vehicle.price.day}/day</span>
          </div>
        </div>
        
        <Button 
          className="w-full mt-2 group-hover:bg-primary-foreground group-hover:text-primary transition-all"
          asChild
        >
          <Link to={`/booking/${vehicle.id}`}>Book Now</Link>
        </Button>
      </div>
    </motion.div>
  );
};
