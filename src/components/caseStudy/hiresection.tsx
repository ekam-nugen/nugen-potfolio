import Image from 'next/image';

const team = [
  { name: 'Shovan', image: '/user1.png' },
  { name: 'Dibakar', image: '/user2.png' },
  { name: 'Indrajit', image: '/user3.png' },
  { name: 'Avishek', image: '/user1.png' },
];

export default function ContactSection() {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6 md:flex bg-white rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="bg-[#152238] text-white md:w-1/2 p-8">
          <h3 className="text-xl font-semibold mb-2">What can we help you with?</h3>
          <p className="text-sm text-gray-300 mb-6">Our Consultants Will Reply Back To You Within 8 Hours Or Less</p>
          
          <div className="flex gap-4 mb-6">
            {team.map((person, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white">
                  <Image src={person.image} alt={person.name} width={64} height={64} />
                </div>
                <p className="text-sm mt-2">{person.name}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6 text-sm">
            <div>
              <p className="font-bold text-lg text-green-400">700+</p>
              <p>In-House Experts</p>
            </div>
            <div>
              <p className="font-bold text-lg text-green-400">25+</p>
              <p>Awards in the last 9 Years</p>
            </div>
            <div>
              <p className="font-bold text-lg text-green-400">237+</p>
              <p>Clients Worldwide</p>
            </div>
            <div>
              <p className="font-bold text-lg text-green-400">150+ Five Star Reviews</p>
              <p>On G2, Clutch, Google and GoodFirms</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-[#0f172a] mb-4">We’d Love To Hear From You</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Get Custom Solutions, Recommendations, Resumes, or, Estimates. <br />
            Confidentiality & Same Day Response Guaranteed!
          </p>

          <form className="space-y-4">
            <input type="text" placeholder="Name *" className="w-full border-b py-2 focus:outline-none" />
            <input type="email" placeholder="Work Email *" className="w-full border-b py-2 focus:outline-none" />
            <input type="text" placeholder="Mobile number" className="w-full border-b py-2 focus:outline-none" />
            <input type="text" placeholder="Company" className="w-full border-b py-2 focus:outline-none" />
            <textarea placeholder="Your Message / Requirements *" rows={3} className="w-full border-b py-2 focus:outline-none resize-none" />

            <div className="text-xs text-gray-500">
              Select files from your{' '}
              <a href="#" className="text-blue-500 underline">Computer</a>,{' '}
              <a href="#" className="text-blue-500 underline">Google Docs</a>, or{' '}
              <a href="#" className="text-blue-500 underline">Dropbox URLs</a>
            </div>

            <button type="submit" className="w-full mt-4 bg-orange-500 text-white font-semibold py-3 rounded hover:bg-orange-600 transition">
              SEND NOW
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mt-4">
              <div className="flex items-center gap-1">
                <span className="text-green-500">✔</span> 100% confidential
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-500">✔</span> We sign NDA
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
