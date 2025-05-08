import Image from "next/image";
import google from "../../../public/award-logo-1.svg";
// import trustpilot from "../../../public/trustpilot-logo.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TESTIMONOAL_DATA_ONE } from "@/src/json/testimonialjson";

interface TestimonialStaticProps {
  className?: string;
}

export default function TestimonialStatic({
  className,
}: TestimonialStaticProps) {
  return (
    <section className={`py-16  text-black ${className}`}>
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
        {TESTIMONOAL_DATA_ONE.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff6b3d]">
                <Image src={t.imageURL} alt={t.name} width={48} height={48} />
              </div>
              <div>
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-xs text-black">{t.source}</p>
              </div>
            </div>
            <p className="text-md italic text-[#2b2b2b]">
              &quot;{t.text}&quot;
            </p>
            <div className="text-[#ff6b3d] text-3xl absolute bottom-4 right-4">
              ”
            </div>
          </div>
        ))}
      </div>

      {/* Review Logos */}
      <div className="text-center mt-10">
        <Link
          href="/review"
          className="inline-flex items-center group bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-10 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl text-sm font-medium"
        >
          Read More Reviews
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          <Link href={"https://g.co/kgs/15FsLmA"}>
            <Image src={google} alt="Google" width={100} height={35} />
          </Link>
          {/* <Image src={trustpilot} alt="Trustpilot" width={100} height={35} /> */}
        </div>
      </div>
    </section>
  );
}
