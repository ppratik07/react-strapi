import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  type ButtonVariant = "outline" | "default";
  
  const plans = [
    {
      name: "Basic",
      description: "Perfect for job seekers on a budget",
      price: "Free",
      features: [
        "1 resume template",
        "AI-assisted content suggestions",
        "Basic ATS optimization",
        "PDF export",
        "7-day access"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as ButtonVariant,
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for active job seekers",
      price: "$14.99",
      period: "per month",
      features: [
        "20+ premium templates",
        "Advanced AI content generation",
        "Keyword optimization",
        "Multiple export formats",
        "Cover letter builder",
        "Unlimited resumes",
        "30-day access"
      ],
      buttonText: "Choose Professional",
      buttonVariant: "default" as ButtonVariant,
      popular: true
    },
    {
      name: "Career Pro",
      description: "For serious career advancement",
      price: "$49.99",
      period: "per quarter",
      features: [
        "All Professional features",
        "LinkedIn profile optimization",
        "Priority support",
        "Interview preparation",
        "1 free expert review",
        "90-day access"
      ],
      buttonText: "Choose Career Pro",
      buttonVariant: "outline" as ButtonVariant,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our AI-powered resume builder.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-6 border ${plan.popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-gray-200'} rounded-lg hover:shadow-lg transition-shadow duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold mb-1">{plan.price}</div>
                {plan.period && <div className="text-sm text-gray-500">{plan.period}</div>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.buttonVariant as ButtonVariant} 
                className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans come with a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;