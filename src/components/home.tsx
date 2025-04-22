import Image from "next/image";
import homeimg from "../../public/home.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4c689] via-[#f4b0ed] to-[#f7a65b] p-4 flex flex-col items-center mt-4">
      <div className="max-w-4xl mt-20">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Innovative Tech, <br /> Tailored Design
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover our advanced solutions integrating AI and ML, crafted
          uniquely for your needs in web and app development. Elevate your
          project with our expertise.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md border border-gray-300 w-64 focus:outline-none bg-white"
          />
          <button className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-orange-400 to-pink-500">
            Subscribe
          </button>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <div className="flex -space-x-2">
            <Image
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/40?img=1"
              alt="User 1"
              width={32} // Explicit width from w-8 (32px)
              height={32} // Matching height for consistency
            />
            <Image
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/40?img=2"
              alt="User 2"
              width={32} // Explicit width from w-8 (32px)
              height={32} // Matching height for consistency
            />
            <Image
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/40?img=3"
              alt="User 3"
              width={32} // Explicit width from w-8 (32px)
              height={32} // Matching height for consistency
            />
          </div>
          <span className="text-sm text-black">Empowering Your Vision</span>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="mt-12 shadow-2xl rounded-2xl overflow-hidden">
        <Image
          src={homeimg.src}
          alt="Dashboard UI"
          className="w-full max-w-5xl rounded-2xl"
          width={1280} // Max width from max-w-5xl (1280px)
          height={720} // Arbitrary height; adjust based on your image's aspect ratio
          style={{ width: "100%", maxWidth: "1280px" }} // Inline style to match w-full max-w-5xl
        />
      </div>
    </div>
  );
}