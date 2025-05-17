
import React from "react";
import { Star } from "lucide-react";

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  role: string;
  company: string;
}> = ({ quote, name, role, company }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border dark:border-gray-700">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <blockquote className="text-lg mb-6 dark:text-white">"{quote}"</blockquote>
      <div>
        <p className="font-semibold dark:text-white">{name}</p>
        <p className="text-sm text-muted-foreground dark:text-gray-400">{role}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses. Their process was seamless and the valuation exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Inc.",
    },
    {
      quote: "When downsizing our operations, we had dozens of unused licenses. SoftSell handled everything professionally and got us fair market value quickly.",
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "Nova Systems",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-muted to-background dark:from-gray-850 dark:to-gray-900">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 dark:text-white">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses that have successfully resold their software licenses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
