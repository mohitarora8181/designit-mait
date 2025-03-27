'use client'

import { Moon, Sun } from "lucide-react";
import Navbar from "./components/Navbar";
import { useTheme } from "./provider/ThemeProvider";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <div className="fixed bottom-6 right-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg flex items-center space-x-2">
        <Sun className="h-4 w-4 text-yellow-500" />
        <switch
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <Moon className="h-4 w-4 text-blue-500" />
      </div>

      <Navbar />
      {/* <Hero />
      <Features />
      <CallToAction />
      <Footer /> */}
    </div>
  );
}
