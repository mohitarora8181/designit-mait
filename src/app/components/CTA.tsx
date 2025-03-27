
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section id="contact" className="section bg-black text-white py-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="section-title animate-fade-up animate-once animate-fill-both">Ready to Connect with us?</h2>
                    <p className="section-subtitle animate-fade-up animate-delay-100 animate-once animate-fill-both text-gray-300">
                        Let's collaborate to bring your vision to life with precision and purpose.
                    </p>

                    <div className="mt-10 animate-fade-up animate-delay-200 animate-once animate-fill-both">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
                       bg-white text-black h-11 px-8 py-2 shadow-sm hover:bg-white/90"
                        >
                            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;