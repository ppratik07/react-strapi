const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Enter your basic information",
      description: "Start by providing your name, contact details, and career objective. Our AI will guide you through the process."
    },
    {
      number: "02",
      title: "Add your experience and skills",
      description: "Input your work history and skills. Our AI will suggest improvements and help you highlight relevant achievements."
    },
    {
      number: "03",
      title: "Choose your preferred template",
      description: "Select from our library of ATS-friendly templates designed by recruitment experts to maximize your interview chances."
    },
    {
      number: "04",
      title: "Review and download",
      description: "Preview your polished resume, make any final adjustments, and download it in PDF, Word, or other formats."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Building a professional resume has never been easier. Our intuitive 4-step process guides you from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="text-4xl font-bold text-blue-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Why job seekers love our platform</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { stat: '94%', desc: 'of users report more interview invitations' },
              { stat: '3x', desc: 'faster resume creation than traditional methods' },
              { stat: '1M+', desc: 'resumes created on our platform' },
              { stat: '4.8/5', desc: 'average user rating' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;