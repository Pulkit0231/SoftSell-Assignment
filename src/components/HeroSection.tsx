
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, CheckCheck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            className="md:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="heading-xl text-gradient mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unlock the Value in Your Unused Software
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              SoftSell helps businesses recover costs from unused software licenses with secure, hassle-free resale solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-softsell-600 hover:bg-softsell-700 text-white dark:bg-softsell-700 dark:hover:bg-softsell-800"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Sell My Licenses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="dark:border-gray-700 dark:text-gray-200"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn How It Works
              </Button>
            </motion.div>
            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-softsell-600" />
                <span className="text-sm font-medium">Secure Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-softsell-600" />
                <span className="text-sm font-medium">Verified Buyers</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-softsell-600" />
                <span className="text-sm font-medium">Best Market Rates</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-softsell-600/20 to-teal-500/20 transform rotate-3 rounded-2xl"></div>
              <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-2xl border dark:border-gray-700 p-6">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-softsell-600 to-teal-500 p-3 rounded-lg text-white mb-4">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Recover Up To</h3>
                  <p className="text-4xl font-bold text-gradient">70% Value</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">On unused software licenses</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCheck className="h-5 w-5 text-softsell-600 mr-2 mt-0.5" />
                    <span className="text-sm">Fast valuation within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-5 w-5 text-softsell-600 mr-2 mt-0.5" />
                    <span className="text-sm">Payment within 7 days of sale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-5 w-5 text-softsell-600 mr-2 mt-0.5" />
                    <span className="text-sm">Compliant transfer process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-5 w-5 text-softsell-600 mr-2 mt-0.5" />
                    <span className="text-sm">Legal documentation included</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
