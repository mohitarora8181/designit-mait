import { motion } from "framer-motion";
import { Zap, Truck, Flame, ArrowRight } from "lucide-react";

export default function FeatureCategories() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bangers text-center text-dark mb-10">
          EXPLORE OUR <span className="text-pink-500">WILD</span> CATEGORIES!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Electric Category */}
          <FeatureCard
            title="Electric"
            tagline="Zero emissions, instant power, lower running costs!"
            description="Switch to electric and enjoy zero emissions, lower costs, and instant power! ⚡"
            image="https://images.unsplash.com/photo-1593941707882-a56bbc8df44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
            icon={<Zap size={16} />}
            iconText="HOT!"
            bgFrom="from-blue-500"
            bgTo="to-purple-600"
            buttonBg="bg-blue-500 hover:bg-blue-600"
            buttonText="View Electric Deals"
          />
          
          {/* In Stock Category */}
          <FeatureCard
            title="In Stock"
            tagline="Ready to roll! Fast delivery on available vehicles."
            description="WANNA LEASE FAST? ⏩ Our best deals on in-stock cars, ready to roll within weeks!"
            image="https://images.unsplash.com/photo-1620891549027-942faa27b3fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
            icon={<Truck size={16} />}
            iconText="FAST!"
            bgFrom="from-green-500"
            bgTo="to-yellow-500"
            buttonBg="bg-green-500 hover:bg-green-600"
            buttonText="View In-Stock Deals"
            rotate="-rotate-12"
          />
          
          {/* Special Offers Category */}
          <FeatureCard
            title="Special Offers"
            tagline="Our wildest deals that'll make your wallet happy!"
            description="We're OBSESSED with bringing you the BEST car lease deals! Prices that'll SHOCK you!"
            image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
            icon={<Flame size={16} />}
            iconText="CRAZY!"
            bgFrom="from-pink-500"
            bgTo="to-purple-600"
            buttonBg="bg-pink-500 hover:bg-pink-600"
            buttonText="View Special Offers"
            rotate="rotate-6"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  iconText: string;
  bgFrom: string;
  bgTo: string;
  buttonBg: string;
  buttonText: string;
  rotate?: string;
}

function FeatureCard({
  title,
  tagline,
  description,
  image,
  icon,
  iconText,
  bgFrom,
  bgTo,
  buttonBg,
  buttonText,
  rotate = "rotate-12"
}: FeatureCardProps) {
  return (
    <motion.div 
      className={`bg-gradient-to-br ${bgFrom} ${bgTo} rounded-lg overflow-hidden shadow-lg`}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-3xl font-bangers text-yellow-300">{title}</h3>
          <p className="text-white text-sm">{tagline}</p>
        </div>
        <div className={`absolute top-2 right-2 bg-yellow-400 text-dark font-bold text-xs p-1 rounded-full ${rotate}`}>
          {icon} {iconText}
        </div>
      </div>
      <div className="p-4 bg-dark text-white">
        <p>{description}</p>
        <button className={`mt-3 ${buttonBg} text-white font-bold py-2 px-4 rounded-full text-sm transition-colors flex items-center`}>
          {buttonText} <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
}
