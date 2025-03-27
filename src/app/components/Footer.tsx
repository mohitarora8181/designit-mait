
import { TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between gap-12">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Team Portfolio</h3>
                        <p className="text-muted-foreground text-sm">
                            Crafting digital experiences with precision and purpose for forward-thinking clients.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a target='_blank' href="https://www.x.com/mohit8181arora" className="text-muted-foreground hover:text-foreground transition-colors">
                                <TwitterIcon className="h-5 w-5" />
                            </a>
                            <a target='_blank' href="https://instagram.com/mohit8181" className="text-muted-foreground hover:text-foreground transition-colors">
                                <InstagramIcon className="h-5 w-5" />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/mohit8181" className="text-muted-foreground hover:text-foreground transition-colors">
                                <LinkedinIcon className="h-5 w-5" />
                            </a>
                            <a target='_blank' href="https://github.com/mohitarora8181" className="text-muted-foreground hover:text-foreground transition-colors">
                                <GithubIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Team</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Design</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Development</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Strategy</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Consulting</a></li>
                        </ul>
                    </div> */}

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-muted-foreground text-sm">mohit8181_it_2026@msit.in</li>
                            <li className="text-muted-foreground text-sm">+91 9667067062</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground text-center">
                        © {new Date().getFullYear()} Team Liv2Code  All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;