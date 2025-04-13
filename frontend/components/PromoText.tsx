import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const PromoText = () => {
    return (
        <div className="bg-blue-50 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to land your dream job?</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Join thousands of job seekers who have successfully created standout resumes with our AI-powered platform.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Started For Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}