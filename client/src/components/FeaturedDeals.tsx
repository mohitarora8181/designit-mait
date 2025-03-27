import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { dealsList } from "@/lib/data";

export default function FeaturedDeals() {
  return (
    <div className="py-12 bg-gradient-to-r from-purple-600/10 to-pink-500/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bangers text-center text-dark mb-2">HOT DEALS THIS MONTH!</h2>
        <p className="text-center text-lg mb-10">These won't last long! Our most popular lease deals right now.</p>
        
        {/* Deal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealsList.map((deal, index) => (
            <DealCard key={index} deal={deal} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <motion.button
            className="inline-flex items-center bg-dark hover:bg-dark/80 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All Car Deals <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

interface DealCardProps {
  deal: {
    name: string;
    description: string;
    image: string;
    price: number;
    initialPayment: number;
    months: number;
    mileage: number;
    engine: string;
    badges: {
      type: string;
      text: string;
      bgColor: string;
      textColor: string;
    }[];
  };
}

function DealCard({ deal }: DealCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={deal.image} 
          alt={deal.name} 
          className="w-full h-48 object-cover" 
        />
        {deal.badges.map((badge, index) => (
          <div 
            key={index} 
            className={`absolute top-0 ${index === 0 ? 'left-0' : 'right-0'} ${badge.bgColor} ${badge.textColor} text-xs font-bold px-2 py-1`}
          >
            {badge.text}
          </div>
        ))}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-xl text-dark">{deal.name}</h3>
        <p className="text-sm text-gray-600">{deal.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="text-xs text-gray-500">Monthly Price</div>
            <div className="text-2xl font-bold text-pink-500">£{deal.price}</div>
            <div className="text-xs">Inc. VAT</div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-500">Initial Payment</div>
            <div className="font-bold">£{deal.initialPayment}</div>
            <div className="text-xs">9 months</div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-gray-100 p-2 rounded">
            <div className="font-bold">{deal.months}</div>
            <div>months</div>
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <div className="font-bold">{deal.mileage.toLocaleString()}</div>
            <div>miles/yr</div>
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <div className="font-bold">{deal.engine}</div>
            <div>{deal.engine === 'EV' ? 'electric' : 'engine'}</div>
          </div>
        </div>
        
        <motion.button 
          className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Deal
        </motion.button>
      </div>
    </motion.div>
  );
}
