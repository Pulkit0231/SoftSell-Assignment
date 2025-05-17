
import React from "react";
import { FileUp, Star, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Upload License",
      description: "Share your unused license details through our secure portal for quick analysis.",
      icon: <FileUp className="h-10 w-10 text-white" />,
      color: "from-softsell-600 to-softsell-500",
    },
    {
      id: 2,
      title: "Get Valuation",
      description: "Receive a comprehensive market valuation within 24 hours from our experts.",
      icon: <Star className="h-10 w-10 text-white" />,
      color: "from-softsell-500 to-teal-500",
    },
    {
      id: 3,
      title: "Get Paid",
      description: "Accept our offer and receive payment within 7 days via your preferred method.",
      icon: <DollarSign className="h-10 w-10 text-white" />,
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted dark:bg-gray-850">
      <div className="container-section">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-4 dark:text-white">How It Works</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Turn your unused software licenses into cash with our simple three-step process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-softsell-600 via-teal-500 to-teal-600 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border dark:border-gray-700 transition-all group-hover:shadow-lg">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Step {step.id}: {step.title}</h3>
                <p className="text-muted-foreground dark:text-gray-300">{step.description}</p>
              </div>
              <div className="hidden md:block absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full h-12 w-12 border-4 border-background dark:border-gray-900 z-10 text-center pt-1.5 font-bold text-softsell-600">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
