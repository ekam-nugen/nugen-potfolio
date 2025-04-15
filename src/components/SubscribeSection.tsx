import Image from "next/image";
import { UserProfiles } from "../json";

export default function SubscribeSection() {
  return (
    <section className="w-full bg-gradient-to-l from-rose-300 via-pink-100  to-orange-400 py-16 px-6 md:px-20 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Unlock Your Digital <br className="hidden md:block" /> Potential
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-md">
            Connect with us today to discover how our expertise in modern
            technologies can elevate your business. Don’t miss out on
            tailor-made solutions designed for your unique needs.
          </p>
        </div>

        <div className="flex-1 space-y-4 w-full max-w-md">
          <div className="flex bg-white rounded-lg overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 flex-grow outline-none text-sm"
            />
            <button className="bg-gradient-to-r from-orange-400 to-purple-600 text-white p-2 text-sm font-semibold">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {UserProfiles?.map((user, index: number) => (
                <Image
                  key={user.alt + index}
                  src={user?.src}
                  alt={user?.alt}
                  width={45}
                  height={30}
                  className="rounded-full object-cover"
                />
              ))}
            </div>
            <p className="text-sm  font-semibold mt-2 text-gray-600">
              10.5 million subscribers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
