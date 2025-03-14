import React, { useState } from 'react';

interface GuideSection {
  title: string;
  content: {
    heading: string;
    text: string;
    tips?: string[];
  }[];
}

const PetCareGuides: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<string>("first-time");
  
  const guides: Record<string, GuideSection> = {
    "first-time": {
      title: "First-Time Pet Owner's Guide",
      content: [
        {
          heading: "Prepare Your Home",
          text: "Pet-proof your space by removing hazards and securing dangerous items. Create a dedicated area for your pet with their bed, toys, and essentials.",
          tips: ["Remove toxic plants", "Secure loose wires", "Store chemicals out of reach"]
        },
        {
          heading: "Essential Supplies",
          text: "Gather necessary supplies before bringing your pet home to ensure a smooth transition.",
          tips: ["Quality food and water bowls", "Appropriate bedding", "Species-specific toys", "Grooming tools"]
        },
        {
          heading: "Finding a Veterinarian",
          text: "Research and choose a veterinarian before bringing your pet home. Schedule a check-up within the first week.",
          tips: ["Read reviews", "Ask for recommendations", "Consider location and hours"]
        }
      ]
    },
    "training": {
      title: "Basic Training Techniques",
      content: [
        {
          heading: "Positive Reinforcement",
          text: "Reward good behavior with treats, praise, or play to encourage repetition. Consistency is key to effective training.",
          tips: ["Use immediate rewards", "Keep training sessions short (5-10 minutes)", "Be patient and consistent"]
        },
        {
          heading: "House Training",
          text: "Establish a routine for bathroom breaks and reward successful outside elimination. Clean accidents thoroughly without punishment.",
          tips: ["Take out after meals, naps, and play", "Use enzymatic cleaners for accidents", "Maintain a consistent schedule"]
        },
        {
          heading: "Basic Commands",
          text: "Start with essential commands like sit, stay, and come. Use clear, consistent cues and reward successful execution.",
          tips: ["Practice daily", "Use hand signals with verbal cues", "Gradually increase difficulty"]
        }
      ]
    },
    "health": {
      title: "Health & Wellness Guide",
      content: [
        {
          heading: "Vaccination Schedule",
          text: "Follow your vet's recommended vaccination schedule to protect your pet from common diseases.",
          tips: ["Keep records of all vaccinations", "Set calendar reminders for due dates", "Ask about optional vaccines"]
        },
        {
          heading: "Nutrition Basics",
          text: "Provide a balanced diet appropriate for your pet's species, age, and health needs.",
          tips: ["Transition to new foods gradually", "Measure portions to prevent obesity", "Ensure fresh water is always available"]
        },
        {
          heading: "Recognizing Health Issues",
          text: "Learn to recognize signs of common health problems and when to seek veterinary care.",
          tips: ["Monitor eating and drinking habits", "Watch for changes in behavior or energy", "Check for unusual discharge or odors"]
        }
      ]
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-pink-400 mb-6">Pet Care Guides</h1>
        
        {/* Guide Selection Tabs - Responsive */}
        <div className="flex flex-col sm:flex-row justify-center mb-6 space-y-2 sm:space-y-0">
          {Object.keys(guides).map((key) => (
            <button
              key={key}
              onClick={() => setActiveGuide(key)}
              className={`px-3 py-2 sm:mx-2 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                activeGuide === key
                  ? "bg-blue-500 text-white shadow-md transform scale-105"
                  : "bg-white text-indigo-600 hover:bg-indigo-100"
              }`}
            >
              {/* Mobile-friendly shorter titles */}
              <span className="block sm:hidden">
                {key === "first-time" ? "New Owners" : key === "training" ? "Training" : "Health"}
              </span>
              {/* Full titles on larger screens */}
              <span className="hidden sm:block">{guides[key].title}</span>
            </button>
          ))}
        </div>
        
        {/* Active Guide Content */}
        <div className="bg-white rounded-xl p-3 md:p-6 shadow-inner">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4 md:mb-6">{guides[activeGuide].title}</h2>
          
          {guides[activeGuide].content.map((section, index) => (
            <div 
              key={index} 
              className={`mb-6 p-3 md:p-4 rounded-lg transition-all duration-300 hover:shadow-md ${
                index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold text-indigo-600 mb-2 md:mb-3 flex items-center">
                <span className="inline-block w-6 h-6 md:w-8 md:h-8 mr-2 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm md:text-base">
                  {index + 1}
                </span>
                {section.heading}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">{section.text}</p>
              
              {section.tips && (
                <div className="mt-3 bg-indigo-50 p-3 md:p-4 rounded-lg border-l-4 border-indigo-500">
                  <p className="font-medium text-indigo-700 mb-1 md:mb-2 text-sm md:text-base">Quick Tips:</p>
                  <ul className="list-disc pl-4 md:pl-5 space-y-1 text-xs md:text-sm">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-600">{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call-to-action - Responsive */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-sm md:text-base text-gray-600 italic mb-3 md:mb-4">Still have questions about caring for your pet?</p>
          <button className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-400 text-white text-sm md:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Contact a Pet Care Specialist
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCareGuides;