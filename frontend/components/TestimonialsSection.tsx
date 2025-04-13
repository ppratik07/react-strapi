import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Specialist",
            company: "hired at Google",
            quote: "After months of sending out resumes with no response, I tried ResumeBoost.AI. Within two weeks, I had three interview offers, including one from Google where I now work!",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "David Chen",
            role: "Software Engineer",
            company: "hired at Microsoft",
            quote: "The AI suggestions helped me quantify my achievements in a way I hadn't thought of. The templates are clean and professional. I credit this tool for helping me land my dream job.",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            name: "Emma Rodriguez",
            role: "Project Manager",
            company: "hired at Adobe",
            quote: "As someone who struggles with writing, the AI-generated content was a game-changer. It saved me hours of work and helped me present my experience in the best possible light.",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Thousands of job seekers have transformed their career prospects with our AI resume builder. Here are some of their stories.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} fill="currentColor" size={18} />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                            <div className="flex items-center">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}, <span className="text-blue-600">{testimonial.company}</span></p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Join our growing community of successful job seekers</h3>
                    <p className="mb-6 max-w-2xl mx-auto">
                        More than 1 million professionals have used our platform to create standout resumes and advance their careers.
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                        Start Building Your Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;