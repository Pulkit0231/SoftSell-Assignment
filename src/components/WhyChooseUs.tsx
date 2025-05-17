
import React from "react";
import { DollarSign, ShieldCheck, Users, Handshake } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border dark:border-gray-700 transition-all hover:shadow-md">
      <div className="mb-4 inline-block bg-softsell-50 dark:bg-softsell-900/20 p-3 rounded-lg text-softsell-600 dark:text-softsell-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-muted-foreground dark:text-gray-300">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Fast Payments",
      description: "Get paid within 7 days of completed sale, with transparent tracking throughout the process.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure Transfers",
      description: "End-to-end encryption and secure processes ensure your data and licenses are protected.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trusted by 1,000+ Clients",
      description: "Join over a thousand satisfied businesses who have successfully resold their licenses.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Compliance Guaranteed",
      description: "All transactions follow software vendor policies and legal requirements for resale.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 dark:bg-gray-900">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 dark:text-white">Why Choose SoftSell</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            We provide the most reliable and efficient software license resale service in the market
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
