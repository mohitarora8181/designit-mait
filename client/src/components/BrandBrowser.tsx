import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { carBrands } from "@/assets/carLogos";

export default function BrandBrowser() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bangers text-center text-dark mb-2">BROWSE BY BRAND</h2>
        <p className="text-center text-lg mb-8">Pick a brand to see our wildest deals!</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {carBrands.map((brand, index) => (
            <BrandCard 
              key={index} 
              name={brand.name} 
              logo={brand.logo} 
            />
          ))}
          
          <motion.a 
            href="#" 
            className="bg-yellow-400 rounded-lg p-4 flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <MoreHorizontal size={34} className="text-dark" />
            </div>
            <span className="text-dark font-semibold mt-2">View All</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

interface BrandCardProps {
  name: string;
  logo: string;
}

function BrandCard({ name, logo }: BrandCardProps) {
  return (
    <motion.a 
      href="#" 
      className="bg-white rounded-lg p-4 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <img src={logo} alt={name} className="w-12 h-12 object-contain" />
      </div>
      <span className="text-dark font-semibold mt-2">{name}</span>
    </motion.a>
  );
}
