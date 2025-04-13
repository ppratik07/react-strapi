import Image from "next/image";
import { Card } from "../components/ui/card";
import { Wand2, FileText, User, Settings, CheckCircle, Clock, Search } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Wand2 className="h-10 w-10 text-blue-600" />,
      title: "AI-Powered Content",
      description: "Generate professional resume content with advanced AI that adapts to your experience and target job."
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "ATS-Optimized Templates",
      description: "Choose from dozens of templates designed to pass Applicant Tracking Systems and impress hiring managers."
    },
    {
      icon: <User className="h-10 w-10 text-blue-600" />,
      title: "Personalized Recommendations",
      description: "Get tailored suggestions to highlight your strengths and stand out from other candidates."
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Keyword Optimization",
      description: "Automatically include industry-specific keywords to maximize your resume's visibility to recruiters."
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      title: "Easy Customization",
      description: "Fine-tune every aspect of your resume with our intuitive editor - no design skills required."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Quick Results",
      description: "Create a professional, job-winning resume in minutes, not hours. Save time and reduce stress."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features to Boost Your Job Search</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our AI resume builder combines cutting-edge technology with professional design to help you land more interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h3 className="text-2xl font-bold mb-4">Our AI understands what recruiters look for</h3>
            <p className="text-gray-700 mb-4">
              Trained on millions of successful resumes and job descriptions, our AI knows exactly what skills and experiences to highlight for your target role.
            </p>
            <ul className="space-y-2">
              {['Matches your resume to job descriptions', 'Suggests industry-specific skills and keywords', 'Helps quantify your achievements', 'Eliminates weak language and filler words'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3">
            <Image 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070" 
              alt="AI analyzing resume" 
              className="rounded-lg shadow-lg w-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;