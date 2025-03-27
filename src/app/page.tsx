'use client'

import { Moon, Sun } from "lucide-react";
import Navbar from "./components/Navbar";
import { useTheme } from "./provider/ThemeProvider";
import Hero from "./components/Heros";
import Features from "./components/Features";
import CallToAction from "./components/CTA";
import Footer from "./components/Footer";
import MyCard from "../components/MyCard";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <div className="fixed bottom-6 right-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg flex items-center space-x-2">
        <Sun className="h-4 w-4 text-yellow-500" />
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={theme === "dark"} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
        <Moon className="h-4 w-4 text-blue-500" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}
