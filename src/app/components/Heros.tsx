
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-30 md:pt-40 pb-16 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="animate-fade-up animate-once animate-fill-both text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight text-balance text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-400 to-gray-500">
                    The Impossible UI – Unique UX<br />with Precision & Purpose
                    </h1>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200 animate-once animate-fill-both">
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
                       bg-black text-white h-11 px-8 py-2 shadow-sm hover:bg-black/80 w-full sm:w-auto"
                        >
                            Our Approach
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
                       border border-input bg-background h-11 px-8 py-2 hover:bg-secondary w-full sm:w-auto"
                        >
                            View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>
    );
};

export default Hero;