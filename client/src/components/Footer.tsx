import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bangers text-yellow-300 mb-4">WILDCARS.com</h3>
            <p className="text-sm mb-4 max-w-md">
              The CRAZIEST car leasing site with INSANE deals! We're here to get you the best deals with minimum fuss and maximum excitement!
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Youtube size={18} />} href="#" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-yellow-300 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <FooterLink text="Home" href="/" />
                <FooterLink text="Car Leasing" href="#" />
                <FooterLink text="Van Leasing" href="#" />
                <FooterLink text="Special Offers" href="#" />
                <FooterLink text="About Us" href="#" />
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-yellow-300 mb-3">Popular Searches</h4>
              <ul className="space-y-2 text-sm">
                <FooterLink text="Electric Cars" href="#" />
                <FooterLink text="SUVs" href="#" />
                <FooterLink text="Hybrids" href="#" />
                <FooterLink text="Business Leasing" href="#" />
                <FooterLink text="In Stock Vehicles" href="#" />
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-yellow-300 mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Phone size={14} className="mr-2 text-pink-500" /> 01234 567890
                </li>
                <li className="flex items-center">
                  <Mail size={14} className="mr-2 text-pink-500" /> info@wildcars.com
                </li>
                <li className="flex items-start">
                  <MapPin size={14} className="mr-2 mt-1 text-pink-500" /> 
                  <span>123 Crazy Street, Cartown, CT1 2AB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WILDCARS.com. All rights reserved. Terms & Conditions apply.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" 
              alt="Trustpilot" 
              className="h-8 bg-white p-1 rounded"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" 
              alt="Feefo" 
              className="h-8 bg-white p-1 rounded"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
              alt="BVRLA" 
              className="h-8 bg-white p-1 rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      className="text-white hover:text-yellow-300 transition-colors"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
}

interface FooterLinkProps {
  href: string;
  text: string;
}

function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <li>
      <Link href={href}>
        <a className="text-white hover:text-yellow-300 transition-colors">{text}</a>
      </Link>
    </li>
  );
}
