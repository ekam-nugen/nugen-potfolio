import Image from "next/image";
import GraphicCards from "../../public/graphicCards.png";
import User from "../../public/user3.png";
export default function InnovationSection() {
  return (
    <section className="w-full px-8 py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h4 className="text-sm font-semibold text-pink-600 uppercase mb-2">
            Innovative Solutions
          </h4>
          <h2 className="text-3xl md:text-5xl text-gray-900 leading-tight mb-4">
            Transforming <br /> Ideas into Reality
          </h2>
          <p className="text-gray-600 mb-6">
            Our AI and ML solutions elevate your project by integrating smart
            technology with tailored design.
          </p>

          <div className="flex flex-col items-start gap-3">
            <div className="p-2 bg-pink-100 rounded-md">
              <Image src={User} alt="Smart Icon" width={24} height={24} />
            </div>
            <div>
              <h5 className="text-base text-gray-800 mb-1">Smart Technology</h5>
              <p className="text-sm text-gray-600">
                Through AI and ML, we provide innovative design strategies that
                enhance user engagement and optimize functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center  shadow-lg">
          <Image
            src={GraphicCards.src}
            alt="Card Graphic"
            width={GraphicCards.width}
            height={GraphicCards.height}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
