import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Craft the Perfect Resume with <span className="text-blue-600">AI</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Our AI-powered resume builder helps you create professional, ATS-friendly resumes tailored to your dream job in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started For Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Samples
              </Button>
            </div>
            <div className="mt-6 text-gray-600 flex items-center space-x-6">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-600 mr-2">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-600 mr-2">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2070" 
              alt="Resume builder interface" 
              className="rounded-lg w-full h-auto"
                width={500}
                height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;