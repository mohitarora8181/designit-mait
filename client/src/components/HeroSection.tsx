import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Car, 
  Truck,
  Camera,
  Search
} from "lucide-react";

import { backgroundPatterns } from "@/assets/backgrounds";
import { featuredCars } from "@/lib/data";

export default function HeroSection() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [vehicleType, setVehicleType] = useState<'car' | 'van'>('car');
  const [leaseType, setLeaseType] = useState<'personal' | 'business'>('personal');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedBody, setSelectedBody] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const currentCar = featuredCars[activeCarIndex];

  const nextCar = () => {
    setActiveCarIndex((prev) => (prev + 1) % featuredCars.length);
  };

  const prevCar = () => {
    setActiveCarIndex((prev) => (prev === 0 ? featuredCars.length - 1 : prev - 1));
  };

  const handleGetDeals = () => {
    // This would normally send form data to backend
    console.log({
      vehicleType,
      leaseType,
      selectedMake,
      selectedModel,
      selectedBody,
      selectedBudget
    });
  };

  return (
    <div 
      className="relative overflow-hidden py-8 md:py-12" 
      style={{ 
        backgroundImage: `url(${backgroundPatterns[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-500/80 mix-blend-multiply"></div>
      
      {/* Floating animated elements */}
      <motion.div 
        className="hidden md:block absolute top-10 right-20 bg-yellow-400 rounded-full h-16 w-16 opacity-50"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hidden md:block absolute bottom-10 left-20 bg-purple-600 rounded-full h-8 w-8 opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hidden md:block absolute top-1/2 left-1/3 bg-green-500 rounded-full h-12 w-12 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row relative z-10">
        {/* Featured Car */}
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCarIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-600/80 to-pink-500/80 rounded-lg p-6 shadow-lg">
                <h2 className="font-bangers text-yellow-300 text-4xl md:text-5xl mb-2 drop-shadow-md">
                  {currentCar.make} {currentCar.model}
                </h2>
                <div className="text-white text-xl mb-4">
                  {currentCar.details}
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <div className="relative">
                    <img 
                      src={currentCar.image} 
                      alt={`${currentCar.make} ${currentCar.model}`} 
                      className="rounded-lg shadow-lg max-w-full h-auto" 
                    />
                    <div className="absolute bottom-2 left-2 bg-dark/70 text-white text-xs p-1 rounded flex items-center">
                      <Camera size={12} className="mr-1" /> More Photos
                    </div>
                  </div>
                  
                  <div className="text-center mt-4 md:mt-0 p-4 bg-dark/50 rounded-lg">
                    <div className="text-yellow-300 font-bungee text-5xl md:text-6xl">
                      £{currentCar.price}
                    </div>
                    <div className="text-white text-xl uppercase">A MONTH</div>
                    <div className="text-white text-lg">INC VAT</div>
                    <div className="text-xs text-white mt-2">
                      BUSINESS PRICE £{Math.floor(currentCar.price * 0.8)} + VAT
                    </div>
                  </div>
                </div>
                
                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
                  <div className="bg-blue-500/90 text-white text-center py-4 rounded-lg shadow-md">
                    <div className="font-bold text-xl">{currentCar.term} month</div>
                    <div className="text-sm">contract</div>
                  </div>
                  <div className="bg-purple-600/90 text-white text-center py-4 rounded-lg shadow-md">
                    <div className="font-bold text-xl">{currentCar.upfront} months</div>
                    <div className="text-sm">upfront</div>
                  </div>
                  <div className="bg-green-500/90 text-white text-center py-4 rounded-lg shadow-md">
                    <div className="font-bold text-xl">{currentCar.mileage} miles</div>
                    <div className="text-sm">per year</div>
                  </div>
                </div>
              </div>
              
              {/* Car Controls */}
              <div className="absolute -bottom-4 right-4 flex">
                <button 
                  className="bg-dark text-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg mr-2"
                  onClick={prevCar}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="bg-yellow-400 text-dark rounded-full h-10 w-10 flex items-center justify-center shadow-lg"
                  onClick={nextCar}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Search Filters */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Vehicle Type Selector */}
            <div className="flex border-2 border-dark rounded-lg overflow-hidden mb-6">
              <button 
                className={`flex-1 py-3 ${vehicleType === 'car' ? 'bg-pink-500 text-white' : 'bg-dark text-white'} font-bold text-lg flex items-center justify-center`}
                onClick={() => setVehicleType('car')}
              >
                <Car size={18} className="mr-2" /> I want a car
              </button>
              <button 
                className={`flex-1 py-3 ${vehicleType === 'van' ? 'bg-pink-500 text-white' : 'bg-dark text-white'} font-bold text-lg flex items-center justify-center`}
                onClick={() => setVehicleType('van')}
              >
                <Truck size={18} className="mr-2" /> I want a van
              </button>
            </div>
            
            {/* Lease Type Selector */}
            <div className="flex rounded-lg overflow-hidden mb-6 border-2 border-yellow-400">
              <button 
                className={`flex-1 py-2 ${leaseType === 'personal' ? 'bg-yellow-400 text-dark' : 'bg-dark text-white'} font-bold`}
                onClick={() => setLeaseType('personal')}
              >
                Personal
              </button>
              <button 
                className={`flex-1 py-2 ${leaseType === 'business' ? 'bg-yellow-400 text-dark' : 'bg-dark text-white'} font-bold`}
                onClick={() => setLeaseType('business')}
              >
                Business
              </button>
            </div>
            
            {/* Search Filters */}
            <div className="space-y-4">
              {/* Make */}
              <div>
                <label className="block text-dark font-bold mb-1">Make</label>
                <div className="relative">
                  <select 
                    className="appearance-none bg-gray-100 border-2 border-pink-500 rounded-lg py-2 px-4 w-full font-semibold text-dark"
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                  >
                    <option value="">All makes</option>
                    <option value="tesla">Tesla</option>
                    <option value="bmw">BMW</option>
                    <option value="audi">Audi</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="volkswagen">Volkswagen</option>
                  </select>
                  <div className="absolute right-3 top-3 text-pink-500 pointer-events-none">
                    <ChevronDown />
                  </div>
                </div>
              </div>
              
              {/* Model */}
              <div>
                <label className="block text-dark font-bold mb-1">Model</label>
                <div className="relative">
                  <select 
                    className="appearance-none bg-gray-100 border-2 border-blue-500 rounded-lg py-2 px-4 w-full font-semibold text-dark"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    <option value="">All models</option>
                    <option value="model3">Model 3</option>
                    <option value="modely">Model Y</option>
                    <option value="models">Model S</option>
                    <option value="modelx">Model X</option>
                  </select>
                  <div className="absolute right-3 top-3 text-blue-500 pointer-events-none">
                    <ChevronDown />
                  </div>
                </div>
              </div>
              
              {/* Body Style */}
              <div>
                <label className="block text-dark font-bold mb-1">Body Style</label>
                <div className="relative">
                  <select 
                    className="appearance-none bg-gray-100 border-2 border-purple-600 rounded-lg py-2 px-4 w-full font-semibold text-dark"
                    value={selectedBody}
                    onChange={(e) => setSelectedBody(e.target.value)}
                  >
                    <option value="">All body styles</option>
                    <option value="suv">SUV</option>
                    <option value="sedan">Sedan</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="coupe">Coupe</option>
                  </select>
                  <div className="absolute right-3 top-3 text-purple-600 pointer-events-none">
                    <ChevronDown />
                  </div>
                </div>
              </div>
              
              {/* Budget */}
              <div>
                <label className="block text-dark font-bold mb-1">Monthly Budget</label>
                <div className="relative">
                  <select 
                    className="appearance-none bg-gray-100 border-2 border-green-500 rounded-lg py-2 px-4 w-full font-semibold text-dark"
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                  >
                    <option value="">Any budget</option>
                    <option value="200">Up to £200</option>
                    <option value="300">Up to £300</option>
                    <option value="400">Up to £400</option>
                    <option value="500">Up to £500</option>
                    <option value="1000">Up to £1000</option>
                  </select>
                  <div className="absolute right-3 top-3 text-green-500 pointer-events-none">
                    <ChevronDown />
                  </div>
                </div>
              </div>
              
              <motion.button 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold py-3 rounded-lg shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGetDeals}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 4px 6px rgba(0,0,0,0.1)", 
                    "0 10px 15px rgba(0,0,0,0.2)", 
                    "0 4px 6px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Search size={20} className="inline mr-2" /> GET CRAZY DEALS!
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
