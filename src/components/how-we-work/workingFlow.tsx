import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Start a Conversation",
    desc: "Tell us your vision, big or small. Whether you need a custom solution or want to hire an expert, we’ll guide you through the process.",
    icon: "🗣️",
  },
  {
    title: "Choose Your Engagement",
    desc: "Fixed cost project? Dedicated developers? We’ll recommend the most cost-effective approach based on your goals and budget.",
    icon: "📊",
  },
  {
    title: "Review Your Options",
    desc: "We help you compare options and choose the most effective setup for your goals and timeline.",
    icon: "📋",
  },
  {
    title: "Get Started & Get Results",
    desc: "Your dedicated PM ensures smooth delivery or your developers integrate seamlessly with your team.",
    icon: "🚀",
  },
  {
    title: "Experience the Benefits",
    desc: [
      "Reduce Costs: Save up to 50% by hiring top Indian developers.",
      "Grow Faster: Focus on scaling, not recruitment.",
      "Test Ideas Safely: No heavy investments upfront.",
      "Save Time & Resources: We handle hiring, you focus on results.",
    ],
    icon: "🎉",
    isList: true,
  },
];

export default function HowItWorksTimeline() {
  return (
    <section className="bg-white py-24 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-20">
          Here’s How It Works
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF6B00] to-[#FF2FB6] h-full z-0 rounded-full" />
          <div className="relative z-10 space-y-16">
            {steps.map((step, idx) => {
              const isRight = idx % 2 === 0;
              return (
                <div
                  className={`flex flex-col md:flex-row ${
                    isRight ? "md:flex-row-reverse" : ""
                  } items-center md:items-start gap-8`}
                >
                  <div className="w-full md:w-1/2 px-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF2FB6] text-white text-2xl shadow-lg">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    {step.isList ? (
                      <ul className="mt-3 space-y-3 text-gray-700 text-base">
                        {step.desc.map((d: string, i: number) => (
                          <li key={i} className="flex gap-2 items-start">
                            <CheckCircle className="w-4 h-4 mt-1 text-[#FF6B00]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 text-base">{step.desc}</p>
                    )}
                  </div>
                  <div className="hidden md:block w-1/2 text-center relative">
                    <span className="block w-5 h-5 rounded-full border-4 border-white bg-gradient-to-br from-[#FF6B00] to-[#FF2FB6] shadow-lg mx-auto z-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
