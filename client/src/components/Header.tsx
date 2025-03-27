import { useState } from "react";
import { Link } from "wouter";
import { 
  Phone,
  Mail,
  Menu,
  X
} from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-2 flex items-center justify-center"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11L5 15H19L16 11M7 5C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H7Z" stroke="#FFEB3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <Link href="/">
            <a className="text-2xl md:text-3xl font-bangers tracking-wide text-yellow-300">
              WILD<span className="text-pink-500">CARS</span>.com
            </a>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#" text="Car Leasing" />
          <NavLink href="#" text="Van Leasing" />
          <NavLink href="#" text="Manufacturers" />
          <NavLink href="#" text="About" />
          <NavLink href="#" text="Deals" />
        </nav>

        {/* Contact */}
        <div className="hidden md:block">
          <div className="text-xl font-bold text-yellow-300 flex items-center">
            <Phone size={18} className="mr-1" /> 01234 567890
          </div>
          <div className="text-xs text-white flex items-center">
            <Mail size={14} className="mr-1" /> Click to email me
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-pink-500 text-white rounded-full p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-dark border-t border-gray-700"
        >
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="#" className="block text-white hover:text-yellow-300 py-2 font-semibold">Car Leasing</a>
            <a href="#" className="block text-white hover:text-yellow-300 py-2 font-semibold">Van Leasing</a>
            <a href="#" className="block text-white hover:text-yellow-300 py-2 font-semibold">Manufacturers</a>
            <a href="#" className="block text-white hover:text-yellow-300 py-2 font-semibold">About</a>
            <a href="#" className="block text-white hover:text-yellow-300 py-2 font-semibold">Deals</a>
            
            <div className="pt-2 border-t border-gray-700">
              <div className="text-xl font-bold text-yellow-300 flex items-center">
                <Phone size={18} className="mr-1" /> 01234 567890
              </div>
              <div className="text-xs text-white flex items-center">
                <Mail size={14} className="mr-1" /> Click to email me
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a 
      href={href} 
      className="text-white hover:text-yellow-300 transition-colors relative group"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}
