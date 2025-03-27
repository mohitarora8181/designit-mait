import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-[10%] z-50 rounded-2xl w-[80%] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight">
                            Team Portfolio
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-sm font-medium hover:text-black/70 transition-colors">
                            Our Team
                        </a>
                        <a href="#portfolio" className="text-sm font-medium hover:text-black/70 transition-colors">
                            Portfolio
                        </a>
                        <a href="#process" className="text-sm font-medium hover:text-black/70 transition-colors">
                            Process
                        </a>
                        <a href="#contact" className="text-sm font-medium hover:text-black/70 transition-colors">
                            Contact
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
                       bg-black text-white h-10 px-4 py-2 shadow-sm hover:bg-black/80"
                        >
                            Get in touch
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white p-4 shadow-lg animate-fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                            Our Team
                        </a>
                        <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                            Portfolio
                        </a>
                        <a href="#process" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                            Process
                        </a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                            Contact
                        </a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <a
                            href="#contact"
                            className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-black text-white hover:bg-black/80"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
