
import React, { useState } from 'react';
import { MapPin, Truck, Package, Ruler, Scale, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';

const SearchForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    startPoint: '',
    endPoint: '',
    vehicleType: '',
    pallets: '',
    dimensions: {
      x: '',
      y: '',
      z: ''
    },
    weight: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData] as Record<string, string>,
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search-results', { state: { searchParams: formData } });
  };

  const vehicleTypes = [
    { value: 'van', label: 'Van' },
    { value: 'light_truck', label: 'Light Truck' },
    { value: 'medium_truck', label: 'Medium Truck' },
    { value: 'heavy_truck', label: 'Heavy Truck' },
    { value: 'refrigerated', label: 'Refrigerated Truck' }
  ];

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto bg-white shadow-glass-lg rounded-xl overflow-hidden backdrop-blur-sm border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="p-1">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="startPoint" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Starting Point
              </Label>
              <div className="relative">
                <Input
                  id="startPoint"
                  name="startPoint"
                  value={formData.startPoint}
                  onChange={handleInputChange}
                  placeholder="Enter pickup location"
                  className="pl-10 transition-all"
                  required
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endPoint" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Ending Point
              </Label>
              <div className="relative">
                <Input
                  id="endPoint"
                  name="endPoint"
                  value={formData.endPoint}
                  onChange={handleInputChange}
                  placeholder="Enter destination"
                  className="pl-10 transition-all"
                  required
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="vehicleType" className="text-sm font-medium flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> Vehicle Type
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange(value, 'vehicleType')}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  {vehicleTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pallets" className="text-sm font-medium flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" /> Number of Pallets
              </Label>
              <div className="relative">
                <Input
                  id="pallets"
                  name="pallets"
                  type="number"
                  min="1"
                  value={formData.pallets}
                  onChange={handleInputChange}
                  placeholder="Enter number of pallets"
                  className="pl-10 transition-all"
                  required
                />
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Ruler className="h-4 w-4 text-primary" /> Dimensions (cm)
              </Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="relative">
                  <Input
                    id="dimensions.x"
                    name="dimensions.x"
                    type="number"
                    min="1"
                    value={formData.dimensions.x}
                    onChange={handleInputChange}
                    placeholder="Width"
                    className="pl-6 transition-all"
                    required
                  />
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">W:</span>
                </div>
                <div className="relative">
                  <Input
                    id="dimensions.y"
                    name="dimensions.y"
                    type="number"
                    min="1"
                    value={formData.dimensions.y}
                    onChange={handleInputChange}
                    placeholder="Length"
                    className="pl-6 transition-all"
                    required
                  />
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">L:</span>
                </div>
                <div className="relative">
                  <Input
                    id="dimensions.z"
                    name="dimensions.z"
                    type="number"
                    min="1"
                    value={formData.dimensions.z}
                    onChange={handleInputChange}
                    placeholder="Height"
                    className="pl-6 transition-all"
                    required
                  />
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">H:</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight" className="text-sm font-medium flex items-center gap-2">
                <Scale className="h-4 w-4 text-primary" /> Total Weight (kg)
              </Label>
              <div className="relative">
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  min="1"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="Enter total weight"
                  className="pl-10 transition-all"
                  required
                />
                <Scale className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-base font-medium animate-button"
            >
              <Search className="mr-2 h-5 w-5" /> Search Vehicles
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SearchForm;
