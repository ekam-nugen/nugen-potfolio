import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TechEventsPage() {
  const events = [
    {
      name: "Web Summit",
      location: "Lisbon, Portugal",
      date: "November 2023",
      image: "/81b92286-843a-4ce7-90c4-9e77fb408c3d.webp",
    },
    {
      name: "CES",
      location: "Las Vegas, USA",
      date: "January 2024",
      image: "/81b92286-843a-4ce7-90c4-9e77fb408c3d.webp",
    },
    {
      name: "TechCrunch Disrupt",
      location: "San Francisco, USA",
      date: "September 2023",
      image: "/81b92286-843a-4ce7-90c4-9e77fb408c3d.webp",
    },
    {
      name: "GITEX Global",
      location: "Dubai, UAE",
      date: "October 2023",
      image: "/81b92286-843a-4ce7-90c4-9e77fb408c3d.webp",
    },
  ];

  return (
    <div className="bg-white text-blue-950">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-br from-pink-100 to-orange-50 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in">
            Global Tech Events <br />
            <span className="text-orange-500">We’ve Participated In</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We actively take part in global tech summits, conferences, and expos
            to stay ahead of the curve and connect with innovators.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="group bg-orange-50 hover:bg-white transition p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
            >
              <Image
                height={100}
                width={100}
                src={event.image}
                alt={event.name}
                className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-2xl font-bold text-orange-600 group-hover:text-orange-700 mb-1">
                {event.name}
              </h3>
              <p className="text-gray-700 font-medium">{event.location}</p>
              <p className="text-gray-500 text-sm">{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want to Connect with Us?
          </h2>
          <p className="text-lg">
            Meet us at the next global tech event or schedule a virtual demo to
            learn how we can transform your business.
          </p>
          <Link href="/contact-us" className="mt-4 px-6 py-3 bg-white text-orange-600 text-lg rounded-xl font-semibold transition hover:bg-gray-100 hover:scale-105 duration-200">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
