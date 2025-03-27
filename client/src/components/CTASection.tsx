import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <div className="py-12 bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bangers text-yellow-300 mb-4">
          DON'T MISS OUT ON THE WILDEST DEALS!
        </h2>
        <p className="text-white text-xl mb-8">
          Get your dream car today with our CRAZY low monthly payments!
        </p>
        
        <motion.button 
          className="bg-yellow-400 hover:bg-yellow-300 text-dark text-2xl font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 4px 6px rgba(0,0,0,0.1)", 
              "0 10px 15px rgba(0,0,0,0.2)", 
              "0 4px 6px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          FIND MY PERFECT CAR NOW!
        </motion.button>
        
        <div className="mt-6 text-white">
          <p className="text-sm">We'll match you with the best deal for your needs and budget!</p>
        </div>
      </div>
    </div>
  );
}
