
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm dark:bg-gray-900/80 dark:border-gray-800">
        <div className="container-section flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-r from-softsell-600 to-softsell-400 p-1.5 text-white font-bold">
              SS
            </div>
            <span className="text-xl font-bold">SoftSell</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a 
              href="#contact" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-softsell-600 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-softsell-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-softsell-700 dark:hover:bg-softsell-800"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
