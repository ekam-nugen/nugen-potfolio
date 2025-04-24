import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, Laptop, Settings } from 'lucide-react';

const AIMLBanner = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column */}
          <div className="lg:w-7/12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI ML Development Services
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Enhance your business with our AI/ML development services, offering
              intelligent solutions for advanced automation, predictive analytics,
              and data insights.
            </h2>
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">
                300+ Glowing 5-Star Reviews
              </h4>
              <div className="flex gap-4 flex-wrap ">
                {['clutch', 'goodfirm', 'g2', 'google'].map((platform) => (
                  <div key={platform} className="relative w-40 h-16">
                    <Image
                      src="https://studio.made2grow.de/hs-fs/hubfs/made2GROW%20Studio/Tools%20and%20Certification%20Logos/Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png?width=1456&height=500&name=Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png"
                      alt={platform}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="lg:w-5/12 text-center lg:text-right">
            <div className="bg-gradient-to-r from-white via-[#fff1eb] to-white border border-[#ffbb9f] text-gray-800 p-6 rounded-lg">
              <div className="mb-6">
                <div className="flex justify-center lg:justify-end mb-4">
                  <Brain className="w-20 h-20 text-[#ffbb9f]" strokeWidth={1} />
                  <Settings className="w-20 h-20 text-[#ffbb9f]" strokeWidth={1} />
                  <Laptop className="w-20 h-20 text-[#ffbb9f]" strokeWidth={1} />
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Get
                  <Link href="#how-we-help-you">
                    <span className="text-[#ffbb9f]">{'Project-based'}</span>
                  </Link>
                  and
                  <Link href="#how-we-help-you">
                    <span className="text-[#ffbb9f]">Dedicated Teams</span>
                  </Link>
                  from India&apos;s Highest-rated Company.
                </h2>
                <Link
                  href="#"
                  className="bg-[#fff1eb] border border-orange-300 text-gray-800 hover:bg-[#ffede4] px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  Discuss Your Requirements
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <div className="pt-6 border-t border-gray-300">
                <h3 className="text-lg font-semibold mb-2">
                  Ready to bring your project to life?
                </h3>
                <p className="text-gray-600">
                  Share your vision, and we&apos;ll provide a free expert
                  consultation within 24 hours, outlining a clear path to success
                  tailored to your project and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLBanner;