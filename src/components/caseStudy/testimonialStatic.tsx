import Image from "next/image";
import google from "../../../public/award-logo-1.svg";
import trustpilot from "../../../public/trustpilot-logo.png";
import user1 from "../../../public/user1.png";
import user2 from "../../../public/user2.png";
import user3 from "../../../public/user3.png";

const testimonials = [
  {
    name: "John Doe",
    title: "CTO, Nugen IT Services",
    quote:
      "Nugen's team has been a valuable partner in developing scalable, secure IT solutions. Their technical expertise is unmatched.",
    image: user1,
  },
  {
    name: "Sarah Lee",
    title: "Product Manager, TechVentures",
    quote:
      "Nugen's agile approach helped us launch our product on time with impressive results.",
    image: user3,
  },
  {
    name: "David Smith",
    title: "Lead Developer, SoftwareCorp",
    quote:
      "The custom solutions provided by Nugen helped us improve system efficiency and performance significantly.",
    image: user2,
  },
  {
    name: "Linda Tan",
    title: "CEO, InTech Solutions",
    quote:
      "We saw a remarkable improvement in our system's security after working with Nugen.",
    image: user3,
  },
  {
    name: "James Carter",
    title: "Senior Developer, DataSolutions",
    quote:
      "Nugen's tech support has been essential in overcoming the most complex challenges.",
    image: user1,
  },
  {
    name: "Mary Wilson",
    title: "Director, CloudTech",
    quote:
      "Their approach to cloud migration and management has brought us significant cost savings.",
    image: user2,
  },
];

export default function TestimonialStatic() {
  return (
    <section className="py-16 bg-gradient-to-r from-white via-[#fff1eb] to-white text-black">
      <div className="text-center mb-10">
        <div className="text-yellow-400 text-3xl mb-2">★★★★★</div>
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <p className="text-lg mt-2">
          Hear from our clients about how Nugen IT Services has transformed
          their businesses.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff6b3d]">
                <Image src={t.image} alt={t.name} width={48} height={48} />
              </div>
              <div>
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-xs text-black">{t.title}</p>
              </div>
            </div>
            <p className="text-md italic text-[#2b2b2b]">
              &quot;{t.quote}&quot;
            </p>
            <div className="text-[#ff6b3d] text-3xl absolute bottom-4 right-4">
              ”
            </div>
          </div>
        ))}
      </div>

      {/* Review Logos */}
      <div className="text-center mt-10">
        <p className="text-sm font-medium text-black">Read More Reviews</p>
        <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
          <Image src={google} alt="Google" width={100} height={35} />
          <Image src={trustpilot} alt="Trustpilot" width={100} height={35} />
        </div>
      </div>
    </section>
  );
}
