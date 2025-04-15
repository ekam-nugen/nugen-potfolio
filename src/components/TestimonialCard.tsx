import Image from "next/image";
import UserProfile from "../../public/user1.png";
export default function TestimonialCard() {
  return (
    <div className="w-full px-6 py-9 bg-gray-50">
      <div className="flex flex-col justify-center bg-white rounded-2xl border border-transparent shadow-md p-4 text-center">
        <h3 className="text-lg md:text-3xl font-semibold text-gray-800 ">
          The team&apos;s expertise transformed our vision into reality with
          ease.
        </h3>
        <div className=" flex items-center justify-center gap-3 p-4">
          <Image
            src={UserProfile}
            alt="Alex Morgan"
            className="rounded-full max-h-16 max-w-12"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-800">Alex Morgan</p>
            <p className="text-xs text-gray-500">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
